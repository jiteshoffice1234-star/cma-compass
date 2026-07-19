import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, X as XIcon, ArrowRight, Trophy } from 'lucide-react'
import { useStore } from '../store'
import { questions } from '../data/questions'
import { paperById, chaptersForPaper, chaptersForLevel, Level } from '../data/curriculum'
import { useQuizSession } from '../hooks/useQuizSession'
import { Tappable, Button, IconButton } from '../components/ui'
import { Confetti } from '../components/Confetti'
import { impactLight } from '../lib/haptics'
import { color, border, shadow, font } from '../theme'

export function StageTestOverlay({ paperId, grand, level, onClose }: { paperId: number; grand: boolean; level: Level; onClose: () => void }) {
  const total = grand ? 50 : 20
  const testQuestions = useMemo(() => {
    let pool = questions
    if (!grand) {
      const ids = new Set(chaptersForPaper(paperId).map((c) => c.id))
      pool = questions.filter((q) => ids.has(q.chapterId))
    } else {
      const ids = new Set(chaptersForLevel(level).map((c) => c.id))
      pool = questions.filter((q) => ids.has(q.chapterId))
    }
    return pool
  }, [paperId, grand, level])

  const { current, idx, selected, answered, finished, total: qTotal, choose, next, getResults, restart } =
    useQuizSession(testQuestions, total)

  const [confetti, setConfetti] = useState(false)
  const completeGrandFinal = useStore((s) => s.completeGrandFinal)

  useEffect(() => {
    if (finished) {
      const { passed } = getResults()
      if (grand && passed) {
        completeGrandFinal()
        setConfetti(true)
      }
    }
  }, [finished])

  const { score, passed } = finished ? getResults() : { score: 0, passed: false }
  const passMark = Math.ceil(qTotal * 0.6)
  const title = grand ? 'Grand Final' : `${paperById(paperId)?.code ?? 'Paper'} Test`

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 32 }}
      style={{ position: 'absolute', inset: 0, zIndex: 460, background: color.surface, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 10px' }}>
        <IconButton onClick={onClose} size={36} aria-label="Close test"><X size={20} /></IconButton>
        <div className="mono" style={{ fontSize: 15, fontWeight: 800, fontFamily: font.mono }}>{finished ? title : `${idx + 1} / ${qTotal}`}</div>
        <div style={{ width: 36 }} />
      </div>
      {!finished && (
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ height: 12, background: color.card, border: border.thin, borderRadius: 6, overflow: 'hidden' }}>
            <motion.div animate={{ width: `${(idx / qTotal) * 100}%` }} style={{ height: '100%', background: color.secondary }} />
          </div>
        </div>
      )}

      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {!finished && current && (
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.4, marginBottom: 20 }}>{current.question}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {current.options.map((opt, i) => {
                const isCorrect = i === current.correctIndex
                const isSel = selected === i
                let bg: string = color.card, brd: string = border.thin
                if (answered) {
                  if (isCorrect) { bg = color.successTint; brd = `3px solid ${color.success}` }
                  else if (isSel) { bg = color.dangerTint; brd = `3px solid ${color.danger}` }
                }
                return (
                  <Tappable key={i} onClick={() => { impactLight(); choose(i) }}
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
                    {idx + 1 < qTotal ? 'Next' : 'See Results'} <ArrowRight size={18} />
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
              <div className="mono" style={{ fontSize: 27, fontWeight: 800, color: passed ? color.success : color.danger, fontFamily: font.mono }}>{score}/{qTotal}</div>
            </motion.div>
            <div style={{ fontWeight: 900, fontSize: 21, marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              {grand && passed && <Trophy size={22} color={color.warning} />} {passed ? (grand ? 'Champion!' : 'Passed!') : 'Keep practising'}
            </div>
            <div style={{ color: color.muted, fontSize: 14, marginTop: 6, fontWeight: 600 }}>
              {grand && passed ? '+200 XP · CFO badge earned!' : `Pass mark: ${passMark}/${qTotal}`}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
              <Button variant="ghost" onClick={onClose} style={{ flex: 1 }}>Close</Button>
              {!passed && <Button variant="secondary" onClick={restart} style={{ flex: 1 }}>Retry</Button>}
            </div>
          </div>
        )}
      </div>
      {confetti && <Confetti />}
    </motion.div>
  )
}
