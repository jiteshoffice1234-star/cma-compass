# CMA Compass

A self-study Android app for CMA (Certified Management Accountant) students preparing for ICMAI's Foundation and Intermediate exams under the 2022 syllabus.

## The Problem

CMA students in India face a fragmented study experience:

- **Scattered resources** — YouTube lectures are spread across dozens of channels (Akash Agarwal Classes, CMA Saarthi, JKSC CMA Surat, Unique Academy, CA Raj K Agrawal, etc.). Students waste time hunting for the right video for each chapter.
- **No structured curriculum** — The syllabus has 12 papers across 2 levels. Without a guided path, students miss chapters or study out of order.
- **No progress tracking** — It's hard to know which chapters are done, which quizzes are passed, and how much you've actually studied.
- **No unified practice** — Quizzes, flashcards, and PDF summaries live in different apps or websites. There's no single hub.

## What CMA Compass Solves

| Problem | Solution |
|---|---|
| Fragmented video sources | Curated, verified YouTube playlists per paper + specific lecture options per chapter (full lecture, quick revision, worked examples). Every video ID is live-checked. |
| No structured syllabus | Full Foundation (Papers 1–4) and Intermediate (Papers 5–12) syllabus mapped chapter-by-chapter with sections, key points, and XP rewards. |
| No progress tracking | Built-in progress store (video watched, quiz passed, XP earned, bookmarks). Chapters unlock sequentially. |
| No unified practice | Each chapter has a 10-question MCQ quiz, a flashcard stack, and linked PDF summaries/practice sheets — all in one screen. |
| App updates are painful | OTA update system downloads `web-build.zip` from GitHub Releases and extracts it at runtime — no APK reinstall needed. Falls back to APK if OTA fails. |
| Boring UI | Neobrutalism design — flat colors, 2–3px black borders, hard offset box shadows, JetBrains Mono + Inter. Fun to use. |

## Papers Covered

| Paper | Code | Level |
|---|---|---|
| 1. Fundamentals of Business Laws & Communication | FBLC | Foundation |
| 2. Fundamentals of Financial Accounting | FFA | Foundation |
| 3. Fundamentals of Business Mathematics & Statistics | FBMS | Foundation |
| 4. Fundamentals of Business Economics & Management | FBEM | Foundation |
| 5. Financial Accounting | FA | Intermediate |
| 6. Laws & Ethics | LE | Intermediate |
| 7. Direct & Indirect Taxation | DT | Intermediate |
| 8. Cost Accounting | CA | Intermediate |
| 9. Operations Management & Strategic Management | OMSM | Intermediate |
| 10. Corporate Accounting & Auditing | CAA | Intermediate |
| 11. Financial Management & Business Data Analytics | FMDA | Intermediate |
| 12. Management Accounting | MA | Intermediate |

## Features

- **Curated video lectures** — Paper-level playlists and chapter-specific lecture options with labels like "Full Lecture (3h 03min)" or "Quick Revision"
- **Chapter quizzes** — 10 MCQs per chapter, pass at 6/10 to earn 20 XP. Wrong-answer highlights with correct answer shown.
- **Flashcards** — Chapter-wise flashcards with a card-flip UI
- **PDF library** — Chapter summaries, practice sheets, and cheat sheets rendered with pdfjs-dist
- **Progress tracking** — XP counter, video watch marks, quiz scores, chapter bookmarks, sequential unlocking
- **OTA updates** — In-app update checker queries GitHub Releases for the latest version, downloads `web-build.zip`, extracts it to `filesDir/ota/{version}/`, and reloads the WebView. No APK reinstall.
- **Neobrutalism UI** — Single light theme. Flat `#FBFBF9` background, `#FFD43B` primary, `#6C63FF` secondary, `#2D2D2D` text, 2–3px solid black borders, `4px 4px 0 #000` shadows.

## Architecture

```
┌─────────────────────────────────────────────┐
│           Capacitor WebView (Android)        │
│  ┌─────────────────────────────────────────┐ │
│  │         React 18 + TypeScript           │ │
│  │  ┌───────┐ ┌────────┐ ┌─────────────┐  │ │
│  │  │Router │ │ Zustand│ │  Framer      │  │ │
│  │  │(react-│ │ (store)│ │  Motion      │  │ │
│  │  │router)│ │        │ │  (animations)│  │ │
│  │  └───────┘ └────────┘ └─────────────┘  │ │
│  │  ┌────────────────────────────────────┐ │ │
│  │  │  Screens + Components (ui.tsx)     │ │ │
│  │  │  ChapterDetail, QuizOverlay,       │ │ │
│  │  │  FlashcardStack, PdfTab, etc.      │ │ │
│  │  └────────────────────────────────────┘ │ │
│  │  ┌────────────────────────────────────┐ │ │
│  │  │  Data Layer                        │ │ │
│  │  │  curriculum.ts (chapters, papers)  │ │ │
│  │  │  videos.ts (video IDs per chapter) │ │ │
│  │  │  themes.ts (design tokens)         │ │ │
│  │  └────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────┐ │
│  │  Native Plugins (Java)                  │ │
│  │  OtaUpdaterPlugin: download zip →       │ │
│  │    extract → SharedPrefs → WebView reload│ │
│  │  ApkUpdaterPlugin: download APK →       │ │
│  │    install via Intent                   │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18, TypeScript |
| Styling | Tailwind CSS, inline styles |
| Animations | Framer Motion 11 |
| Routing | react-router-dom 6 |
| State Management | Zustand 5 |
| Bundler | Vite 5 |
| Mobile Runtime | Capacitor 6 (Android) |
| Database | @capacitor-community/sqlite |
| PDF Viewer | pdfjs-dist 4.4 |
| PDF Generation | jsPDF 2.5 |
| Icons | lucide-react |
| CI/CD | GitHub Actions |

## Setup & Development

### Prerequisites

- Node.js 18+
- npm 9+
- Android Studio (for building/running on device or emulator)
- A physical Android device or emulator (API 24+)

### 1. Clone & Install

```bash
git clone https://github.com/jiteshoffice1234-star/cma-compass.git
cd cma-compass
npm install
```

### 2. Development (Web)

```bash
npm run dev
```

Opens at `http://localhost:5173`. Most UI work can be done in the browser — the app uses responsive layouts that match the mobile view.

### 3. TypeScript Check & Build

```bash
npm run build
```

Runs `tsc` (type checking) followed by `vite build` (production bundle). Output goes to `dist/`.

### 4. Run on Android

```bash
npx cap sync android      # copy web build to Android project
npx cap open android      # open in Android Studio
```

Then build and run from Android Studio (or use `npx cap run android` if a device is connected).

### 5. Sync After Code Changes

After changing web code, rebuild and sync:

```bash
npm run build && npx cap sync android
```

## How OTA Updates Work

1. **GitHub Actions** builds the web app and packages `dist/` into `web-build.zip`
2. Both `cma-compass-vX.X.X.apk` and `web-build.zip` are uploaded as release assets
3. On app launch, `UpdatePopup.tsx` calls the GitHub Releases API to check for a newer version
4. If found, the user sees an update prompt:
   - **Install OTA** (default) — downloads `web-build.zip`, extracts to `filesDir/ota/{version}/`, writes version to `SharedPreferences`, and reloads the WebView from the new directory
   - **Download APK** — fallback; downloads the APK and triggers Android's package installer
5. On next app cold start, `MainActivity.java` reads `SharedPreferences` and loads the OTA directory if one is active

## Project Structure

```
cma-compass/
├── .github/workflows/
│   └── build-apk.yml          # CI: build APK + web-build.zip, create release
├── android/
│   └── app/src/main/java/com/accountiq/app/
│       ├── MainActivity.java   # App entry, OTA dir detection
│       ├── OtaUpdaterPlugin.java  # Native OTA update plugin
│       └── ApkUpdaterPlugin.java  # Native APK download/install plugin
├── src/
│   ├── components/
│   │   ├── ui.tsx              # Reusable: Tappable, Card, Button, IconButton, etc.
│   │   ├── QuizOverlay.tsx     # Quiz overlay for chapters
│   │   ├── FlashcardStack.tsx  # Chapter flashcards
│   │   ├── UpdatePopup.tsx     # OTA/APK update prompt
│   │   └── ...
│   ├── data/
│   │   ├── curriculum.ts       # Chapters, papers, level definitions, playlists
│   │   ├── videos.ts           # ChapterVideo[] per chapter
│   │   ├── chapters.ts         # Chapter data (Foundation core)
│   │   ├── chapters_found_extra.ts  # Extra Foundation chapters
│   │   ├── chapters_inter_a.ts # Intermediate Group I chapters
│   │   └── chapters_inter_b.ts # Intermediate Group II chapters
│   ├── lib/
│   │   ├── otaUpdater.ts       # TypeScript bridge for OtaUpdaterPlugin
│   │   ├── updateChecker.ts    # GitHub API version check
│   │   └── ...
│   ├── screens/
│   │   ├── ChapterDetail.tsx   # Chapter screen: video + tabs
│   │   ├── PaperScreen.tsx     # Paper listing with chapters
│   │   ├── LevelScreen.tsx     # Level selection (Foundation/Intermediate)
│   │   └── StageTestOverlay.tsx # Paper-level mock test overlay
│   ├── store.ts                # Zustand store (progress, bookmarks, etc.)
│   └── theme.ts                # Design tokens (neobrutalism)
├── index.html
├── package.json
├── capacitor.config.ts
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Releases

Each GitHub Release includes two assets:

- **`cma-compass-vX.X.X.apk`** — Standalone Android APK. Download and install on any Android device (API 24+).
- **`web-build.zip`** — OTA update bundle for in-app updates without reinstalling.

[View all releases →](https://github.com/jiteshoffice1234-star/cma-compass/releases)

## Contributing

This is a personal project. If you have suggestions or find broken video links, open an issue.

## Privacy

CMA Compass does not collect, store, or transmit any personal data. All progress is stored locally on your device. See the full [Privacy Policy](PRIVACY.md).

## License

Private — all rights reserved.
