# CMA Compass

A self-study Android app for CMA (Certified Management Accountant) students — Foundation & Intermediate levels, ICMAI 2022 syllabus.

Curated YouTube lectures, chapter-wise quizzes, flashcards, and PDF summaries — all in one place with a neobrutalism UI.

## Features

- **Curated video lectures** — Verified YouTube playlists per paper and specific videos per chapter (e.g., Cash Flow — AS 3 full lecture, quick revision, etc.)
- **Chapter quizzes** — 10-question MCQs per chapter, pass (6/10) to earn XP
- **Flashcards** — Chapter-wise spaced-repetition flashcards
- **PDF library** — Chapter summaries, practice sheets, and reference material
- **Progress tracking** — XP, video watch status, quiz scores, bookmarks
- **OTA updates** — In-app update via web-build.zip (no APK download needed); auto-falls back to APK if OTA fails
- **Neobrutalism design** — Flat colors, bold borders, hard offset shadows, JetBrains Mono + Inter

## Tech Stack

| Layer | Stack |
|---|---|
| UI | React 18, TypeScript, Framer Motion, Tailwind CSS |
| Bundler | Vite 5 |
| Mobile | Capacitor 6 (Android) |
| State | Zustand |
| Storage | @capacitor-community/sqlite |
| PDF | pdfjs-dist, jsPDF |
| CI/CD | GitHub Actions (build APK + web-build.zip) |

## Development

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server
npm run build      # TypeScript check + production build
npx cap sync android && npx cap open android   # deploy to Android
```

## Releases

Assets are built automatically by GitHub Actions:
- `cma-compass-vX.X.X.apk` — installable APK
- `web-build.zip` — OTA update bundle extracted at runtime
