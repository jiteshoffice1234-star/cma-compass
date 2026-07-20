import { registerPlugin } from '@capacitor/core'
import { isNative } from './capacitor'
import { REPO } from './updateChecker'

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
    const hashUrl = url.substring(0, url.lastIndexOf('/')) + '/web-build.zip.sha256'
    const hashRes = await fetch(hashUrl)
    if (hashRes.ok) {
      const expectedHash = (await hashRes.text()).trim()
      if (expectedHash.length === 64) {
        const zipRes = await fetch(url)
        if (zipRes.ok) {
          const zipBuffer = await zipRes.arrayBuffer()
          const hashBuffer = await crypto.subtle.digest('SHA-256', zipBuffer)
          const hashArray = Array.from(new Uint8Array(hashBuffer))
          const actualHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
          if (actualHash !== expectedHash) {
            console.error('OTA integrity check failed: hash mismatch')
            return false
          }
        }
      }
    }
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
    const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' }
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('github_token') || '' : ''
    if (token) headers.Authorization = `Bearer ${token}`
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/tags/v${version}`, { headers })
    if (!res.ok) return null
    const data = await res.json()
    const asset = data.assets?.find((a: any) => a.name === 'web-build.zip')
    return asset?.browser_download_url || null
  } catch {
    return null
  }
}

export async function getWebBuildHash(version: string): Promise<string | null> {
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' }
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('github_token') || '' : ''
    if (token) headers.Authorization = `Bearer ${token}`
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/tags/v${version}`, { headers })
    if (!res.ok) return null
    const data = await res.json()
    const asset = data.assets?.find((a: any) => a.name === 'web-build.zip.sha256')
    if (!asset) return null
    const hashRes = await fetch(asset.browser_download_url)
    if (!hashRes.ok) return null
    return (await hashRes.text()).trim()
  } catch {
    return null
  }
}
