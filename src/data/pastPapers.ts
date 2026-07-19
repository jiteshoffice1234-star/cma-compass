// Official ICMAI CMA past examination question papers (Syllabus 2022).
// These are the institute's own PDFs, verified reachable on the ICMAI CDN.
// Syllabus 2022 examinations began in 2023, so these are the genuine papers
// available under the current syllabus (older papers belong to Syllabus 2016
// and would not match the current course).
// Source: https://icmai.in/ClntStudents/Question_Papers_December2025 (and prior terms)

export interface ExamTerm {
  id: string
  label: string
  folder: string
}

// Newest first. Only terms whose PDFs are confirmed live are listed.
export const EXAM_TERMS: ExamTerm[] = [
  { id: 'dec25', label: 'December 2025', folder: 'Dec25' },
  { id: 'jun25', label: 'June 2025', folder: 'June25' },
  { id: 'dec24', label: 'December 2024', folder: 'Dec24' },
  { id: 'dec23', label: 'December 2023', folder: 'Dec23' },
]

const QP = 'https://dwpivt501gtb6.cloudfront.net/upload/students/QuestionPaper/syllabus2022'

// Official Foundation MCQ bank (Foundation exams are objective/CBT, not
// distributed as per-paper PDFs in the archive).
export const FOUNDATION_MCQ_BANK = 'https://icmai.in/studentswebsite/mcq_Foundation.php'

// Intermediate (5-12) and Final (13-20) papers are published per term as PDFs.
export function hasPastPapers(paperId: number): boolean {
  return paperId >= 5 && paperId <= 20
}

export function pastPaperUrl(paperId: number, folder: string): string {
  const n = paperId === 20 ? '20A' : String(paperId)
  return `${QP}/${folder}/Paper${n}.pdf`
}
