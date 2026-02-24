import type { Preview } from '@storybook/react'
import '../src/tokens/index.css'
import '../src/styles/reset.css'
import '../src/styles/typography.css'

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
  },
}

export default preview
