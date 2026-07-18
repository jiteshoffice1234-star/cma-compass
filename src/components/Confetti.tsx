import { useEffect, useState } from 'react'

const COLORS = ['#3B82F6', '#8B5CF6', '#22C55E', '#FBBF24', '#EF4444', '#34D399', '#C4B5FD']

export function Confetti({ count = 80, duration = 2500 }: { count?: number; duration?: number }) {
  const [pieces, setPieces] = useState<{ left: number; delay: number; color: string; rot: number }[]>([])
  useEffect(() => {
    const arr = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rot: Math.random() * 360,
    }))
    setPieces(arr)
    const t = setTimeout(() => setPieces([]), duration)
    return () => clearTimeout(t)
  }, [count, duration])

  if (pieces.length === 0) return null
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 600 }}>
      {pieces.map((p, i) => (
        <div key={i} className="confetti-piece" style={{
          left: p.left + '%', background: p.color, transform: `rotate(${p.rot}deg)`,
          animationDelay: p.delay + 's', animationDuration: (1.6 + Math.random()) + 's',
        }} />
      ))}
    </div>
  )
}
