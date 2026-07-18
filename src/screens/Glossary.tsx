import { useMemo, useState } from 'react'
import { glossary } from '../data/glossary'
import { color, border, shadow, font } from '../theme'

export function Glossary() {
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const grouped = useMemo(() => {
    const list = query
      ? glossary.filter((g) => g.term.toLowerCase().includes(query) || g.definition.toLowerCase().includes(query))
      : glossary
    const sorted = [...list].sort((a, b) => a.term.localeCompare(b.term))
    const map: Record<string, typeof glossary> = {}
    sorted.forEach((g) => { const L = g.term[0].toUpperCase(); (map[L] ||= []).push(g) })
    return map
  }, [query])

  return (
    <div style={{ padding: '2px 4px 4px 2px' }}>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search terms…"
        style={{ background: color.card, border: border.thick, borderRadius: 10, boxShadow: shadow.sm, padding: '12px 14px', color: color.text, fontSize: 15, outline: 'none', width: '100%', marginBottom: 14, fontWeight: 600, fontFamily: font.ui }} />
      {Object.entries(grouped).map(([letter, list]) => (
        <div key={letter} style={{ marginBottom: 12 }}>
          <div className="mono" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, fontSize: 14, color: '#fff', background: color.secondary, border: border.thin, borderRadius: 6, fontWeight: 800, marginBottom: 8, fontFamily: font.mono }}>{letter}</div>
          {list.map((g) => (
            <div key={g.term} style={{ background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 13, marginBottom: 10 }}>
              <div style={{ fontWeight: 800, fontSize: 14 }}>{g.term}</div>
              <div style={{ color: color.text, fontSize: 13, marginTop: 3, lineHeight: 1.45, fontWeight: 500 }}>{g.definition}</div>
              <div style={{ color: color.muted, fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>e.g. {g.example}</div>
            </div>
          ))}
        </div>
      ))}
      {Object.keys(grouped).length === 0 && <div style={{ color: color.muted, textAlign: 'center', padding: 30, fontWeight: 600 }}>No terms found.</div>}
    </div>
  )
}
