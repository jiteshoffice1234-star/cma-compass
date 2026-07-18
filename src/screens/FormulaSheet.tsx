import { useMemo, useState } from 'react'
import { formulas } from '../data/formulas'
import { color, border, shadow, font } from '../theme'

export function FormulaSheet() {
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()
  const cats = useMemo(() => {
    const map: Record<string, typeof formulas> = {}
    formulas.forEach((f) => { (map[f.category] ||= []).push(f) })
    return map
  }, [])

  const filtered = query
    ? formulas.filter((f) => f.name.toLowerCase().includes(query) || f.formula.toLowerCase().includes(query) || f.note.toLowerCase().includes(query))
    : null

  const FormulaCard = ({ f }: { f: (typeof formulas)[number] }) => (
    <div style={{ background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 13, marginBottom: 10 }}>
      <div style={{ fontWeight: 800, fontSize: 14, color: color.secondary }}>{f.name}</div>
      <div className="mono" style={{ fontSize: 14, fontWeight: 700, marginTop: 4, fontFamily: font.mono }}>{f.formula}</div>
      <div style={{ color: color.muted, fontSize: 12, marginTop: 3, fontWeight: 600 }}>{f.note}</div>
    </div>
  )

  return (
    <div style={{ padding: '2px 4px 4px 2px' }}>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search formulas…"
        style={{ background: color.card, border: border.thick, borderRadius: 10, boxShadow: shadow.sm, padding: '12px 14px', color: color.text, fontSize: 15, outline: 'none', width: '100%', marginBottom: 14, fontWeight: 600, fontFamily: font.ui }} />
      {filtered ? (
        filtered.map((f) => <FormulaCard key={f.id} f={f} />)
      ) : (
        Object.entries(cats).map(([cat, list]) => (
          <div key={cat} style={{ marginBottom: 14 }}>
            <div style={{ display: 'inline-block', fontSize: 11, color: color.text, background: color.primary, border: border.thin, borderRadius: 5, padding: '2px 8px', fontWeight: 900, letterSpacing: 1, marginBottom: 8 }}>{cat.toUpperCase()}</div>
            {list.map((f) => <FormulaCard key={f.id} f={f} />)}
          </div>
        ))
      )}
    </div>
  )
}
