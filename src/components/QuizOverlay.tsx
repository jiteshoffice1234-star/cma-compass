import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, X as XIcon, Star, Trophy, ArrowRight } from 'lucide-react'
import { useStore } from '../store'
import { questions } from '../data/questions'
import { Tappable } from '../components/ui'
import { Confetti } from '../components/Confetti'

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
      completeQuiz(chapterId, score, perfect, attempts)
      if (score >= 6 && isUnlocked(chapterId + 1) === false) {
        setConfetti(true)
      }
    }
  }, [finished])

  const choose = (i: number) => {
    if (answered) return
    setSelected(i)
    setAnswered(true)
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
      style={{ position: 'absolute', inset: 0, zIndex: 450, background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* header / progress */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 10px' }}>
        <Tappable onClick={onClose}><X size={24} color="var(--text)" /></Tappable>
        {!finished && <div style={{ fontSize: 14, fontWeight: 700 }}>{idx + 1} / {chapterQuestions.length}</div>}
        <div style={{ width: 24 }} />
      </div>
      {!finished && (
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
            <motion.div animate={{ width: `${((idx) / chapterQuestions.length) * 100}%` }} style={{ height: '100%', background: 'var(--accent)', borderRadius: 3 }} />
          </div>
        </div>
      )}

      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {!finished && q && (
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, lineHeight: 1.4, marginBottom: 20 }}>{q.question}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {q.options.map((opt, i) => {
                const isCorrect = i === q.correctIndex
                const isSel = selected === i
                let bg = 'var(--card)', border = 'var(--border)', color = 'var(--text)'
                if (answered) {
                  if (isCorrect) { bg = 'rgba(34,197,94,0.15)'; border = 'var(--success)'; color = 'var(--success)' }
                  else if (isSel) { bg = 'rgba(239,68,68,0.15)'; border = 'var(--error)'; color = 'var(--error)' }
                }
                return (
                  <Tappable key={i} onClick={() => choose(i)}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, background: bg, border: `1px solid ${border}`, borderRadius: 14, padding: 15, width: '100%', color, fontWeight: 600, fontSize: 15 }}>
                    <div style={{ width: 26, height: 26, borderRadius: 8, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800 }}>{String.fromCharCode(65 + i)}</div>
                    <div style={{ flex: 1 }}>{opt}</div>
                    {answered && isCorrect && <Check size={20} color="var(--success)" />}
                    {answered && isSel && !isCorrect && <XIcon size={20} color="var(--error)" />}
                  </Tappable>
                )
              })}
            </div>
            <AnimatePresence>
              {answered && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 20 }}>
                  <Tappable onClick={next} style={{ background: 'var(--accent)', color: '#fff', borderRadius: 14, padding: '14px', fontWeight: 700, fontSize: 15, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    {idx + 1 < chapterQuestions.length ? 'Next' : 'See Results'} <ArrowRight size={18} />
                  </Tappable>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {finished && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 110, height: 110, borderRadius: 55, background: passed ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)' }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: passed ? 'var(--success)' : 'var(--error)' }}>{score}/10</div>
            </motion.div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
              {Array.from({ length: chapterQuestions.length }).map((_, i) => (
                <Star key={i} size={22} color={i < score ? 'var(--xp)' : 'var(--border)'} fill={i < score ? 'var(--xp)' : 'none'} />
              ))}
            </div>
            <div style={{ fontWeight: 800, fontSize: 22, marginTop: 16 }}>{passed ? (perfect ? 'Perfect!' : 'Passed!') : 'Almost there'}</div>
            <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 6 }}>
              {passed ? `+${20 + (perfect ? 15 : 0)} XP earned` : 'You need 6/10 to pass and unlock the next chapter.'}
            </div>
            {passed && <div style={{ fontSize: 30, margin: '16px 0' }}>🪙</div>}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <Tappable onClick={onClose} style={{ flex: 1, background: 'var(--card)', borderRadius: 14, padding: 14, fontWeight: 700, color: 'var(--muted)' }}>Close</Tappable>
              {!passed && <Tappable onClick={() => { setIdx(0); setSelected(null); setAnswered(false); setScore(0); setAttempts([]); setFinished(false) }} style={{ flex: 1, background: 'var(--accent)', color: '#fff', borderRadius: 14, padding: 14, fontWeight: 700 }}>Retry</Tappable>}
            </div>
          </div>
        )}
      </div>
      {confetti && <Confetti />}
    </motion.div>
  )
}
