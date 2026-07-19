import { Capacitor } from '@capacitor/core'

let Haptics: any = null
async function ensureLoaded() {
  if (Haptics) return
  if (!Capacitor.isNativePlatform()) return
  try {
    const mod = await import('@capacitor/haptics')
    Haptics = mod.Haptics
  } catch { /* noop */ }
}

export async function impactLight() {
  await ensureLoaded()
  try { await Haptics?.impact({ style: 'LIGHT' }) } catch { /* noop */ }
}

export async function impactMedium() {
  await ensureLoaded()
  try { await Haptics?.impact({ style: 'MEDIUM' }) } catch { /* noop */ }
}

export async function impactHeavy() {
  await ensureLoaded()
  try { await Haptics?.impact({ style: 'HEAVY' }) } catch { /* noop */ }
}

export async function notificationSuccess() {
  await ensureLoaded()
  try { await Haptics?.notification({ type: 'SUCCESS' }) } catch { /* noop */ }
}

export async function notificationError() {
  await ensureLoaded()
  try { await Haptics?.notification({ type: 'ERROR' }) } catch { /* noop */ }
}

export async function notificationWarning() {
  await ensureLoaded()
  try { await Haptics?.notification({ type: 'WARNING' }) } catch { /* noop */ }
}
