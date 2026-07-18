import { registerPlugin } from '@capacitor/core'

export interface ApkUpdaterPlugin {
  downloadAndInstall(options: { url: string }): Promise<{ success: boolean }>
}

const ApkUpdater = registerPlugin<ApkUpdaterPlugin>('ApkUpdater')

export async function downloadAndInstallApk(url: string): Promise<boolean> {
  try {
    const result = await ApkUpdater.downloadAndInstall({ url })
    return result.success
  } catch (e) {
    console.error('APK download failed:', e)
    return false
  }
}
