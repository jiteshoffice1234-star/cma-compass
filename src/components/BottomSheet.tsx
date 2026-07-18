import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export function BottomSheet({ open, onClose, title, children, height = 'auto' }: {
  open: boolean; onClose: () => void; title?: string; children: ReactNode; height?: number | string
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300 }} />
          <motion.div
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 301, maxHeight: '85%', background: 'var(--surface)', borderTopLeftRadius: 22, borderTopRightRadius: 22, borderTop: '1px solid var(--border)', padding: '14px 16px', paddingBottom: 'calc(18px + env(safe-area-inset-bottom))', display: 'flex', flexDirection: 'column', height }}>
            <div style={{ width: 40, height: 4, background: 'var(--border)', borderRadius: 2, margin: '0 auto 12px' }} />
            {title && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontWeight: 700, fontSize: 16 }}>{title}</span>
              <button onClick={onClose} style={{ background: 'none', color: 'var(--muted)' }}><X size={20} /></button>
            </div>}
            <div style={{ overflowY: 'auto', flex: 1 }}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
