import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { color, border } from '../theme'

export function BottomSheet({ open, onClose, title, children, height = 'auto' }: {
  open: boolean; onClose: () => void; title?: string; children: ReactNode; height?: number | string
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(28,41,60,0.55)', zIndex: 300 }} />
          <motion.div
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 301, maxHeight: '85%', background: color.surface, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderTop: border.thick, borderLeft: border.thick, borderRight: border.thick, padding: '14px 16px', paddingBottom: 'calc(18px + env(safe-area-inset-bottom))', display: 'flex', flexDirection: 'column', height }}>
            <div style={{ width: 48, height: 6, background: '#000', borderRadius: 3, margin: '0 auto 12px' }} />
            {title && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontWeight: 800, fontSize: 17 }}>{title}</span>
              <button onClick={onClose} className="tappable" style={{ background: color.card, border: border.thin, borderRadius: 6, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '2px 2px 0 #000' }}><X size={18} /></button>
            </div>}
            <div style={{ overflowY: 'auto', flex: 1 }}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
