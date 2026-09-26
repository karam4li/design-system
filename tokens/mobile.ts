/**
 * The Quiet Press — Mobile Design Tokens
 * Ready for React Native, Expo, Flutter, or native mobile stylesheets.
 */

export const PressColors = {
  light: {
    background: '#faf9f5',
    surface: '#ffffff',
    surfaceSubtle: '#f0ede4',
    textPrimary: '#141413',
    textSecondary: '#737168',
    textMuted: '#9e9b91',
    border: '#e8e6dc',
    borderSubtle: '#f2efe6',
    clay: '#d97757',
    clayHover: '#c26547',
    claySubtle: 'rgba(217, 119, 87, 0.12)',
    sage: '#788c5d',
    blue: '#6a9bcc',
    amber: '#d4973b',
    crimson: '#c2534a',
  },
  dark: {
    background: '#141413',
    surface: '#1c1b19',
    surfaceSubtle: '#242321',
    textPrimary: '#faf9f5',
    textSecondary: '#b0aea5',
    textMuted: '#737168',
    border: '#2e2d2a',
    borderSubtle: '#242320',
    clay: '#d97757',
    clayHover: '#e58869',
    claySubtle: 'rgba(217, 119, 87, 0.18)',
    sage: '#8da46e',
    blue: '#7ba8d6',
    amber: '#e0a648',
    crimson: '#d4635a',
  },
} as const;

export const PressRadii = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
} as const;

export const PressSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const PressTypography = {
  serif: 'Newsreader', // On iOS/Android, ensure font is bundled in assets
  sans: 'System',
  mono: 'JetBrainsMono',
} as const;
