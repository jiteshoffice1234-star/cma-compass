import { useState, useEffect } from 'react'
import { useStore } from '../store'
import { flashcards } from '../data/flashcards'
import { Tappable } from '../components/ui'
import { Check, RotateCcw } from 'lucide-react'

export function FlashcardsDue() {
  const reviewFlashcard = useStore((s) => s.reviewFlashcard)
  const [queue, setQueue] = useState(flashcards.slice(0, 20))
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const handle = async (q: number) => {
    if (!queue[idx]) return
    await reviewFlashcard(queue[idx].id, q)
    setFlipped(false)
    setIdx((i) => i + 1)
  }

  if (idx >= queue.length) {
    return <div style={{ textAlign: 'center', padding: 30, color: 'var(--muted)' }}>
      <div style={{ fontSize: 32 }}>🎉</div>
      <div style={{ fontWeight: 700, marginTop: 8 }}>All caught up!</div>
      <div style={{ fontSize: 13, marginTop: 4 }}>Great job reviewing {queue.length} cards.</div>
    </div>
  }

  const card = queue[idx]
  return (
    <div>
      <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, marginBottom: 10 }}>{idx + 1} / {queue.length}</div>
      <Tappable onClick={() => setFlipped((f) => !f)} style={{ width: '100%', minHeight: 160, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--accent)', fontSize: 11, fontWeight: 700, marginBottom: 8 }}>{flipped ? 'DEFINITION' : 'TERM'}</div>
        <div style={{ fontSize: 17, fontWeight: 600, textAlign: 'center', lineHeight: 1.4 }}>{flipped ? card.back : card.front}</div>
      </Tappable>
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        <Tappable onClick={() => handle(1)} style={{ flex: 1, background: 'rgba(239,68,68,0.15)', border: '1px solid var(--error)', color: 'var(--error)', borderRadius: 14, padding: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <RotateCcw size={15} /> Again
        </Tappable>
        <Tappable onClick={() => handle(5)} style={{ flex: 1, background: 'rgba(34,197,94,0.15)', border: '1px solid var(--success)', color: 'var(--success)', borderRadius: 14, padding: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Check size={15} /> Got it
        </Tappable>
      </div>
    </div>
  )
}
