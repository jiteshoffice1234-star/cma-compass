// ICMAI CMA Syllabus 2022 — Foundation (Papers 1-4) + Intermediate (Papers 5-12).
// The user picks ONE level at signup; the app is scoped to that level only.

export type Level = 'foundation' | 'intermediate'

// Legacy alias kept so older imports keep compiling. Stages == paper codes now.
export type Stage = string

export interface Chapter {
  id: number
  paperId: number
  level: Level
  section: string
  title: string
  duration: string
  videoId: string
  videoPlaylistId: string
  keyPoints: string[]
  xpAvailable: number
}

export interface Paper {
  id: number
  level: Level
  group?: 'I' | 'II'
  code: string
  name: string
}

export const SYLLABUS = 'ICMAI CMA Syllabus 2022'

export const LEVEL_LABELS: Record<Level, string> = {
  foundation: 'CMA Foundation',
  intermediate: 'CMA Intermediate',
}

export const PAPERS: Paper[] = [
  // ---- Foundation ----
  { id: 1, level: 'foundation', code: 'FBLC', name: 'Fundamentals of Business Laws & Business Communication' },
  { id: 2, level: 'foundation', code: 'FFCA', name: 'Fundamentals of Financial & Cost Accounting' },
  { id: 3, level: 'foundation', code: 'FBMS', name: 'Fundamentals of Business Mathematics & Statistics' },
  { id: 4, level: 'foundation', code: 'FBEM', name: 'Fundamentals of Business Economics & Management' },
  // ---- Intermediate Group I ----
  { id: 5, level: 'intermediate', group: 'I', code: 'BLE', name: 'Business Laws & Ethics' },
  { id: 6, level: 'intermediate', group: 'I', code: 'FA', name: 'Financial Accounting' },
  { id: 7, level: 'intermediate', group: 'I', code: 'DITX', name: 'Direct & Indirect Taxation' },
  { id: 8, level: 'intermediate', group: 'I', code: 'CA', name: 'Cost Accounting' },
  // ---- Intermediate Group II ----
  { id: 9, level: 'intermediate', group: 'II', code: 'OMSM', name: 'Operations Management & Strategic Management' },
  { id: 10, level: 'intermediate', group: 'II', code: 'CAA', name: 'Corporate Accounting & Auditing' },
  { id: 11, level: 'intermediate', group: 'II', code: 'FMDA', name: 'Financial Management & Business Data Analytics' },
  { id: 12, level: 'intermediate', group: 'II', code: 'MA', name: 'Management Accounting' },
]

export function paperById(id: number): Paper | undefined {
  return PAPERS.find((p) => p.id === id)
}

export function papersForLevel(level: Level): Paper[] {
  return PAPERS.filter((p) => p.level === level)
}

import { CURRICULUM_CHAPTERS } from './chapters'
import { FOUND_EXTRA_CHAPTERS } from './chapters_found_extra'
import { INTER_A_CHAPTERS } from './chapters_inter_a'
import { INTER_B_CHAPTERS } from './chapters_inter_b'

export const curriculum: Chapter[] = [
  ...CURRICULUM_CHAPTERS,
  ...FOUND_EXTRA_CHAPTERS,
  ...INTER_A_CHAPTERS,
  ...INTER_B_CHAPTERS,
]

export function chaptersForLevel(level: Level): Chapter[] {
  return curriculum.filter((c) => c.level === level)
}

export function chaptersForPaper(paperId: number): Chapter[] {
  return curriculum.filter((c) => c.paperId === paperId)
}

export function chapterById(id: number): Chapter | undefined {
  return curriculum.find((c) => c.id === id)
}

// ---------------------------------------------------------------------------
// Curated, verified YouTube playlists (each ID confirmed live & public).
// Chapters have no per-video ID yet, so the player opens the best-fit playlist
// for the chapter's paper (and section, for the mixed tax paper). India-first
// where a strong Indian/CA-CS-CMA playlist exists; best global otherwise.
// ---------------------------------------------------------------------------
const PLAYLISTS = {
  accountingBasics: 'PL5zKSeS09l339nB6ujJPQ9Rsv99_b-aTb', // Accounting Stuff — Accounting Basics
  financialAccounting: 'PLiaygP8qeQGUBcPmEHtQv3qUOlSOkyAVR', // Financial Accounting (B.Com/M.Com/CA/CS/CMA)
  advancedAccounting: 'PLWJbGDNtMCZONqVZVpZP74SWoEA71jiOX', // CA Inter Advanced Accounts
  gst: 'PLyY2ccCWylAozEb7wfWYjPAJjCiKoNRP4', // GST Full Course — CA Raj K Agrawal
  corporateFinance: 'PL-ao-8pxqJKI4FrS306fpa9za0Rc_wz83', // Learn Corporate Finance
  strategicManagement: 'PL-ao-8pxqJKLwBr-921a5V9o3P_Uva_mv', // Strategic Management (MBA)
  statistics: 'PLntYGYK-wJE2ASx6oemhxTa0AF5920Bs1', // Khan Academy — Statistics & Probability
  economics: 'PLSQl0a2vh4HBEuNYvU8OrPW5qN0A4D7p4', // Khan Academy — Microeconomics
} as const

// paperId -> default playlist
const PAPER_PLAYLIST: Record<number, string> = {
  1: PLAYLISTS.economics, // FBLC — Business Laws & Communication (closest general fallback)
  2: PLAYLISTS.accountingBasics, // FFCA — Fundamentals of Financial & Cost Accounting
  3: PLAYLISTS.statistics, // FBMS — Business Mathematics & Statistics
  4: PLAYLISTS.economics, // FBEM — Business Economics & Management
  5: PLAYLISTS.economics, // BLE — Business Laws & Ethics (general fallback)
  6: PLAYLISTS.financialAccounting, // FA — Financial Accounting
  7: PLAYLISTS.gst, // DITX — Direct & Indirect Taxation (section-aware below)
  8: PLAYLISTS.accountingBasics, // CA — Cost Accounting
  9: PLAYLISTS.strategicManagement, // OMSM — Operations & Strategic Management
  10: PLAYLISTS.advancedAccounting, // CAA — Corporate Accounting & Auditing
  11: PLAYLISTS.corporateFinance, // FMDA — Financial Management & Business Data Analytics
  12: PLAYLISTS.corporateFinance, // MA — Management Accounting
}

// Resolve the best playlist to embed for a given chapter.
export function playlistForChapter(chapter: Chapter): string {
  // Direct taxation is income-tax focused; the GST playlist still lives on the
  // same tax faculty's channel, so both tax sections use it (India-first).
  if (chapter.paperId === 7) return PLAYLISTS.gst
  return PAPER_PLAYLIST[chapter.paperId] ?? PLAYLISTS.financialAccounting
}

// ---- Legacy compatibility shims (some screens still import these) ----
export const STAGES: Level[] = ['foundation', 'intermediate']

export const STAGE_LABELS: Record<string, string> = {
  foundation: 'CMA Foundation',
  intermediate: 'CMA Intermediate',
}
