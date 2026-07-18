import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BookOpen, GraduationCap, User } from 'lucide-react'
import { useStore } from '../store'

const TABS = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/chapters', label: 'Chapters', icon: BookOpen },
  { path: '/practice', label: 'Practice', icon: GraduationCap },
  { path: '/profile', label: 'Profile', icon: User },
]

export function BottomNav() {
  const nav = useNavigate()
  const loc = useLocation()
  const goal = useStore((s) => s.dailyGoal)
  const checkDailyGoal = useStore((s) => s.checkDailyGoal)
  const completedToday = checkDailyGoal()

  return (
    <div className="safe-bottom" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', paddingTop: 6 }}>
      {/* daily goal bar */}
      <div style={{ padding: '0 14px 6px' }}>
        <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
          <motion.div animate={{ width: `${Math.min(100, (completedToday / goal) * 100)}%` }} style={{ height: '100%', background: 'var(--accent)', borderRadius: 3 }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 52 }}>
        {TABS.map((t) => {
          const active = loc.pathname === t.path
          const Icon = t.icon
          return (
            <motion.button key={t.path} whileTap={{ scale: 0.9, opacity: 0.7 }} onClick={() => nav(t.path)}
              style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, background: 'none', color: active ? 'var(--accent)' : 'var(--muted)' }}>
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span style={{ fontSize: 10, fontWeight: active ? 600 : 500 }}>{t.label}</span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
