# @ali/design-system — The Quiet Press

A reusable, Anthropic-inspired Computational Editorial design system for web and mobile applications across all personal subdomains.

## Directory Structure

```
design-system/
├── DESIGN.md                 # Core manifesto, philosophy, and detailed token specs
├── package.json              # NPM package definition (@ali/design-system)
├── index.html                # Interactive Living Style Guide & Kitchen Sink
├── tokens/
│   ├── tokens.json           # Canonical W3C Design Tokens format
│   ├── variables.css         # CSS Custom Properties (Light & Dark theme variables)
│   └── mobile.ts             # React Native / Flutter / Mobile ready token constants
├── tailwind/
│   └── preset.js             # Tailwind CSS configuration preset
└── components/
    └── ecosystem-nav.js      # Universal cross-subdomain top navigation bar web component
```

---

## How to Use Across Your Projects

### 1. In Any Tailwind CSS Project (Next.js, Astro, Vite)
In your application's `tailwind.config.js`:

```javascript
module.exports = {
  presets: [
    require('./path/to/design-system/tailwind/preset.js') 
    // Or if in a monorepo / npm: require('@ali/design-system/tailwind')
  ],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
}
```

Now you have instant access to:
* Colors: `bg-press-ivory`, `text-press-slate`, `bg-press-sky`, `border-press-border-light`, `text-press-sage`, etc.
* Fonts: `font-serif` (Newsreader/Tiempos), `font-sans` (Inter), `font-mono` (JetBrains Mono).
* Radii: `rounded-press-md`, `rounded-press-xl`.

---

### 2. In Plain HTML / CSS / Static Sites
Simply import the stylesheet:

```html
<link rel="stylesheet" href="./path/to/tokens/variables.css">
```

All standard semantic CSS variables will be available:
`var(--press-bg)`, `var(--press-text-primary)`, `var(--press-sky)`, `var(--press-border)`.

To enable dark mode, add `.dark` or `data-theme="dark"` to the `<html>` or `<body>` element.

---

### 3. In Mobile Apps (React Native / Expo / Flutter)
Import the strongly typed tokens from `tokens/mobile.ts`:

```typescript
import { PressColors, PressRadii, PressSpacing } from '@ali/design-system/mobile';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PressColors.light.background,
    padding: PressSpacing.md,
    borderRadius: PressRadii.lg,
  },
  actionButton: {
    backgroundColor: PressColors.light.sky,
  }
});
```

---

### 4. Cross-Subdomain Navigation Bar
Drop this single line into the `<head>` or `<body>` of any subdomain (e.g. `models.ali.net`, `db.ali.net`, `research.ali.net`):

```html
<script src="/path/to/components/ecosystem-nav.js"></script>

<!-- Render the universal header -->
<press-nav active="models" domain="ali.net"></press-nav>
```

This automatically provides:
- The persistent brand glyph (`✸`) linking back to the root apex domain.
- The active subdomain chip indicator (`models.ali.net`).
- Direct navigation links to sister subdomains (`research`, `database`, `benchmarks`).
- A persistent light/dark mode theme switcher.

---

## Viewing the Living Style Guide Locally

Simply open `index.html` in your web browser to test all colors, typography scales, telemetry cards, and interactive components.
