const REPO = 'jiteshoffice1234-star/AccountIQ'

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
    return {
      available: true,
      latestVersion: latest,
      downloadUrl: data.assets?.[0]?.browser_download_url || data.html_url,
      releaseNotes: data.body || `Version ${latest} available`,
    }
  } catch {
    return null
  }
}
