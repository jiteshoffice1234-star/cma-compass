import {
  getProfile, saveProfile, getAllChapterProgress, saveChapterProgress,
  getBadges, unlockBadge, getStreak, saveStreak, getBookmarks,
} from './store'
import type { ChapterProgressRow, UserProfileRow, BadgeRow } from './db'
import type { StreakRow } from './store'

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
    app_version: '2.5.0',
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

    // Import profile
    await saveProfile(backup.data.profile)

    // Import chapter progress
    for (const ch of backup.data.chapters) {
      await saveChapterProgress(ch)
    }

    // Import badges
    if (backup.data.badges?.length) {
      for (const b of backup.data.badges) {
        await unlockBadge(b.badge_id)
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
