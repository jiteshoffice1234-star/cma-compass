import { InputHTMLAttributes } from 'react'
import { color, border, shadow, radius, type, font } from '../theme'

export function TextInput(props: InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }) {
  const { label, error, ...inputProps } = props
  return (
    <div>
      {label && <label style={{ display: 'block', fontWeight: 800, fontSize: type.sm, marginBottom: 6 }}>{label}</label>}
      <input
        {...inputProps}
        style={{
          width: '100%', background: color.card, border: border.thick,
          borderRadius: radius.md, boxShadow: error ? `0 0 0 2px ${color.danger}` : shadow.sm,
          padding: '14px 16px', color: color.text, fontSize: type.md,
          fontFamily: font.ui, outline: 'none', transition: 'all 150ms ease',
          ...props.style,
        } as any}
      />
      {error && <div style={{ color: color.danger, fontSize: type.xs, marginTop: 4, fontWeight: 600 }}>{error}</div>}
    </div>
  )
}
