import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore, ThemeMode } from '../store'
import { Level, LEVEL_LABELS, papersForLevel } from '../data/curriculum'
import { Tappable } from '../components/ui'
import { Confetti } from '../components/Confetti'

const LEVELS: { id: Level; blurb: string }[] = [
  { id: 'foundation', blurb: 'Papers 1–4 · the entry level of the CMA course' },
  { id: 'intermediate', blurb: 'Papers 5–12 · Groups I & II' },
]

const THEMES: { id: ThemeMode; name: string; preview: any; desc: string }[] = [
  { id: 'dark', name: 'Dark', desc: 'Sleek & focused', preview: { bg: '#0A0A0A', card: '#1E1E1E', accent: '#3B82F6', text: '#FFFFFF' } },
  { id: 'light', name: 'Light', desc: 'Clean & bright', preview: { bg: '#F8F9FA', card: '#FFFFFF', accent: '#3B82F6', text: '#111827' } },
  { id: 'claude', name: 'Claude', desc: 'Vibrant purple', preview: { bg: '#1A1625', card: '#2D2645', accent: '#8B5CF6', text: '#F0EEFF' } },
]

export function Onboarding() {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [level, setLevel] = useState<Level>('foundation')
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [goal, setGoal] = useState(1)
  const complete = useStore((s) => s.completeOnboarding)
  const [confetti, setConfetti] = useState(false)

  const slide = (dir: number) => setStep((s) => Math.max(0, Math.min(3, s + dir)))

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 400, background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="s0" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 28 }}>
            <div style={{ fontSize: 40, fontWeight: 800, color: 'var(--accent)' }}>AccountIQ</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 8 }}>Zero to CFO. One chapter at a time.</div>
            <div style={{ color: 'var(--muted)', marginTop: 10, fontSize: 14 }}>Your personal accounting coach for the ICMAI CMA Foundation &amp; Intermediate syllabus.</div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
              style={{ marginTop: 28, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px', color: 'var(--text)', fontSize: 16, outline: 'none' }} />
            <Tappable onClick={() => name.trim() && slide(1)}
              style={{ marginTop: 24, background: 'var(--accent)', color: '#fff', borderRadius: 14, padding: '15px', fontWeight: 700, fontSize: 16, opacity: name.trim() ? 1 : 0.5 }}>
              Next
            </Tappable>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="s1level" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24 }}>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Choose your level</div>
            <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 20 }}>The app focuses entirely on the level you pick. You can switch later in Profile.</div>
            {LEVELS.map((l) => {
              const paperCount = papersForLevel(l.id).length
              return (
                <Tappable key={l.id} onClick={() => setLevel(l.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, background: l.id === level ? 'var(--card)' : 'var(--surface)', border: `2px solid ${l.id === level ? 'var(--accent)' : 'var(--border)'}`, borderRadius: 16, padding: 16, marginBottom: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{LEVEL_LABELS[l.id]}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 2 }}>{l.blurb} · {paperCount} papers</div>
                  </div>
                  {l.id === level && <div style={{ width: 20, height: 20, borderRadius: 10, background: 'var(--accent)' }} />}
                </Tappable>
              )
            })}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <Tappable onClick={() => slide(-1)} style={{ flex: 1, background: 'var(--card)', borderRadius: 14, padding: 15, fontWeight: 600, color: 'var(--muted)' }}>Back</Tappable>
              <Tappable onClick={() => slide(1)} style={{ flex: 1, background: 'var(--accent)', color: '#fff', borderRadius: 14, padding: 15, fontWeight: 700 }}>Next</Tappable>
            </div>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="s2theme" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24 }}>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Pick your theme</div>
            <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 20 }}>You can change this anytime.</div>
            {THEMES.map((t) => (
              <Tappable key={t.id} onClick={() => setTheme(t.id)}
                style={{ display: 'flex', alignItems: 'center', gap: 14, background: t.id === theme ? 'var(--card)' : 'var(--surface)', border: `2px solid ${t.id === theme ? (t.preview.accent) : 'var(--border)'}`, borderRadius: 16, padding: 14, marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: t.preview.bg, border: '1px solid ' + t.preview.border, display: 'flex', flexDirection: 'column', padding: 5, gap: 3 }}>
                  <div style={{ height: 8, width: '100%', background: t.preview.accent, borderRadius: 2 }} />
                  <div style={{ flex: 1, background: t.preview.card, borderRadius: 2 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{t.name}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 13 }}>{t.desc}</div>
                </div>
                {t.id === theme && <div style={{ width: 20, height: 20, borderRadius: 10, background: t.preview.accent }} />}
              </Tappable>
            ))}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <Tappable onClick={() => slide(-1)} style={{ flex: 1, background: 'var(--card)', borderRadius: 14, padding: 15, fontWeight: 600, color: 'var(--muted)' }}>Back</Tappable>
              <Tappable onClick={() => slide(1)} style={{ flex: 1, background: 'var(--accent)', color: '#fff', borderRadius: 14, padding: 15, fontWeight: 700 }}>Next</Tappable>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="s3goal" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 24 }}>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Daily goal</div>
            <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 20 }}>How many chapters per day?</div>
            <div style={{ display: 'flex', gap: 12 }}>
              {[1, 2, 3].map((g) => (
                <Tappable key={g} onClick={() => setGoal(g)} style={{ flex: 1, background: g === goal ? 'var(--accent)' : 'var(--card)', color: g === goal ? '#fff' : 'var(--text)', border: `1px solid ${g === goal ? 'var(--accent)' : 'var(--border)'}`, borderRadius: 16, padding: '24px 0', fontWeight: 800, fontSize: 28 }}>
                  {g}
                </Tappable>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <Tappable onClick={() => slide(-1)} style={{ flex: 1, background: 'var(--card)', borderRadius: 14, padding: 15, fontWeight: 600, color: 'var(--muted)' }}>Back</Tappable>
              <Tappable onClick={() => { setConfetti(true); setTimeout(() => complete(name || 'Student', goal, theme, level), 700) }} style={{ flex: 1, background: 'var(--accent)', color: '#fff', borderRadius: 14, padding: 15, fontWeight: 700 }}>
                Start Learning
              </Tappable>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {confetti && <Confetti />}
    </div>
  )
}
