// Central registry of the app's full visual themes.
// Each id maps to a [data-theme='<id>'] block in index.css that restyles the
// entire app (colours + design "physics"). Neobrutalism is the default.

export type ThemeId = 'neo' | 'glass' | 'clay' | 'neu' | 'skeuo' | 'vapor' | 'cyber'

export interface ThemeMeta {
  id: ThemeId
  name: string
  desc: string
  preview: { bg: string; card: string; accent: string; text: string; border: string }
}

export const DEFAULT_THEME: ThemeId = 'neo'

export const THEMES: ThemeMeta[] = [
  { id: 'neo', name: 'Neobrutalism', desc: 'Bold borders & hard shadows',
    preview: { bg: '#FBFBF9', card: '#FFFFFF', accent: '#FDC800', text: '#1C293C', border: '#1C293C' } },
  { id: 'glass', name: 'Glassmorphism', desc: 'Frosted translucent blur',
    preview: { bg: '#a9c3fb', card: '#dfe8ff', accent: '#6d5cff', text: '#17233b', border: '#ffffff' } },
  { id: 'clay', name: 'Claymorphism', desc: 'Soft puffy 3-D clay',
    preview: { bg: '#edeaff', card: '#f3f0ff', accent: '#7c5cff', text: '#2b2745', border: '#d8d2f5' } },
  { id: 'neu', name: 'Neumorphism', desc: 'Subtle embossed monochrome',
    preview: { bg: '#e0e5ec', card: '#e8edf4', accent: '#6d5dfc', text: '#4a5568', border: '#c8d0dc' } },
  { id: 'skeuo', name: 'Skeuomorphism', desc: 'Real textures & bevels',
    preview: { bg: '#d8d2c0', card: '#f6f2e7', accent: '#2f855a', text: '#2c2617', border: '#8c8168' } },
  { id: 'vapor', name: 'Vaporwave', desc: 'Neon retro sunset',
    preview: { bg: '#3b1e5e', card: '#5a2b7a', accent: '#ff71ce', text: '#ffe6ff', border: '#01cdfe' } },
  { id: 'cyber', name: 'Cyberpunk', desc: 'Glowing sci-fi HUD',
    preview: { bg: '#05060a', card: '#0d1520', accent: '#00e5ff', text: '#d6faff', border: '#00e5ff' } },
]

const IDS = new Set(THEMES.map((t) => t.id))

// Coerce any stored value (incl. legacy 'light'/'dark'/'claude') to a valid theme.
export function normalizeTheme(v: any): ThemeId {
  return IDS.has(v) ? (v as ThemeId) : DEFAULT_THEME
}

export function themeMeta(id: string): ThemeMeta {
  return THEMES.find((t) => t.id === id) ?? THEMES[0]
}
