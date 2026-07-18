import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { IconButton } from '../components/ui'
import { Capacitor } from '@capacitor/core'
import { Filesystem } from '@capacitor/filesystem'
import { color, border } from '../theme'

// Use the legacy build (no ES module worker complications) and the bundled worker.
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'
import workerSrc from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'

export function PdfViewer() {
  const loc = useLocation()
  const nav = useNavigate()
  const params = new URLSearchParams(loc.search)
  const src = params.get('src') || ''
  const title = params.get('title') || 'PDF'
  const [pages, setPages] = useState<string[]>([]) // dataURLs per page
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        setLoading(true)
        setError('')
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

        let data: Uint8Array
        if (Capacitor.isNativePlatform() && src.startsWith('file://')) {
          const res = await Filesystem.readFile({ path: src })
          const b64 = typeof res.data === 'string' ? res.data : ''
          data = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0))
        } else {
          const resp = await fetch(src)
          data = new Uint8Array(await resp.arrayBuffer())
        }

        const doc = await pdfjsLib.getDocument({ data }).promise
        const urls: string[] = []
        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i)
          const viewport = page.getViewport({ scale: 1.6 })
          const canvas = document.createElement('canvas')
          canvas.width = viewport.width
          canvas.height = viewport.height
          const ctx = canvas.getContext('2d')!
          await page.render({ canvasContext: ctx, viewport }).promise
          urls.push(canvas.toDataURL('image/png'))
          if (cancelled) return
        }
        if (!cancelled) {
          setPages(urls)
          setLoading(false)
        }
      } catch (e: any) {
        if (!cancelled) {
          setError(e?.message || 'Failed to render PDF')
          setLoading(false)
        }
      }
    })()
    return () => { cancelled = true }
  }, [src])

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: color.surface }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 12px 8px' }}>
        <IconButton onClick={() => nav(-1)} size={36}><ArrowLeft size={20} /></IconButton>
        <div style={{ fontWeight: 800, fontSize: 15, flex: 1 }}>{title}</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 12, background: color.text }}>
        {loading && <div style={{ display: 'flex', justifyContent: 'center', padding: 60 }}><div className="shimmer" style={{ width: 200, height: 280, borderRadius: 8 }} /></div>}
        {error && <div style={{ color: '#fff', textAlign: 'center', padding: 40, fontSize: 14, fontWeight: 600 }}>{error}</div>}
        {pages.map((u, i) => (
          <img key={i} src={u} style={{ width: '100%', border: border.thin, marginBottom: 12, boxShadow: '4px 4px 0 rgba(0,0,0,0.6)', display: 'block' }} />
        ))}
      </div>
    </div>
  )
}
