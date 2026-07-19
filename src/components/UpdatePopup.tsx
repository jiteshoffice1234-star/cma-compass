import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, RefreshCw } from 'lucide-react'
import { isNative } from '../lib/capacitor'
import { downloadAndInstallApk } from '../lib/apkUpdater'
import { downloadAndExtractOta, applyOtaVersion, getWebBuildDownloadUrl } from '../lib/otaUpdater'
import { color, border, shadow, font, APP_NAME } from '../theme'

interface UpdatePopupProps {
  open: boolean
  latestVersion: string
  downloadUrl: string
  releaseNotes: string
  onLater: () => void
}

export function UpdatePopup({ open, latestVersion, downloadUrl, releaseNotes, onLater }: UpdatePopupProps) {
  const [status, setStatus] = useState<'idle' | 'downloading' | 'extracting' | 'done' | 'error'>('idle')

  if (!open) return null

  const handleUpdate = async () => {
    setStatus('downloading')

    if (isNative) {
      // OTA path first: download the web build zip, extract, apply, reload.
      const webUrl = await getWebBuildDownloadUrl(latestVersion)
      if (webUrl) {
        setStatus('extracting')
        const ok = await downloadAndExtractOta(webUrl, latestVersion)
        if (ok) {
          await applyOtaVersion(latestVersion)
          setStatus('done')
          // The native plugin will now reload the webview automatically!
          return
        }
      }
      // APK fallback when no web bundle exists or OTA failed (native change).
      const ok = await downloadAndInstallApk(downloadUrl)
      setStatus(ok ? 'done' : 'error')
    } else {
      const ok = await downloadAndInstallApk(downloadUrl)
      setStatus(ok ? 'done' : 'error')
    }
  }

  const btnText = status === 'downloading' ? 'Downloading…'
    : status === 'extracting' ? 'Applying…'
    : status === 'done' ? 'Updated!'
    : status === 'error' ? 'Failed — Retry'
    : 'Update Now'

  const busy = status === 'downloading' || status === 'extracting'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(28,41,60,0.6)', padding: 24,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          style={{
            background: color.card, border: border.thick, borderRadius: 14, boxShadow: shadow.lg,
            padding: 24, maxWidth: 360, width: '100%', color: color.text,
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: color.primary, border: border.thin, borderRadius: 8, boxShadow: '3px 3px 0 #000', padding: '6px 12px', marginBottom: 14 }}>
            <RefreshCw size={16} />
            <span style={{ fontWeight: 900, fontSize: 13, letterSpacing: 0.5 }}>UPDATE AVAILABLE</span>
          </div>
          <h2 style={{ fontSize: 21, fontWeight: 900, marginBottom: 6 }}>
            {APP_NAME} <span className="mono" style={{ fontFamily: font.mono }}>v{latestVersion}</span>
          </h2>
          {isNative && <p style={{ fontSize: 13, color: color.success, fontWeight: 700, marginBottom: 8 }}>One-tap update — installs automatically</p>}
          <p style={{ fontSize: 14, color: color.muted, marginBottom: 20, lineHeight: 1.5 }}>
            {releaseNotes.slice(0, 200)}
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              className="tappable"
              onClick={onLater}
              disabled={busy}
              style={{
                flex: 1, padding: '13px 0', borderRadius: 10, border: border.thin, boxShadow: shadow.sm,
                background: color.card, color: color.text, fontSize: 15, fontWeight: 700, cursor: 'pointer', opacity: busy ? 0.5 : 1,
              }}
            >
              {status === 'done' ? 'Close' : 'Later'}
            </button>
            <button
              className="tappable"
              onClick={handleUpdate}
              disabled={busy || status === 'done'}
              style={{
                flex: 1, padding: '13px 0', borderRadius: 10, border: border.thick, boxShadow: shadow.md,
                background: status === 'done' ? color.success : status === 'error' ? color.danger : color.secondary,
                color: '#fff', fontSize: 15, fontWeight: 800, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              {status === 'idle' && <Download size={16} />}{btnText}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
