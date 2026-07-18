import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, X as XIcon, ArrowRight, Trophy } from 'lucide-react'
import { useStore } from '../store'
import { questions } from '../data/questions'
import { paperById, chaptersForPaper } from '../data/curriculum'
import { Tappable, Button, IconButton } from '../components/ui'
import { Confetti } from '../components/Confetti'
import { color, border, shadow, font } from '../theme'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function StageTestOverlay({ paperId, grand, onClose }: { paperId: number; grand: boolean; onClose: () => void }) {
  const total = grand ? 50 : 20
  const testQuestions = useMemo(() => {
    let pool = questions
    if (!grand) {
      const ids = new Set(chaptersForPaper(paperId).map((c) => c.id))
      pool = questions.filter((q) => ids.has(q.chapterId))
    }
    return shuffle(pool).slice(0, Math.min(total, pool.length))
  }, [paperId, grand])

  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const completeGrandFinal = useStore((s) => s.completeGrandFinal)

  const q = testQuestions[idx]
  const passMark = Math.ceil(testQuestions.length * 0.6)
  const passed = score >= passMark

  useEffect(() => {
    if (finished && grand && passed) {
      completeGrandFinal()
      setConfetti(true)
    }
  }, [finished])

  const choose = (i: number) => {
    if (answered) return
    setSelected(i)
    setAnswered(true)
    if (i === q.correctIndex) setScore((s) => s + 1)
  }

  const next = () => {
    if (idx + 1 < testQuestions.length) {
      setIdx(idx + 1); setSelected(null); setAnswered(false)
    } else setFinished(true)
  }

  const title = grand ? 'Grand Final' : `${paperById(paperId)?.code ?? 'Paper'} Test`

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 32 }}
      style={{ position: 'absolute', inset: 0, zIndex: 460, background: color.surface, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 10px' }}>
        <IconButton onClick={onClose} size={36}><X size={20} /></IconButton>
        <div className="mono" style={{ fontSize: 15, fontWeight: 800, fontFamily: font.mono }}>{finished ? title : `${idx + 1} / ${testQuestions.length}`}</div>
        <div style={{ width: 36 }} />
      </div>
      {!finished && (
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ height: 12, background: color.card, border: border.thin, borderRadius: 6, overflow: 'hidden' }}>
            <motion.div animate={{ width: `${(idx / testQuestions.length) * 100}%` }} style={{ height: '100%', background: color.secondary }} />
          </div>
        </div>
      )}

      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {!finished && q && (
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.4, marginBottom: 20 }}>{q.question}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {q.options.map((opt, i) => {
                const isCorrect = i === q.correctIndex
                const isSel = selected === i
                let bg: string = color.card, brd: string = border.thin
                if (answered) {
                  if (isCorrect) { bg = color.successTint; brd = `3px solid ${color.success}` }
                  else if (isSel) { bg = color.dangerTint; brd = `3px solid ${color.danger}` }
                }
                return (
                  <Tappable key={i} onClick={() => choose(i)}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, background: bg, border: brd, borderRadius: 10, boxShadow: answered && !isCorrect && !isSel ? 'none' : shadow.sm, padding: 14, width: '100%', color: color.text, fontWeight: 600, fontSize: 15, textAlign: 'left' }}>
                    <div className="mono" style={{ width: 28, height: 28, borderRadius: 6, border: border.thin, background: answered && isCorrect ? color.success : answered && isSel ? color.danger : color.primary, color: answered && (isCorrect || isSel) ? '#fff' : color.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flexShrink: 0, fontFamily: font.mono }}>{String.fromCharCode(65 + i)}</div>
                    <div style={{ flex: 1 }}>{opt}</div>
                    {answered && isCorrect && <Check size={20} color={color.success} strokeWidth={3} />}
                    {answered && isSel && !isCorrect && <XIcon size={20} color={color.danger} strokeWidth={3} />}
                  </Tappable>
                )
              })}
            </div>
            <AnimatePresence>
              {answered && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 20 }}>
                  <Button variant="secondary" onClick={next} style={{ width: '100%' }}>
                    {idx + 1 < testQuestions.length ? 'Next' : 'See Results'} <ArrowRight size={18} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {finished && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 120, borderRadius: 14, border: border.thick, boxShadow: shadow.md, background: passed ? color.successTint : color.dangerTint }}>
              <div className="mono" style={{ fontSize: 27, fontWeight: 800, color: passed ? color.success : color.danger, fontFamily: font.mono }}>{score}/{testQuestions.length}</div>
            </motion.div>
            <div style={{ fontWeight: 900, fontSize: 21, marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              {grand && passed && <Trophy size={22} color={color.warning} />} {passed ? (grand ? 'Champion!' : 'Passed!') : 'Keep practising'}
            </div>
            <div style={{ color: color.muted, fontSize: 14, marginTop: 6, fontWeight: 600 }}>
              {grand && passed ? '+200 XP · CFO badge earned!' : `Pass mark: ${passMark}/${testQuestions.length}`}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
              <Button variant="ghost" onClick={onClose} style={{ flex: 1 }}>Close</Button>
              {!passed && <Button variant="secondary" onClick={() => { setIdx(0); setSelected(null); setAnswered(false); setScore(0); setFinished(false) }} style={{ flex: 1 }}>Retry</Button>}
            </div>
          </div>
        )}
      </div>
      {confetti && <Confetti />}
    </motion.div>
  )
}
