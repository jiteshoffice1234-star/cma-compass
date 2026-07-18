import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isNative } from '../lib/capacitor'
import { downloadAndInstallApk } from '../lib/apkUpdater'
import { downloadAndExtractOta, applyOtaVersion, getWebBuildDownloadUrl } from '../lib/otaUpdater'

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
      // OTA update — download web build zip, extract, and reload
      const webUrl = await getWebBuildDownloadUrl(latestVersion)
      if (!webUrl) { setStatus('error'); return }

      setStatus('extracting')
      const ok = await downloadAndExtractOta(webUrl, latestVersion)
      if (!ok) { setStatus('error'); return }

      await applyOtaVersion(latestVersion)
      setStatus('done')

      // Reload the app from OTA directory
      setTimeout(() => window.location.reload(), 1000)
    } else {
      // Web fallback — download APK
      const ok = await downloadAndInstallApk(downloadUrl)
      if (!ok) setStatus('error')
      else setStatus('done')
    }
  }

  const btnText = status === 'downloading' ? 'Downloading...'
    : status === 'extracting' ? 'Applying...'
    : status === 'done' ? 'Updated!'
    : status === 'error' ? 'Failed — Retry'
    : 'Update Now'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.6)', padding: 24,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          style={{
            background: '#1a1d23', borderRadius: 16, padding: 28,
            maxWidth: 360, width: '100%', color: '#e8eaed',
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Update Available</h2>
          <p style={{ color: '#9aa0a6', marginBottom: 4 }}>
            AccountIQ v{latestVersion} is ready
          </p>
          {isNative && <p style={{ fontSize: 12, color: '#8ab4f8', marginBottom: 8 }}>Instant OTA update — no APK download needed</p>}
          <p style={{ fontSize: 14, color: '#9aa0a6', marginBottom: 20, lineHeight: 1.5 }}>
            {releaseNotes.slice(0, 200)}
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={onLater}
              disabled={status === 'downloading' || status === 'extracting'}
              style={{
                flex: 1, padding: '12px 0', borderRadius: 10, border: '1px solid #3c4043',
                background: 'transparent', color: '#9aa0a6', fontSize: 15, cursor: 'pointer',
              }}
            >
              {status === 'done' ? 'Close' : 'Later'}
            </button>
            <button
              onClick={handleUpdate}
              disabled={status === 'downloading' || status === 'extracting' || status === 'done'}
              style={{
                flex: 1, padding: '12px 0', borderRadius: 10, border: 'none',
                background: status === 'done' ? '#34a853' : status === 'error' ? '#ea4335' : '#8ab4f8',
                color: '#0f1115', fontSize: 15, fontWeight: 600, cursor: 'pointer',
              }}
            >
              {btnText}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
