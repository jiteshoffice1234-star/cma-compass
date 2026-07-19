import { Capacitor } from '@capacitor/core'
import { APP_VERSION } from './updateChecker'

export interface VersionInfo {
  apk_version: string
  ota_version: string | null
  running_version: 'apk' | 'ota'
  app_build: string
}

export async function getVersionInfo(): Promise<VersionInfo> {
  const apkVersion = APP_VERSION
  let runningVersion: 'apk' | 'ota' = 'apk'
  let otaVersion: string | null = null

  if (Capacitor.isNativePlatform()) {
    try {
      const prefs = localStorage.getItem('ota_prefs')
      if (prefs) {
        const otas = JSON.parse(prefs)
        otaVersion = otas.active_version || null
        runningVersion = otaVersion ? 'ota' : 'apk'
      }
    } catch {
      // ignore parse errors
    }
  }

  return {
    apk_version: apkVersion,
    ota_version: otaVersion,
    running_version: runningVersion,
    app_build: `${apkVersion}${otaVersion ? ` (OTA: ${otaVersion})` : ''}`,
  }
}

export async function logVersionMismatch() {
  const info = await getVersionInfo()
  if (info.ota_version) {
    console.info('[Version] Running OTA update:', info)
  }
}
