import { useState, useEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, Check, X as XIcon, ArrowRight, ArrowLeft, Clock, Flag, RotateCcw } from 'lucide-react'
import { useStore } from '../store'
import { questions, Question } from '../data/questions'
import { chaptersForLevel, chaptersForPaper, paperById, Level } from '../data/curriculum'
import { Tappable } from './ui'
import { Confetti } from './Confetti'
import { color, border, shadow, font } from '../theme'

export interface SessionConfig {
  level: Level
  paperId: number | null // null = all subjects in the level
  count: number
  timed: boolean
  minutes: number
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function PracticeSession({ config, onClose }: { config: SessionConfig; onClose: () => void }) {
  const bumpWeekly = useStore((s) => s.bumpWeeklyProgress)

  const pool = useMemo<Question[]>(() => {
    const chapterIds = new Set(
      (config.paperId ? chaptersForPaper(config.paperId) : chaptersForLevel(config.level)).map((c) => c.id)
    )
    const filtered = questions.filter((q) => chapterIds.has(q.chapterId))
    return shuffle(filtered).slice(0, Math.min(config.count, filtered.length))
  }, [config])

  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() => new Array(pool.length).fill(null))
  const [finished, setFinished] = useState(false)
  const [review, setReview] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [remaining, setRemaining] = useState(config.timed ? config.minutes * 60 : 0)
  const submittedRef = useRef(false)

  const q = pool[idx]

  const submit = () => {
    if (submittedRef.current) return
    submittedRef.current = true
    setFinished(true)
    const answered = answers.filter((a) => a !== null).length
    if (answered > 0) bumpWeekly(answered)
    const score = pool.reduce((s, qq, i) => s + (answers[i] === qq.correctIndex ? 1 : 0), 0)
    if (pool.length > 0 && score / pool.length >= 0.4) setConfetti(true)
  }

  useEffect(() => {
    if (!config.timed || finished) return
    if (remaining <= 0) { submit(); return }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000)
    return () => clearTimeout(t)
  }, [remaining, config.timed, finished])

  const pick = (i: number) => {
    if (finished) return
    setAnswers((prev) => { const n = [...prev]; n[idx] = i; return n })
  }

  const go = (d: number) => setIdx((i) => Math.max(0, Math.min(pool.length - 1, i + d)))

  const score = pool.reduce((s, qq, i) => s + (answers[i] === qq.correctIndex ? 1 : 0), 0)
  const attempted = answers.filter((a) => a !== null).length
  const pct = pool.length ? Math.round((score / pool.length) * 100) : 0
  const passed = pct >= 40 // ICMAI pass mark per paper is 40%
  const subjectLabel = config.paperId ? `${paperById(config.paperId)?.code} · ${paperById(config.paperId)?.name}` : 'All subjects'

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0')
  const ss = String(remaining % 60).padStart(2, '0')

  const shell: any = { position: 'absolute', inset: 0, zIndex: 470, background: color.surface, display: 'flex', flexDirection: 'column' }

  if (pool.length === 0) {
    return (
      <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 32 }}
        style={{ ...shell, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16 }}>
        <div style={{ fontWeight: 800, fontSize: 18, textAlign: 'center' }}>No questions available for this subject yet.</div>
        <Tappable onClick={onClose} style={{ background: color.primary, color: color.primaryInk, border: border.thick, boxShadow: shadow.md, borderRadius: 10, padding: '12px 24px', fontWeight: 800 }}>Close</Tappable>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 32 }} style={shell}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 10px' }}>
        <Tappable onClick={onClose} style={{ background: color.card, border: border.thin, boxShadow: shadow.sm, borderRadius: 8, padding: 6, color: color.text, display: 'flex' }}><X size={22} /></Tappable>
        {!finished && <div style={{ fontSize: 13, fontWeight: 800 }}>{idx + 1} / {pool.length} · {attempted} done</div>}
        {config.timed && !finished ? (
          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800, fontSize: 15, color: remaining < 60 ? color.danger : color.text, fontFamily: font.mono }}>
            <Clock size={16} /> {mm}:{ss}
          </div>
        ) : <div style={{ width: 34 }} />}
      </div>

      {!finished && (
        <>
          <div style={{ padding: '0 16px 12px' }}>
            <div style={{ height: 8, background: color.card, border: border.thin, borderRadius: 6, overflow: 'hidden' }}>
              <motion.div animate={{ width: `${(idx / pool.length) * 100}%` }} style={{ height: '100%', background: color.primary }} />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
            <div style={{ color: color.muted, fontSize: 12, marginBottom: 8, fontWeight: 600 }}>{subjectLabel}</div>
            <div style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.4, marginBottom: 20 }}>{q.question}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {q.options.map((opt, i) => {
                const sel = answers[idx] === i
                return (
                  <Tappable key={i} onClick={() => pick(i)}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, background: sel ? color.primary : color.card, color: sel ? color.primaryInk : color.text, border: sel ? border.thick : border.thin, boxShadow: shadow.sm, borderRadius: 10, padding: 15, width: '100%', fontWeight: 700, fontSize: 15 }}>
                    <div style={{ width: 26, height: 26, borderRadius: 6, background: color.surface, color: color.text, border: border.thin, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{String.fromCharCode(65 + i)}</div>
                    <div style={{ flex: 1, textAlign: 'left' }}>{opt}</div>
                  </Tappable>
                )
              })}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, padding: 16, borderTop: border.thin }}>
            <Tappable onClick={() => go(-1)} disabled={idx === 0} style={{ background: color.card, border: border.thin, boxShadow: shadow.sm, borderRadius: 10, padding: '13px 16px', fontWeight: 800, opacity: idx === 0 ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: 6 }}><ArrowLeft size={16} /></Tappable>
            {idx < pool.length - 1 ? (
              <Tappable onClick={() => go(1)} style={{ flex: 1, background: color.primary, color: color.primaryInk, border: border.thick, boxShadow: shadow.md, borderRadius: 10, padding: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>Next <ArrowRight size={16} /></Tappable>
            ) : (
              <Tappable onClick={submit} style={{ flex: 1, background: color.success, color: '#fff', border: border.thick, boxShadow: shadow.md, borderRadius: 10, padding: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}><Flag size={16} /> Submit</Tappable>
            )}
            <Tappable onClick={submit} style={{ background: color.card, border: border.thin, boxShadow: shadow.sm, borderRadius: 10, padding: '13px 14px', fontWeight: 800, fontSize: 12, color: color.muted }}>End</Tappable>
          </div>
        </>
      )}

      {finished && !review && (
        <div style={{ flex: 1, overflowY: 'auto', padding: 16, textAlign: 'center' }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 130, height: 130, borderRadius: 16, marginTop: 12, background: passed ? color.success : color.danger, border: border.thick, boxShadow: shadow.md }}>
            <div className="mono" style={{ fontSize: 30, fontWeight: 800, color: '#fff', fontFamily: font.mono }}>{pct}%</div>
          </motion.div>
          <div style={{ fontWeight: 900, fontSize: 22, marginTop: 16 }}>{passed ? 'Passed!' : 'Keep practising'}</div>
          <div style={{ color: color.muted, fontSize: 14, marginTop: 6, fontWeight: 600 }}>Pass mark is 40% (ICMAI standard)</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, margin: '20px 0' }}>
            <Stat label="Marks" value={`${score}/${pool.length}`} />
            <Stat label="Attempted" value={`${attempted}`} />
            <Stat label="Accuracy" value={`${attempted ? Math.round((score / attempted) * 100) : 0}%`} />
          </div>

          <Tappable onClick={() => setReview(true)} style={{ background: color.secondary, color: '#fff', border: border.thick, boxShadow: shadow.md, borderRadius: 10, padding: '14px', fontWeight: 800, width: '100%' }}>Review Answers</Tappable>
          <Tappable onClick={onClose} style={{ background: color.card, border: border.thin, boxShadow: shadow.sm, borderRadius: 10, padding: '14px', fontWeight: 800, color: color.muted, width: '100%', marginTop: 10 }}>Done</Tappable>
        </div>
      )}

      {finished && review && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 16px 12px' }}>
            <Tappable onClick={() => setReview(false)} style={{ background: color.card, border: border.thin, boxShadow: shadow.sm, borderRadius: 8, padding: 6, display: 'flex' }}><ArrowLeft size={20} /></Tappable>
            <div style={{ fontWeight: 900, fontSize: 16 }}>Answer Review</div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 16, paddingTop: 0 }}>
            {pool.map((qq, i) => {
              const user = answers[i]
              const correct = qq.correctIndex
              return (
                <div key={qq.id} style={{ background: color.card, border: border.thin, boxShadow: shadow.sm, borderRadius: 10, padding: 14, marginBottom: 12 }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <div style={{ fontWeight: 800, color: color.muted, fontSize: 13 }}>{i + 1}.</div>
                    <div style={{ fontWeight: 700, fontSize: 14, flex: 1 }}>{qq.question}</div>
                    {user === correct ? <Check size={18} color={color.success} /> : <XIcon size={18} color={color.danger} />}
                  </div>
                  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {qq.options.map((opt, oi) => {
                      const isC = oi === correct
                      const isU = oi === user
                      const bg = isC ? color.successTint : isU ? color.dangerTint : 'transparent'
                      const bd = isC ? color.success : isU ? color.danger : color.muted
                      return (
                        <div key={oi} style={{ display: 'flex', alignItems: 'center', gap: 8, background: bg, border: `1px solid ${bd}`, borderRadius: 6, padding: '8px 10px', fontSize: 13 }}>
                          <span style={{ fontWeight: 800 }}>{String.fromCharCode(65 + oi)}</span>
                          <span style={{ flex: 1 }}>{opt}</span>
                          {isC && <span style={{ color: color.success, fontSize: 11, fontWeight: 800 }}>Correct</span>}
                          {isU && !isC && <span style={{ color: color.danger, fontSize: 11, fontWeight: 800 }}>Your answer</span>}
                        </div>
                      )
                    })}
                    {user === null && <div style={{ color: color.muted, fontSize: 12 }}>Not attempted</div>}
                  </div>
                </div>
              )
            })}
            <Tappable onClick={onClose} style={{ background: color.primary, color: color.primaryInk, border: border.thick, boxShadow: shadow.md, borderRadius: 10, padding: '14px', fontWeight: 800, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}><RotateCcw size={16} /> Finish</Tappable>
          </div>
        </div>
      )}
      {confetti && <Confetti />}
    </motion.div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: color.card, border: border.thin, boxShadow: shadow.sm, borderRadius: 10, padding: '12px 6px' }}>
      <div className="mono" style={{ fontWeight: 800, fontSize: 18, fontFamily: font.mono }}>{value}</div>
      <div style={{ color: color.muted, fontSize: 11, marginTop: 2, fontWeight: 600 }}>{label}</div>
    </div>
  )
}
