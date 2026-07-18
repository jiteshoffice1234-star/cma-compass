import { AnimatePresence, motion } from 'framer-motion'

export function LevelUpOverlay({ data }: { data: { name: string } | null }) {
  return (
    <AnimatePresence>
      {data && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{ position: 'absolute', inset: 0, zIndex: 500, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 24, padding: '32px 28px', textAlign: 'center', width: '78%' }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎉</div>
            <div style={{ color: 'var(--xp)', fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>LEVEL UP</div>
            <div style={{ color: 'var(--text)', fontWeight: 800, fontSize: 26, marginTop: 6 }}>{data.name}</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 8 }}>You’ve reached a new rank.</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const BADGE_ICONS: Record<string, string> = {
  footprints: '👣', flame: '🔥', star: '⭐', layers: '🧱', 'bar-chart-3': '📊', brain: '🧠',
  landmark: '🏛️', zap: '⚡', moon: '🌙', crown: '👑',
}

export function BadgeUnlockOverlay({ data }: { data: { id: string } | null }) {
  if (!data) return null
  const badge = require('../lib/levels').BADGES.find((b: any) => b.id === data.id)
  return (
    <AnimatePresence>
      {data && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{ position: 'absolute', inset: 0, zIndex: 500, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 24, padding: '28px 28px', textAlign: 'center', width: '78%' }}>
            <motion.div animate={{ scale: [0.8, 1.1, 1] }} transition={{ duration: 0.5 }}
              style={{ fontSize: 56, marginBottom: 8 }}>{BADGE_ICONS[data.id] ?? '🏅'}</motion.div>
            <div style={{ color: 'var(--xp)', fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>BADGE UNLOCKED!</div>
            <div style={{ color: 'var(--text)', fontWeight: 800, fontSize: 22, marginTop: 6 }}>{badge?.name}</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 6 }}>{badge?.desc}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
