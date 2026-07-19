import { create } from 'zustand'
import { curriculum, Level, chaptersForLevel, chaptersForPaper, papersForLevel, chapterById } from '../data/curriculum'
import {
  getProfile, saveProfile, getChapterProgress, getAllChapterProgress, saveChapterProgress,
  addXp, getTotalXp, getXpTodayCount, getBadges, unlockBadge, getStreak, saveStreak,
  getStreakRawDate, recordQuizAttempt, getFlashcardProgress, getAllFlashcardProgress, saveFlashcardProgress,
  getBookmarks, toggleBookmark, getWeeklyChallenge, saveWeeklyChallenge, initDatabase,
  StreakRow,
} from '../lib/store'
import type { ChapterProgressRow } from '../lib/db'
import { BADGES, WEEKLY_CHALLENGES, getChallengeForWeek, weekNumber, levelForXp } from '../lib/levels'
import { ThemeId, DEFAULT_THEME, normalizeTheme } from '../lib/themes'

export type ThemeMode = ThemeId

function dateStr(d = new Date()): string {
  return d.toISOString().slice(0, 10)
}

function weekStartStr(d = new Date()): string {
  const date = new Date(d)
  const day = (date.getDay() + 6) % 7
  date.setDate(date.getDate() - day)
  return dateStr(date)
}

export interface AppState {
  ready: boolean
  onboardingComplete: boolean
  name: string
  dailyGoal: number
  level: Level
  uiMode: ThemeMode
  totalXp: number
  currentStreak: number
  longestStreak: number
  lastActiveDate: string | null
  progress: Record<number, ChapterProgressRow>
  badges: Record<string, boolean>
  bookmarks: number[]
  weeklyChallengeId: number
  weeklyProgress: number
  pdfsGenerated: boolean
  grandFinalDone: boolean
  levelUp: { name: string } | null
  badgeUnlock: { id: string; name: string } | null
  toast: string | null

  init: () => Promise<void>
  completeOnboarding: (name: string, dailyGoal: number, theme: ThemeMode, level: Level) => Promise<void>
  setLevel: (level: Level) => Promise<void>
  setTheme: (t: ThemeMode) => Promise<void>
  setDailyGoal: (g: number) => Promise<void>
  setPdfsGenerated: () => Promise<void>
  markVideoWatched: (chapterId: number) => Promise<void>
  markPdfRead: (chapterId: number, type: string) => Promise<void>
  completeQuiz: (chapterId: number, score: number, total: number, perfect: boolean, attempts: { q: string; correct: boolean }[]) => Promise<void>
  isUnlocked: (chapterId: number) => boolean
  reviewFlashcard: (flashcardId: string, quality: number) => Promise<void>
  toggleBookmarkChapter: (chapterId: number) => Promise<void>
  checkDailyGoal: () => number
  completeGrandFinal: () => Promise<void>
  resetProgress: () => Promise<void>
  refreshProgress: () => Promise<void>
  bumpWeeklyProgress: (n: number) => Promise<void>
  showToast: (msg: string) => void
  clearToast: () => void
  dismissLevelUp: () => void
}

export const useStore = create<AppState>((set, get) => ({
  ready: false,
  onboardingComplete: false,
  name: 'Student',
  dailyGoal: 1,
  level: 'foundation',
  uiMode: DEFAULT_THEME,
  totalXp: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  progress: {},
  badges: {},
  bookmarks: [],
  weeklyChallengeId: 0,
  weeklyProgress: 0,
  pdfsGenerated: false,
  grandFinalDone: false,
  levelUp: null,
  badgeUnlock: null,
  toast: null,

  init: async () => {
    await initDatabase()
    const profile = await getProfile()
    const allProg = await getAllChapterProgress()
    const progress: Record<number, ChapterProgressRow> = {}
    allProg.forEach((p) => (progress[p.chapter_id] = p))
    const xp = await getTotalXp()
    const streak = await getStreak()
    const badgeRows = await getBadges()
    const badges: Record<string, boolean> = {}
    badgeRows.forEach((b) => (badges[b.badge_id] = !!b.unlocked))
    const bookmarks = await getBookmarks()

    // weekly challenge (rotate per calendar week)
    const ws = weekStartStr()
    let weekly = await getWeeklyChallenge()
    if (!weekly || weekly.week_start !== ws) {
      const challenge = getChallengeForWeek(weekNumber())
      weekly = { id: 1, challenge_id: challenge.id ?? weekNumber() % WEEKLY_CHALLENGES.length, week_start: ws, progress: 0, completed: 0 }
      await saveWeeklyChallenge(weekly)
    }

    set({
      ready: true,
      onboardingComplete: !!profile.onboarding_complete,
      name: profile.name,
      dailyGoal: profile.daily_goal,
      level: (profile.level as Level) || 'foundation',
      uiMode: normalizeTheme(profile.ui_mode),
      pdfsGenerated: !!profile.pdfs_generated,
      progress,
      totalXp: xp,
      currentStreak: streak.current_streak,
      longestStreak: streak.longest_streak,
      lastActiveDate: streak.last_active_date,
      badges,
      bookmarks,
      weeklyChallengeId: weekly.challenge_id,
      weeklyProgress: weekly.progress,
    })
    document.documentElement.setAttribute('data-theme', normalizeTheme(profile.ui_mode))
  },

  completeOnboarding: async (name, dailyGoal, theme, level) => {
    await saveProfile({ name, daily_goal: dailyGoal, ui_mode: theme, level, onboarding_complete: 1 })
    set({ name, dailyGoal, uiMode: theme, level, onboardingComplete: true })
    document.documentElement.setAttribute('data-theme', theme)
  },

  setLevel: async (level) => {
    await saveProfile({ level })
    set({ level })
  },

  setTheme: async (t) => {
    await saveProfile({ ui_mode: t })
    set({ uiMode: t })
    document.documentElement.setAttribute('data-theme', t)
  },

  setDailyGoal: async (g) => {
    await saveProfile({ daily_goal: g })
    set({ dailyGoal: g })
  },

  setPdfsGenerated: async () => {
    await saveProfile({ pdfs_generated: 1 })
    set({ pdfsGenerated: true })
  },

  isUnlocked: (chapterId) => {
    const ch = chapterById(chapterId)
    if (!ch) return false
    // Chapters unlock sequentially within the chosen level.
    const levelChapters = chaptersForLevel(get().level).sort((a, b) => a.id - b.id)
    const idx = levelChapters.findIndex((c) => c.id === chapterId)
    if (idx <= 0) return true
    const prev = levelChapters[idx - 1]
    const prevProg = get().progress[prev.id]
    return !!(prevProg && prevProg.quiz_passed)
  },

  markVideoWatched: async (chapterId) => {
    const cur = await getChapterProgress(chapterId)
    if (cur.video_watched) return
    const row: ChapterProgressRow = { ...cur, chapter_id: chapterId, video_watched: 1 }
    await saveChapterProgress(row)
    set({ progress: { ...get().progress, [chapterId]: row } })
    await addXp(10, 'video', chapterId)
    await afterXp(get, set, { chapterId, reason: 'video' })
    get().showToast('+10 XP · Video watched')
    await maybeCompleteChapter(get, set, chapterId)
  },

  markPdfRead: async (chapterId, type) => {
    const cur = await getChapterProgress(chapterId)
    let read: string[] = []
    try { read = JSON.parse(cur.pdfs_read || '[]') } catch { read = [] }
    if (read.includes(type)) return
    read.push(type)
    const row: ChapterProgressRow = { ...cur, chapter_id: chapterId, pdfs_read: JSON.stringify(read) }
    await saveChapterProgress(row)
    set({ progress: { ...get().progress, [chapterId]: row } })
    await addXp(5, 'pdf_' + type, chapterId)
    await afterXp(get, set, { chapterId, reason: 'pdf' })
    get().showToast('+5 XP · PDF read')
  },

  completeQuiz: async (chapterId, score, total, perfect, attempts) => {
    for (const a of attempts) {
      await recordQuizAttempt(chapterId, a.q, a.correct)
    }
    const passMark = Math.max(1, Math.ceil((total || 10) * 0.6))
    const passed = score >= passMark
    const cur = await getChapterProgress(chapterId)
    const alreadyScored = cur.quiz_completed && cur.quiz_score >= score

    const row: ChapterProgressRow = {
      ...cur,
      chapter_id: chapterId,
      quiz_completed: 1,
      quiz_score: Math.max(cur.quiz_score || 0, score),
      quiz_passed: passed ? 1 : cur.quiz_passed,
      completed: passed ? 1 : cur.completed,
      completed_at: passed && !cur.completed_at ? new Date().toISOString() : cur.completed_at,
    }
    await saveChapterProgress(row)
    set({ progress: { ...get().progress, [chapterId]: row } })

    // XP: award quiz XP only the first time the quiz is passed for this chapter
    if (passed && !cur.quiz_passed) {
      await addXp(20, 'quiz', chapterId)
      if (perfect) await addXp(15, 'perfect_quiz', chapterId)
      await afterXp(get, set, { chapterId, reason: 'quiz' })
      get().showToast(perfect ? '+35 XP · Perfect quiz!' : '+20 XP · Quiz passed')
      await bumpWeekly(get, set, 1)
    } else if (!passed) {
      get().showToast(`Scored ${score}/10 · need 6 to pass`)
    }

    if (perfect) await tryBadge(get, set, 'perfect')
    await maybeCompleteChapter(get, set, chapterId)
    void alreadyScored
  },

  reviewFlashcard: async (flashcardId, quality) => {
    const curFp = await getFlashcardProgress(flashcardId)
    const difficulty = curFp?.difficulty ?? 3
    const { difficulty: nd, next } = nextReview(quality, difficulty)
    const reviewCount = (curFp?.review_count ?? 0) + 1
    await saveFlashcardProgress({ flashcard_id: flashcardId, difficulty: nd, next_review: next, review_count: reviewCount })
    await get().bumpWeeklyProgress(1)
  },

  toggleBookmarkChapter: async (chapterId) => {
    await toggleBookmark(chapterId)
    const bms = await getBookmarks()
    set({ bookmarks: bms })
  },

  checkDailyGoal: () => {
    const today = dateStr()
    return Object.values(get().progress).filter((p) => p.completed_at && p.completed_at.slice(0, 10) === today).length
  },

  completeGrandFinal: async () => {
    await addXp(200, 'grand_final', null)
    await touchStreak(get, set)
    const allDone = chaptersForLevel(get().level).every((c) => get().progress[c.id]?.completed)
    set({ grandFinalDone: true, totalXp: get().totalXp + 200 })
    await afterXp(get, set, { chapterId: null, reason: 'grand_final' })
    get().showToast('Grand Final cleared! +200 XP')
    if (allDone) await tryBadge(get, set, 'cfo')
  },

  resetProgress: async () => {
    const profile = await getProfile()
    // wipe by resetting each row/store to defaults via localStorage/db reset
    await saveProfile({ ...profile, pdfs_generated: 0 })
    // reset chapter progress
    for (const c of curriculum) {
      await saveChapterProgress({
        chapter_id: c.id, video_watched: 0, pdfs_read: '[]', quiz_completed: 0,
        quiz_score: 0, quiz_passed: 0, completed: 0, completed_at: null,
      })
    }
    await saveStreak({ id: 1, current_streak: 0, longest_streak: 0, last_active_date: null })
    set({
      progress: {}, totalXp: 0, currentStreak: 0, longestStreak: 0, lastActiveDate: null,
      badges: {}, bookmarks: [], grandFinalDone: false, pdfsGenerated: false, weeklyProgress: 0,
    })
    get().showToast('Progress reset')
    await get().refreshProgress()
  },

  refreshProgress: async () => {
    const all = await getAllChapterProgress()
    const prog: Record<number, ChapterProgressRow> = {}
    all.forEach((p) => (prog[p.chapter_id] = p))
    const xp = await getTotalXp()
    set({ progress: prog, totalXp: xp })
  },

  bumpWeeklyProgress: async (n) => {
    const ws = weekStartStr()
    let weekly = await getWeeklyChallenge()
    if (!weekly || weekly.week_start !== ws) {
      const challenge = getChallengeForWeek(weekNumber())
      weekly = { id: 1, challenge_id: challenge.id ?? 0, week_start: ws, progress: 0, completed: 0 }
    }
    weekly = { ...weekly, progress: weekly.progress + n }
    await saveWeeklyChallenge(weekly)
    set({ weeklyChallengeId: weekly.challenge_id, weeklyProgress: weekly.progress })
  },

  showToast: (msg) => {
    set({ toast: msg })
    setTimeout(() => {
      if (get().toast === msg) set({ toast: null })
    }, 2500)
  },
  clearToast: () => set({ toast: null }),
  dismissLevelUp: () => set({ levelUp: null }),
}))

// ---- helpers ----
function nextReview(quality: number, difficulty: number): { difficulty: number; next: string } {
  let d = difficulty
  if (quality <= 2) d = Math.max(1, d - 1)
  else d = Math.min(5, d + 1)
  const days = [0, 1, 1, 2, 4, 7][d] ?? 1
  const next = new Date()
  next.setDate(next.getDate() + days)
  return { difficulty: d, next: dateStr(next) }
}

async function touchStreak(get: () => AppState, set: (p: Partial<AppState>) => void) {
  const row = await getStreak()
  const today = dateStr()
  const last = row.last_active_date
  let cs = row.current_streak
  let ls = row.longest_streak
  if (last === today) {
    // already active today
  } else if (last) {
    const lastDate = new Date(last + 'T00:00:00')
    const now = new Date(today + 'T00:00:00')
    const diff = Math.round((now.getTime() - lastDate.getTime()) / 86400000)
    cs = diff === 1 ? cs + 1 : 1
  } else {
    cs = 1
  }
  if (cs > ls) ls = cs
  const updated: StreakRow = { id: 1, current_streak: cs, longest_streak: ls, last_active_date: today }
  await saveStreak(updated)
  set({ currentStreak: cs, longestStreak: ls, lastActiveDate: today })
  if (cs >= 7) await tryBadge(get, set, 'on_fire')
}

async function bumpWeekly(get: () => AppState, set: (p: Partial<AppState>) => void, n: number) {
  await get().bumpWeeklyProgress(n)
}

async function afterXp(
  get: () => AppState,
  set: (p: Partial<AppState>) => void,
  ctx: { chapterId: number | null; reason: string }
) {
  const before = get().totalXp
  const total = await getTotalXp()
  set({ totalXp: total })
  await touchStreak(get, set)

  // level-up detection
  const prevLevel = levelForXp(before)
  const newLevel = levelForXp(total)
  if (newLevel.index > prevLevel.index) {
    set({ levelUp: { name: newLevel.name } })
  }

  // night owl
  if (new Date().getHours() >= 22) await tryBadge(get, set, 'night_owl')

  // speed run: 3 chapters completed today
  const today = dateStr()
  const completedToday = Object.values(get().progress).filter((p) => p.completed_at && p.completed_at.slice(0, 10) === today).length
  if (completedToday >= 3) await tryBadge(get, set, 'speed_run')

  void ctx
}

async function tryBadge(get: () => AppState, set: (p: Partial<AppState>) => void, id: string) {
  if (get().badges[id]) return
  await unlockBadge(id)
  const def = BADGES.find((b) => b.id === id)
  set({ badges: { ...get().badges, [id]: true }, badgeUnlock: def ? { id, name: def.name } : null })
  if (def) {
    setTimeout(() => {
      if (get().badgeUnlock?.id === id) set({ badgeUnlock: null })
    }, 3200)
  }
}

async function maybeCompleteChapter(get: () => AppState, set: (p: Partial<AppState>) => void, chapterId: number) {
  const p = get().progress[chapterId]
  if (!p) return
  if (p.video_watched && p.quiz_passed) {
    const level = get().level
    const levelChapters = chaptersForLevel(level).sort((a, b) => a.id - b.id)
    if (levelChapters.length && levelChapters[0].id === chapterId) await tryBadge(get, set, 'first_step')
    // per-paper completion badges (badge id = "paper_<id>")
    for (const paper of papersForLevel(level)) {
      const paperChapters = chaptersForPaper(paper.id)
      if (!paperChapters.length) continue
      const done = paperChapters.every((c) => get().progress[c.id]?.completed)
      if (done) await tryBadge(get, set, `paper_${paper.id}`)
    }
    // whole-level completion badge
    const levelDone = levelChapters.every((c) => get().progress[c.id]?.completed)
    if (levelDone) await tryBadge(get, set, level)
  }
}
