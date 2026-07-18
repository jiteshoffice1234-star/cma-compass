import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, X, BookOpen, Hash, Type } from 'lucide-react'
import { chaptersForLevel } from '../data/curriculum'
import { glossary } from '../data/glossary'
import { formulas } from '../data/formulas'
import { Tappable } from '../components/ui'
import { useStore } from '../store'
import { color, border, shadow, font } from '../theme'

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
      style={{ position: 'absolute', inset: 0, zIndex: 350, background: color.surface, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 16px 8px' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, background: color.card, border: border.thick, borderRadius: 10, boxShadow: shadow.sm, padding: '12px 16px' }}>
          <Search size={18} color={color.muted} />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: color.text, fontSize: 16, fontWeight: 600, fontFamily: font.ui }} />
        </div>
        <button onClick={onClose} className="tappable" style={{ background: color.card, border: border.thin, borderRadius: 8, boxShadow: '2px 2px 0 #000', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color.text }}><X size={20} /></button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {query && chapters.length === 0 && terms.length === 0 && fforms.length === 0 && (
          <div style={{ color: color.muted, textAlign: 'center', marginTop: 40, fontWeight: 600 }}>No results for “{q}”.</div>
        )}
        {chapters.length > 0 && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: color.text, fontWeight: 900, letterSpacing: 1, marginBottom: 8 }}>CHAPTERS</div>
            {chapters.map((c) => (
              <Tappable key={c.id} onClick={() => { onClose(); nav(`/chapter/${c.id}`) }} style={{ display: 'flex', alignItems: 'center', gap: 12, background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 13, marginBottom: 10, width: '100%', textAlign: 'left' }}>
                <BookOpen size={18} color={color.secondary} />
                <div><div style={{ fontWeight: 700, fontSize: 14 }}>Ch {c.id}: {c.title}</div></div>
              </Tappable>
            ))}
          </div>
        )}
        {terms.length > 0 && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: color.text, fontWeight: 900, letterSpacing: 1, marginBottom: 8 }}>GLOSSARY</div>
            {terms.map((t) => (
              <div key={t.term} style={{ background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 13, marginBottom: 10 }}>
                <div style={{ fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}><Type size={15} color={color.secondary} /> {t.term}</div>
                <div style={{ color: color.muted, fontSize: 13, marginTop: 4, fontWeight: 500 }}>{t.definition}</div>
              </div>
            ))}
          </div>
        )}
        {fforms.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: color.text, fontWeight: 900, letterSpacing: 1, marginBottom: 8 }}>FORMULAS</div>
            {fforms.map((f) => (
              <div key={f.id} style={{ background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 13, marginBottom: 10 }}>
                <div style={{ fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}><Hash size={15} color={color.secondary} /> {f.name}</div>
                <div className="mono" style={{ color: color.text, fontSize: 13, marginTop: 4, fontFamily: font.mono, fontWeight: 600 }}>{f.formula}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
