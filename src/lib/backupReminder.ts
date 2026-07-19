import { Capacitor } from '@capacitor/core'
import { LocalNotifications } from '@capacitor/local-notifications'

const BACKUP_KEY = 'last_backup_prompt'

export async function maybePromptBackup() {
  if (!Capacitor.isNativePlatform()) return
  const last = localStorage.getItem(BACKUP_KEY)
  const daysSince = last ? Math.floor((Date.now() - Number(last)) / 86400000) : 999
  if (daysSince < 7) return

  try {
    const hasPermission = await LocalNotifications.requestPermissions()
    if (hasPermission.display !== 'granted') return

    await LocalNotifications.schedule({
      notifications: [{
        id: 1,
        title: 'Backup your progress',
        body: 'Export your CMA Compass progress to keep it safe — go to Profile > Export.',
        schedule: { at: new Date(Date.now() + 3600000) },
      }],
    })
    localStorage.setItem(BACKUP_KEY, String(Date.now()))
  } catch {
    // Silently fail on non-native or missing permissions
  }
}
