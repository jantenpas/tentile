import React, { useEffect, useState } from 'react'
import { Badge } from '@lib/components/Badge/Badge'
import { Card } from '@lib/components/Card/Card'
import { Heading } from '@lib/components/Heading/Heading'
import { Text } from '@lib/components/Text/Text'
import styles from './HomePage.module.css'

const productPillars = [
  {
    title: 'Composable by default',
    description:
      'Primitives are designed to layer together cleanly so product teams can assemble flows, layouts, and states without fighting the API surface.',
  },
  {
    title: 'Accessible interaction patterns',
    description:
      'Focus management, ARIA semantics, keyboard support, and disclosure or dialog behavior are built into the components instead of left to consumers.',
  },
  {
    title: 'Type-safe developer ergonomics',
    description:
      'Strict TypeScript props, forwardRef support, and intentionally small APIs make the library easier to adopt in real codebases with confidence.',
  },
  {
    title: 'Token-driven styling',
    description:
      'Color, spacing, typography, radii, and motion are expressed through design tokens so the system feels consistent across product UI and documentation.',
  },
] as const

const setupSteps = [
  {
    step: '01',
    title: 'Install the package',
    description: 'Bring in the library package and peer React dependencies.',
    code: 'npm install tentile react react-dom',
  },
  {
    step: '02',
    title: 'Load the shared styles',
    description: 'Import the distributed styles once at your application entry point.',
    code: "import 'tentile/styles'",
  },
  {
    step: '03',
    title: 'Compose real product UI',
    description: 'Use the primitives to build forms, status surfaces, navigation, and workflows.',
    code: "import { Button, Card, Heading, Input, Text } from 'tentile'",
  },
] as const

const engineeringSignals = [
  'Zero runtime dependencies in the published component package',
  'Token-based foundations for typography, color, spacing, radii, shadow, and motion',
  'High-confidence automated testing with 100% lines/functions and 99%+ statements/branches',
  'Storybook for isolated component development and a dedicated docs site for library exploration',
] as const

const quickStartCode = `import 'tentile/styles'
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
}`

export default function HomePage() {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.titleGroup}>
            <img
              src={isDark ? '/tentile-icon-dark.svg' : '/tentile-icon.svg'}
              alt=""
              className={styles.icon}
            />
            <h1 className={styles.heading}>Tentile UI</h1>
          </div>
          <p className={styles.tagline}>
            Tentile UI is a React component library built with a front-end engineer&apos;s mindset:
            accessible interaction patterns, composable APIs, strong TypeScript ergonomics, and a
            token-driven visual system that scales across product surfaces.
          </p>

          <div className={styles.badges}>
            <Badge variant="success">v1.0.0</Badge>
            <Badge variant="default">React 18+</Badge>
            <Badge variant="default">TypeScript</Badge>
            <Badge variant="default">CSS Modules</Badge>
            <Badge variant="default">Zero runtime deps</Badge>
          </div>

          <div className={styles.installBlock}>
            <Text size="xs" weight="semibold" color="subtle">
              Install
            </Text>
            <pre className={styles.installCommand}>
              <code>npm install tentile</code>
            </pre>
          </div>

          <div className={styles.ctaRow}>
            <a href="#/components" className={styles.ctaPrimary}>
              Browse components
            </a>
            <a href="#/style-guide" className={styles.ctaSecondary}>
              Explore style guide
            </a>
            <a
              href="https://github.com/jantenpas/tentile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaTertiary}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge variant="default" size="sm" className={styles.sectionBadge}>
            Principles
          </Badge>
          <Heading level={2} size="lg">
            What Tentile optimizes for
          </Heading>
          <Text color="subtle" className={styles.sectionText}>
            The goal is not just a collection of widgets. The goal is a front-end foundation that
            feels deliberate in API design, interaction design, and visual consistency.
          </Text>
        </div>

        <div className={styles.pillarGrid}>
          {productPillars.map((pillar) => (
            <Card key={pillar.title} variant="outlined" padding="md" className={styles.pillarCard}>
              <Heading level={3} size="xs">
                {pillar.title}
              </Heading>
              <Text size="sm" color="subtle">
                {pillar.description}
              </Text>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge variant="default" size="sm" className={styles.sectionBadge}>
            Setup
          </Badge>
          <Heading level={2} size="lg">
            Get running in a few minutes
          </Heading>
          <Text color="subtle" className={styles.sectionText}>
            The package is designed to be easy to evaluate. Install it, import the shared styles
            once, and start composing UI from small, production-minded primitives.
          </Text>
        </div>

        <div className={styles.setupLayout}>
          <div className={styles.stepList}>
            {setupSteps.map((item) => (
              <Card key={item.step} variant="outlined" padding="md" className={styles.stepCard}>
                <div className={styles.stepNumber}>{item.step}</div>
                <div className={styles.stepBody}>
                  <Heading level={3} size="xs">
                    {item.title}
                  </Heading>
                  <Text size="sm" color="subtle">
                    {item.description}
                  </Text>
                  <pre className={styles.inlineCode}>
                    <code>{item.code}</code>
                  </pre>
                </div>
              </Card>
            ))}
          </div>

          <Card variant="filled" padding="lg" className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <Text size="sm" weight="semibold">
                Quick start example
              </Text>
              <Text size="xs" color="subtle">
                Composing layout, typography, and form primitives
              </Text>
            </div>
            <pre className={styles.codeBlock}>
              <code>{quickStartCode}</code>
            </pre>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Badge variant="default" size="sm" className={styles.sectionBadge}>
            Engineering
          </Badge>
          <Heading level={2} size="lg">
            Built like a real library, not a demo kit
          </Heading>
          <Text color="subtle" className={styles.sectionText}>
            Tentile is meant to demonstrate product engineering judgment as much as visual polish:
            thoughtful component contracts, predictable styling primitives, and tooling that
            supports real iteration.
          </Text>
        </div>

        <div className={styles.engineeringLayout}>
          <Card variant="outlined" padding="lg" className={styles.engineeringCard}>
            <Heading level={3} size="xs">
              Quality signals
            </Heading>
            <ul className={styles.signalList}>
              {engineeringSignals.map((signal) => (
                <li key={signal} className={styles.signalItem}>
                  <Text size="sm" color="subtle">
                    {signal}
                  </Text>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="outlined" padding="lg" className={styles.engineeringCard}>
            <Heading level={3} size="xs">
              How to explore the system
            </Heading>
            <div className={styles.exploreList}>
              <a href="#/components" className={styles.exploreLink}>
                <span className={styles.exploreLabel}>Component catalog</span>
                <span className={styles.exploreMeta}>
                  See the API surface, examples, and props for each primitive.
                </span>
              </a>
              <a href="#/style-guide" className={styles.exploreLink}>
                <span className={styles.exploreLabel}>Style guide</span>
                <span className={styles.exploreMeta}>
                  Review the token foundations behind the UI language.
                </span>
              </a>
              <a
                href="https://github.com/jantenpas/tentile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.exploreLink}
              >
                <span className={styles.exploreLabel}>Source code</span>
                <span className={styles.exploreMeta}>
                  Inspect the implementation details, tests, and package structure.
                </span>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className={styles.footer}>
        Built by{' '}
        <a href="https://github.com/jantenpas" target="_blank" rel="noopener noreferrer">
          Jan tenPas
        </a>
        {' · '}
        <a href="https://www.npmjs.com/package/tentile" target="_blank" rel="noopener noreferrer">
          npm
        </a>
        {' · '}
        <a href="https://github.com/jantenpas/tentile" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  )
}
