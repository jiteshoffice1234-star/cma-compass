// Neobrutalism design tokens — single source of truth for the whole app.
// Rules: flat fills only, 2-3px solid black borders, hard offset shadows
// (no blur), Inter for UI text, JetBrains Mono for numbers/technical text.

export const color = {
  primary: '#FDC800', // highlighted surfaces, primary accents (dark text on top)
  secondary: '#432DD7', // action buttons, links (white text on top)
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
  surface: '#FBFBF9', // app background
  card: '#FFFFFF',
  text: '#1C293C',
  muted: '#55637A',
  black: '#000000',
  // Flat tints for state backgrounds (no translucency)
  successTint: '#DCFCE7',
  dangerTint: '#FEE2E2',
  warningTint: '#FEF3C7',
  primaryTint: '#FFF6D6',
  secondaryTint: '#E8E4FB',
} as const

export const shadow = {
  sm: '3px 3px 0 #000',
  md: '4px 4px 0 #000',
  lg: '6px 6px 0 #000',
  none: 'none',
} as const

export const border = {
  thin: '2px solid #000',
  thick: '3px solid #000',
} as const

export const radius = { sm: 6, md: 10, lg: 14 } as const

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const

export const font = {
  ui: "'Inter', system-ui, -apple-system, sans-serif",
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
    color: color.text,
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
