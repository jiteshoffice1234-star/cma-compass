import { useState } from 'react'
import { useStore } from '../store'
import { flashcards } from '../data/flashcards'
import { Tappable } from '../components/ui'
import { Check, RotateCcw } from 'lucide-react'
import { color, border, shadow, font } from '../theme'

export function FlashcardsDue() {
  const reviewFlashcard = useStore((s) => s.reviewFlashcard)
  const [queue] = useState(flashcards.slice(0, 20))
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const handle = async (q: number) => {
    if (!queue[idx]) return
    await reviewFlashcard(queue[idx].id, q)
    setFlipped(false)
    setIdx((i) => i + 1)
  }

  if (idx >= queue.length) {
    return <div style={{ textAlign: 'center', padding: 30, color: color.muted }}>
      <div style={{ fontSize: 32 }}>🎉</div>
      <div style={{ fontWeight: 800, marginTop: 8, color: color.text }}>All caught up!</div>
      <div style={{ fontSize: 13, marginTop: 4, fontWeight: 600 }}>Great job reviewing {queue.length} cards.</div>
    </div>
  }

  const card = queue[idx]
  return (
    <div style={{ padding: '2px 4px 4px 2px' }}>
      <div className="mono" style={{ textAlign: 'center', color: color.muted, fontSize: 13, fontWeight: 700, marginBottom: 10, fontFamily: font.mono }}>{idx + 1} / {queue.length}</div>
      <Tappable onClick={() => setFlipped((f) => !f)} style={{ width: '100%', minHeight: 160, background: flipped ? color.primaryTint : color.card, border: border.thick, borderRadius: 12, boxShadow: shadow.md, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: color.text, background: flipped ? color.primary : color.secondaryTint, border: border.thin, borderRadius: 6, padding: '2px 10px', fontSize: 11, fontWeight: 900, letterSpacing: 1, marginBottom: 10 }}>{flipped ? 'DEFINITION' : 'TERM'}</div>
        <div style={{ fontSize: 17, fontWeight: 700, textAlign: 'center', lineHeight: 1.4 }}>{flipped ? card.back : card.front}</div>
      </Tappable>
      <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
        <Tappable onClick={() => handle(1)} style={{ flex: 1, background: color.dangerTint, border: `3px solid ${color.danger}`, color: color.danger, borderRadius: 10, boxShadow: shadow.sm, padding: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <RotateCcw size={15} /> Again
        </Tappable>
        <Tappable onClick={() => handle(5)} style={{ flex: 1, background: color.successTint, border: `3px solid ${color.success}`, color: color.success, borderRadius: 10, boxShadow: shadow.sm, padding: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Check size={15} /> Got it
        </Tappable>
      </div>
    </div>
  )
}
