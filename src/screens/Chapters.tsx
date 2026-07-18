import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Lock, Check, Play } from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, papersForLevel, paperById, LEVEL_LABELS } from '../data/curriculum'
import { ProgressRing, Tappable } from '../components/ui'
import { SearchOverlay } from './SearchOverlay'

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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{ fontWeight: 800, fontSize: 22 }}>Chapters</div>
        <div style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 12, marginTop: 2 }}>ICMAI {LEVEL_LABELS[level]} · Syllabus 2022</div>
        <Tappable onClick={() => setSearchOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '12px 16px', width: '100%', color: 'var(--muted)' }}>
          <Search size={18} /><span style={{ fontSize: 15 }}>Search chapters…</span>
        </Tappable>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingTop: 12, paddingBottom: 4 }}>
          {FILTERS.map((f) => (
            <Tappable key={f.id} onClick={() => setFilter(f.id)}
              style={{ flexShrink: 0, background: filter === f.id ? 'var(--accent)' : 'var(--card)', color: filter === f.id ? '#fff' : 'var(--muted)', border: '1px solid var(--border)', borderRadius: 20, padding: '8px 16px', fontSize: 14, fontWeight: 600 }}>
              {f.label}
            </Tappable>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 16px 16px' }}>
        {list.map((c) => {
          const unlocked = isUnlocked(c.id)
          const p = progress[c.id]
          return (
            <Tappable key={c.id} onClick={() => unlocked && nav(`/chapter/${c.id}`)} disabled={!unlocked as any}
              style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 14, marginBottom: 10, minHeight: 64, opacity: unlocked ? 1 : 0.55, width: '100%' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: 'var(--accent)' }}>{c.id}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{c.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 2, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--surface)', color: 'var(--accent)', borderRadius: 6, padding: '1px 6px', fontSize: 10, fontWeight: 700 }}>{paperById(c.paperId)?.code}</span>
                  <span>{c.section} · {c.duration}</span>
                </div>
              </div>
              {!unlocked ? (
                <Lock size={20} color="var(--muted)" />
              ) : p?.completed ? (
                <Check size={22} color="var(--success)" />
              ) : p?.video_watched ? (
                <ProgressRing value={p.quiz_passed ? 1 : 0.5} size={28} stroke={3} />
              ) : (
                <Play size={20} color="var(--accent)" />
              )}
            </Tappable>
          )
        })}
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
