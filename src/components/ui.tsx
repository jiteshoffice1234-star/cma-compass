import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function ProgressRing({ value, size = 44, stroke = 4, color = 'var(--accent)', track = 'var(--border)', label }: {
  value: number; size?: number; stroke?: number; color?: string; track?: string; label?: ReactNode
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value))
  return (
    <div style={{ width: size, height: size, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} strokeLinecap="round" />
      </svg>
      {label != null && <div style={{ position: 'absolute', fontSize: size * 0.28, fontWeight: 700 }}>{label}</div>}
    </div>
  )
}

export function Skeleton({ w = '100%', h = 16, radius = 8, style }: { w?: number | string; h?: number | string; radius?: number; style?: any }) {
  return <div className="shimmer" style={{ width: w, height: h, borderRadius: radius, ...style }} />
}

export function Tappable({ children, onClick, className = '', style, activeScale = 0.97, disabled = false }: {
  children: ReactNode; onClick?: () => void; className?: string; style?: any; activeScale?: number; disabled?: boolean
}) {
  return (
    <motion.button
      className={'tappable ' + className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: activeScale, opacity: 0.8 }}
      style={{ background: 'none', cursor: disabled ? 'default' : 'pointer', ...style }}
    >
      {children}
    </motion.button>
  )
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  )
}

export function Card({ children, style, className = '', onClick }: { children: ReactNode; style?: any; className?: string; onClick?: () => void }) {
  return (
    <div className={'tappable ' + className} onClick={onClick} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, ...style }}>
      {children}
    </div>
  )
}

export function IconButton({ children, onClick, size = 44 }: { children: ReactNode; onClick?: () => void; size?: number }) {
  return (
    <motion.button whileTap={{ scale: 0.9, opacity: 0.7 }} onClick={onClick}
      style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', background: 'none' }}>
      {children}
    </motion.button>
  )
}
