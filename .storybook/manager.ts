import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Tentile UI',
    brandImage: '/tentile-logo-light.svg',
    brandUrl: 'https://tentile.dev',
    brandTarget: '_self',
  }),
  initialActive: 'story',
  selectedPanel: undefined,
})
