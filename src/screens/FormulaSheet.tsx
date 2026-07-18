import { useMemo, useState } from 'react'
import { formulas } from '../data/formulas'
import { Tappable } from '../components/ui'

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

  return (
    <div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search formulas…"
        style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 14px', color: 'var(--text)', fontSize: 15, outline: 'none', width: '100%', marginBottom: 14 }} />
      {filtered ? (
        filtered.map((f) => (
          <div key={f.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 13, marginBottom: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--accent)' }}>{f.name}</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4 }}>{f.formula}</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 3 }}>{f.note}</div>
          </div>
        ))
      ) : (
        Object.entries(cats).map(([cat, list]) => (
          <div key={cat} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700, marginBottom: 6 }}>{cat.toUpperCase()}</div>
            {list.map((f) => (
              <div key={f.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 13, marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--accent)' }}>{f.name}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4 }}>{f.formula}</div>
                <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 3 }}>{f.note}</div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}
