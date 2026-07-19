import { Capacitor } from '@capacitor/core'
import { App } from '@capacitor/app'

export const isNative = Capacitor.isNativePlatform()

// Per-theme status bar: background colour + whether the bar sits on a dark
// surface (dark surface => light icons). Style 'LIGHT' = dark icons.
const STATUS_BAR_THEME: Record<string, { color: string; dark: boolean }> = {
  neo: { color: '#FBFBF9', dark: false },
  glass: { color: '#a9c3fb', dark: false },
  clay: { color: '#edeaff', dark: false },
  neu: { color: '#e0e5ec', dark: false },
  skeuo: { color: '#d8d2c0', dark: false },
  vapor: { color: '#2b1055', dark: true },
  cyber: { color: '#05060a', dark: true },
}

let statusBarPlugin: any = null
async function loadStatusBar() {
  if (!isNative) return
  try {
    const mod = await import('@capacitor/status-bar')
    statusBarPlugin = mod.StatusBar
  } catch {
    statusBarPlugin = null
  }
}

export async function setStatusBarColor(mode?: string) {
  await loadStatusBar()
  if (!statusBarPlugin) return
  const t = STATUS_BAR_THEME[mode || 'neo'] || STATUS_BAR_THEME.neo
  try {
    await statusBarPlugin.setBackgroundColor({ color: t.color })
    await statusBarPlugin.setStyle({ style: t.dark ? 'DARK' : 'LIGHT' })
  } catch {
    /* noop */
  }
}

export { App }
