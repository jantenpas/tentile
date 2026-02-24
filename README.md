# Tentile

A composable React component library built for production. Tiles that snap together to build interfaces.

---

## Features

- **Composable** — components are designed to work together, not in isolation
- **Accessible** — ARIA attributes, keyboard navigation, and focus management built in
- **Typed** — strict TypeScript with full prop interfaces and declaration files
- **Themeable** — CSS custom properties for every token, dark mode included
- **Lightweight** — no runtime dependencies, pure CSS Modules
- **Forward-ref compatible** — every component supports `ref` forwarding

---

## Installation

```bash
npm install tentile
```

Requires React 18 or later:

```bash
npm install react react-dom
```

---

## Quick start

Import styles once at your app entry point:

```tsx
import 'tentile/styles'
```

Then use components anywhere:

```tsx
import { Button, Heading, Text, Input, Card, Badge } from 'tentile'

export function App() {
  return (
    <Card>
      <Heading level={2}>Welcome back</Heading>
      <Text color="muted">Sign in to your account to continue.</Text>
      <Input
        label="Email address"
        placeholder="you@example.com"
        type="email"
        required
        fullWidth
      />
      <Button fullWidth>Sign in</Button>
    </Card>
  )
}
```

---

## Dark mode

Add `data-theme="dark"` to your root element to activate dark mode:

```tsx
document.documentElement.setAttribute('data-theme', 'dark')
```

---

## Development

**Getting started:**
```bash
git clone https://github.com/jantenpas/tentile
cd tentile
npm install
npm run dev        # Storybook on localhost:6006
```

**Other commands:**
```bash
npm run lint       # TypeScript type check
npm run build      # Build library to /dist
```

---

## License

MIT © [Jan tenPas](https://github.com/jantenpas)
