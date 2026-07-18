import { Capacitor } from '@capacitor/core'
import { App } from '@capacitor/app'

export const isNative = Capacitor.isNativePlatform()

export const STATUS_BAR_COLORS: Record<string, string> = {
  dark: '#0A0A0A',
  light: '#F8F9FA',
  claude: '#1A1625',
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

export async function setStatusBarColor(mode: string) {
  await loadStatusBar()
  if (!statusBarPlugin) return
  try {
    await statusBarPlugin.setBackgroundColor({ color: STATUS_BAR_COLORS[mode] || '#0A0A0A' })
    if (mode === 'light') {
      await statusBarPlugin.setStyle({ style: 'DARK' })
    } else {
      await statusBarPlugin.setStyle({ style: 'LIGHT' })
    }
  } catch {
    /* noop */
  }
}

export { App }
