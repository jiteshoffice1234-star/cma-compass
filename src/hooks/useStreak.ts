import { useStore } from '../store'
import { getStreak, saveStreak, StreakRow } from '../lib/store'

function dateStr(d = new Date()): string {
  return d.toISOString().slice(0, 10)
}

export function useStreak() {
  const currentStreak = useStore((s) => s.currentStreak)
  const longestStreak = useStore((s) => s.longestStreak)

  const touchStreak = async () => {
    const row = await getStreak()
    const today = dateStr()
    const last = row.last_active_date
    let cs = row.current_streak
    let ls = row.longest_streak
    if (last === today) { /* already active */ }
    else if (last) {
      const lastDate = new Date(last + 'T00:00:00')
      const now = new Date(today + 'T00:00:00')
      const diff = Math.round((now.getTime() - lastDate.getTime()) / 86400000)
      cs = diff === 1 ? cs + 1 : 1
    } else { cs = 1 }
    if (cs > ls) ls = cs
    const updated: StreakRow = { id: 1, current_streak: cs, longest_streak: ls, last_active_date: today }
    await saveStreak(updated)
    useStore.setState({ currentStreak: cs, longestStreak: ls, lastActiveDate: today })
    return cs
  }

  return { currentStreak, longestStreak, touchStreak }
}
