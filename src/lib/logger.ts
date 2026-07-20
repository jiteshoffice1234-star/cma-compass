const IS_PROD = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production'

export const logger = {
  error: (...args: unknown[]) => {
    if (!IS_PROD) console.error(...args)
  },
  warn: (...args: unknown[]) => {
    if (!IS_PROD) console.warn(...args)
  },
  log: (...args: unknown[]) => {
    if (!IS_PROD) console.log(...args)
  },
}