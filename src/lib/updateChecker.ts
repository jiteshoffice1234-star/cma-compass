// GitHub repo that hosts releases (APK + web-build.zip).
export const REPO = 'jiteshoffice1234-star/cma-compass'

// Keep in sync with package.json "version" and android versionName.
export const APP_VERSION = '2.4.0'

export interface UpdateInfo {
  available: boolean
  latestVersion: string
  downloadUrl: string
  webBuildUrl: string | null
  releaseNotes: string
}

function versionParts(v: string): number[] {
  return v.replace(/^v/, '').split(/[.-]/).map((p) => Number.parseInt(p, 10) || 0)
}

function isNewerVersion(latest: string, current: string): boolean {
  const a = versionParts(latest)
  const b = versionParts(current)
  const len = Math.max(a.length, b.length)
  for (let i = 0; i < len; i++) {
    const x = a[i] ?? 0
    const y = b[i] ?? 0
    if (x > y) return true
    if (x < y) return false
  }
  return false
}

export async function checkForUpdate(currentVersion: string): Promise<UpdateInfo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
    if (!res.ok) return null
    const data = await res.json()
    const latest = data.tag_name.replace(/^v/, '')
    if (!isNewerVersion(latest, currentVersion)) return null
    const apk = data.assets?.find((a: any) => a.name.endsWith('.apk'))
    const webBuild = data.assets?.find((a: any) => a.name === 'web-build.zip')
    return {
      available: true,
      latestVersion: latest,
      downloadUrl: apk?.browser_download_url || data.assets?.[0]?.browser_download_url || data.html_url,
      webBuildUrl: webBuild?.browser_download_url || null,
      releaseNotes: data.body || `Version ${latest} available`,
    }
  } catch {
    return null
  }
}
