import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/Badge/Badge'
import { Link } from '../components/Link/Link'
import { Stack } from '../components/Stack/Stack'

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
    docs: { disable: true },
  },
}

export default meta

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    fontFamily: 'var(--font-sans)',
  },
  inner: {
    maxWidth: '560px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1.5rem',
  },
  logo: {
    width: '240px',
    height: 'auto',
  },
  tagline: {
    fontSize: '1.125rem',
    margin: 0,
    lineHeight: 1.7,
  },
  badges: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  install: {
    display: 'inline-block',
    borderRadius: '8px',
    padding: '0.625rem 1.25rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    userSelect: 'all' as const,
  },
  footer: {
    fontSize: '0.8125rem',
    marginTop: '1rem',
  },
}

function WelcomePage() {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  )

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      ...styles.page,
      backgroundColor: isDark ? '#141412' : 'var(--color-neutral-50)',
    }}>
      <div style={styles.inner}>
        <img
          src={isDark ? '/tentile-logo-dark.svg' : '/tentile-logo-light.svg'}
          alt="Tentile"
          style={styles.logo}
        />

        <p style={{
          ...styles.tagline,
          color: isDark ? 'var(--color-neutral-400)' : 'var(--color-neutral-600)',
        }}>
          This page is a work in progress — check back soon.
          <br />
          In the meantime, browse the components using the sidebar.
        </p>

        <div style={styles.badges}>
          <Badge variant="success">v0.3.0</Badge>
          <Badge variant="default">React 18+</Badge>
          <Badge variant="default">TypeScript</Badge>
          <Badge variant="default">CSS Modules</Badge>
        </div>

        <div style={{
          ...styles.install,
          backgroundColor: isDark ? 'var(--color-neutral-800)' : 'var(--color-neutral-100)',
          border: `1px solid ${isDark ? 'var(--color-neutral-700)' : 'var(--color-neutral-200)'}`,
          color: isDark ? 'var(--color-neutral-200)' : 'var(--color-neutral-800)',
        }}>
          npm install tentile
        </div>

        <Stack direction="column" gap="sm" align="center">
          <Link href="https://www.npmjs.com/package/tentile" external>View on npm</Link>
          <Link href="https://github.com/jantenpas/tentile" external>View on GitHub</Link>
        </Stack>

        <p style={{
          ...styles.footer,
          color: isDark ? 'var(--color-neutral-600)' : 'var(--color-neutral-400)',
        }}>
          Built by <Link href="https://github.com/jantenpas" external>Jan tenPas</Link>
        </p>
      </div>
    </div>
  )
}

export const Page: StoryObj = {
  name: 'Welcome',
  render: () => <WelcomePage />,
}
