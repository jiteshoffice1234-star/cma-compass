import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, X as XIcon, Star, ArrowRight } from 'lucide-react'
import { useStore } from '../store'
import { questions } from '../data/questions'
import { Tappable, Button, IconButton } from '../components/ui'
import { Confetti } from '../components/Confetti'
import { impactLight, notificationSuccess } from '../lib/haptics'
import { color, border, shadow, font } from '../theme'

export function QuizOverlay({ chapterId, onClose }: { chapterId: number; onClose: () => void }) {
  const chapterQuestions = questions.filter((q) => q.chapterId === chapterId)
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState<{ q: string; correct: boolean }[]>([])
  const [finished, setFinished] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const completeQuiz = useStore((s) => s.completeQuiz)
  const isUnlocked = useStore((s) => s.isUnlocked)

  const q = chapterQuestions[idx]

  useEffect(() => {
    if (finished) {
      const perfect = score === chapterQuestions.length
      completeQuiz(chapterId, score, chapterQuestions.length, perfect, attempts)
      if (perfect) notificationSuccess()
      if (score >= 6 && isUnlocked(chapterId + 1) === false) {
        setConfetti(true)
      }
    }
  }, [finished])

  const choose = (i: number) => {
    if (answered) return
    setSelected(i)
    setAnswered(true)
    impactLight()
    if (i === q.correctIndex) setScore((s) => s + 1)
    setAttempts((a) => [...a, { q: q.id, correct: i === q.correctIndex }])
  }

  const next = () => {
    if (idx + 1 < chapterQuestions.length) {
      setIdx(idx + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
    }
  }

  const passed = score >= 6
  const perfect = score === chapterQuestions.length

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 32 }}
      style={{ position: 'absolute', inset: 0, zIndex: 450, background: color.surface, display: 'flex', flexDirection: 'column' }}>
      {/* header / progress */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 10px' }}>
        <IconButton onClick={onClose} size={36} aria-label="Close quiz"><X size={20} /></IconButton>
        {!finished && <div className="mono" style={{ fontSize: 15, fontWeight: 800, fontFamily: font.mono }}>{idx + 1} / {chapterQuestions.length}</div>}
        <div style={{ width: 36 }} />
      </div>
      {!finished && (
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ height: 12, background: color.card, border: border.thin, borderRadius: 6, overflow: 'hidden' }}>
            <motion.div animate={{ width: `${((idx) / chapterQuestions.length) * 100}%` }} style={{ height: '100%', background: color.secondary }} />
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
                    {answered && isCorrect && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Check size={20} color={color.success} strokeWidth={3} />
                        <span style={{ color: color.success, fontSize: 11, fontWeight: 800 }}>Correct</span>
                      </div>
                    )}
                    {answered && isSel && !isCorrect && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <XIcon size={20} color={color.danger} strokeWidth={3} />
                        <span style={{ color: color.danger, fontSize: 11, fontWeight: 800 }}>Incorrect</span>
                      </div>
                    )}
                  </Tappable>
                )
              })}
            </div>
            <AnimatePresence>
              {answered && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 20 }}>
                  <Button variant="secondary" onClick={next} style={{ width: '100%' }}>
                    {idx + 1 < chapterQuestions.length ? 'Next' : 'See Results'} <ArrowRight size={18} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {finished && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 110, height: 110, borderRadius: 14, border: border.thick, boxShadow: shadow.md, background: passed ? color.successTint : color.dangerTint }}>
              <div className="mono" style={{ fontSize: 32, fontWeight: 800, color: passed ? color.success : color.danger, fontFamily: font.mono }}>{score}/10</div>
            </motion.div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
              {Array.from({ length: chapterQuestions.length }).map((_, i) => (
                <Star key={i} size={22} color={color.black} fill={i < score ? color.primary : 'none'} />
              ))}
            </div>
            <div style={{ fontWeight: 900, fontSize: 21, marginTop: 16 }}>{passed ? (perfect ? 'Perfect!' : 'Passed!') : 'Almost there'}</div>
            <div style={{ color: color.muted, fontSize: 14, marginTop: 6, fontWeight: 600 }}>
              {passed ? `+${20 + (perfect ? 15 : 0)} XP earned` : 'You need 6/10 to pass and unlock the next chapter.'}
            </div>
            {passed && <div style={{ fontSize: 30, margin: '16px 0' }}>🪙</div>}
            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
              <Button variant="ghost" onClick={onClose} style={{ flex: 1 }}>Close</Button>
              {!passed && <Button variant="secondary" onClick={() => { setIdx(0); setSelected(null); setAnswered(false); setScore(0); setAttempts([]); setFinished(false) }} style={{ flex: 1 }}>Retry</Button>}
            </div>
          </div>
        )}
      </div>
      {confetti && <Confetti />}
    </motion.div>
  )
}
