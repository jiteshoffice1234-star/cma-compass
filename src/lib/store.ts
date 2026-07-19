import { Capacitor } from '@capacitor/core'
import {
  getDb,
  ChapterProgressRow,
  XpTransaction,
  BadgeRow,
  FlashcardProgressRow,
  WeeklyChallengeRow,
  UserProfileRow,
  initDatabase,
} from './db'

export const isNative = Capacitor.isNativePlatform()

// ---------- Database error tracking ----------
export type DbErrorSeverity = 'WARNING' | 'ERROR' | 'CRITICAL'

export interface DatabaseError {
  operation: string
  severity: DbErrorSeverity
  message: string
  timestamp: string
  context?: Record<string, unknown>
}

const DB_ERROR_LOG_KEY = 'aiq_db_errors'
const MAX_DB_ERRORS = 50

export function logDatabaseError(err: Omit<DatabaseError, 'timestamp'>): void {
  const entry: DatabaseError = { ...err, timestamp: new Date().toISOString() }
  console.error(`[DB] ${err.severity} in ${err.operation}:`, err.message, err.context ?? '')
  try {
    const log = JSON.parse(localStorage.getItem(DB_ERROR_LOG_KEY) || '[]') as DatabaseError[]
    log.push(entry)
    localStorage.setItem(DB_ERROR_LOG_KEY, JSON.stringify(log.slice(-MAX_DB_ERRORS)))
  } catch { /* storage full — silently drop */ }
}

export function getDbErrorLog(): DatabaseError[] {
  try {
    return JSON.parse(localStorage.getItem(DB_ERROR_LOG_KEY) || '[]') as DatabaseError[]
  } catch {
    return []
  }
}

export function clearDbErrorLog(): void {
  localStorage.removeItem(DB_ERROR_LOG_KEY)
}

// ---------- localStorage web fallback ----------
const LS_PREFIX = 'aiq_'
function lsGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(LS_PREFIX + key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}
function lsSet(key: string, value: unknown) {
  try {
    localStorage.setItem(LS_PREFIX + key, JSON.stringify(value))
  } catch {
    /* noop */
  }
}

// ---------- User Profile ----------
export async function getProfile(): Promise<UserProfileRow> {
  if (!isNative) return lsGet<UserProfileRow>('profile', { id: 1, name: 'Student', daily_goal: 1, ui_mode: 'dark', onboarding_complete: 0, pdfs_generated: 0, level: 'foundation' })
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM user_profile WHERE id = 1')
    const row = (r.values?.[0] ?? {}) as UserProfileRow
    if (!row.level) row.level = 'foundation'
    return row
  } catch (error) {
    logDatabaseError({ operation: 'getProfile', severity: 'ERROR', message: String(error) })
    return { id: 1, name: 'Student', daily_goal: 1, ui_mode: 'dark', onboarding_complete: 0, pdfs_generated: 0, level: 'foundation' }
  }
}

export async function saveProfile(p: Partial<UserProfileRow>): Promise<void> {
  if (!isNative) {
    const cur = await getProfile()
    lsSet('profile', { ...cur, ...p })
    return
  }
  try {
    const db = getDb()
    const cur = await getProfile()
    const m = { ...cur, ...p }
    await db.run(
      'UPDATE user_profile SET name = ?, daily_goal = ?, ui_mode = ?, onboarding_complete = ?, pdfs_generated = ?, level = ? WHERE id = 1',
      [m.name ?? 'Student', m.daily_goal ?? 1, m.ui_mode ?? 'dark', m.onboarding_complete ?? 0, m.pdfs_generated ?? 0, m.level ?? 'foundation'],
    )
  } catch (error) {
    logDatabaseError({ operation: 'saveProfile', severity: 'ERROR', message: String(error), context: p as Record<string, unknown> })
  }
}

// ---------- Chapter Progress ----------
export async function getChapterProgress(id: number): Promise<ChapterProgressRow> {
  const def: ChapterProgressRow = { chapter_id: id, video_watched: 0, pdfs_read: '[]', quiz_completed: 0, quiz_score: 0, quiz_passed: 0, completed: 0, completed_at: null }
  if (!isNative) {
    const all = lsGet<Record<number, ChapterProgressRow>>('chapters', {})
    return all[id] ?? def
  }
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM chapter_progress WHERE chapter_id = ?', [id])
    return r.values && r.values.length ? (r.values[0] as ChapterProgressRow) : def
  } catch (error) {
    logDatabaseError({ operation: 'getChapterProgress', severity: 'ERROR', message: String(error), context: { id } })
    return def
  }
}

export async function getAllChapterProgress(): Promise<ChapterProgressRow[]> {
  if (!isNative) {
    const all = lsGet<Record<number, ChapterProgressRow>>('chapters', {})
    return Object.values(all)
  }
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM chapter_progress')
    return (r.values as ChapterProgressRow[]) ?? []
  } catch (error) {
    logDatabaseError({ operation: 'getAllChapterProgress', severity: 'ERROR', message: String(error) })
    return []
  }
}

export async function saveChapterProgress(p: ChapterProgressRow): Promise<void> {
  if (!isNative) {
    const all = lsGet<Record<number, ChapterProgressRow>>('chapters', {})
    all[p.chapter_id] = p
    lsSet('chapters', all)
    return
  }
  try {
    const db = getDb()
    await db.run(
      `INSERT INTO chapter_progress (chapter_id, video_watched, pdfs_read, quiz_completed, quiz_score, quiz_passed, completed, completed_at)
       VALUES (?,?,?,?,?,?,?,?)
       ON CONFLICT(chapter_id) DO UPDATE SET
         video_watched=excluded.video_watched, pdfs_read=excluded.pdfs_read, quiz_completed=excluded.quiz_completed,
         quiz_score=excluded.quiz_score, quiz_passed=excluded.quiz_passed, completed=excluded.completed, completed_at=excluded.completed_at`,
      [p.chapter_id, p.video_watched, p.pdfs_read, p.quiz_completed, p.quiz_score, p.quiz_passed, p.completed, p.completed_at],
    )
  } catch (error) {
    logDatabaseError({ operation: 'saveChapterProgress', severity: 'ERROR', message: String(error), context: { chapter_id: p.chapter_id } })
  }
}

// ---------- XP ----------
export async function addXp(amount: number, reason: string, chapterId: number | null): Promise<void> {
  if (!isNative) {
    const txns = lsGet<XpTransaction[]>('xp', [])
    txns.push({ id: txns.length + 1, amount, reason, chapter_id: chapterId, created_at: new Date().toISOString() })
    lsSet('xp', txns)
    return
  }
  try {
    const db = getDb()
    await db.run('INSERT INTO xp_transactions (amount, reason, chapter_id) VALUES (?,?,?)', [amount, reason, chapterId])
  } catch (error) {
    logDatabaseError({ operation: 'addXp', severity: 'WARNING', message: String(error), context: { amount, reason, chapterId } })
  }
}

export async function getTotalXp(): Promise<number> {
  if (!isNative) {
    const txns = lsGet<XpTransaction[]>('xp', [])
    return txns.reduce((s, t) => s + t.amount, 0)
  }
  try {
    const db = getDb()
    const r = await db.query('SELECT COALESCE(SUM(amount),0) as total FROM xp_transactions')
    return (r.values?.[0]?.total as number) ?? 0
  } catch (error) {
    logDatabaseError({ operation: 'getTotalXp', severity: 'ERROR', message: String(error) })
    return 0
  }
}

export async function getXpTodayCount(): Promise<number> {
  if (!isNative) {
    const txns = lsGet<XpTransaction[]>('xp', [])
    const today = new Date().toDateString()
    return txns.filter((t) => new Date(t.created_at).toDateString() === today).length
  }
  try {
    const db = getDb()
    const r = await db.query("SELECT COUNT(*) as c FROM xp_transactions WHERE date(created_at) = date('now')")
    return (r.values?.[0]?.c as number) ?? 0
  } catch (error) {
    logDatabaseError({ operation: 'getXpTodayCount', severity: 'WARNING', message: String(error) })
    return 0
  }
}

// ---------- Badges ----------
export async function getBadges(): Promise<BadgeRow[]> {
  if (!isNative) return lsGet<BadgeRow[]>('badges', [])
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM badges')
    return (r.values as BadgeRow[]) ?? []
  } catch (error) {
    logDatabaseError({ operation: 'getBadges', severity: 'ERROR', message: String(error) })
    return []
  }
}

export async function unlockBadge(id: string): Promise<void> {
  if (!isNative) {
    const b = lsGet<BadgeRow[]>('badges', [])
    const idx = b.findIndex((x) => x.badge_id === id)
    const row: BadgeRow = { badge_id: id, unlocked: 1, unlocked_at: new Date().toISOString() }
    if (idx >= 0) b[idx] = row
    else b.push(row)
    lsSet('badges', b)
    return
  }
  try {
    const db = getDb()
    await db.run(
      `INSERT INTO badges (badge_id, unlocked, unlocked_at) VALUES (?,1,?)
       ON CONFLICT(badge_id) DO UPDATE SET unlocked=1, unlocked_at=excluded.unlocked_at`,
      [id, new Date().toISOString()],
    )
  } catch (error) {
    logDatabaseError({ operation: 'unlockBadge', severity: 'WARNING', message: String(error), context: { badgeId: id } })
  }
}

// ---------- Streaks ----------
export interface StreakRow { id: number; current_streak: number; longest_streak: number; last_active_date: string | null }
export async function getStreak(): Promise<StreakRow> {
  if (!isNative) return lsGet<StreakRow>('streak', { id: 1, current_streak: 0, longest_streak: 0, last_active_date: null })
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM streaks WHERE id = 1')
    return (r.values?.[0] ?? { id: 1, current_streak: 0, longest_streak: 0, last_active_date: null }) as StreakRow
  } catch (error) {
    logDatabaseError({ operation: 'getStreak', severity: 'ERROR', message: String(error) })
    return { id: 1, current_streak: 0, longest_streak: 0, last_active_date: null }
  }
}

export async function saveStreak(s: StreakRow): Promise<void> {
  if (!isNative) {
    lsSet('streak', s)
    return
  }
  try {
    const db = getDb()
    await db.run('UPDATE streaks SET current_streak=?, longest_streak=?, last_active_date=? WHERE id=1', [s.current_streak, s.longest_streak, s.last_active_date])
  } catch (error) {
    logDatabaseError({ operation: 'saveStreak', severity: 'WARNING', message: String(error) })
  }
}

export async function getStreakRawDate(): Promise<string | null> {
  const s = await getStreak()
  return s.last_active_date
}

// ---------- Quiz attempts ----------
export async function recordQuizAttempt(chapterId: number, questionId: string, wasCorrect: boolean): Promise<void> {
  if (!isNative) {
    const a = lsGet<any[]>('attempts', [])
    a.push({ chapter_id: chapterId, question_id: questionId, was_correct: wasCorrect ? 1 : 0, created_at: new Date().toISOString() })
    lsSet('attempts', a)
    return
  }
  try {
    const db = getDb()
    await db.run('INSERT INTO quiz_attempts (chapter_id, question_id, was_correct) VALUES (?,?,?)', [chapterId, questionId, wasCorrect ? 1 : 0])
  } catch (error) {
    logDatabaseError({ operation: 'recordQuizAttempt', severity: 'WARNING', message: String(error), context: { chapterId, questionId } })
  }
}

// ---------- Flashcards ----------
export async function getFlashcardProgress(id: string): Promise<FlashcardProgressRow | null> {
  if (!isNative) {
    const all = lsGet<Record<string, FlashcardProgressRow>>('fc', {})
    return all[id] ?? null
  }
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM flashcard_progress WHERE flashcard_id = ?', [id])
    return r.values && r.values.length ? (r.values[0] as FlashcardProgressRow) : null
  } catch (error) {
    logDatabaseError({ operation: 'getFlashcardProgress', severity: 'WARNING', message: String(error), context: { flashcardId: id } })
    return null
  }
}

export async function getAllFlashcardProgress(): Promise<FlashcardProgressRow[]> {
  if (!isNative) {
    const all = lsGet<Record<string, FlashcardProgressRow>>('fc', {})
    return Object.values(all)
  }
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM flashcard_progress')
    return (r.values as FlashcardProgressRow[]) ?? []
  } catch (error) {
    logDatabaseError({ operation: 'getAllFlashcardProgress', severity: 'WARNING', message: String(error) })
    return []
  }
}

export async function saveFlashcardProgress(p: FlashcardProgressRow): Promise<void> {
  if (!isNative) {
    const all = lsGet<Record<string, FlashcardProgressRow>>('fc', {})
    all[p.flashcard_id] = p
    lsSet('fc', all)
    return
  }
  try {
    const db = getDb()
    await db.run(
      `INSERT INTO flashcard_progress (flashcard_id, difficulty, next_review, review_count) VALUES (?,?,?,?)
       ON CONFLICT(flashcard_id) DO UPDATE SET difficulty=excluded.difficulty, next_review=excluded.next_review, review_count=excluded.review_count`,
      [p.flashcard_id, p.difficulty, p.next_review, p.review_count],
    )
  } catch (error) {
    logDatabaseError({ operation: 'saveFlashcardProgress', severity: 'WARNING', message: String(error), context: { flashcardId: p.flashcard_id } })
  }
}

// ---------- Bookmarks ----------
export async function getBookmarks(): Promise<number[]> {
  if (!isNative) return lsGet<number[]>('bookmarks', [])
  try {
    const db = getDb()
    const r = await db.query('SELECT chapter_id FROM bookmarks')
    return (r.values ?? []).map((x: any) => x.chapter_id as number)
  } catch (error) {
    logDatabaseError({ operation: 'getBookmarks', severity: 'WARNING', message: String(error) })
    return []
  }
}

export async function toggleBookmark(chapterId: number): Promise<boolean> {
  const bms = await getBookmarks()
  const exists = bms.includes(chapterId)
  if (!isNative) {
    if (exists) lsSet('bookmarks', bms.filter((x) => x !== chapterId))
    else lsSet('bookmarks', [...bms, chapterId])
    return !exists
  }
  try {
    const db = getDb()
    if (exists) await db.run('DELETE FROM bookmarks WHERE chapter_id = ?', [chapterId])
    else await db.run('INSERT INTO bookmarks (chapter_id) VALUES (?)', [chapterId])
  } catch (error) {
    logDatabaseError({ operation: 'toggleBookmark', severity: 'WARNING', message: String(error), context: { chapterId } })
  }
  return !exists
}

// ---------- Weekly challenge ----------
export async function getWeeklyChallenge(): Promise<WeeklyChallengeRow | null> {
  if (!isNative) return lsGet<WeeklyChallengeRow | null>('weekly', null)
  try {
    const db = getDb()
    const r = await db.query('SELECT * FROM weekly_challenge ORDER BY id DESC LIMIT 1')
    return r.values && r.values.length ? (r.values[0] as WeeklyChallengeRow) : null
  } catch (error) {
    logDatabaseError({ operation: 'getWeeklyChallenge', severity: 'WARNING', message: String(error) })
    return null
  }
}

export async function saveWeeklyChallenge(w: WeeklyChallengeRow): Promise<void> {
  if (!isNative) {
    lsSet('weekly', w)
    return
  }
  try {
    const db = getDb()
    if (w.id) {
      await db.run('UPDATE weekly_challenge SET challenge_id=?, week_start=?, progress=?, completed=? WHERE id=?', [w.challenge_id, w.week_start, w.progress, w.completed, w.id])
    } else {
      await db.run('INSERT INTO weekly_challenge (challenge_id, week_start, progress, completed) VALUES (?,?,?,?)', [w.challenge_id, w.week_start, w.progress, w.completed])
    }
  } catch (error) {
    logDatabaseError({ operation: 'saveWeeklyChallenge', severity: 'WARNING', message: String(error) })
  }
}

export { initDatabase }
