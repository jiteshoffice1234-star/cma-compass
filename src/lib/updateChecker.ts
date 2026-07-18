// GitHub repo that hosts releases (APK + web-build.zip). The repository slug is
// unchanged by the app rename so existing installs keep receiving updates.
export const REPO = 'jiteshoffice1234-star/AccountIQ'

// Keep in sync with package.json "version" and android versionName.
export const APP_VERSION = '2.0.0'

export interface UpdateInfo {
  available: boolean
  latestVersion: string
  downloadUrl: string
  releaseNotes: string
}

export async function checkForUpdate(currentVersion: string): Promise<UpdateInfo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
    if (!res.ok) return null
    const data = await res.json()
    const latest = data.tag_name.replace(/^v/, '')
    if (latest === currentVersion) return null
    const apk = data.assets?.find((a: any) => a.name.endsWith('.apk'))
    return {
      available: true,
      latestVersion: latest,
      downloadUrl: apk?.browser_download_url || data.assets?.[0]?.browser_download_url || data.html_url,
      releaseNotes: data.body || `Version ${latest} available`,
    }
  } catch {
    return null
  }
}
