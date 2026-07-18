import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store'
import { curriculum } from '../data/curriculum'
import { generateChapterPdf, savePdf, PDF_TYPES, TOTAL_PDFS } from '../lib/pdfGen'
import { FileText, Check } from 'lucide-react'

export function PdfSetupScreen() {
  const [done, setDone] = useState(0)
  const [finished, setFinished] = useState(false)
  const setPdfsGenerated = useStore((s) => s.setPdfsGenerated)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      let count = 0
      for (const ch of curriculum) {
        for (const type of PDF_TYPES) {
          try {
            const data = await generateChapterPdf(ch.id, type)
            await savePdf(ch.id, type, data)
          } catch {
            /* PDFs can be regenerated on demand later */
          }
          count++
          if (!cancelled) setDone(count)
        }
      }
      if (cancelled) return
      setFinished(true)
      setTimeout(async () => {
        await setPdfsGenerated()
      }, 700)
    })()
    return () => { cancelled = true }
  }, [])

  const pct = Math.round((done / TOTAL_PDFS) * 100)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: 'absolute', inset: 0, zIndex: 420, background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
      <motion.div animate={{ rotate: finished ? 0 : 360 }} transition={{ repeat: finished ? 0 : Infinity, duration: 1.2, ease: 'linear' }} style={{ width: 72, height: 72, borderRadius: 18, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        {finished ? <Check size={36} color="var(--success)" /> : <FileText size={34} color="var(--accent)" />}
      </motion.div>
      <div style={{ fontWeight: 800, fontSize: 20 }}>{finished ? 'Library ready!' : 'Setting up your library…'}</div>
      <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 6 }}>{finished ? 'Your study PDFs are ready.' : `${done} / ${TOTAL_PDFS} PDFs generated`}</div>
      <div style={{ width: '80%', height: 8, background: 'var(--border)', borderRadius: 4, overflow: 'hidden', marginTop: 20 }}>
        <motion.div animate={{ width: `${pct}%` }} style={{ height: '100%', background: 'var(--accent)', borderRadius: 4 }} />
      </div>
    </motion.div>
  )
}
