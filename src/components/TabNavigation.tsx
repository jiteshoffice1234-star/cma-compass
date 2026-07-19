import { Tappable } from './ui'
import { color, border } from '../theme'

export function TabNavigation({
  tabs, active, onChange
}: {
  tabs: Array<{ id: string; label: string }>
  active: string
  onChange: (tabId: string) => void
}) {
  return (
    <div style={{ display: 'flex', borderBottom: border.thin }}>
      {tabs.map((tab) => (
        <Tappable
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            flex: 1, textAlign: 'center' as const, padding: '12px 0',
            fontWeight: 800, fontSize: 13,
            color: active === tab.id ? color.text : color.muted,
            background: active === tab.id ? color.primaryTint : 'transparent',
            borderBottom: active === tab.id ? `3px solid ${color.secondary}` : 'none',
            transition: 'all 200ms ease',
          }}
        >
          {tab.label}
        </Tappable>
      ))}
    </div>
  )
}
