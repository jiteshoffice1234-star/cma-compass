import { useMemo, useState } from 'react'
import { glossary } from '../data/glossary'

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
    <div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search terms…"
        style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 14px', color: 'var(--text)', fontSize: 15, outline: 'none', width: '100%', marginBottom: 14 }} />
      {Object.entries(grouped).map(([letter, list]) => (
        <div key={letter} style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 800, marginBottom: 6 }}>{letter}</div>
          {list.map((g) => (
            <div key={g.term} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 13, marginBottom: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{g.term}</div>
              <div style={{ color: 'var(--text)', fontSize: 13, marginTop: 3, lineHeight: 1.45 }}>{g.definition}</div>
              <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 4, fontStyle: 'italic' }}>e.g. {g.example}</div>
            </div>
          ))}
        </div>
      ))}
      {Object.keys(grouped).length === 0 && <div style={{ color: 'var(--muted)', textAlign: 'center', padding: 30 }}>No terms found.</div>}
    </div>
  )
}
