import {
  getProfile, saveProfile, getAllChapterProgress, saveChapterProgress,
  getBadges, unlockBadge, getStreak, saveStreak, getBookmarks,
} from './store'
import type { ChapterProgressRow, UserProfileRow, BadgeRow } from './db'
import type { StreakRow } from './store'
import { APP_VERSION } from './updateChecker'

export interface BackupData {
  version: string
  exported_at: string
  app_version: string
  data: {
    profile: UserProfileRow
    chapters: ChapterProgressRow[]
    badges: BadgeRow[]
    streak: StreakRow
    bookmarks: number[]
  }
}

export async function exportProgressToJson(): Promise<string> {
  const profile = await getProfile()
  const allProgress = await getAllChapterProgress()
  const badges = await getBadges()
  const streak = await getStreak()
  const bookmarks = await getBookmarks()

  const backup: BackupData = {
    version: '1.0',
    exported_at: new Date().toISOString(),
    app_version: APP_VERSION,
    data: {
      profile,
      chapters: allProgress,
      badges,
      streak,
      bookmarks,
    },
  }

  return JSON.stringify(backup, null, 2)
}

export async function importProgressFromJson(jsonString: string): Promise<{ success: boolean; message: string }> {
  try {
    const backup = JSON.parse(jsonString) as BackupData

    if (!backup.version || backup.version !== '1.0') {
      throw new Error('Unsupported backup format version')
    }
    if (!backup.data || !backup.data.profile || !Array.isArray(backup.data.chapters)) {
      throw new Error('Invalid backup structure')
    }

    // Validate profile fields
    const profile = backup.data.profile
    if (typeof profile.name !== 'string' || profile.name.length > 30) {
      throw new Error('Invalid profile: name must be a string (max 30 chars)')
    }
    if (typeof profile.daily_goal !== 'number' || profile.daily_goal < 1 || profile.daily_goal > 10) {
      throw new Error('Invalid profile: daily_goal must be 1-10')
    }
    if (!['foundation', 'intermediate', 'final'].includes(profile.level)) {
      throw new Error('Invalid profile: level must be foundation/intermediate/final')
    }

    // Validate chapter progress entries
    for (const ch of backup.data.chapters) {
      if (typeof ch.chapter_id !== 'number' || ch.chapter_id < 1) {
        throw new Error(`Invalid chapter_id: ${ch.chapter_id}`)
      }
      if (typeof ch.video_watched !== 'number' || ch.video_watched < 0 || ch.video_watched > 1) {
        throw new Error(`Invalid video_watched for chapter ${ch.chapter_id}`)
      }
      if (typeof ch.quiz_score !== 'number' || ch.quiz_score < 0 || ch.quiz_score > 10) {
        throw new Error(`Invalid quiz_score for chapter ${ch.chapter_id}`)
      }
    }

    // Import profile
    await saveProfile(backup.data.profile)

    // Import chapter progress
    for (const ch of backup.data.chapters) {
      await saveChapterProgress(ch)
    }

    // Import badges
    if (backup.data.badges?.length) {
      for (const b of backup.data.badges) {
        if (typeof b.badge_id === 'string' && b.badge_id.length > 0) {
          await unlockBadge(b.badge_id)
        }
      }
    }

    // Import streak
    if (backup.data.streak) {
      await saveStreak(backup.data.streak)
    }

    return {
      success: true,
      message: `✓ Restored ${backup.data.chapters.length} chapters, ${backup.data.badges?.length || 0} badges`,
    }
  } catch (e) {
    return {
      success: false,
      message: `❌ Import failed: ${(e as Error).message}`,
    }
  }
}

export function downloadJson(json: string, filename: string): void {
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
