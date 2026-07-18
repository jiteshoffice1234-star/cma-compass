import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { color, border, shadow, radius, font } from '../theme'

export function ProgressRing({ value, size = 44, stroke = 5, color: ringColor = color.secondary, track = '#E5E2D9', label }: {
  value: number; size?: number; stroke?: number; color?: string; track?: string; label?: ReactNode
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value))
  return (
    <div style={{ width: size, height: size, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={ringColor} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} strokeLinecap="butt" />
      </svg>
      {label != null && <div className="mono" style={{ position: 'absolute', fontSize: size * 0.26, fontWeight: 800 }}>{label}</div>}
    </div>
  )
}

export function Skeleton({ w = '100%', h = 16, radius: rad = 8, style }: { w?: number | string; h?: number | string; radius?: number; style?: any }) {
  return <div className="shimmer" style={{ width: w, height: h, borderRadius: rad, ...style }} />
}

export function Tappable({ children, onClick, className = '', style, activeScale = 0.97, disabled = false }: {
  children: ReactNode; onClick?: () => void; className?: string; style?: any; activeScale?: number; disabled?: boolean
}) {
  void activeScale
  return (
    <motion.button
      className={'tappable ' + className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{ background: 'none', cursor: disabled ? 'default' : 'pointer', fontFamily: font.ui, ...style }}
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
    <div className={(onClick ? 'tappable ' : '') + className} onClick={onClick}
      style={{ background: color.card, border: border.thick, borderRadius: radius.md, boxShadow: shadow.md, ...style }}>
      {children}
    </div>
  )
}

// Primary/secondary/ghost buttons with the hard-shadow press effect.
export function Button({ children, onClick, variant = 'primary', style, disabled = false }: {
  children: ReactNode; onClick?: () => void; variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; style?: any; disabled?: boolean
}) {
  const variants: Record<string, any> = {
    primary: { background: color.primary, color: color.text },
    secondary: { background: color.secondary, color: '#FFFFFF' },
    ghost: { background: color.card, color: color.text },
    danger: { background: color.danger, color: '#FFFFFF' },
  }
  return (
    <Tappable onClick={onClick} disabled={disabled} style={{
      border: border.thick, borderRadius: radius.md, boxShadow: shadow.md,
      padding: '14px 16px', fontWeight: 800, fontSize: 15,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      opacity: disabled ? 0.5 : 1,
      ...variants[variant], ...style,
    }}>
      {children}
    </Tappable>
  )
}

export function IconButton({ children, onClick, size = 44 }: { children: ReactNode; onClick?: () => void; size?: number }) {
  return (
    <button className="tappable" onClick={onClick}
      style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color.text, background: color.card, border: border.thin, borderRadius: radius.sm, boxShadow: shadow.sm }}>
      {children}
    </button>
  )
}
