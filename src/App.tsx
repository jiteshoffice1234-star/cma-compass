import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from './store'
import { setStatusBarColor, isNative } from './lib/capacitor'
import { BADGES } from './lib/levels'
import { checkForUpdate } from './lib/updateChecker'
import { UpdatePopup } from './components/UpdatePopup'
import { Home } from './screens/Home'
import { Chapters } from './screens/Chapters'
import { ChapterDetail } from './screens/ChapterDetail'
import { Practice } from './screens/Practice'
import { Profile } from './screens/Profile'
import { Onboarding } from './screens/Onboarding'
import { BottomNav } from './components/BottomNav'
import { Toast } from './components/Toast'
import { LevelUpOverlay, BadgeUnlockOverlay } from './components/Overlay'
import { PdfViewer } from './screens/PdfViewer'
import { isNative } from './lib/capacitor'
import { hasStagedOtaUpdate } from './lib/otaUpdater'

const APP_VERSION = '1.4.0'

export default function App() {
  const { ready, onboardingComplete, uiMode, init, levelUp, badgeUnlock, toast, clearToast } = useStore()
  const [updateInfo, setUpdateInfo] = useState<{ version: string; url: string; notes: string; ota: boolean } | null>(null)
  const [themeApplied, setThemeApplied] = useState(false)

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (!ready) return
    const t = setTimeout(async () => {
      const info = await checkForUpdate(APP_VERSION)
      if (info) {
        setUpdateInfo({
          version: info.latestVersion,
          url: info.downloadUrl,
          notes: info.releaseNotes,
          ota: isNative,
        })
      }
    }, 5000)
    return () => clearTimeout(t)
  }, [ready])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', uiMode)
    if (isNative) setStatusBarColor(uiMode)
    setThemeApplied(true)
  }, [uiMode])

  if (!ready) {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div className="shimmer" style={{ width: 120, height: 120, borderRadius: 24 }} />
      </div>
    )
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)', overflow: 'hidden' }}>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/chapter/:id" element={<ChapterDetail />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pdf" element={<PdfViewer />} />
          </Routes>
        </AnimatePresence>
      </div>

      {onboardingComplete && <BottomNav />}

      <AnimatePresence>
        {!onboardingComplete && <Onboarding key="onboarding" />}
      </AnimatePresence>

      <Toast message={toast} onClose={clearToast} />
      <LevelUpOverlay data={levelUp} />
      <BadgeUnlockOverlay data={badgeUnlock} />
      <UpdatePopup
        open={!!updateInfo}
        latestVersion={updateInfo?.version || ''}
        downloadUrl={updateInfo?.url || ''}
        releaseNotes={updateInfo?.notes || ''}
        onLater={() => setUpdateInfo(null)}
      />

      {/* top-bar streak + bell are inside screens; keep mount point */}
      <TopBarBridge />
    </div>
  )
}

function TopBarBridge() {
  return null
}
