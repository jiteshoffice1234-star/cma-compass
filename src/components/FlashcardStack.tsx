import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, RotateCcw } from 'lucide-react'
import { flashcards } from '../data/flashcards'
import { useStore } from '../store'
import { Tappable } from '../components/ui'
import { color, border, shadow } from '../theme'

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
      <div style={{ textAlign: 'center', padding: 40, color: color.muted }}>
        <div style={{ fontSize: 15, fontWeight: 800, color: color.text }}>All caught up</div>
        <div style={{ fontSize: 13, marginTop: 6 }}>You have reviewed every flashcard in this chapter.</div>
      </div>
    )
  }

  return (
    <div>
      <div className="mono" style={{ color: color.muted, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
        {order.length} CARD{order.length > 1 ? 'S' : ''} REMAINING
      </div>
      <Tappable onClick={() => setFlipped((f) => !f)} style={{ width: '100%' }}>
        <motion.div
          key={current.id + (flipped ? '-b' : '-f')}
          initial={{ rotateY: -8, opacity: 0.6 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            background: flipped ? color.primaryTint : color.card,
            border: border.thick,
            borderRadius: 14,
            boxShadow: shadow.lg,
            padding: 24,
            minHeight: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 900, letterSpacing: 1.5, color: color.text, background: flipped ? color.primary : color.secondaryTint, border: border.thin, borderRadius: 6, padding: '3px 10px', marginBottom: 12 }}>
              {flipped ? 'DEFINITION' : 'TERM'}
            </div>
            <div style={{ fontSize: flipped ? 15 : 21, fontWeight: 800, lineHeight: 1.4, color: color.text }}>
              {flipped ? current.back : current.front}
            </div>
            <div style={{ fontSize: 12, color: color.muted, marginTop: 16, fontWeight: 600 }}>Tap to {flipped ? 'see term' : 'flip'}</div>
          </div>
        </motion.div>
      </Tappable>

      {flipped && (
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <Tappable
            onClick={() => review(1)}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: color.dangerTint, color: color.danger, border: `3px solid ${color.danger}`, borderRadius: 10, boxShadow: shadow.sm, padding: 14, fontWeight: 800, fontSize: 14 }}
          >
            <RotateCcw size={16} /> Review again
          </Tappable>
          <Tappable
            onClick={() => review(5)}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: color.successTint, color: color.success, border: `3px solid ${color.success}`, borderRadius: 10, boxShadow: shadow.sm, padding: 14, fontWeight: 800, fontSize: 14 }}
          >
            <Check size={16} /> Got it
          </Tappable>
        </div>
      )}
    </div>
  )
}
