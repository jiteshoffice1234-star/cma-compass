import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, RotateCcw } from 'lucide-react'
import { flashcards } from '../data/flashcards'
import { useStore } from '../store'
import { Tappable } from '../components/ui'

export function FlashcardStack({ chapterId }: { chapterId: number }) {
  const cards = useMemo(() => flashcards.filter((f) => f.chapterId === chapterId), [chapterId])
  const reviewFlashcard = useStore((s) => s.reviewFlashcard)
  const [order, setOrder] = useState(() => cards.map((_, i) => i))
  const [flipped, setFlipped] = useState(false)

  const current = cards[order[0]]

  const review = (quality: number) => {
    if (!current) return
    reviewFlashcard(current.id, quality)
    setOrder((o) => (quality <= 2 ? [...o.slice(1), o[0]] : o.slice(1)))
    setFlipped(false)
  }

  if (!current) {
    return (
      <div style={{ textAlign: 'center', padding: 40, color: 'var(--muted)' }}>
        <div style={{ fontSize: 15, fontWeight: 600 }}>All caught up</div>
        <div style={{ fontSize: 13, marginTop: 6 }}>You have reviewed every flashcard in this chapter.</div>
      </div>
    )
  }

  return (
    <div>
      <div style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 12 }}>
        {order.length} card{order.length > 1 ? 's' : ''} remaining
      </div>
      <Tappable onClick={() => setFlipped((f) => !f)} style={{ width: '100%' }}>
        <motion.div
          key={current.id + (flipped ? '-b' : '-f')}
          initial={{ rotateY: -8, opacity: 0.6 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 18,
            padding: 24,
            minHeight: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: 'var(--accent)', marginBottom: 10 }}>
              {flipped ? 'DEFINITION' : 'TERM'}
            </div>
            <div style={{ fontSize: flipped ? 15 : 20, fontWeight: 700, lineHeight: 1.4, color: 'var(--text)' }}>
              {flipped ? current.back : current.front}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 16 }}>Tap to {flipped ? 'see term' : 'flip'}</div>
          </div>
        </motion.div>
      </Tappable>

      {flipped && (
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <Tappable
            onClick={() => review(1)}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'rgba(239,68,68,0.15)', color: 'var(--error)', borderRadius: 14, padding: 14, fontWeight: 700, fontSize: 14 }}
          >
            <RotateCcw size={16} /> Review again
          </Tappable>
          <Tappable
            onClick={() => review(5)}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'rgba(34,197,94,0.15)', color: 'var(--success)', borderRadius: 14, padding: 14, fontWeight: 700, fontSize: 14 }}
          >
            <Check size={16} /> Got it
          </Tappable>
        </div>
      )}
    </div>
  )
}
