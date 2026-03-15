import React from 'react'
import type { Preview } from '@storybook/react'
import { DocsContainer } from '@storybook/blocks'
import { themes } from '@storybook/theming'
import '../src/tokens/index.css'
import '../src/styles/reset.css'
import '../src/styles/typography.css'

function ThemedDocsContainer({ children, context }: { children: React.ReactNode; context: any }) {
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
    <DocsContainer context={context} theme={isDark ? themes.dark : themes.light}>
      {children}
    </DocsContainer>
  )
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark',  icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light'
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
        document.body.style.backgroundColor = '#141412'
      } else {
        document.documentElement.removeAttribute('data-theme')
        document.body.style.backgroundColor = '#FAFAF9'
      }
      return Story()
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Components'],
      },
    },
    docs: {
      container: ThemedDocsContainer,
    },
  },
}

export default preview
