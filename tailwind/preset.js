/**
 * The Quiet Press — Tailwind CSS Preset
 * Usage in any project's tailwind.config.js:
 * 
 * module.exports = {
 *   presets: [require('@ali/design-system/tailwind')],
 *   content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
 *   ...
 * }
 */

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        press: {
          ivory: {
            DEFAULT: '#faf9f5',
            light: '#faf9f5',
            medium: '#f0eee6',
            dark: '#e8e6dc',
            alt: '#f0ede4',
          },
          slate: {
            DEFAULT: '#141413',
            dark: '#141413',
            medium: '#3d3d3a',
            light: '#5e5d59',
            alt: '#1c1b19',
            subtle: '#242321',
          },
          sky: {
            DEFAULT: '#0284c7',
            light: '#38bdf8',
            hover: '#0369a1',
            subtle: 'rgba(2, 132, 199, 0.12)',
          },
          primary: {
            DEFAULT: '#0284c7',
            light: '#38bdf8',
            hover: '#0369a1',
            subtle: 'rgba(2, 132, 199, 0.12)',
          },
          // Anthropic Warm & Earthy
          clay: {
            DEFAULT: '#d97757',
            hover: '#c6613f',
          },
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
          cloud: {
            DEFAULT: '#c5d3e0',
            light: '#d1cfc5',
            medium: '#b0aea5',
            dark: '#87867f',
          },
          // Anthropic Vibrants
          coral: '#ebcece',
          fig: '#c46686',
          orchid: '#e5cada',
          plum: '#827dbd',
          poppy: '#de6262',
          pencil: '#f0ac54',
          amber: '#d4973b',
          crimson: '#c2534a',
          // Neutrals & Borders
          border: {
            DEFAULT: '#e8e6dc',
            light: '#e8e6dc',
            dark: '#2e2d2a',
            subtle: '#f2efe6',
          },
          muted: {
            DEFAULT: '#737168',
            light: '#737168',
            dark: '#b0aea5',
          },
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Tiempos Text', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'press-sm': '4px',
        'press-md': '8px',
        'press-lg': '12px',
        'press-xl': '16px',
        'press-2xl': '20px',
        'press-dropdown': '16px',
      },
      lineHeight: {
        'press-prose': '1.7',
      },
      boxShadow: {
        'press-dropdown': '0 2px 2px rgba(0, 0, 0, 0.02), 0 4px 6px rgba(0, 0, 0, 0.03), 0 16px 28px rgba(0, 0, 0, 0.06)',
      },
    },
  },
};
