import { useState } from 'react'
import { Skeleton } from './ui'
import { border } from '../theme'

export function ResponsiveVideo({
  src, title, onLoad
}: {
  src: string
  title: string
  onLoad?: () => void
}) {
  const [loading, setLoading] = useState(true)

  return (
    <div
      style={{
        position: 'relative', width: '100%', paddingBottom: '56.25%',
        background: '#000', borderTop: border.thin, borderBottom: border.thin,
      }}
    >
      <style>{`
        @supports (aspect-ratio: 1) {
          [data-video-container] {
            padding-bottom: unset;
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
      <iframe
        data-video-container
        src={src}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
        onLoad={() => { setLoading(false); onLoad?.() }}
      />
      {loading && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center', background: '#000', pointerEvents: 'none',
        }}>
          <Skeleton w={60} h={60} />
        </div>
      )}
    </div>
  )
}
