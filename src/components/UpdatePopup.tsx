import { motion, AnimatePresence } from 'framer-motion'

interface UpdatePopupProps {
  open: boolean
  latestVersion: string
  downloadUrl: string
  releaseNotes: string
  onLater: () => void
}

export function UpdatePopup({ open, latestVersion, downloadUrl, releaseNotes, onLater }: UpdatePopupProps) {
  if (!open) return null

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
          <p style={{ fontSize: 14, color: '#9aa0a6', marginBottom: 20, lineHeight: 1.5 }}>
            {releaseNotes.slice(0, 200)}
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={onLater}
              style={{
                flex: 1, padding: '12px 0', borderRadius: 10, border: '1px solid #3c4043',
                background: 'transparent', color: '#e8eaed', fontSize: 15, cursor: 'pointer',
              }}
            >
              Later
            </button>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: 'block', textAlign: 'center', padding: '12px 0',
                borderRadius: 10, border: 'none', background: '#8ab4f8', color: '#0f1115',
                fontSize: 15, fontWeight: 600, textDecoration: 'none', cursor: 'pointer',
              }}
            >
              Update Now
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
