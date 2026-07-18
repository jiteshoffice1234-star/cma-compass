import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  useEffect(() => {
    if (message) {
      const t = setTimeout(onClose, 2500)
      return () => clearTimeout(t)
    }
  }, [message, onClose])

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          style={{
            position: 'absolute', bottom: 90, left: 16, right: 16, zIndex: 200,
            background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14,
            padding: '14px 16px', color: 'var(--text)', fontSize: 14, fontWeight: 600,
            boxShadow: '0 8px 30px rgba(0,0,0,0.35)', pointerEvents: 'none',
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
