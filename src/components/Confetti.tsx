import { useEffect, useRef } from 'react'

const COLORS = ['#3B82F6', '#8B5CF6', '#22C55E', '#FBBF24', '#EF4444', '#34D399', '#C4B5FD']

interface Particle {
  x: number; y: number; vx: number; vy: number
  size: number; color: string; rotation: number; rotationSpeed: number
}

export function Confetti({ count = 60, duration = 2500 }: { count?: number; duration?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    canvas.width = w * window.devicePixelRatio
    canvas.height = h * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: -20,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      size: Math.random() * 8 + 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    }))

    const startTime = performance.now()

    const animate = (now: number) => {
      if (now - startTime > duration) { ctx.clearRect(0, 0, w, h); return }
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05
        p.rotation += p.rotationSpeed
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        ctx.restore()
      }
      requestAnimationFrame(animate)
    }
    const raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [count, duration])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 600 }} />
}
