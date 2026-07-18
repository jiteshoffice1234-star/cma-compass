import { AnimatePresence, motion } from 'framer-motion'
import { BADGES } from '../lib/levels'
import { color, border, shadow } from '../theme'

export function LevelUpOverlay({ data }: { data: { name: string } | null }) {
  return (
    <AnimatePresence>
      {data && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{ position: 'absolute', inset: 0, zIndex: 500, background: 'rgba(28,41,60,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ background: color.primary, border: border.thick, borderRadius: 14, boxShadow: shadow.lg, padding: '32px 28px', textAlign: 'center', width: '78%' }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎉</div>
            <div style={{ color: color.text, fontWeight: 900, fontSize: 13, letterSpacing: 1.5 }}>LEVEL UP</div>
            <div style={{ color: color.text, fontWeight: 900, fontSize: 27, marginTop: 6 }}>{data.name}</div>
            <div style={{ color: color.text, fontSize: 13, marginTop: 8, fontWeight: 600 }}>You’ve reached a new rank.</div>
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
  const badge = BADGES.find((b) => b.id === data.id)
  return (
    <AnimatePresence>
      {data && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{ position: 'absolute', inset: 0, zIndex: 500, background: 'rgba(28,41,60,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ background: color.card, border: border.thick, borderRadius: 14, boxShadow: shadow.lg, padding: '28px 28px', textAlign: 'center', width: '78%' }}>
            <motion.div animate={{ scale: [0.8, 1.1, 1] }} transition={{ duration: 0.5 }}
              style={{ fontSize: 56, marginBottom: 8 }}>{BADGE_ICONS[data.id] ?? '🏅'}</motion.div>
            <div style={{ color: color.warning, fontWeight: 900, fontSize: 13, letterSpacing: 1.5 }}>BADGE UNLOCKED!</div>
            <div style={{ color: color.text, fontWeight: 900, fontSize: 21, marginTop: 6 }}>{badge?.name}</div>
            <div style={{ color: color.muted, fontSize: 13, marginTop: 6 }}>{badge?.desc}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
