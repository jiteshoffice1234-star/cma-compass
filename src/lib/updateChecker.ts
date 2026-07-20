// GitHub repo that hosts releases (APK + web-build.zip).
export const REPO = 'jiteshoffice1234-star/cma-compass'

// Injected at build time from package.json via vite define.
export const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '2.5.2'

export interface UpdateInfo {
  available: boolean
  latestVersion: string
  downloadUrl: string
  webBuildUrl?: string
  releaseNotes: string
}

import { withTimeout } from './helpers'

// GitHub token for authenticated API calls (avoids 60 req/hr rate limit).
// Set via VITE_GITHUB_TOKEN env var or localStorage for development.
function getGitHubToken(): string {
  if (typeof localStorage !== 'undefined') {
    try { return localStorage.getItem('github_token') || '' } catch { return '' }
  }
  return ''
}

export async function checkForUpdate(currentVersion: string): Promise<UpdateInfo | null> {
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github.v3+json' }
    const token = getGitHubToken()
    if (token) headers.Authorization = `Bearer ${token}`
    const res = await withTimeout(fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers }), 8000)
    if (!res.ok) return null
    const data = await res.json()
    const latest = data.tag_name.replace(/^v/, '')
    if (latest === currentVersion) return null
    const apk = data.assets?.find((a: any) => a.name.endsWith('.apk'))
    const webZip = data.assets?.find((a: any) => a.name.endsWith('.zip'))
    return {
      available: true,
      latestVersion: latest,
      downloadUrl: apk?.browser_download_url || data.assets?.[0]?.browser_download_url || data.html_url,
      webBuildUrl: webZip?.browser_download_url,
      releaseNotes: data.body || `Version ${latest} available`,
    }
  } catch {
    return null
  }
}
