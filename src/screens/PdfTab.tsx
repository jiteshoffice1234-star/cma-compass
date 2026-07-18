import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText, BookOpen, Zap, ArrowRight, Loader2 } from 'lucide-react'
import { useStore } from '../store'
import { Tappable, Card, Skeleton } from '../components/ui'
import { generateChapterPdf, savePdf, PdfType } from '../lib/pdfGen'
import { curriculum } from '../data/curriculum'

const CARDS: { type: PdfType; label: string; desc: string; icon: any; color: string }[] = [
  { type: 'summary', label: 'Summary', desc: 'Key points expanded to prose', icon: BookOpen, color: 'var(--accent)' },
  { type: 'practice', label: 'Practice Problems', desc: '10 worked questions', icon: FileText, color: 'var(--success)' },
  { type: 'cheat', label: 'Cheat Sheet', desc: 'Formulas & key terms', icon: Zap, color: 'var(--xp)' },
]

export function PdfTab({ chapterId }: { chapterId: number }) {
  const nav = useNavigate()
  const markPdfRead = useStore((s) => s.markPdfRead)
  const progress = useStore((s) => s.progress[chapterId])
  const read: string[] = progress ? JSON.parse(progress.pdfs_read || '[]') : []
  const [loading, setLoading] = useState<PdfType | null>(null)

  const open = async (type: PdfType) => {
    setLoading(type)
    try {
      const data = await generateChapterPdf(chapterId, type)
      const uri = await savePdf(chapterId, type, data)
      await markPdfRead(chapterId, type)
      setLoading(null)
      nav(`/pdf?src=${encodeURIComponent(uri)}&title=${encodeURIComponent('Chapter ' + chapterId + ' · ' + type)}`)
    } catch (e) {
      setLoading(null)
      useStore.getState().showToast('Could not open PDF')
    }
  }

  return (
    <div>
      <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Chapter PDFs</div>
      <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 14 }}>Generated offline · cached on your device.</div>
      {CARDS.map((c) => {
        const Icon = c.icon
        const isRead = read.includes(c.type)
        return (
          <Card key={c.type} style={{ padding: 14, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 14 }}
            onClick={() => !loading && open(c.type)}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color }}>
              {loading === c.type ? <Loader2 size={20} className="spin" /> : <Icon size={20} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>{c.label} {isRead && <span style={{ fontSize: 11, color: 'var(--success)', fontWeight: 600 }}>✓ read</span>}</div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>{c.desc}</div>
            </div>
            <ArrowRight size={18} color="var(--muted)" />
          </Card>
        )
      })}
    </div>
  )
}
