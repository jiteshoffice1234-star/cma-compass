import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BookOpen, GraduationCap, User } from 'lucide-react'
import { useStore } from '../store'
import { color, border } from '../theme'

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
    <div className="safe-bottom" style={{ borderTop: border.thick, background: color.card }}>
      {/* daily goal bar */}
      <div style={{ padding: '8px 14px 4px' }}>
        <div style={{ height: 10, background: color.surface, border: border.thin, borderRadius: 5, overflow: 'hidden' }}>
          <motion.div animate={{ width: `${Math.min(100, (completedToday / goal) * 100)}%` }}
            style={{ height: '100%', background: color.success }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 56, gap: 4, padding: '0 8px 4px' }}>
        {TABS.map((t) => {
          const active = loc.pathname === t.path
          const Icon = t.icon
          return (
            <button key={t.path} className="tappable" onClick={() => nav(t.path)}
              style={{
                flex: 1, height: 46, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1,
                background: active ? color.primary : 'transparent',
                border: active ? border.thin : '2px solid transparent',
                borderRadius: 8,
                boxShadow: active ? '2px 2px 0 #000' : 'none',
                color: active ? color.text : color.muted,
              }}>
              <Icon size={21} strokeWidth={active ? 2.6 : 2} />
              <span style={{ fontSize: 10, fontWeight: active ? 800 : 600 }}>{t.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
