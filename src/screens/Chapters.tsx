import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Lock, Check, Play } from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, papersForLevel, paperById, LEVEL_LABELS } from '../data/curriculum'
import { ProgressRing, Tappable } from '../components/ui'
import { SearchOverlay } from './SearchOverlay'
import { color, border, shadow, font } from '../theme'

export function Chapters() {
  const nav = useNavigate()
  const { progress, isUnlocked, level } = useStore()
  const [filter, setFilter] = useState<number | 'all'>('all')
  const [searchOpen, setSearchOpen] = useState(false)

  const papers = useMemo(() => papersForLevel(level), [level])
  const FILTERS = useMemo(
    () => [{ id: 'all' as const, label: 'All' }, ...papers.map((p) => ({ id: p.id, label: p.code }))],
    [papers]
  )

  const list = useMemo(
    () => chaptersForLevel(level).filter((c) => filter === 'all' || c.paperId === filter).sort((a, b) => a.id - b.id),
    [filter, level]
  )

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: color.surface }}>
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{ fontWeight: 900, fontSize: 27 }}>Chapters</div>
        <div style={{ color: color.muted, fontSize: 13, fontWeight: 600, marginBottom: 12, marginTop: 2 }}>ICMAI {LEVEL_LABELS[level]} · Syllabus 2022</div>
        <Tappable onClick={() => setSearchOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: '12px 16px', width: '100%', color: color.muted }}>
          <Search size={18} /><span style={{ fontSize: 15, fontWeight: 600 }}>Search chapters…</span>
        </Tappable>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingTop: 12, paddingBottom: 6 }}>
          {FILTERS.map((f) => (
            <Tappable key={f.id} onClick={() => setFilter(f.id)}
              style={{
                flexShrink: 0,
                background: filter === f.id ? color.secondary : color.card,
                color: filter === f.id ? '#fff' : color.text,
                border: border.thin, borderRadius: 8,
                boxShadow: filter === f.id ? '3px 3px 0 #000' : '2px 2px 0 #000',
                padding: '8px 16px', fontSize: 14, fontWeight: 800,
              }}>
              {f.label}
            </Tappable>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '6px 16px 16px' }} className="safe-bottom">
        {list.map((c) => {
          const unlocked = isUnlocked(c.id)
          const p = progress[c.id]
          return (
            <Tappable key={c.id} onClick={() => unlocked && nav(`/chapter/${c.id}`)} disabled={!unlocked as any}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                background: p?.completed ? color.successTint : color.card,
                border: border.thin, borderRadius: 10,
                boxShadow: unlocked ? shadow.sm : 'none',
                padding: 14, marginBottom: 12, minHeight: 64,
                opacity: unlocked ? 1 : 0.55, width: '100%', textAlign: 'left',
              }}>
              <div className="mono" style={{ width: 38, height: 38, borderRadius: 8, border: border.thin, background: p?.completed ? color.success : color.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: p?.completed ? '#fff' : color.text, flexShrink: 0, fontFamily: font.mono }}>{c.id}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: color.text }}>{c.title}</div>
                <div style={{ color: color.muted, fontSize: 12, marginTop: 3, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 600 }}>
                  <span style={{ background: color.secondaryTint, color: color.secondary, border: '1px solid #000', borderRadius: 4, padding: '1px 6px', fontSize: 10, fontWeight: 800 }}>{paperById(c.paperId)?.code}</span>
                  <span>{c.section}</span>
                </div>
              </div>
              {!unlocked ? (
                <Lock size={20} color={color.muted} />
              ) : p?.completed ? (
                <Check size={22} color={color.success} strokeWidth={3} />
              ) : p?.video_watched ? (
                <ProgressRing value={p.quiz_passed ? 1 : 0.5} size={28} stroke={4} />
              ) : (
                <Play size={20} color={color.secondary} />
              )}
            </Tappable>
          )
        })}
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
