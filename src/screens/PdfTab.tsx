import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText, BookOpen, Zap, ArrowRight, Loader2, GraduationCap } from 'lucide-react'
import { useStore } from '../store'
import { curriculum } from '../data/curriculum'
import { studyMaterialForPaper } from '../data/studyMaterial'
import { Card } from '../components/ui'
import { generateChapterPdf, savePdf, PdfType } from '../lib/pdfGen'
import { color, border } from '../theme'

const CARDS: { type: PdfType; label: string; desc: string; icon: any; tint: string; iconColor: string }[] = [
  { type: 'summary', label: 'Summary', desc: 'Key points expanded to prose', icon: BookOpen, tint: color.secondaryTint, iconColor: color.secondary },
  { type: 'practice', label: 'Practice Problems', desc: '10 worked questions', icon: FileText, tint: color.successTint, iconColor: color.success },
  { type: 'cheat', label: 'Cheat Sheet', desc: 'Formulas & key terms', icon: Zap, tint: color.primaryTint, iconColor: color.warning },
]

export function PdfTab({ chapterId }: { chapterId: number }) {
  const nav = useNavigate()
  const markPdfRead = useStore((s) => s.markPdfRead)
  const progress = useStore((s) => s.progress[chapterId])
  const read: string[] = progress ? JSON.parse(progress.pdfs_read || '[]') : []
  const [loading, setLoading] = useState<PdfType | null>(null)

  const chapter = curriculum.find((c) => c.id === chapterId)
  const officialDocs = chapter ? studyMaterialForPaper(chapter.paperId) : []

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
      {officialDocs.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
            <GraduationCap size={18} color={color.secondary} /> Official ICMAI Study Material
          </div>
          <div style={{ color: color.muted, fontSize: 13, marginBottom: 12, fontWeight: 600 }}>
            Syllabus 2022 · opens in in-app PDF reader
          </div>
          {officialDocs.map((doc, i) => (
            <Card key={i} style={{ padding: 14, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 14 }}
              onClick={() => nav(`/pdf?src=${encodeURIComponent(doc.url)}&title=${encodeURIComponent(doc.title)}`)}>
              <div style={{ width: 44, height: 44, borderRadius: 8, border: border.thin, background: color.warningTint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color.warning }}>
                <GraduationCap size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14 }}>{doc.title}</div>
              </div>
              <ArrowRight size={18} color={color.secondary} />
            </Card>
          ))}
        </div>
      )}

      <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 4 }}>Chapter PDFs</div>
      <div style={{ color: color.muted, fontSize: 13, marginBottom: 14, fontWeight: 600 }}>Generated offline · cached on your device.</div>
      {CARDS.map((c) => {
        const Icon = c.icon
        const isRead = read.includes(c.type)
        return (
          <Card key={c.type} style={{ padding: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 14 }}
            onClick={() => !loading && open(c.type)}>
            <div style={{ width: 44, height: 44, borderRadius: 8, border: border.thin, background: c.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.iconColor }}>
              {loading === c.type ? <Loader2 size={20} className="spin" /> : <Icon size={20} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>{c.label} {isRead && <span style={{ fontSize: 11, color: color.success, fontWeight: 800 }}>✓ read</span>}</div>
              <div style={{ color: color.muted, fontSize: 13, fontWeight: 600 }}>{c.desc}</div>
            </div>
            <ArrowRight size={18} color={color.secondary} />
          </Card>
        )
      })}
    </div>
  )
}
