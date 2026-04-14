# Tentile UI

Tentile UI is a composable React component library built with a product-engineering mindset.
It focuses on accessible interaction patterns, predictable TypeScript APIs, token-driven styling,
and a lightweight package surface that is realistic for production work.

Documentation is available at [tentile.dev](https://tentile.dev).

## Why Tentile

- Composable primitives that are designed to work together in real product flows
- Accessible defaults for dialogs, disclosures, alerts, controls, and interactive surfaces
- Strict TypeScript props with declaration output and forward-ref support
- Design-token foundations for typography, color, spacing, radii, shadow, and motion
- Zero runtime dependencies in the published package
- High test coverage with meaningful behavioral tests across the component surface

## What The Library Includes

Tentile currently ships a focused set of reusable UI primitives, including:

- Actions and feedback: `Button`, `Alert`, `Badge`, `Spinner`, `Tooltip`, `ProgressBar`
- Form controls: `Input`, `Textarea`, `Checkbox`, `Switch`, `Select`, `RadioGroup`
- Layout and content: `Stack`, `Card`, `Heading`, `Text`, `StatCard`, `Table`
- Navigation and overlays: `Tabs`, `Breadcrumb`, `Modal`, `Collapsible`, `Header`, `Link`
- Inline editing: `EditableText`

The repo also includes:

- A dedicated docs site for exploring components and foundations
- A style guide covering the visual system behind the library
- Storybook for isolated component development
- Vitest + Testing Library coverage for behavior and accessibility-critical paths

## Installation

```bash
npm install tentile react react-dom
```

Import the shared styles once in your application entry:

```tsx
import 'tentile/styles'
```

Then import the components you need:

```tsx
import { Button, Card, Heading, Input, Stack, Text } from 'tentile'
```

## Quick Start

```tsx
import 'tentile/styles'
import { Button, Card, Heading, Input, Stack, Text } from 'tentile'

export function SignInCard() {
  return (
    <Card padding="lg">
      <Stack direction="column" gap={4}>
        <Heading level={2}>Welcome back</Heading>
        <Text color="subtle">
          Tentile gives teams polished primitives for forms, feedback, and layout.
        </Text>
        <Input label="Email" type="email" placeholder="you@example.com" fullWidth />
        <Input label="Password" type="password" fullWidth />
        <Button fullWidth>Sign in</Button>
      </Stack>
    </Card>
  )
}
```

## Styling And Theming

Tentile is built on CSS custom properties and CSS Modules.
That gives the library a few useful properties:

- Shared tokens power the entire component surface
- Consumers can theme through CSS variables instead of rewriting component styles
- Dark mode can be enabled at the document level
- Visual consistency is enforced through spacing, typography, and semantic color primitives

Enable dark mode by setting a theme attribute on the root element:

```ts
document.documentElement.setAttribute('data-theme', 'dark')
```

## Engineering Approach

The implementation emphasizes:

- API clarity: component props are meant to feel small, explicit, and predictable
- Accessibility: semantics, keyboard interactions, and focus behavior are first-class
- Reuse: low-level primitives can be composed into product UI without custom wrappers everywhere
- Maintainability: styling is tokenized and isolated, and the package exports clear types
- Confidence: the test suite covers behavior rather than only snapshotting markup

## Local Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/jantenpas/tentile
cd tentile
npm install
```

Useful commands:

```bash
npm run dev            # Storybook on localhost:6006
npm run site:dev       # Docs site
npm run build          # Build the library to /dist
npm run site:build     # Build the docs site
npm run test:run       # Run the test suite once
npm run test:coverage  # Run tests with coverage
npm run lint           # TypeScript + ESLint
```

## Repo Structure

```text
src/        Component library source
site/       Documentation site
dist/       Built package output
```

## Documentation

The docs experience is split into three areas:

- Getting Started: high-level product and engineering overview
- Components: API surface, usage examples, and prop documentation
- Style Guide: the token and foundation layer behind the library

Live docs: [tentile.dev](https://tentile.dev)

## License

MIT © [Jan tenPas](https://github.com/jantenpas)
