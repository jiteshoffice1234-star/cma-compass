import { registerPlugin } from '@capacitor/core'
import { isNative } from './capacitor'

export interface OtaUpdaterPlugin {
  getActiveVersion(): Promise<{ version: string | null }>
  getDownloadedVersion(): Promise<{ version: string | null }>
  downloadAndExtract(options: { url: string; version: string }): Promise<{ success: boolean; version: string; path: string }>
  applyVersion(options: { version: string }): Promise<{ success: boolean; version: string; path: string }>
  getOtaIndexPath(): Promise<{ path: string | null }>
  clearOta(): Promise<{ success: boolean }>
}

const OtaUpdater = registerPlugin<OtaUpdaterPlugin>('OtaUpdater')

export async function getActiveOtaVersion(): Promise<string | null> {
  if (!isNative) return null
  try {
    const result = await OtaUpdater.getActiveVersion()
    return result.version
  } catch {
    return null
  }
}

export async function downloadAndExtractOta(url: string, version: string): Promise<boolean> {
  if (!isNative) return false
  try {
    const result = await OtaUpdater.downloadAndExtract({ url, version })
    return result.success
  } catch (e) {
    console.error('OTA download failed:', e)
    return false
  }
}

export async function applyOtaVersion(version: string): Promise<boolean> {
  if (!isNative) return false
  try {
    const result = await OtaUpdater.applyVersion({ version })
    return result.success
  } catch (e) {
    console.error('OTA apply failed:', e)
    return false
  }
}

export async function hasStagedOtaUpdate(): Promise<boolean> {
  if (!isNative) return false
  try {
    const result = await OtaUpdater.getOtaIndexPath()
    return result.path !== null
  } catch {
    return false
  }
}

export async function getWebBuildDownloadUrl(version: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/jiteshoffice1234-star/AccountIQ/releases/tags/v${version}`)
    if (!res.ok) return null
    const data = await res.json()
    const asset = data.assets?.find((a: any) => a.name === 'web-build.zip')
    return asset?.browser_download_url || null
  } catch {
    return null
  }
}
