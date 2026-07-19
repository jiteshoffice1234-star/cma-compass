import { color } from '../theme'

// The one loading animation used everywhere in the app.
// Markup/keyframes defined in index.css under ".loader".

export function Loader({ size = 40, label, style }: { size?: number; label?: string; style?: any }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, ...style }}>
      <div className="loader" style={{ width: size, height: size }} />
      {label && <div style={{ color: color.muted, fontSize: 13, fontWeight: 700 }}>{label}</div>}
    </div>
  )
}

// Full-screen centered loader (splash / route-level loading).
export function LoaderScreen({ label }: { label?: string }) {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: color.surface }}>
      <Loader size={48} label={label} />
    </div>
  )
}
