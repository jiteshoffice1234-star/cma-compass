import { Capacitor } from '@capacitor/core'
import { App } from '@capacitor/app'

export const isNative = Capacitor.isNativePlatform()

// Single light Neobrutalism theme — status bar is always the app surface
// colour with dark icons.
const STATUS_BAR_COLOR = '#FBFBF9'

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

export async function setStatusBarColor(_mode?: string) {
  await loadStatusBar()
  if (!statusBarPlugin) return
  try {
    await statusBarPlugin.setBackgroundColor({ color: STATUS_BAR_COLOR })
    // Style.Light = dark text/icons, for light backgrounds
    await statusBarPlugin.setStyle({ style: 'LIGHT' })
  } catch {
    /* noop */
  }
}

export { App }
