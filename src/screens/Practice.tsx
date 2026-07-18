import { useState } from 'react'
import { CreditCard, Layers, Calculator, BookA, Lock, ArrowRight } from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, papersForLevel } from '../data/curriculum'
import { Card, Tappable } from '../components/ui'
import { BottomSheet } from '../components/BottomSheet'
import { FlashcardsDue } from './FlashcardsDue'
import { FormulaSheet } from './FormulaSheet'
import { Glossary } from './Glossary'
import { StageTestOverlay } from './StageTestOverlay'
import { color, border, shadow } from '../theme'

export function Practice() {
  const [sheet, setSheet] = useState<'none' | 'flashcards' | 'formulas' | 'glossary' | 'stage'>('none')
  const [activeTest, setActiveTest] = useState<{ paperId: number; grand: boolean } | null>(null)
  const progress = useStore((s) => s.progress)
  const level = useStore((s) => s.level)
  const papers = papersForLevel(level).filter((p) => chaptersForLevel(level).some((c) => c.paperId === p.id))
  const allDone = chaptersForLevel(level).every((c) => progress[c.id]?.completed)

  const tiles = [
    { key: 'flashcards' as const, icon: CreditCard, tint: color.secondaryTint, iconColor: color.secondary, title: 'Flashcards', desc: 'Spaced repetition drills' },
    { key: 'stage' as const, icon: Layers, tint: color.primaryTint, iconColor: color.warning, title: 'Paper Tests', desc: '20 mixed Q · Grand Final 50' },
    { key: 'formulas' as const, icon: Calculator, tint: color.successTint, iconColor: color.success, title: 'Formula Sheet', desc: 'All formulas, searchable' },
    { key: 'glossary' as const, icon: BookA, tint: color.dangerTint, iconColor: color.danger, title: 'Glossary', desc: '150+ terms, A–Z' },
  ]

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: color.surface }}>
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{ fontWeight: 900, fontSize: 27 }}>Practice</div>
        <div style={{ color: color.muted, fontSize: 14, marginTop: 2, fontWeight: 600 }}>Drill, test, and revise.</div>
      </div>
      <div style={{ flex: 1, padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, alignContent: 'start', overflowY: 'auto' }}>
        {tiles.map((t) => {
          const Icon = t.icon
          return (
            <Card key={t.key} style={{ padding: 16, minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={() => setSheet(t.key)}>
              <div style={{ width: 44, height: 44, borderRadius: 8, border: border.thin, background: t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.iconColor }}><Icon size={22} /></div>
              <div><div style={{ fontWeight: 800, fontSize: 16 }}>{t.title}</div><div style={{ color: color.muted, fontSize: 12, marginTop: 2, fontWeight: 600 }}>{t.desc}</div></div>
            </Card>
          )
        })}
      </div>

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

      {activeTest && <StageTestOverlay paperId={activeTest.paperId} grand={activeTest.grand} onClose={() => setActiveTest(null)} />}
    </div>
  )
}
