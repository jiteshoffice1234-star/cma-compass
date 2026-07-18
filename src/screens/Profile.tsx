import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Flame, Trophy, BookOpen, Footprints, Star, Layers, BarChart3, Brain,
  Landmark, Zap, Moon, Crown, Target, RotateCcw, Award, GraduationCap,
  Scroll, Calculator, Sigma, TrendingUp, Scale, Coins, Settings, Building2, LineChart, ClipboardList,
  RefreshCw,
} from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, LEVEL_LABELS, papersForLevel, Level } from '../data/curriculum'
import { levelForXp, BADGES } from '../lib/levels'
import { Card, Tappable, PageTransition, Button } from '../components/ui'
import { BottomSheet } from '../components/BottomSheet'
import { checkForUpdate, APP_VERSION } from '../lib/updateChecker'
import { UpdatePopup } from '../components/UpdatePopup'
import { color, border, shadow, font, APP_NAME } from '../theme'

const BADGE_ICONS: Record<string, any> = {
  footprints: Footprints, flame: Flame, star: Star, layers: Layers,
  'bar-chart-3': BarChart3, brain: Brain, landmark: Landmark, zap: Zap,
  moon: Moon, crown: Crown, scroll: Scroll, calculator: Calculator, sigma: Sigma,
  'trending-up': TrendingUp, scale: Scale, 'book-open': BookOpen, coins: Coins,
  settings: Settings, 'building-2': Building2, 'line-chart': LineChart, 'clipboard-list': ClipboardList,
}

const LEVEL_OPTIONS: Level[] = ['foundation', 'intermediate']

export function Profile() {
  const { name, totalXp, currentStreak, longestStreak, progress, badges, dailyGoal, level: userLevel, setDailyGoal, setLevel, resetProgress, showToast } = useStore()
  const [sheet, setSheet] = useState<'none' | 'goal' | 'reset' | 'level'>('none')
  const [checking, setChecking] = useState(false)
  const [updateInfo, setUpdateInfo] = useState<{ version: string; url: string; notes: string } | null>(null)

  const level = levelForXp(totalXp)
  const levelChapters = chaptersForLevel(userLevel)
  const chaptersDone = levelChapters.filter((c) => progress[c.id]?.completed).length
  const relevantBadges = BADGES.filter((b) => {
    if (b.id.startsWith('paper_')) return papersForLevel(userLevel).some((p) => `paper_${p.id}` === b.id)
    if (b.id === 'foundation') return userLevel === 'foundation'
    if (b.id === 'intermediate') return userLevel === 'intermediate'
    return true
  })
  const badgesUnlocked = relevantBadges.filter((b) => badges[b.id]).length
  const pct = level.next ? Math.min(100, Math.round(((totalXp - level.floor) / (level.next - level.floor)) * 100)) : 100

  const checkUpdates = async () => {
    setChecking(true)
    const info = await checkForUpdate(APP_VERSION)
    setChecking(false)
    if (info) setUpdateInfo({ version: info.latestVersion, url: info.downloadUrl, notes: info.releaseNotes })
    else showToast('You are on the latest version')
  }

  return (
    <PageTransition>
      <div style={{ height: '100%', overflowY: 'auto', background: color.surface, paddingBottom: 90 }}>
        {/* header */}
        <div style={{ padding: '24px 16px 16px', textAlign: 'center' }}>
          <div style={{ width: 76, height: 76, borderRadius: 14, border: border.thick, boxShadow: shadow.md, background: color.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 900, color: color.text }}>
            {name.charAt(0).toUpperCase()}
          </div>
          <div style={{ fontWeight: 900, fontSize: 21, marginTop: 12 }}>{name}</div>
          <div style={{ display: 'inline-block', color: '#fff', background: color.secondary, border: border.thin, borderRadius: 6, padding: '2px 10px', fontWeight: 800, fontSize: 13, marginTop: 6 }}>{level.name}</div>
          <div style={{ margin: '14px auto 0', maxWidth: 280 }}>
            <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: color.muted, marginBottom: 5, fontWeight: 700, fontFamily: font.mono }}>
              <span>{totalXp} XP</span>
              <span>{level.next ? `${level.next} XP` : 'MAX'}</span>
            </div>
            <div style={{ height: 12, background: color.card, border: border.thin, borderRadius: 6, overflow: 'hidden' }}>
              <motion.div animate={{ width: `${pct}%` }} style={{ height: '100%', background: color.warning }} />
            </div>
          </div>
        </div>

        {/* stats */}
        <div style={{ padding: '4px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          <StatCard icon={<Flame size={20} color={color.warning} />} value={currentStreak} label="Day streak" />
          <StatCard icon={<BookOpen size={20} color={color.secondary} />} value={`${chaptersDone}/${levelChapters.length}`} label="Chapters" />
          <StatCard icon={<Trophy size={20} color={color.success} />} value={`${badgesUnlocked}/${relevantBadges.length}`} label="Badges" />
        </div>

        {/* badges */}
        <div style={{ padding: '18px 16px 6px' }}>
          <div style={{ fontWeight: 900, fontSize: 17, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}><Award size={18} color={color.secondary} /> Badges</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {relevantBadges.map((b) => {
              const Icon = BADGE_ICONS[b.icon] || Star
              const unlocked = !!badges[b.id]
              return (
                <div key={b.id} style={{ display: 'flex', gap: 11, alignItems: 'center', background: unlocked ? color.card : color.surface, border: border.thin, borderRadius: 10, boxShadow: unlocked ? shadow.sm : 'none', padding: 12, opacity: unlocked ? 1 : 0.5 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, border: border.thin, background: unlocked ? color.primaryTint : color.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={unlocked ? color.secondary : color.muted} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{b.name}</div>
                    <div style={{ color: color.muted, fontSize: 11, lineHeight: 1.3, fontWeight: 600 }}>{unlocked ? 'Unlocked' : b.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* settings */}
        <div style={{ padding: '18px 16px 6px' }}>
          <div style={{ fontWeight: 900, fontSize: 17, marginBottom: 10 }}>Settings</div>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <SettingRow icon={<GraduationCap size={18} color={color.secondary} />} label="Level" value={LEVEL_LABELS[userLevel]} onClick={() => setSheet('level')} />
            <div style={{ height: 2, background: '#000' }} />
            <SettingRow icon={<Target size={18} color={color.success} />} label="Daily goal" value={`${dailyGoal} ${dailyGoal === 1 ? 'chapter' : 'chapters'}`} onClick={() => setSheet('goal')} />
            <div style={{ height: 2, background: '#000' }} />
            <SettingRow icon={<RefreshCw size={18} color={color.secondary} className={checking ? 'spin' : ''} />} label={checking ? 'Checking…' : 'Check for update'} value={`v${APP_VERSION}`} onClick={() => !checking && checkUpdates()} />
            <div style={{ height: 2, background: '#000' }} />
            <SettingRow icon={<RotateCcw size={18} color={color.danger} />} label="Reset progress" value="" onClick={() => setSheet('reset')} danger />
          </Card>
          <div className="mono" style={{ textAlign: 'center', color: color.muted, fontSize: 11, marginTop: 18, fontWeight: 700, fontFamily: font.mono }}>
            {APP_NAME} v{APP_VERSION} · Longest streak {longestStreak} days
          </div>
        </div>
      </div>

      <BottomSheet open={sheet === 'level'} onClose={() => setSheet('none')} title="Study Level">
        <div style={{ color: color.muted, fontSize: 13, marginBottom: 12, lineHeight: 1.5, fontWeight: 600 }}>
          The whole app is scoped to one level. Switching changes your chapters, quizzes and tests. Your XP and streak are kept.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '2px 4px 4px 2px' }}>
          {LEVEL_OPTIONS.map((lv) => (
            <Tappable key={lv} onClick={() => { setLevel(lv); setSheet('none') }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: userLevel === lv ? color.primaryTint : color.card, border: userLevel === lv ? border.thick : border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 16 }}>
              <span style={{ fontWeight: 800, fontSize: 15 }}>{LEVEL_LABELS[lv]} · {papersForLevel(lv).length} papers</span>
              {userLevel === lv && <span style={{ color: color.secondary, fontWeight: 900 }}>✓</span>}
            </Tappable>
          ))}
        </div>
      </BottomSheet>

      <BottomSheet open={sheet === 'goal'} onClose={() => setSheet('none')} title="Daily Goal">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '2px 4px 4px 2px' }}>
          {[1, 2, 3].map((g) => (
            <Tappable key={g} onClick={() => { setDailyGoal(g); setSheet('none') }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: dailyGoal === g ? color.primaryTint : color.card, border: dailyGoal === g ? border.thick : border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: 16 }}>
              <span style={{ fontWeight: 800, fontSize: 15 }}>{g} {g === 1 ? 'chapter' : 'chapters'} / day</span>
              {dailyGoal === g && <span style={{ color: color.secondary, fontWeight: 900 }}>✓</span>}
            </Tappable>
          ))}
        </div>
      </BottomSheet>

      <BottomSheet open={sheet === 'reset'} onClose={() => setSheet('none')} title="Reset all progress?">
        <div style={{ color: color.muted, fontSize: 14, marginBottom: 16, lineHeight: 1.5, fontWeight: 600 }}>
          This permanently erases your XP, streak, badges and chapter progress. This cannot be undone.
        </div>
        <div style={{ display: 'flex', gap: 12, padding: '2px 4px 4px 2px' }}>
          <Button variant="ghost" onClick={() => setSheet('none')} style={{ flex: 1 }}>Cancel</Button>
          <Button variant="danger" onClick={async () => { await resetProgress(); setSheet('none') }} style={{ flex: 1 }}>Reset</Button>
        </div>
      </BottomSheet>

      <UpdatePopup
        open={!!updateInfo}
        latestVersion={updateInfo?.version || ''}
        downloadUrl={updateInfo?.url || ''}
        releaseNotes={updateInfo?.notes || ''}
        onLater={() => setUpdateInfo(null)}
      />
    </PageTransition>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: React.ReactNode; label: string }) {
  return (
    <div style={{ background: color.card, border: border.thin, borderRadius: 10, boxShadow: shadow.sm, padding: '14px 8px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{icon}</div>
      <div className="mono" style={{ fontWeight: 800, fontSize: 17, fontFamily: font.mono }}>{value}</div>
      <div style={{ color: color.muted, fontSize: 11, marginTop: 1, fontWeight: 700 }}>{label}</div>
    </div>
  )
}

function SettingRow({ icon, label, value, onClick, danger }: { icon: React.ReactNode; label: string; value: string; onClick: () => void; danger?: boolean }) {
  return (
    <Tappable onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, width: '100%', textAlign: 'left' }}>
      {icon}
      <span style={{ fontWeight: 700, fontSize: 15, flex: 1, color: danger ? color.danger : color.text }}>{label}</span>
      {value && <span className="mono" style={{ color: color.muted, fontSize: 13, fontWeight: 700, fontFamily: font.mono }}>{value}</span>}
    </Tappable>
  )
}
