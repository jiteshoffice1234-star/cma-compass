import { Capacitor } from '@capacitor/core'
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite'

export interface ChapterProgressRow {
  chapter_id: number
  video_watched: number
  pdfs_read: string
  quiz_completed: number
  quiz_score: number
  quiz_passed: number
  completed: number
  completed_at: string | null
}

export interface XpTransaction {
  id: number
  amount: number
  reason: string
  chapter_id: number | null
  created_at: string
}

export interface BadgeRow {
  badge_id: string
  unlocked: number
  unlocked_at: string | null
}

export interface FlashcardProgressRow {
  flashcard_id: string
  difficulty: number
  next_review: string
  review_count: number
}

export interface WeeklyChallengeRow {
  id: number
  challenge_id: number
  week_start: string
  progress: number
  completed: number
}

export interface UserProfileRow {
  id: number
  name: string
  daily_goal: number
  ui_mode: string
  onboarding_complete: number
  pdfs_generated: number
  level: string
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS user_profile (
  id INTEGER PRIMARY KEY DEFAULT 1,
  name TEXT NOT NULL DEFAULT 'Student',
  daily_goal INTEGER DEFAULT 1,
  ui_mode TEXT DEFAULT 'dark',
  onboarding_complete INTEGER DEFAULT 0,
  pdfs_generated INTEGER DEFAULT 0,
  level TEXT DEFAULT 'foundation'
);
CREATE TABLE IF NOT EXISTS chapter_progress (
  chapter_id INTEGER PRIMARY KEY,
  video_watched INTEGER DEFAULT 0,
  pdfs_read TEXT DEFAULT '[]',
  quiz_completed INTEGER DEFAULT 0,
  quiz_score INTEGER DEFAULT 0,
  quiz_passed INTEGER DEFAULT 0,
  completed INTEGER DEFAULT 0,
  completed_at TEXT
);
CREATE TABLE IF NOT EXISTS xp_transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  amount INTEGER NOT NULL,
  reason TEXT NOT NULL,
  chapter_id INTEGER,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS streaks (
  id INTEGER PRIMARY KEY DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_active_date TEXT
);
CREATE TABLE IF NOT EXISTS badges (
  badge_id TEXT PRIMARY KEY,
  unlocked INTEGER DEFAULT 0,
  unlocked_at TEXT
);
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chapter_id INTEGER NOT NULL,
  question_id TEXT NOT NULL,
  was_correct INTEGER NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS flashcard_progress (
  flashcard_id TEXT PRIMARY KEY,
  difficulty REAL DEFAULT 3,
  next_review TEXT DEFAULT (date('now')),
  review_count INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS bookmarks (
  chapter_id INTEGER PRIMARY KEY,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS weekly_challenge (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  challenge_id INTEGER NOT NULL,
  week_start TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  completed INTEGER DEFAULT 0
);
`

let db: SQLiteDBConnection | null = null
let sqlite: SQLiteConnection | null = null

export async function initDatabase(): Promise<void> {
  // Web uses the localStorage fallback in lib/store.ts; no SQLite connection needed.
  if (!Capacitor.isNativePlatform()) return

  sqlite = new SQLiteConnection(CapacitorSQLite)
  const conn = await sqlite.createConnection('accountiq', false, 'no-encryption', 1, false)
  db = conn
  await db.open()
  await db.execute(SCHEMA)

  // ensure user_profile row exists
  const res = await db.query('SELECT id FROM user_profile WHERE id = 1')
  if (!res.values || res.values.length === 0) {
    await db.run('INSERT INTO user_profile (id, name, daily_goal, ui_mode, onboarding_complete, pdfs_generated, level) VALUES (1, ?, 1, ?, 0, 0, ?)', ['Student', 'dark', 'foundation'])
  }
  // prune old XP transactions
  try { await pruneOldTransactions() } catch { /* non-critical */ }

  // ensure streaks row exists
  const sres = await db.query('SELECT id FROM streaks WHERE id = 1')
  if (!sres.values || sres.values.length === 0) {
    await db.run('INSERT INTO streaks (id, current_streak, longest_streak, last_active_date) VALUES (1, 0, 0, NULL)')
  }
}

export function getDb(): SQLiteDBConnection {
  if (!db) throw new Error('Database not initialised')
  return db
}

export const PRUNE_AFTER_DAYS = 90

export async function pruneOldTransactions(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return
  try {
    const conn = getDb()
    const oldTotal = await conn.query(
      "SELECT COALESCE(SUM(amount),0) as total FROM xp_transactions WHERE created_at < datetime('now', '-90 days')"
    )
    const sum = (oldTotal.values?.[0]?.total as number) ?? 0
    if (sum === 0) return
    await conn.run("DELETE FROM xp_transactions WHERE created_at < datetime('now', '-90 days')")
    await conn.run("INSERT INTO xp_transactions (amount, reason, chapter_id, created_at) VALUES (?, 'pruned', NULL, datetime('now'))", [sum])
  } catch (error) {
    console.warn('[DB] Prune failed (non-critical):', error)
  }
}

export const sqliteAvailable = Capacitor.isNativePlatform()
