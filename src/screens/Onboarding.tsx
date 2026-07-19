import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '../store'
import { Level, LEVEL_LABELS, papersForLevel } from '../data/curriculum'
import { Tappable, Button } from '../components/ui'
import { Confetti } from '../components/Confetti'
import { TextInput } from '../components/TextInput'
import { color, border, shadow, font, space, APP_NAME } from '../theme'
import { ANIMATION } from '../lib/constants'

const LEVELS: { id: Level; blurb: string }[] = [
  { id: 'foundation', blurb: 'Papers 1–4 · the entry level of the CMA course' },
  { id: 'intermediate', blurb: 'Papers 5–12 · Groups I & II' },
  { id: 'final', blurb: 'Papers 13–20 · Groups III & IV — the advanced professional level' },
]

export function Onboarding() {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [level, setLevel] = useState<Level>('foundation')
  const [goal, setGoal] = useState(1)
  const complete = useStore((s) => s.completeOnboarding)
  const [confetti, setConfetti] = useState(false)

  const slide = (dir: number) => setStep((s) => Math.max(0, Math.min(2, s + dir)))

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 400, background: color.surface, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="s0" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 28 }}>
            <div style={{ display: 'inline-block', alignSelf: 'flex-start', background: color.primary, border: border.thick, borderRadius: 12, boxShadow: shadow.lg, padding: '10px 18px', fontSize: 35, fontWeight: 900, color: color.text }}>
              {APP_NAME}
            </div>
            <div style={{ fontSize: 21, fontWeight: 800, marginTop: 20 }}>Crack the CMA exam. One chapter at a time.</div>
            <div style={{ color: color.muted, marginTop: 10, fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>
              Video lectures, quizzes, flashcards and revision notes for the ICMAI CMA Foundation &amp; Intermediate — Syllabus 2022.
            </div>
            <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={{ marginTop: space.xl }} />
            <Button variant="secondary" onClick={() => name.trim() && slide(1)} style={{ marginTop: space.lg, opacity: name.trim() ? 1 : 0.5 }}>
              Next
            </Button>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="s1level" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24 }}>
            <div style={{ fontSize: 27, fontWeight: 900, marginBottom: 4 }}>Choose your level</div>
            <div style={{ color: color.muted, fontSize: 14, marginBottom: 20, fontWeight: 600 }}>The app focuses entirely on the level you pick. You can switch later in Profile.</div>
            {LEVELS.map((l) => {
              const paperCount = papersForLevel(l.id).length
              const active = l.id === level
              return (
                <Tappable key={l.id} onClick={() => setLevel(l.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, background: active ? color.primaryTint : color.card, border: active ? border.thick : border.thin, borderRadius: 10, boxShadow: active ? shadow.md : shadow.sm, padding: 16, marginBottom: 14, textAlign: 'left' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{LEVEL_LABELS[l.id]}</div>
                    <div style={{ color: color.muted, fontSize: 13, marginTop: 2, fontWeight: 600 }}>{l.blurb} · {paperCount} papers</div>
                  </div>
                  {active && <div style={{ width: 22, height: 22, borderRadius: 6, border: border.thin, background: color.secondary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13 }}>✓</div>}
                </Tappable>
              )
            })}
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <Button variant="ghost" onClick={() => slide(-1)} style={{ flex: 1 }}>Back</Button>
              <Button variant="secondary" onClick={() => slide(1)} style={{ flex: 1 }}>Next</Button>
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="s2goal" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24 }}>
            <div style={{ fontSize: 27, fontWeight: 900, marginBottom: 4 }}>Daily goal</div>
            <div style={{ color: color.muted, fontSize: 14, marginBottom: 20, fontWeight: 600 }}>How many chapters per day?</div>
            <div style={{ display: 'flex', gap: 14 }}>
              {[1, 2, 3].map((g) => (
                <Tappable key={g} onClick={() => setGoal(g)} className="mono" style={{ flex: 1, background: g === goal ? color.primary : color.card, color: color.text, border: g === goal ? border.thick : border.thin, boxShadow: g === goal ? shadow.md : shadow.sm, borderRadius: 12, padding: '24px 0', fontWeight: 800, fontSize: 27, fontFamily: font.mono }}>
                  {g}
                </Tappable>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <Button variant="ghost" onClick={() => slide(-1)} style={{ flex: 1 }}>Back</Button>
              <Button variant="secondary" onClick={() => { setConfetti(true); setTimeout(() => complete(name || 'Student', goal, 'neo', level), ANIMATION.CONFETTI_DELAY) }} style={{ flex: 1 }}>
                Start Learning
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {confetti && <Confetti />}
    </div>
  )
}
