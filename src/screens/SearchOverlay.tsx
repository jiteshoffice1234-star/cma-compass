import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, BookOpen, Hash, Type } from 'lucide-react'
import { chaptersForLevel } from '../data/curriculum'
import { glossary } from '../data/glossary'
import { formulas } from '../data/formulas'
import { Tappable } from '../components/ui'
import { useStore } from '../store'

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const nav = useNavigate()
  const level = useStore((s) => s.level)
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const chapters = !query ? [] : chaptersForLevel(level).filter((c) => c.title.toLowerCase().includes(query) || c.keyPoints.some((k) => k.toLowerCase().includes(query)))
  const terms = !query ? [] : glossary.filter((g) => g.term.toLowerCase().includes(query) || g.definition.toLowerCase().includes(query)).slice(0, 8)
  const fforms = !query ? [] : formulas.filter((f) => f.name.toLowerCase().includes(query) || f.formula.toLowerCase().includes(query)).slice(0, 8)

  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      style={{ position: 'absolute', inset: 0, zIndex: 350, background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 16px 8px' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '12px 16px' }}>
          <Search size={18} color="var(--muted)" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'var(--text)', fontSize: 16 }} />
        </div>
        <button onClick={onClose} style={{ background: 'none', color: 'var(--muted)' }}><X size={22} /></button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {query && chapters.length === 0 && terms.length === 0 && fforms.length === 0 && (
          <div style={{ color: 'var(--muted)', textAlign: 'center', marginTop: 40 }}>No results for “{q}”.</div>
        )}
        {chapters.length > 0 && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700, marginBottom: 8 }}>CHAPTERS</div>
            {chapters.map((c) => (
              <Tappable key={c.id} onClick={() => { onClose(); nav(`/chapter/${c.id}`) }} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 13, marginBottom: 8, width: '100%' }}>
                <BookOpen size={18} color="var(--accent)" />
                <div><div style={{ fontWeight: 600, fontSize: 14 }}>Ch {c.id}: {c.title}</div></div>
              </Tappable>
            ))}
          </div>
        )}
        {terms.length > 0 && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700, marginBottom: 8 }}>GLOSSARY</div>
            {terms.map((t) => (
              <div key={t.term} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 13, marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}><Type size={15} color="var(--accent)" /> {t.term}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>{t.definition}</div>
              </div>
            ))}
          </div>
        )}
        {fforms.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700, marginBottom: 8 }}>FORMULAS</div>
            {fforms.map((f) => (
              <div key={f.id} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 13, marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}><Hash size={15} color="var(--accent)" /> {f.name}</div>
                <div style={{ color: 'var(--text)', fontSize: 13, marginTop: 4 }}>{f.formula}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
