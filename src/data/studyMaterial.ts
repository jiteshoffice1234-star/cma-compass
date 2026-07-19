// Official ICMAI CMA Study Material (Syllabus 2022) — per paper.
// URLs are the institute's own downloadable books, hosted on ICMAI's CDN
// (icmai.in → dwpivt501gtb6.cloudfront.net). Each is a genuine, complete book
// opened INSIDE the app via the in-app PDF reader.
// Source pages:
//   https://icmai.in/ClntStudents/Foundation_Study_Materials
//   https://icmai.in/ClntStudents/Intermediate_Study_Materials
//   https://icmai.in/ClntStudents/Final_Study_Materials

export interface StudyDoc {
  paperId: number
  title: string
  url: string
}

const CDN = 'https://dwpivt501gtb6.cloudfront.net/upload/students'
const FINAL = `${CDN}/Syllabus2022/Final_Stdy_Mtrl`

export const STUDY_MATERIAL: Record<number, StudyDoc[]> = {
  // ---- Foundation ----
  1: [{ paperId: 1, title: 'Official Study Material — Business Laws & Communication', url: `${CDN}/Paper1_07042026.pdf` }],
  2: [{ paperId: 2, title: 'Official Study Material — Financial & Cost Accounting', url: `${CDN}/Paper2_07042026.pdf` }],
  3: [{ paperId: 3, title: 'Official Study Material — Business Maths & Statistics', url: `${CDN}/Paper3_07042026.pdf` }],
  4: [{ paperId: 4, title: 'Official Study Material — Business Economics & Management', url: `${CDN}/Paper4_07042026.pdf` }],

  // ---- Intermediate ----
  5: [{ paperId: 5, title: 'Official Study Material — Business Laws & Ethics', url: `${CDN}/P5_0904_2026.pdf` }],
  6: [{ paperId: 6, title: 'Official Study Material — Financial Accounting', url: `${CDN}/P6_0904_2026.pdf` }],
  7: [
    { paperId: 7, title: 'Official Study Material — Direct Taxation (Section A)', url: `${CDN}/P7A_0904_2026.pdf` },
    { paperId: 7, title: 'Official Study Material — Indirect Taxation (Section B)', url: `${CDN}/P7B_0904_2026.pdf` },
  ],
  8: [{ paperId: 8, title: 'Official Study Material — Cost Accounting', url: `${CDN}/P8_0904_2026.pdf` }],
  9: [{ paperId: 9, title: 'Official Study Material — Operations & Strategic Management', url: `${CDN}/P9_0904_2026.pdf` }],
  10: [{ paperId: 10, title: 'Official Study Material — Corporate Accounting & Auditing', url: `${CDN}/P10_0904_2026.pdf` }],
  11: [{ paperId: 11, title: 'Official Study Material — Financial Management & Data Analytics', url: `${CDN}/P11_0904_2026.pdf` }],
  12: [{ paperId: 12, title: 'Official Study Material — Management Accounting', url: `${CDN}/P12_0904_2026.pdf` }],

  // ---- Final ----
  13: [{ paperId: 13, title: 'Official Study Material — Corporate & Economic Laws', url: `${FINAL}/P13_new.pdf` }],
  14: [{ paperId: 14, title: 'Official Study Material — Strategic Financial Management', url: `${FINAL}/P14.pdf` }],
  15: [{ paperId: 15, title: 'Official Study Material — Direct Tax Laws & International Taxation', url: `${FINAL}/P15_Mar_26.pdf` }],
  16: [{ paperId: 16, title: 'Official Study Material — Strategic Cost Management', url: `${FINAL}/Paper16_05.05.25_CP.pdf` }],
  17: [{ paperId: 17, title: 'Official Study Material — Cost & Management Audit', url: `${FINAL}/Paper17_Syll-2022_Rev_new.pdf` }],
  18: [{ paperId: 18, title: 'Official Study Material — Corporate Financial Reporting', url: `${FINAL}/P18_new.pdf` }],
  19: [{ paperId: 19, title: 'Official Study Material — Indirect Tax Laws & Practice', url: `${FINAL}/Paper19_Mar2026.pdf` }],
  20: [
    { paperId: 20, title: 'Official Study Material — Strategic Performance Mgmt & Business Valuation (20A)', url: `${FINAL}/P20A_new.pdf` },
    { paperId: 20, title: 'Elective — Risk Management in Banking & Insurance (20B)', url: `${FINAL}/P20B.pdf` },
    { paperId: 20, title: 'Elective — Entrepreneurship & Start Up (20C)', url: `${FINAL}/P20C_new.pdf` },
  ],
}

export function studyMaterialForPaper(paperId: number): StudyDoc[] {
  return STUDY_MATERIAL[paperId] ?? []
}
