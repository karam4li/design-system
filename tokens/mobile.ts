/**
 * The Quiet Press — Mobile Design Tokens
 * Ready for React Native, Expo, Flutter, or native mobile stylesheets.
 * Extended with authentic Anthropic pigments and navigation dimensions.
 */

export const PressColors = {
  light: {
    background: '#faf9f5',
    surface: '#ffffff',
    surfaceSubtle: '#f0ede4',
    dropdown: '#f0eee6',
    textPrimary: '#141413',
    textSecondary: '#737168',
    textMuted: '#9e9b91',
    textFaded: '#b0aea5',
    border: '#e8e6dc',
    borderSubtle: '#f2efe6',
    primary: '#0284c7',
    sky: '#0284c7',
    skyHover: '#0369a1',
    skySubtle: 'rgba(2, 132, 199, 0.12)',
    // Anthropic Earthy
    clay: '#d97757',
    accent: '#c6613f',
    peach: '#ebc9b7',
    kraft: '#d4a27f',
    manilla: '#ebdbbc',
    oat: '#e3dacc',
    // Anthropic Natural & Cool
    olive: '#788c5d',
    sage: '#788c5d',
    cactus: '#bcd1ca',
    matcha: '#ced6bf',
    mineral: '#629987',
    blue: '#6a9bcc',
    cloud: '#c5d3e0',
    cloudLight: '#d1cfc5',
    cloudMedium: '#b0aea5',
    cloudDark: '#87867f',
    // Anthropic Vibrants
    coral: '#ebcece',
    fig: '#c46686',
    orchid: '#e5cada',
    plum: '#827dbd',
    poppy: '#de6262',
    pencil: '#f0ac54',
    amber: '#d4973b',
    crimson: '#c2534a',
  },
  dark: {
    background: '#141413',
    surface: '#1c1b19',
    surfaceSubtle: '#242321',
    dropdown: '#201f1d',
    textPrimary: '#faf9f5',
    textSecondary: '#b0aea5',
    textMuted: '#737168',
    textFaded: '#5e5d59',
    border: '#2e2d2a',
    borderSubtle: '#242320',
    primary: '#38bdf8',
    sky: '#38bdf8',
    skyHover: '#7dd3fc',
    skySubtle: 'rgba(56, 189, 248, 0.18)',
    // Anthropic Earthy (Night)
    clay: '#e08b6f',
    accent: '#e08b6f',
    peach: '#5a3c2c',
    kraft: '#4a3424',
    manilla: '#3e382b',
    oat: '#33302a',
    // Anthropic Natural & Cool (Night)
    olive: '#8da46e',
    sage: '#8da46e',
    cactus: '#32443f',
    matcha: '#3a4233',
    mineral: '#456b5e',
    blue: '#7ba8d6',
    cloud: '#434c56',
    cloudLight: '#5a5953',
    cloudMedium: '#7a7972',
    cloudDark: '#a09f98',
    // Anthropic Vibrants (Night)
    coral: '#523737',
    fig: '#5c2d3d',
    orchid: '#53354c',
    plum: '#9b97d1',
    poppy: '#e47575',
    pencil: '#f3b96e',
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
  dropdown: 16,
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

export const PressNavDimensions = {
  height: 68,
  bannerHeight: 44,
  hamburgerThickness: 1.5,
  hamburgerGap: 5,
} as const;
