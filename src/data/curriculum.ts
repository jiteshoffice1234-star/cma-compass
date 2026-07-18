// ICMAI CMA Syllabus 2022 — Foundation (Papers 1-4) + Intermediate (Papers 5-12).
// The user picks ONE level at signup; the app is scoped to that level only.

export type Level = 'foundation' | 'intermediate'

// Legacy alias kept so older imports keep compiling. Stages == paper codes now.
export type Stage = string

// A verified lecture option for a chapter. Multiple options let the student
// pick a teaching style (full lecture vs quick revision vs worked examples).
export interface ChapterVideo {
  id: string // YouTube video ID — every ID here has been verified live
  label: string
}

export interface Chapter {
  id: number
  paperId: number
  level: Level
  section: string
  title: string
  duration: string
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
import { CHAPTER_VIDEOS } from './videos'

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

// Verified lecture options for a chapter (may be empty — then the paper
// playlist below is the fallback).
export function videosForChapter(chapterId: number): ChapterVideo[] {
  return CHAPTER_VIDEOS[chapterId] ?? []
}

// ---------------------------------------------------------------------------
// Curated, verified YouTube playlists (each ID re-verified live via oEmbed on
// 2026-07-19). India-first CMA-specific playlists from active faculty channels.
// ---------------------------------------------------------------------------
const PLAYLISTS = {
  accountingBasics: 'PL6BOecg3cC7XVrbAFretJRiyXtPk7qXL6', // CMA Foundation Accounts — Akash Agarwal Classes ✓
  financialAccounting: 'PLzj7mF_Rlz1peizPOHBLt92hB37Vh--FP', // CMA Inter Financial Accounting — CMA Saarthi ✓
  advancedAccounting: 'PLzj7mF_Rlz1peizPOHBLt92hB37Vh--FP', // CMA Inter Financial Accounting — CMA Saarthi ✓
  gst: 'PLyY2ccCWylAozEb7wfWYjPAJjCiKoNRP4', // GST Full Course — CA Raj K Agrawal ✓
  corporateFinance: 'PLzj7mF_Rlz1petajiy3_5LDYclWJatDu_', // CMA Inter FM & BDA — CMA Saarthi ✓
  costAccounting: 'PL4amNZCWYsNqHN_CnpB92zljsUZ79ZMHJ', // CMA Inter Cost Accounting (full course) — JKSC CMA Surat ✓
  strategicManagement: 'PL-ao-8pxqJKLwBr-921a5V9o3P_Uva_mv', // Strategic Management crash course (MBA) ✓
  statistics: 'PLMFjEHAnQEkftTBVuCdoeZWNHsdrZXCEK', // CMA Foundation Statistics — Unique Academy ✓
  economics: 'PL6BOecg3cC7UizK3-BGmFRZ8RAO7wJG3p', // CMA Foundation Economics — Akash Agarwal Classes ✓
  laws: 'PL6BOecg3cC7Wz9BvN_Pinljo7lAd6V8e1', // CMA Foundation Law — Akash Agarwal Classes ✓
  businessCommunication: 'PLMFjEHAnQEkfdUW_L5o-sAMR9o_1-gFhy', // CMA Foundation Business Communication — Unique Academy ✓
  maths: 'PLMFjEHAnQEkePNjw5frtZVosFwxCRxe2y', // CMA Foundation Maths — Unique Academy ✓
  tax: 'PLyY2ccCWylAozEb7wfWYjPAJjCiKoNRP4', // GST + Income Tax — CA Raj K Agrawal ✓
  management: 'PLMFjEHAnQEkcS0flyaH0WfBrgT8xXxO1s', // CMA Foundation Management — Unique Academy ✓
} as const

// paperId -> default playlist
const PAPER_PLAYLIST: Record<number, string> = {
  1: PLAYLISTS.laws, // FBLC — default to Business Laws
  2: PLAYLISTS.accountingBasics, // FFCA
  3: PLAYLISTS.maths, // FBMS
  4: PLAYLISTS.economics, // FBEM — default to Economics
  5: PLAYLISTS.laws, // BLE
  6: PLAYLISTS.financialAccounting, // FA
  7: PLAYLISTS.tax, // DITX
  8: PLAYLISTS.costAccounting, // CA
  9: PLAYLISTS.strategicManagement, // OMSM
  10: PLAYLISTS.advancedAccounting, // CAA
  11: PLAYLISTS.corporateFinance, // FMDA
  12: PLAYLISTS.corporateFinance, // MA
}

// Resolve the best playlist to embed for a given chapter.
// Multi-subject papers use the chapter's section to pick a subject-specific playlist.
export function playlistForChapter(chapter: Chapter): string {
  // Paper 1 (FBLC): Business Laws OR Business Communication
  if (chapter.paperId === 1) {
    if (chapter.section?.toLowerCase().includes('communication')) return PLAYLISTS.businessCommunication
    return PLAYLISTS.laws
  }
  // Paper 3 (FBMS): Mathematics OR Statistics
  if (chapter.paperId === 3) {
    const s = chapter.section?.toLowerCase() ?? ''
    if (s.includes('statistic') || s.includes('correlation') || s.includes('probability') || s.includes('central tendency')) return PLAYLISTS.statistics
    return PLAYLISTS.maths
  }
  // Paper 4 (FBEM): Business Economics OR Management
  if (chapter.paperId === 4) {
    const s = (chapter.section + ' ' + chapter.title).toLowerCase()
    if (s.includes('management') || s.includes('leadership') || s.includes('posdcorb')) return PLAYLISTS.management
    return PLAYLISTS.economics
  }
  // Paper 9 (OMSM): Operations Management OR Strategic Management
  if (chapter.paperId === 9) {
    return PLAYLISTS.strategicManagement
  }
  // Paper 10 (CAA): Corporate Accounting has cash-flow chapter — check for Cash Flow
  if (chapter.paperId === 10) {
    if (chapter.title?.toLowerCase().includes('cash flow')) return PLAYLISTS.financialAccounting
    return PLAYLISTS.advancedAccounting
  }
  return PAPER_PLAYLIST[chapter.paperId] ?? PLAYLISTS.financialAccounting
}

// ---- Legacy compatibility shims (some screens still import these) ----
export const STAGES: Level[] = ['foundation', 'intermediate']

export const STAGE_LABELS: Record<string, string> = {
  foundation: 'CMA Foundation',
  intermediate: 'CMA Intermediate',
}
