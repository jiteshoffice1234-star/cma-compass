import { useState } from 'react'
import { CreditCard, Layers, Calculator, BookA } from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, papersForLevel } from '../data/curriculum'
import { Card, Tappable } from '../components/ui'
import { BottomSheet } from '../components/BottomSheet'
import { FlashcardsDue } from './FlashcardsDue'
import { FormulaSheet } from './FormulaSheet'
import { Glossary } from './Glossary'
import { StageTestOverlay } from './StageTestOverlay'

export function Practice() {
  const [sheet, setSheet] = useState<'none' | 'flashcards' | 'formulas' | 'glossary' | 'stage'>('none')
  const [activeTest, setActiveTest] = useState<{ paperId: number; grand: boolean } | null>(null)
  const progress = useStore((s) => s.progress)
  const level = useStore((s) => s.level)
  const papers = papersForLevel(level).filter((p) => chaptersForLevel(level).some((c) => c.paperId === p.id))
  const allDone = chaptersForLevel(level).every((c) => progress[c.id]?.completed)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{ fontWeight: 800, fontSize: 22 }}>Practice</div>
        <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 2 }}>Drill, test, and review.</div>
      </div>
      <div style={{ flex: 1, padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, alignContent: 'start', overflowY: 'auto' }}>
        <Card style={{ padding: 16, minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={() => setSheet('flashcards')}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}><CreditCard size={22} /></div>
          <div><div style={{ fontWeight: 700, fontSize: 16 }}>Flashcards</div><div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 2 }}>Due today, spaced repetition</div></div>
        </Card>
        <Card style={{ padding: 16, minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={() => setSheet('stage')}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--xp)' }}><Layers size={22} /></div>
          <div><div style={{ fontWeight: 700, fontSize: 16 }}>Paper Tests</div><div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 2 }}>20 mixed · Grand Final 50</div></div>
        </Card>
        <Card style={{ padding: 16, minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={() => setSheet('formulas')}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}><Calculator size={22} /></div>
          <div><div style={{ fontWeight: 700, fontSize: 16 }}>Formula Sheet</div><div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 2 }}>All formulas, searchable</div></div>
        </Card>
        <Card style={{ padding: 16, minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={() => setSheet('glossary')}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}><BookA size={22} /></div>
          <div><div style={{ fontWeight: 700, fontSize: 16 }}>Glossary</div><div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 2 }}>150+ terms, A–Z</div></div>
        </Card>
      </div>

      <BottomSheet open={sheet === 'flashcards'} onClose={() => setSheet('none')} title="Flashcards Due"><FlashcardsDue /></BottomSheet>
      <BottomSheet open={sheet === 'formulas'} onClose={() => setSheet('none')} title="Formula Sheet" height={'80%'}><FormulaSheet /></BottomSheet>
      <BottomSheet open={sheet === 'glossary'} onClose={() => setSheet('none')} title="Glossary" height={'80%'}><Glossary /></BottomSheet>
      <BottomSheet open={sheet === 'stage'} onClose={() => setSheet('none')} title="Paper Tests">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {papers.map((p) => (
            <Tappable key={p.id} onClick={() => { setSheet('none'); setActiveTest({ paperId: p.id, grand: false }) }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 16 }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{p.code} Test (20 Q)</span>
              <span style={{ color: 'var(--accent)', fontSize: 18 }}>→</span>
            </Tappable>
          ))}
          <Tappable disabled={!allDone} onClick={() => { if (allDone) { setSheet('none'); setActiveTest({ paperId: 0, grand: true }) } }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: allDone ? 'var(--xp)' : 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 16, opacity: allDone ? 1 : 0.5 }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: allDone ? '#000' : 'var(--text)' }}>Grand Final Test (50 Q){!allDone && ' 🔒'}</span>
            <span style={{ color: allDone ? '#000' : 'var(--muted)', fontSize: 18 }}>→</span>
          </Tappable>
          {!allDone && <div style={{ color: 'var(--muted)', fontSize: 12, textAlign: 'center', marginTop: 4 }}>Complete all chapters in your level to unlock.</div>}
        </div>
      </BottomSheet>

      {activeTest && <StageTestOverlay paperId={activeTest.paperId} grand={activeTest.grand} onClose={() => setActiveTest(null)} />}
    </div>
  )
}
