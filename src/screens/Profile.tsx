import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Flame, Trophy, BookOpen, Footprints, Star, Layers, BarChart3, Brain,
  Landmark, Zap, Moon, Crown, Palette, Target, RotateCcw, Award, GraduationCap,
  Scroll, Calculator, Sigma, TrendingUp, Scale, Coins, Settings, Building2, LineChart, ClipboardList,
} from 'lucide-react'
import { useStore } from '../store'
import { chaptersForLevel, LEVEL_LABELS, papersForLevel, Level } from '../data/curriculum'
import { levelForXp, BADGES } from '../lib/levels'
import { ThemeMode } from '../store'
import { Card, Tappable, PageTransition } from '../components/ui'
import { BottomSheet } from '../components/BottomSheet'

const BADGE_ICONS: Record<string, any> = {
  footprints: Footprints, flame: Flame, star: Star, layers: Layers,
  'bar-chart-3': BarChart3, brain: Brain, landmark: Landmark, zap: Zap,
  moon: Moon, crown: Crown, scroll: Scroll, calculator: Calculator, sigma: Sigma,
  'trending-up': TrendingUp, scale: Scale, 'book-open': BookOpen, coins: Coins,
  settings: Settings, 'building-2': Building2, 'line-chart': LineChart, 'clipboard-list': ClipboardList,
}

const LEVEL_OPTIONS: Level[] = ['foundation', 'intermediate']

const THEMES: { id: ThemeMode; label: string; swatch: string }[] = [
  { id: 'dark', label: 'Dark', swatch: '#0f1115' },
  { id: 'light', label: 'Light', swatch: '#f5f5f7' },
  { id: 'claude', label: 'Claude', swatch: '#d97757' },
]

export function Profile() {
  const { name, totalXp, currentStreak, longestStreak, progress, badges, uiMode, dailyGoal, level: userLevel, setTheme, setDailyGoal, setLevel, resetProgress } = useStore()
  const [sheet, setSheet] = useState<'none' | 'theme' | 'goal' | 'reset' | 'level'>('none')

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

  return (
    <PageTransition>
      <div style={{ height: '100%', overflowY: 'auto', background: 'var(--bg)', paddingBottom: 90 }}>
        {/* header */}
        <div style={{ padding: '24px 16px 16px', textAlign: 'center' }}>
          <div style={{ width: 76, height: 76, borderRadius: 38, background: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 800, color: '#fff' }}>
            {name.charAt(0).toUpperCase()}
          </div>
          <div style={{ fontWeight: 800, fontSize: 22, marginTop: 12 }}>{name}</div>
          <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 14, marginTop: 2 }}>{level.name}</div>
          <div style={{ margin: '14px auto 0', maxWidth: 280 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)', marginBottom: 5 }}>
              <span>{totalXp} XP</span>
              <span>{level.next ? `${level.next} XP` : 'Max level'}</span>
            </div>
            <div style={{ height: 8, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
              <motion.div animate={{ width: `${pct}%` }} style={{ height: '100%', background: 'var(--xp)', borderRadius: 4 }} />
            </div>
          </div>
        </div>

        {/* stats */}
        <div style={{ padding: '4px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          <StatCard icon={<Flame size={20} color="var(--xp)" />} value={currentStreak} label="Day streak" />
          <StatCard icon={<BookOpen size={20} color="var(--accent)" />} value={`${chaptersDone}/${levelChapters.length}`} label="Chapters" />
          <StatCard icon={<Trophy size={20} color="var(--success)" />} value={`${badgesUnlocked}/${relevantBadges.length}`} label="Badges" />
        </div>

        {/* badges */}
        <div style={{ padding: '18px 16px 6px' }}>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}><Award size={18} color="var(--accent)" /> Badges</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {relevantBadges.map((b) => {
              const Icon = BADGE_ICONS[b.icon] || Star
              const unlocked = !!badges[b.id]
              return (
                <div key={b.id} style={{ display: 'flex', gap: 11, alignItems: 'center', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 12, opacity: unlocked ? 1 : 0.45 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: unlocked ? 'rgba(124,92,255,0.15)' : 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={unlocked ? 'var(--accent)' : 'var(--muted)'} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{b.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 11, lineHeight: 1.3 }}>{unlocked ? 'Unlocked' : b.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* settings */}
        <div style={{ padding: '18px 16px 6px' }}>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 10 }}>Settings</div>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <SettingRow icon={<GraduationCap size={18} color="var(--accent)" />} label="Level" value={LEVEL_LABELS[userLevel]} onClick={() => setSheet('level')} />
            <div style={{ height: 1, background: 'var(--border)' }} />
            <SettingRow icon={<Palette size={18} color="var(--accent)" />} label="Theme" value={THEMES.find((t) => t.id === uiMode)?.label || 'Dark'} onClick={() => setSheet('theme')} />
            <div style={{ height: 1, background: 'var(--border)' }} />
            <SettingRow icon={<Target size={18} color="var(--success)" />} label="Daily goal" value={`${dailyGoal} ${dailyGoal === 1 ? 'chapter' : 'chapters'}`} onClick={() => setSheet('goal')} />
            <div style={{ height: 1, background: 'var(--border)' }} />
            <SettingRow icon={<RotateCcw size={18} color="var(--error)" />} label="Reset progress" value="" onClick={() => setSheet('reset')} danger />
          </Card>
          <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 11, marginTop: 18 }}>
            AccountIQ · Longest streak {longestStreak} days
          </div>
        </div>
      </div>

      <BottomSheet open={sheet === 'theme'} onClose={() => setSheet('none')} title="Choose Theme">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {THEMES.map((t) => (
            <Tappable key={t.id} onClick={() => { setTheme(t.id); setSheet('none') }} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--card)', border: `1px solid ${uiMode === t.id ? 'var(--accent)' : 'var(--border)'}`, borderRadius: 14, padding: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: t.swatch, border: '1px solid var(--border)' }} />
              <span style={{ fontWeight: 700, fontSize: 15, flex: 1 }}>{t.label}</span>
              {uiMode === t.id && <span style={{ color: 'var(--accent)', fontWeight: 800 }}>✓</span>}
            </Tappable>
          ))}
        </div>
      </BottomSheet>

      <BottomSheet open={sheet === 'level'} onClose={() => setSheet('none')} title="Study Level">
        <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 12, lineHeight: 1.5 }}>
          The whole app is scoped to one level. Switching changes your chapters, quizzes and past papers. Your XP and streak are kept.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {LEVEL_OPTIONS.map((lv) => (
            <Tappable key={lv} onClick={() => { setLevel(lv); setSheet('none') }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card)', border: `1px solid ${userLevel === lv ? 'var(--accent)' : 'var(--border)'}`, borderRadius: 14, padding: 16 }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{LEVEL_LABELS[lv]} · {papersForLevel(lv).length} papers</span>
              {userLevel === lv && <span style={{ color: 'var(--accent)', fontWeight: 800 }}>✓</span>}
            </Tappable>
          ))}
        </div>
      </BottomSheet>

      <BottomSheet open={sheet === 'goal'} onClose={() => setSheet('none')} title="Daily Goal">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[1, 2, 3].map((g) => (
            <Tappable key={g} onClick={() => { setDailyGoal(g); setSheet('none') }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card)', border: `1px solid ${dailyGoal === g ? 'var(--accent)' : 'var(--border)'}`, borderRadius: 14, padding: 16 }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{g} {g === 1 ? 'chapter' : 'chapters'} / day</span>
              {dailyGoal === g && <span style={{ color: 'var(--accent)', fontWeight: 800 }}>✓</span>}
            </Tappable>
          ))}
        </div>
      </BottomSheet>

      <BottomSheet open={sheet === 'reset'} onClose={() => setSheet('none')} title="Reset all progress?">
        <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>
          This permanently erases your XP, streak, badges and chapter progress. This cannot be undone.
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Tappable onClick={() => setSheet('none')} style={{ flex: 1, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 14, fontWeight: 700, textAlign: 'center' }}>Cancel</Tappable>
          <Tappable onClick={async () => { await resetProgress(); setSheet('none') }} style={{ flex: 1, background: 'var(--error)', color: '#fff', borderRadius: 14, padding: 14, fontWeight: 700, textAlign: 'center' }}>Reset</Tappable>
        </div>
      </BottomSheet>
    </PageTransition>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: React.ReactNode; label: string }) {
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '14px 8px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{icon}</div>
      <div style={{ fontWeight: 800, fontSize: 18 }}>{value}</div>
      <div style={{ color: 'var(--muted)', fontSize: 11, marginTop: 1 }}>{label}</div>
    </div>
  )
}

function SettingRow({ icon, label, value, onClick, danger }: { icon: React.ReactNode; label: string; value: string; onClick: () => void; danger?: boolean }) {
  return (
    <Tappable onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, width: '100%' }}>
      {icon}
      <span style={{ fontWeight: 600, fontSize: 15, flex: 1, color: danger ? 'var(--error)' : 'var(--text)' }}>{label}</span>
      {value && <span style={{ color: 'var(--muted)', fontSize: 14 }}>{value}</span>}
    </Tappable>
  )
}
