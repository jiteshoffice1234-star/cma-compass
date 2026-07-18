export interface LevelDef {
  minXp: number
  name: string
}

export const LEVELS: LevelDef[] = [
  { minXp: 0, name: 'Beginner' },
  { minXp: 100, name: 'Bookkeeper' },
  { minXp: 300, name: 'Junior Accountant' },
  { minXp: 600, name: 'Accountant' },
  { minXp: 1000, name: 'Senior Accountant' },
  { minXp: 1500, name: 'Finance Analyst' },
  { minXp: 2000, name: 'Controller' },
  { minXp: 2800, name: 'CFO' },
]

export function levelForXp(xp: number): { name: string; index: number; floor: number; next: number | null } {
  let idx = 0
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].minXp) idx = i
  }
  const next = idx + 1 < LEVELS.length ? LEVELS[idx + 1].minXp : null
  return { name: LEVELS[idx].name, index: idx, floor: LEVELS[idx].minXp, next }
}

export interface BadgeDef {
  id: string
  name: string
  desc: string
  icon: string
}

export const BADGES: BadgeDef[] = [
  { id: 'first_step', name: 'First Step', desc: 'Complete your first chapter.', icon: 'footprints' },
  { id: 'on_fire', name: 'On Fire', desc: 'Maintain a 7-day streak.', icon: 'flame' },
  { id: 'perfect', name: 'Perfectionist', desc: 'Score 10/10 on any quiz.', icon: 'star' },
  { id: 'foundation', name: 'CMA Foundation', desc: 'Complete every chapter in the Foundation level.', icon: 'layers' },
  { id: 'intermediate', name: 'CMA Intermediate', desc: 'Complete every chapter in the Intermediate level.', icon: 'bar-chart-3' },
  { id: 'speed_run', name: 'Speed Run', desc: 'Complete 3 chapters in one day.', icon: 'zap' },
  { id: 'night_owl', name: 'Night Owl', desc: 'Earn XP after 22:00.', icon: 'moon' },
  { id: 'cfo', name: 'Future CFO', desc: 'Finish every chapter in your level + Grand Final Test.', icon: 'crown' },
  // Per-paper completion badges (id = "paper_<paperId>")
  { id: 'paper_1', name: 'FBLC Cleared', desc: 'Complete Paper 1 · Business Laws & Communication.', icon: 'scroll' },
  { id: 'paper_2', name: 'FFCA Cleared', desc: 'Complete Paper 2 · Financial & Cost Accounting.', icon: 'calculator' },
  { id: 'paper_3', name: 'FBMS Cleared', desc: 'Complete Paper 3 · Business Maths & Statistics.', icon: 'sigma' },
  { id: 'paper_4', name: 'FBEM Cleared', desc: 'Complete Paper 4 · Business Economics & Management.', icon: 'trending-up' },
  { id: 'paper_5', name: 'BLE Cleared', desc: 'Complete Paper 5 · Business Laws & Ethics.', icon: 'scale' },
  { id: 'paper_6', name: 'FA Cleared', desc: 'Complete Paper 6 · Financial Accounting.', icon: 'book-open' },
  { id: 'paper_7', name: 'DITX Cleared', desc: 'Complete Paper 7 · Direct & Indirect Taxation.', icon: 'landmark' },
  { id: 'paper_8', name: 'CA Cleared', desc: 'Complete Paper 8 · Cost Accounting.', icon: 'coins' },
  { id: 'paper_9', name: 'OMSM Cleared', desc: 'Complete Paper 9 · Operations & Strategic Management.', icon: 'settings' },
  { id: 'paper_10', name: 'CAA Cleared', desc: 'Complete Paper 10 · Corporate Accounting & Auditing.', icon: 'building-2' },
  { id: 'paper_11', name: 'FMDA Cleared', desc: 'Complete Paper 11 · Financial Management & Analytics.', icon: 'line-chart' },
  { id: 'paper_12', name: 'MA Cleared', desc: 'Complete Paper 12 · Management Accounting.', icon: 'clipboard-list' },
]

export interface WeeklyChallengeDef {
  id: number
  name: string
  unit: string
  target: number
}

export const WEEKLY_CHALLENGES: WeeklyChallengeDef[] = [
  { id: 0, name: 'Complete 3 chapters', unit: 'chapters', target: 3 },
  { id: 1, name: 'Score 80%+ on 3 quizzes', unit: 'quizzes', target: 3 },
  { id: 2, name: 'Review 30 flashcards', unit: 'flashcards', target: 30 },
  { id: 3, name: 'Watch 5 chapter videos', unit: 'videos', target: 5 },
  { id: 4, name: 'Read 8 PDFs', unit: 'PDFs', target: 8 },
  { id: 5, name: 'Complete a stage test', unit: 'stage tests', target: 1 },
  { id: 6, name: 'Answer 100 quiz questions', unit: 'questions', target: 100 },
  { id: 7, name: 'Maintain a 5-day streak', unit: 'days', target: 5 },
  { id: 8, name: 'Unlock 2 badges', unit: 'badges', target: 2 },
  { id: 9, name: 'Complete 4 chapters', unit: 'chapters', target: 4 },
  { id: 10, name: 'Review 50 flashcards', unit: 'flashcards', target: 50 },
  { id: 11, name: 'Score 90%+ on 2 quizzes', unit: 'quizzes', target: 2 },
]

export function weekNumber(d = new Date()): number {
  const start = new Date(d.getFullYear(), 0, 1)
  const diff = d.getTime() - start.getTime()
  return Math.floor(diff / (7 * 24 * 3600 * 1000))
}

export function getChallengeForWeek(week: number): WeeklyChallengeDef {
  return WEEKLY_CHALLENGES[week % WEEKLY_CHALLENGES.length]
}
