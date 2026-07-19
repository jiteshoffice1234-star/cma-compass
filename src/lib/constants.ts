export const ANIMATION = {
  CONFETTI_DELAY: 700,
  UPDATE_CHECK_DELAY: 5000,
  TOAST_DURATION: 2500,
  TRANSITION_DURATION: 0.22,
  PRESS_FEEDBACK_DELAY: 70,
} as const

export const VIDEO = {
  ASPECT_RATIO: '16 / 9',
  YOUTUBE_EMBED_BASE: 'https://www.youtube.com/embed',
} as const

export const UI = {
  SKELETON_SIZE: 60,
  SKELETON_RADIUS: 6,
  ICON_SIZE_SM: 12,
  ICON_SIZE_MD: 18,
  ICON_SIZE_LG: 20,
  ICON_SIZE_XL: 40,
  PROGRESS_RING_SIZE: 80,
  BADGE_ICON_SIZE: 22,
} as const

export const MODAL = {
  Z_INDEX: 400,
  OVERLAY_BACKGROUND: 'rgba(0, 0, 0, 0.5)',
} as const

export const SAFE_AREA = {
  BOTTOM_PADDING: 'env(safe-area-inset-bottom)',
} as const
