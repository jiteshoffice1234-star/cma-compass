import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flame, Search, Play, BookOpen, User } from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, papersForLevel, LEVEL_LABELS } from '../data/curriculum'
import { ProgressRing, Card, Tappable, Button } from '../components/ui'
import { SearchOverlay } from './SearchOverlay'
import { color, border, shadow, font, APP_NAME } from '../theme'

export function Home() {
  const nav = useNavigate()
  const { currentStreak, progress, bookmarks, level, totalXp, name } = useStore()
  const [searchOpen, setSearchOpen] = useState(false)

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
    const chs = levelChapters.filter((c) => c.paperId === paper.id)
    const done = chs.filter((c) => progress[c.id]?.completed).length
    return { paper, done, total: chs.length }
  }).filter((s) => s.total > 0)

  const totalDone = levelChapters.filter((c) => progress[c.id]?.completed).length

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: color.surface }}>
      {/* top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ background: color.primary, border: border.thin, borderRadius: 8, boxShadow: '3px 3px 0 #000', padding: '4px 10px', fontWeight: 900, fontSize: 17, color: color.text }}>
            {APP_NAME}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {currentStreak > 0 && (
            <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 4, background: color.card, border: border.thin, boxShadow: '3px 3px 0 #000', padding: '5px 10px', borderRadius: 8, fontSize: 14, fontWeight: 800, fontFamily: font.mono }}>
              <Flame size={16} color={color.warning} fill={color.warning} /> {currentStreak}
            </div>
          )}
          <Tappable onClick={() => nav('/profile')} style={{ background: color.card, border: border.thin, borderRadius: 8, boxShadow: '3px 3px 0 #000', width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={18} color={color.text} />
          </Tappable>
        </div>
      </div>

      {/* search */}
      <div style={{ padding: '4px 16px 14px' }}>
        <Tappable onClick={() => setSearchOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: '13px 16px', width: '100%', color: color.muted }}>
          <Search size={18} /><span style={{ fontSize: 15, fontWeight: 600 }}>Search chapters, glossary, formulas…</span>
        </Tappable>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 16px' }}>
        {/* hero: continue learning */}
        <Card style={{ padding: 16, marginBottom: 16, background: color.primary }}>
          <div style={{ fontSize: 12, color: color.text, fontWeight: 900, letterSpacing: 1.2 }}>
            {inProgress ? 'CONTINUE LEARNING' : 'START LEARNING'}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: color.text, marginTop: 2, opacity: 0.75 }}>
            Hi {name} · {LEVEL_LABELS[level]}
          </div>
          {inProgress ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: color.text }}>Ch {inProgress.id}: {inProgress.title}</div>
                <div style={{ color: color.text, opacity: 0.75, fontSize: 13, fontWeight: 600 }}>{progress[inProgress.id]?.video_watched ? 'Resume where you left off' : 'Start with the lecture'}</div>
              </div>
              <Button variant="secondary" onClick={() => nav(`/chapter/${inProgress.id}`)} style={{ padding: '10px 16px', fontSize: 14 }}>
                <Play size={16} /> Resume
              </Button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: color.text }}>{firstChapter?.title ?? 'Chapter 1'}</div>
                <div style={{ color: color.text, opacity: 0.75, fontSize: 13, fontWeight: 600 }}>{firstChapter?.section ?? 'Begin your first chapter'}</div>
              </div>
              <Button variant="secondary" onClick={() => firstChapter && nav(`/chapter/${firstChapter.id}`)} style={{ padding: '10px 16px', fontSize: 14 }}>
                <BookOpen size={16} /> Start
              </Button>
            </div>
          )}
        </Card>

        {/* quick stats strip */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
          <Card style={{ padding: '12px 14px' }}>
            <div className="mono" style={{ fontWeight: 800, fontSize: 21, fontFamily: font.mono }}>{totalXp}</div>
            <div style={{ color: color.muted, fontSize: 12, fontWeight: 700 }}>Total XP</div>
          </Card>
          <Card style={{ padding: '12px 14px' }}>
            <div className="mono" style={{ fontWeight: 800, fontSize: 21, fontFamily: font.mono }}>{totalDone}/{levelChapters.length}</div>
            <div style={{ color: color.muted, fontSize: 12, fontWeight: 700 }}>Chapters done</div>
          </Card>
        </div>

        {/* recently viewed */}
        {recent.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, color: color.text, fontWeight: 900, letterSpacing: 1, marginBottom: 8, paddingLeft: 2 }}>BOOKMARKED</div>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 6, paddingRight: 6 }}>
              {recent.map((c) => (
                <Tappable key={c.id} onClick={() => nav(`/chapter/${c.id}`)} style={{ flexShrink: 0, width: 150, background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 14, textAlign: 'left' }}>
                  <div className="mono" style={{ fontSize: 11, color: color.secondary, fontWeight: 800, fontFamily: font.mono }}>CH {c.id}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4, lineHeight: 1.3, color: color.text }}>{c.title}</div>
                </Tappable>
              ))}
            </div>
          </div>
        )}

        {/* paper progress */}
        <div style={{ fontSize: 13, color: color.text, fontWeight: 900, letterSpacing: 1, marginBottom: 8, paddingLeft: 2 }}>PAPER PROGRESS</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingBottom: 8, paddingRight: 2 }}>
          {paperProgress.map((s) => (
            <Card key={s.paper.id} style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}
              onClick={() => nav('/chapters')}>
              <ProgressRing value={s.total ? s.done / s.total : 0} size={46} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>{s.paper.code}</div>
                <div className="mono" style={{ color: color.muted, fontSize: 12, fontWeight: 700, fontFamily: font.mono }}>{s.done}/{s.total}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
