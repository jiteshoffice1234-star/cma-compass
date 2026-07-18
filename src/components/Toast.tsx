import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { color, border, shadow } from '../theme'

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
            position: 'absolute', bottom: 96, left: 16, right: 16, zIndex: 200,
            background: color.primary, border: border.thick, borderRadius: 10,
            padding: '14px 16px', color: color.text, fontSize: 14, fontWeight: 800,
            boxShadow: shadow.md, pointerEvents: 'none',
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
