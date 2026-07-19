import { Tappable } from './ui'
import { color, border, shadow, radius } from '../theme'

export function TabButton({
  active, onClick, icon: Icon, label
}: {
  active: boolean
  onClick: () => void
  icon: any
  label: string
}) {
  return (
    <Tappable
      onClick={onClick}
      style={{
        flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6,
        background: active ? color.secondary : color.card,
        color: active ? '#FFFFFF' : color.text,
        border: border.thin, borderRadius: radius.sm,
        boxShadow: shadow.sm, padding: '7px 12px',
        fontSize: 12, fontWeight: 800, transition: 'all 150ms ease',
      }}
    >
      {Icon && <Icon size={12} />}{label}
    </Tappable>
  )
}
