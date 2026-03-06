import type { StorybookConfig } from '@storybook/react-vite'

const isProduction = process.env.NODE_ENV === 'production'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    if (isProduction) {
      config.base = '/components/'
    }
    return config
  },
}

export default config
