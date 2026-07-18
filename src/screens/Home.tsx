import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Bell, Search, Play, BookOpen, Lock, Check, RotateCw } from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, papersForLevel } from '../data/curriculum'
import { ProgressRing, Card, Tappable } from '../components/ui'
import { SearchOverlay } from './SearchOverlay'

export function Home() {
  const nav = useNavigate()
  const { currentStreak, progress, bookmarks, isUnlocked, checkDailyGoal, level } = useStore()
  const [searchOpen, setSearchOpen] = useState(false)

  void checkDailyGoal
  void isUnlocked

  const levelChapters = useMemo(() => chaptersForLevel(level).sort((a, b) => a.id - b.id), [level])
  const firstChapter = levelChapters[0]

  const inProgress = useMemo(() => {
    return levelChapters.find((c) => {
      const p = progress[c.id]
      return p && !p.completed && (p.video_watched || p.quiz_completed || JSON.parse(p.pdfs_read || '[]').length > 0)
    })
  }, [progress, levelChapters])

  const recent = useMemo(() => {
    return bookmarks.slice(-3).map((id) => levelChapters.find((c) => c.id === id)!).filter(Boolean)
  }, [bookmarks, levelChapters])

  const paperProgress = papersForLevel(level).map((paper) => {
    const chs = chaptersForLevel(level).filter((c) => c.paperId === paper.id)
    const done = chs.filter((c) => progress[c.id]?.completed).length
    return { paper, done, total: chs.length }
  }).filter((s) => s.total > 0)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      {/* top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 8px' }}>
        <div style={{ fontWeight: 800, fontSize: 22, color: 'var(--accent)' }}>AccountIQ</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {currentStreak > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--card)', padding: '6px 10px', borderRadius: 12, fontSize: 14, fontWeight: 700 }}>
              <Flame size={16} color="var(--xp)" /> {currentStreak}
            </div>
          )}
          <Tappable onClick={() => nav('/profile')}><Bell size={22} color="var(--text)" /></Tappable>
        </div>
      </div>

      {/* search */}
      <div style={{ padding: '0 16px 12px' }}>
        <Tappable onClick={() => setSearchOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '13px 16px', width: '100%', color: 'var(--muted)' }}>
          <Search size={18} /><span style={{ fontSize: 15 }}>Search chapters, glossary, formulas…</span>
        </Tappable>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 16px' }}>
        {/* continue learning */}
        <Card style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600 }}>CONTINUE LEARNING</div>
          {inProgress ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
              <ProgressRing value={progress[inProgress.id]?.quiz_passed ? 1 : (progress[inProgress.id]?.video_watched ? 0.5 : 0.15)} size={52} label={<Play size={18} color="var(--accent)" />} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Ch {inProgress.id}: {inProgress.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>{progress[inProgress.id]?.video_watched ? 'Resume where you left off' : 'Start with the video'}</div>
              </div>
              <Tappable onClick={() => nav(`/chapter/${inProgress.id}`)} style={{ background: 'var(--accent)', color: '#fff', borderRadius: 12, padding: '10px 16px', fontWeight: 700, fontSize: 14 }}>Resume</Tappable>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
              <ProgressRing value={0} size={52} label={<BookOpen size={18} color="var(--accent)" />} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Begin {firstChapter?.title ?? 'Chapter 1'}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>{firstChapter?.section ?? 'Start learning'}</div>
              </div>
              <Tappable onClick={() => firstChapter && nav(`/chapter/${firstChapter.id}`)} style={{ background: 'var(--accent)', color: '#fff', borderRadius: 12, padding: '10px 16px', fontWeight: 700, fontSize: 14 }}>Start</Tappable>
            </div>
          )}
        </Card>

        {/* recently viewed */}
        {recent.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600, marginBottom: 8, paddingLeft: 2 }}>RECENTLY VIEWED</div>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4 }}>
              {recent.map((c) => (
                <Tappable key={c.id} onClick={() => nav(`/chapter/${c.id}`)} style={{ flexShrink: 0, width: 150, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 14 }}>
                  <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>CH {c.id}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{c.title}</div>
                </Tappable>
              ))}
            </div>
          </div>
        )}

        {/* paper progress */}
        <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 600, marginBottom: 8, paddingLeft: 2 }}>PAPER PROGRESS</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {paperProgress.map((s) => (
            <Card key={s.paper.id} style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}
              onClick={() => nav('/chapters')}>
              <ProgressRing value={s.total ? s.done / s.total : 0} size={46} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{s.paper.code}</div>
                <div style={{ color: 'var(--muted)', fontSize: 12 }}>{s.done}/{s.total} chapters</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
