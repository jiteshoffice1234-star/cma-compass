// Design tokens — single source of truth for the whole app.
// Values resolve to CSS variables so switching [data-theme] on <html> restyles
// EVERYTHING at once (see the theme blocks in index.css). Neobrutalism is the
// default; other themes (glass, clay, neu, skeuo, vapor, cyber) redefine the
// same variables with their own colours + "physics" (shadow, border, radius, blur).

export const color = {
  primary: 'var(--primary)', // highlighted surfaces, primary accents
  primaryInk: 'var(--primary-ink)', // text/icon colour placed on a primary fill
  secondary: 'var(--secondary)', // action buttons, links
  success: 'var(--success)',
  warning: 'var(--warning)',
  danger: 'var(--danger)',
  surface: 'var(--surface)', // app background
  card: 'var(--card)',
  text: 'var(--text)',
  muted: 'var(--muted)',
  black: 'var(--ink)', // border / shadow ink
  // State tints
  successTint: 'var(--success-tint)',
  dangerTint: 'var(--danger-tint)',
  warningTint: 'var(--warning-tint)',
  primaryTint: 'var(--primary-tint)',
  secondaryTint: 'var(--secondary-tint)',
} as const

export const shadow = {
  sm: 'var(--sh-sm)',
  md: 'var(--sh-md)',
  lg: 'var(--sh-lg)',
  none: 'none',
} as const

export const border = {
  thin: 'var(--bd-thin)',
  thick: 'var(--bd-thick)',
} as const

export const radius = { sm: 'var(--r-sm)', md: 'var(--r-md)', lg: 'var(--r-lg)' } as const

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const

export const font = {
  ui: 'var(--font-ui)',
  mono: "'JetBrains Mono', 'Courier New', monospace",
} as const

// Type scale: 13 / 15 / 17 / 21 / 27 / 35
export const type = { xs: 13, sm: 15, md: 17, lg: 21, xl: 27, xxl: 35 } as const

// Common composed styles
export const nb = {
  card: {
    background: color.card,
    border: border.thick,
    borderRadius: radius.md,
    boxShadow: shadow.md,
  },
  cardFlat: {
    background: color.card,
    border: border.thin,
    borderRadius: radius.md,
  },
  btnPrimary: {
    background: color.primary,
    color: color.primaryInk,
    border: border.thick,
    borderRadius: radius.md,
    boxShadow: shadow.md,
    fontWeight: 800,
  },
  btnSecondary: {
    background: color.secondary,
    color: '#FFFFFF',
    border: border.thick,
    borderRadius: radius.md,
    boxShadow: shadow.md,
    fontWeight: 800,
  },
  btnGhost: {
    background: color.card,
    color: color.text,
    border: border.thin,
    borderRadius: radius.md,
    boxShadow: shadow.sm,
    fontWeight: 700,
  },
} as const

export const APP_NAME = 'CMA Compass'
