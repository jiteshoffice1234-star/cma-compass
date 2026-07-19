import { useState, useCallback, useMemo, useRef } from 'react'

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  chapterId: number
}

export interface QuizAttempt {
  q: string
  correct: boolean
}

export function shuffleQuestions<T extends QuizQuestion>(arr: T[], limit: number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, Math.min(limit, a.length))
}

export function useQuizSession(questionPool: QuizQuestion[], limit: number) {
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState<QuizAttempt[]>([])
  const [finished, setFinished] = useState(false)
  const submittedRef = useRef(false)

  const questions = useMemo(() => shuffleQuestions(questionPool, limit), [questionPool, limit])
  const current = questions[idx]

  const choose = useCallback((optionIndex: number, callback?: () => void) => {
    if (answered || finished) return
    setSelected(optionIndex)
    setAnswered(true)
    const correct = optionIndex === current?.correctIndex
    if (correct) setScore(prev => prev + 1)
    setAttempts(prev => [...prev, { q: current?.id ?? '', correct }])
    callback?.()
  }, [answered, finished, current])

  const next = useCallback(() => {
    if (idx + 1 < questions.length) {
      setIdx(prev => prev + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
    }
  }, [idx, questions.length])

  const restart = useCallback(() => {
    setIdx(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setAttempts([])
    setFinished(false)
    submittedRef.current = false
  }, [])

  const getResults = useCallback(() => ({
    score,
    total: questions.length,
    passed: score >= Math.ceil(questions.length * 0.6),
    perfect: score === questions.length,
    attempts,
  }), [score, questions.length, attempts])

  return {
    current,
    idx,
    selected,
    answered,
    score,
    finished,
    questions,
    total: questions.length,
    choose,
    next,
    restart,
    getResults,
  }
}
