import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Layers, Calculator, BookA, Lock, ArrowRight, Play, Settings2 } from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, papersForLevel } from '../data/curriculum'
import { Card, Tappable, Button } from '../components/ui'
import { BottomSheet } from '../components/BottomSheet'
import { FlashcardsDue } from './FlashcardsDue'
import { FormulaSheet } from './FormulaSheet'
import { Glossary } from './Glossary'
import { StageTestOverlay } from './StageTestOverlay'
import { PracticeSession, SessionConfig } from '../components/PracticeSession'
import { EXAM_TERMS, FOUNDATION_MCQ_BANK, hasPastPapers, pastPaperUrl } from '../data/pastPapers'
import { color, border, shadow } from '../theme'

export function Practice() {
  const nav = useNavigate()
  const [sheet, setSheet] = useState<'none' | 'flashcards' | 'formulas' | 'glossary' | 'stage' | 'setup'>('none')
  const [activeTest, setActiveTest] = useState<{ paperId: number; grand: boolean } | null>(null)
  
  // Practice Exam Setup State
  const [sessionConfig, setSessionConfig] = useState<SessionConfig | null>(null)
  const [setupPaperId, setSetupPaperId] = useState<number | null>(null)
  const [setupTermId, setSetupTermId] = useState<string>(EXAM_TERMS[0]?.id ?? 'jun26')
  const [setupCount, setSetupCount] = useState<number>(100)
  const [setupTimed, setSetupTimed] = useState<boolean>(true)
  const [setupMinutes, setSetupMinutes] = useState<number>(120)

  const progress = useStore((s) => s.progress)
  const level = useStore((s) => s.level)
  const papers = papersForLevel(level).filter((p) => chaptersForLevel(level).some((c) => c.paperId === p.id))
  const setupTerm = EXAM_TERMS.find((t) => t.id === setupTermId) ?? EXAM_TERMS[0]
  const allDone = chaptersForLevel(level).every((c) => progress[c.id]?.completed)

  const tiles = [
    { key: 'flashcards' as const, icon: CreditCard, tint: color.secondaryTint, iconColor: color.secondary, title: 'Flashcards', desc: 'Spaced repetition drills' },
    { key: 'stage' as const, icon: Layers, tint: color.primaryTint, iconColor: color.warning, title: 'Paper Tests', desc: '20 mixed Q · Grand Final 50' },
    { key: 'formulas' as const, icon: Calculator, tint: color.successTint, iconColor: color.success, title: 'Formula Sheet', desc: 'All formulas, searchable' },
    { key: 'glossary' as const, icon: BookA, tint: color.dangerTint, iconColor: color.danger, title: 'Glossary', desc: '150+ terms, A–Z' },
  ]

  const startPractice = () => {
    setSessionConfig({
      level,
      paperId: setupPaperId,
      termId: setupTermId,
      count: setupCount,
      timed: setupTimed,
      minutes: setupTimed ? setupMinutes : 0
    })
    setSheet('none')
  }

  const openOfficialPaper = () => {
    if (level === 'foundation') {
      window.open(FOUNDATION_MCQ_BANK, '_blank')
      return
    }
    if (!setupPaperId || !setupTerm || !hasPastPapers(setupPaperId)) return
    const url = pastPaperUrl(setupPaperId, setupTerm.folder)
    nav(`/pdf?src=${encodeURIComponent(url)}&title=${encodeURIComponent(`ICMAI Paper ${setupPaperId} · ${setupTerm.label}`)}`)
  }

  if (sessionConfig) {
    return <PracticeSession config={sessionConfig} onClose={() => setSessionConfig(null)} />
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: color.surface }}>
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{ fontWeight: 900, fontSize: 27 }}>Practice</div>
        <div style={{ color: color.muted, fontSize: 14, marginTop: 2, fontWeight: 600 }}>Drill, test, and revise.</div>
      </div>
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
        
        <Card style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, background: color.primaryTint, border: border.thick }} onClick={() => setSheet('setup')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: color.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: border.thin }}>
              <Layers size={24} />
            </div>
            <div style={{ background: color.primary, color: '#fff', padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 800, border: border.thin }}>MOCK EXAM</div>
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 22, marginTop: 4 }}>Practice Exam</div>
            <div style={{ color: color.text, fontSize: 14, marginTop: 4, fontWeight: 600, opacity: 0.8 }}>Full-length timed sessions (100 Qs). Select subjects, simulate real exams, and review answers.</div>
          </div>
          <Button variant="primary" style={{ marginTop: 8, width: '100%', display: 'flex', justifyContent: 'center', gap: 8 }}>
            <Settings2 size={18} /> Configure & Start
          </Button>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {tiles.map((t) => {
            const Icon = t.icon
            return (
              <Card key={t.key} style={{ padding: 16, minHeight: 140, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={() => setSheet(t.key)}>
                <div style={{ width: 40, height: 40, borderRadius: 8, border: border.thin, background: t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.iconColor }}><Icon size={20} /></div>
                <div><div style={{ fontWeight: 800, fontSize: 15 }}>{t.title}</div><div style={{ color: color.muted, fontSize: 12, marginTop: 2, fontWeight: 600 }}>{t.desc}</div></div>
              </Card>
            )
          })}
        </div>
      </div>

      <BottomSheet open={sheet === 'setup'} onClose={() => setSheet('none')} title="Configure Exam">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '0 4px 16px' }}>
          
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8 }}>Subject</div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
              <Tappable
                onClick={() => setSetupPaperId(null)}
                style={{ flexShrink: 0, padding: '8px 16px', background: setupPaperId === null ? color.secondary : color.card, color: setupPaperId === null ? '#fff' : color.text, border: border.thin, borderRadius: 8, fontWeight: 800, fontSize: 13 }}
              >
                All Subjects (Mixed)
              </Tappable>
              {papers.map(p => (
                <Tappable
                  key={p.id}
                  onClick={() => setSetupPaperId(p.id)}
                  style={{ flexShrink: 0, padding: '8px 16px', background: setupPaperId === p.id ? color.secondary : color.card, color: setupPaperId === p.id ? '#fff' : color.text, border: border.thin, borderRadius: 8, fontWeight: 800, fontSize: 13 }}
                >
                  {p.code}
                </Tappable>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8 }}>Official Paper Term</div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
              {EXAM_TERMS.map(term => (
                <Tappable
                  key={term.id}
                  onClick={() => setSetupTermId(term.id)}
                  style={{ flexShrink: 0, padding: '8px 14px', background: setupTermId === term.id ? color.secondary : color.card, color: setupTermId === term.id ? '#fff' : color.text, border: border.thin, borderRadius: 8, fontWeight: 800, fontSize: 13 }}
                >
                  {term.label}
                </Tappable>
              ))}
            </div>
          </div>

          <div style={{ background: color.secondaryTint, border: border.thin, borderRadius: 10, padding: 12 }}>
            <div style={{ fontWeight: 900, fontSize: 14, marginBottom: 4 }}>Official ICMAI source</div>
            <div style={{ color: color.muted, fontSize: 12, fontWeight: 700, lineHeight: 1.4 }}>
              {level === 'foundation'
                ? 'Foundation objective practice is linked to ICMAI official MCQ portal.'
                : setupPaperId
                  ? `Open ${setupTerm?.label ?? 'selected term'} official paper PDF inside the app, then practise with the configured drill.`
                  : 'Choose one subject to open its official paper PDF inside the app.'}
            </div>
            {(level === 'foundation' || (setupPaperId && setupTerm && hasPastPapers(setupPaperId))) && (
              <Button variant="secondary" onClick={openOfficialPaper} style={{ width: '100%', marginTop: 10 }}>
                {level === 'foundation' ? 'Open ICMAI MCQ Portal' : 'Open Official Paper PDF'}
              </Button>
            )}
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8 }}>Questions</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[25, 50, 100].map(count => (
                <Tappable
                  key={count}
                  onClick={() => setSetupCount(count)}
                  style={{ flex: 1, textAlign: 'center', padding: '10px 0', background: setupCount === count ? color.primaryTint : color.card, border: setupCount === count ? border.thick : border.thin, borderRadius: 8, fontWeight: 800, fontSize: 14 }}
                >
                  {count} Qs
                </Tappable>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
              <span>Timed Mode</span>
              <Tappable onClick={() => setSetupTimed(!setupTimed)} style={{ background: setupTimed ? color.success : color.card, border: border.thin, borderRadius: 20, width: 44, height: 24, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 2, left: setupTimed ? 22 : 2, width: 18, height: 18, background: '#fff', border: border.thin, borderRadius: '50%', transition: '0.2s' }} />
              </Tappable>
            </div>
            {setupTimed && (
              <div style={{ display: 'flex', gap: 8 }}>
                {[30, 60, 90, 120].map(mins => (
                  <Tappable
                    key={mins}
                    onClick={() => setSetupMinutes(mins)}
                    style={{ flex: 1, textAlign: 'center', padding: '8px 0', background: setupMinutes === mins ? color.card : 'transparent', border: setupMinutes === mins ? border.thin : '1px solid transparent', borderRadius: 8, fontWeight: 700, fontSize: 13, opacity: setupMinutes === mins ? 1 : 0.6 }}
                  >
                    {mins}m
                  </Tappable>
                ))}
              </div>
            )}
          </div>

          <Button variant="primary" onClick={startPractice} style={{ marginTop: 8, width: '100%', display: 'flex', justifyContent: 'center', gap: 8 }}>
            <Play size={18} /> Start Exam
          </Button>

        </div>
      </BottomSheet>

      <BottomSheet open={sheet === 'flashcards'} onClose={() => setSheet('none')} title="Flashcards Due"><FlashcardsDue /></BottomSheet>
      <BottomSheet open={sheet === 'formulas'} onClose={() => setSheet('none')} title="Formula Sheet" height={'80%'}><FormulaSheet /></BottomSheet>
      <BottomSheet open={sheet === 'glossary'} onClose={() => setSheet('none')} title="Glossary" height={'80%'}><Glossary /></BottomSheet>
      <BottomSheet open={sheet === 'stage'} onClose={() => setSheet('none')} title="Paper Tests">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '2px 4px 4px 2px' }}>
          {papers.map((p) => (
            <Tappable key={p.id} onClick={() => { setSheet('none'); setActiveTest({ paperId: p.id, grand: false }) }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 16 }}>
              <span style={{ fontWeight: 800, fontSize: 15 }}>{p.code} Test <span style={{ color: color.muted, fontWeight: 600 }}>(20 Q)</span></span>
              <ArrowRight size={18} color={color.secondary} />
            </Tappable>
          ))}
          <Tappable disabled={!allDone} onClick={() => { if (allDone) { setSheet('none'); setActiveTest({ paperId: 0, grand: true }) } }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: allDone ? color.primary : color.card, border: border.thick, borderRadius: 10, boxShadow: allDone ? shadow.md : 'none', padding: 16, opacity: allDone ? 1 : 0.55 }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: color.text }}>Grand Final Test (50 Q)</span>
            {allDone ? <ArrowRight size={18} color={color.text} /> : <Lock size={18} color={color.muted} />}
          </Tappable>
          {!allDone && <div style={{ color: color.muted, fontSize: 12, textAlign: 'center', marginTop: 2, fontWeight: 600 }}>Complete all chapters in your level to unlock.</div>}
        </div>
      </BottomSheet>

      {activeTest && <StageTestOverlay paperId={activeTest.paperId} grand={activeTest.grand} level={level} onClose={() => setActiveTest(null)} />}
    </div>
  )
}
