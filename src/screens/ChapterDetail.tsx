import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Bookmark, BookmarkCheck, Play, CheckCircle2, FileText, BookOpen, CreditCard, Check } from 'lucide-react'
import { useStore } from '../store'
import { curriculum, paperById, LEVEL_LABELS, playlistForChapter } from '../data/curriculum'
import { questions } from '../data/questions'
import { flashcards } from '../data/flashcards'
import { Tappable, Card, ProgressRing, Skeleton } from '../components/ui'
import { QuizOverlay } from '../components/QuizOverlay'
import { FlashcardStack } from '../components/FlashcardStack'
import { PdfTab } from './PdfTab'

type Tab = 'overview' | 'quiz' | 'flashcards' | 'pdf'

export function ChapterDetail() {
  const { id } = useParams()
  const chapterId = parseInt(id || '1', 10)
  const nav = useNavigate()
  const chapter = curriculum.find((c) => c.id === chapterId)!
  const { progress, isUnlocked, markVideoWatched, toggleBookmarkChapter, bookmarks } = useStore()
  const p = progress[chapterId]
  const [tab, setTab] = useState<Tab>('overview')
  const [quizOpen, setQuizOpen] = useState(false)
  const [videoLoading, setVideoLoading] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const bookmarked = bookmarks.includes(chapterId)

  const hasVideo = chapter.videoId && chapter.videoId !== 'PLACEHOLDER_VIDEO_ID'
  const playlistId = playlistForChapter(chapter)
  const embedSrc = hasVideo
    ? `https://www.youtube.com/embed/${chapter.videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`
    : `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1&playsinline=1`

  const unlocked = isUnlocked(chapterId)
  useEffect(() => { if (!unlocked) nav('/chapters') }, [unlocked])

  const videoWatched = !!p?.video_watched

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      {/* top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 12px 8px' }}>
        <Tappable onClick={() => nav(-1)}><ArrowLeft size={24} color="var(--text)" /></Tappable>
        <div style={{ fontWeight: 700, fontSize: 15, textAlign: 'center', flex: 1, padding: '0 8px' }}>{chapter.title}</div>
        <Tappable onClick={() => toggleBookmarkChapter(chapterId)}>
          {bookmarked ? <BookmarkCheck size={22} color="var(--accent)" /> : <Bookmark size={22} color="var(--text)" />}
        </Tappable>
      </div>

      {/* YouTube WebView */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#000' }}>
        {videoError ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: 13 }}>Tap to load video</div>
        ) : (
          <iframe
            src={embedSrc}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setVideoLoading(false)}
            title={chapter.title}
          />
        )}
        {videoLoading && !videoError && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}><Skeleton w={60} h={60} radius={30} /></div>
        )}
      </div>

      {/* tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
        {(['overview', 'quiz', 'flashcards', 'pdf'] as Tab[]).map((t) => (
          <Tappable key={t} onClick={() => setTab(t)} style={{ flex: 1, textAlign: 'center', padding: '12px 0', fontWeight: 600, fontSize: 13, color: tab === t ? 'var(--accent)' : 'var(--muted)', borderBottom: tab === t ? '2px solid var(--accent)' : '2px solid transparent' }}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </Tappable>
        ))}
      </div>

      {/* content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {tab === 'overview' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ fontWeight: 700, fontSize: 17 }}>{chapter.title}</div>
              <div style={{ color: 'var(--xp)', fontWeight: 700, fontSize: 13 }}>{chapter.xpAvailable} XP</div>
            </div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 14 }}>
              {LEVEL_LABELS[chapter.level]} · {paperById(chapter.paperId)?.code} · {chapter.section}
            </div>
            {chapter.keyPoints.map((kp, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--accent)', marginTop: 7, flexShrink: 0 }} />
                <div style={{ fontSize: 14, lineHeight: 1.45, color: 'var(--text)' }}>{kp}</div>
              </div>
            ))}
            <Tappable onClick={() => markVideoWatched(chapterId)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: videoWatched ? 'var(--success)' : 'var(--accent)', color: '#fff', borderRadius: 14, padding: '14px', fontWeight: 700, fontSize: 15, marginTop: 8 }}>
              {videoWatched ? <><Check size={18} /> Watched (+10 XP)</> : <><Play size={18} /> Mark as Watched (+10 XP)</>}
            </Tappable>
            <Card style={{ padding: 14, marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }} onClick={() => setTab('pdf')}>
              <FileText size={20} color="var(--accent)" />
              <div style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 14 }}>Chapter PDFs</div><div style={{ color: 'var(--muted)', fontSize: 12 }}>Summary, Practice, Cheat Sheet</div></div>
            </Card>
          </div>
        )}

        {tab === 'quiz' && (
          <div>
            {!videoWatched ? (
              <div style={{ textAlign: 'center', padding: 40, color: 'var(--muted)' }}>
                <Play size={40} style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: 15, fontWeight: 600 }}>Watch the video first</div>
                <div style={{ fontSize: 13, marginTop: 6 }}>Quizzes unlock after you mark the video as watched.</div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <ProgressRing value={p?.quiz_passed ? 1 : 0} size={80} label={<span style={{ fontSize: 20 }}>{p?.quiz_score || 0}/10</span>} />
                <div style={{ fontWeight: 700, fontSize: 17, marginTop: 16 }}>Chapter Quiz</div>
                <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 4 }}>10 questions · +20 XP (pass 6+)</div>
                <Tappable onClick={() => setQuizOpen(true)} style={{ background: 'var(--accent)', color: '#fff', borderRadius: 14, padding: '14px', fontWeight: 700, fontSize: 15, marginTop: 20, width: '100%' }}>
                  {p?.quiz_completed ? 'Retake Quiz' : 'Start Quiz'}
                </Tappable>
              </div>
            )}
          </div>
        )}

        {tab === 'flashcards' && <FlashcardStack chapterId={chapterId} />}

        {tab === 'pdf' && <PdfTab chapterId={chapterId} />}
      </div>

      <AnimatePresence>
        {quizOpen && <QuizOverlay chapterId={chapterId} onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </div>
  )
}
