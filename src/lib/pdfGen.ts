import { jsPDF } from 'jspdf'
import { curriculum } from '../data/curriculum'
import { questions } from '../data/questions'
import { formulas } from '../data/formulas'
import { Capacitor } from '@capacitor/core'
import { Filesystem, Directory } from '@capacitor/filesystem'

export type PdfType = 'summary' | 'practice' | 'cheat'

const ACCENT: Record<string, [number, number, number]> = {
  summary: [59, 130, 246],
  practice: [34, 197, 94],
  cheat: [168, 85, 247],
}

const TYPE_LABEL: Record<PdfType, string> = {
  summary: 'Summary',
  practice: 'Practice Problems',
  cheat: 'Cheat Sheet',
}

function header(doc: jsPDF, chapter: any, type: PdfType) {
  const [r, g, b] = ACCENT[type]
  doc.setFillColor(r, g, b)
  doc.rect(0, 0, 210, 26, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.text('CMA Compass', 14, 12)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text(`${TYPE_LABEL[type]} · Chapter ${chapter.id}: ${chapter.title}`, 14, 19)
  doc.setTextColor(20, 20, 20)
}

function footer(doc: jsPDF) {
  const pages = doc.getNumberOfPages()
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text('CMA Compass · Personal study notes · Generated offline', 14, 287)
  }
}

export async function generateChapterPdf(chapterId: number, type: PdfType): Promise<Uint8Array> {
  const chapter = curriculum.find((c) => c.id === chapterId)!
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  header(doc, chapter, type)
  let y = 36

  if (type === 'summary') {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(20, 20, 20)
    doc.text(`${chapter.title}`, 14, y)
    y += 8
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    doc.setTextColor(60, 60, 60)
    chapter.keyPoints.forEach((kp) => {
      const lines = doc.splitTextToSize('• ' + kp, 182)
      lines.forEach((l: string) => {
        if (y > 280) { doc.addPage(); y = 20 }
        doc.text(l, 14, y)
        y += 6
      })
      y += 2
    })
    y += 4
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Key Definitions', 14, y)
    y += 7
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    chapter.keyPoints.slice(0, 4).forEach((kp) => {
      const lines = doc.splitTextToSize(kp, 182)
      lines.forEach((l: string) => {
        if (y > 280) { doc.addPage(); y = 20 }
        doc.text(l, 14, y)
        y += 5
      })
      y += 2
    })
  } else if (type === 'practice') {
    const qs = questions.filter((q) => q.chapterId === chapterId)
    doc.setFont('helvetica', 'normal')
    qs.forEach((q, i) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      if (y > 255) { doc.addPage(); y = 20 }
      const qLines = doc.splitTextToSize(`Q${i + 1}. ${q.question}`, 182)
      qLines.forEach((l: string) => { doc.text(l, 14, y); y += 5 })
      y += 1
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      q.options.forEach((opt, oi) => {
        const mark = oi === q.correctIndex ? '✓ ' : '   '
        const lines = doc.splitTextToSize(`${mark}${String.fromCharCode(65 + oi)}. ${opt}`, 178)
        lines.forEach((l: string) => { doc.text(l, 18, y); y += 5 })
      })
      const sol = doc.splitTextToSize(`Solution: Option ${String.fromCharCode(65 + q.correctIndex)} is correct because it matches the chapter concept above.`, 182)
      doc.setTextColor(30, 120, 60)
      sol.forEach((l: string) => { if (y > 280) { doc.addPage(); y = 20 } doc.text(l, 14, y); y += 5 })
      doc.setTextColor(60, 60, 60)
      y += 5
    })
  } else {
    // cheat sheet
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Quick Reference', 14, y)
    y += 7
    const chapFormulas = formulas.filter((f) => ['Core', 'Income Statement', 'Balance Sheet', 'Depreciation', 'Inventory', 'Ratios', 'Cash Flow', 'Costing', 'Company', 'Partnership', 'Consolidation', 'Leases', 'Tax (India)', 'GST (India)'].includes(f.category))
    doc.setFontSize(9)
    chapFormulas.slice(0, 14).forEach((f) => {
      if (y > 280) { doc.addPage(); y = 20 }
      doc.setFont('helvetica', 'bold')
      doc.text(f.name, 14, y)
      y += 4
      doc.setFont('helvetica', 'normal')
      const lines = doc.splitTextToSize(`${f.formula} — ${f.note}`, 182)
      lines.forEach((l: string) => { doc.text(l, 14, y); y += 4 })
      y += 3
    })
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    if (y > 255) { doc.addPage(); y = 20 }
    doc.text('Key Terms', 14, y)
    y += 6
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    chapter.keyPoints.slice(0, 5).forEach((kp) => {
      const lines = doc.splitTextToSize('• ' + kp, 182)
      lines.forEach((l: string) => { doc.text(l, 14, y); y += 4 })
      y += 1
    })
  }
  footer(doc)
  return doc.output('arraybuffer') as unknown as Uint8Array
}

export async function savePdf(chapterId: number, type: PdfType, data: Uint8Array): Promise<string> {
  const fileName = `ch${chapterId}_${type}.pdf`
  if (Capacitor.isNativePlatform()) {
    await Filesystem.mkdir({ path: 'accountiq/pdfs', directory: Directory.Documents, recursive: true }).catch(() => {})
    // write base64
    let binary = ''
    const bytes = new Uint8Array(data)
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
    const b64 = btoa(binary)
    await Filesystem.writeFile({ path: 'accountiq/pdfs/' + fileName, data: b64, directory: Directory.Documents, recursive: true })
    return (await Filesystem.getUri({ path: 'accountiq/pdfs/' + fileName, directory: Directory.Documents })).uri
  } else {
    const blob = new Blob([data as any], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    return url
  }
}

export async function getPdfUri(chapterId: number, type: PdfType): Promise<string | null> {
  const fileName = `ch${chapterId}_${type}.pdf`
  if (Capacitor.isNativePlatform()) {
    try {
      const r = await Filesystem.getUri({ path: 'accountiq/pdfs/' + fileName, directory: Directory.Documents })
      return r.uri
    } catch {
      return null
    }
  } else {
    return null
  }
}

export const PDF_TYPES: PdfType[] = ['summary', 'practice', 'cheat']
export const TOTAL_PDFS = curriculum.length * PDF_TYPES.length
