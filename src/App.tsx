import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStore } from './store'
import { setStatusBarColor, isNative } from './lib/capacitor'
import { checkForUpdate, APP_VERSION } from './lib/updateChecker'
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
import { LoaderScreen } from './components/Loader'
import { color } from './theme'

export default function App() {
  const { ready, onboardingComplete, init, levelUp, badgeUnlock, toast, clearToast } = useStore()
  const [updateInfo, setUpdateInfo] = useState<{ version: string; url: string; notes: string; ota: boolean } | null>(null)

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (!ready) return
    if (isNative) setStatusBarColor('light')
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

  if (!ready) {
    return <LoaderScreen />
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: color.surface, overflow: 'hidden' }}>
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
    </div>
  )
}
