import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WifiOff } from 'lucide-react'
import { color, border } from '../theme'

export function OfflineBanner() {
  const [offline, setOffline] = useState(!navigator.onLine)

  useEffect(() => {
    const goOff = () => setOffline(true)
    const goOn = () => setOffline(false)
    window.addEventListener('offline', goOff)
    window.addEventListener('online', goOn)
    return () => {
      window.removeEventListener('offline', goOff)
      window.removeEventListener('online', goOn)
    }
  }, [])

  return (
    <AnimatePresence>
      {offline && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, zIndex: 999,
            background: color.warning, borderBottom: border.thick,
            padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8,
            fontWeight: 800, fontSize: 13,
          }}
        >
          <WifiOff size={16} /> You are offline — some features may be unavailable
        </motion.div>
      )}
    </AnimatePresence>
  )
}
