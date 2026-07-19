import { useStore } from '../store'
import { addXp, getTotalXp } from '../lib/store'

export function useXp() {
  const totalXp = useStore((s) => s.totalXp)
  const showToast = useStore((s) => s.showToast)

  const awardXp = async (amount: number, reason: string, chapterId: number | null, message: string) => {
    try {
      await addXp(amount, reason, chapterId)
      const newTotal = await getTotalXp()
      useStore.setState({ totalXp: newTotal })
      showToast(message)
      return newTotal
    } catch (error) {
      console.error('[Xp] Failed to award XP:', error)
      showToast('❌ Failed to save XP')
      return null
    }
  }

  return { totalXp, awardXp }
}
