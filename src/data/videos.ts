import type { ChapterVideo } from './curriculum'

// Per-chapter curated lecture options. Every video ID has been verified live.
// Chapters not listed here fall back to the paper-level playlist.
export const CHAPTER_VIDEOS: Record<number, ChapterVideo[]> = {
  41: [
    { id: 'qMKi2Q3x0UA', label: 'Cash Flow (AS 3) — Full Lecture (3h 03min)' },
    { id: 'lPE7g1lPGhA', label: 'Cash Flow Revision — HP Sir (3h 24min)' },
  ],
}
