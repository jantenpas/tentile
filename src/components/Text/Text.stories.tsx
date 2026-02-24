import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'label', 'div', 'strong', 'em', 'small'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'subtle', 'brand', 'error', 'success'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text size="xl">XL — Plus Jakarta Sans looks great at larger sizes too</Text>
      <Text size="lg">LG — Comfortable reading size with loose line height</Text>
      <Text size="md">MD — The default. Most body copy lives here at 16px</Text>
      <Text size="sm">SM — Secondary content, captions, helper text at 14px</Text>
      <Text size="xs">XS — Fine print, timestamps, metadata at 12px</Text>
    </div>
  ),
}

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Text weight="regular">Regular 400 — body copy, descriptions</Text>
      <Text weight="medium">Medium 500 — slightly elevated, labels</Text>
      <Text weight="semibold">Semibold 600 — UI labels, nav items, emphasis</Text>
      <Text weight="bold">Bold 700 — strong emphasis, calls to action</Text>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Text color="default">Default — primary content #1C1917</Text>
      <Text color="muted">Muted — secondary content, descriptions</Text>
      <Text color="subtle">Subtle — disabled states, placeholders</Text>
      <Text color="brand">Brand — teal accent, highlighted content</Text>
      <Text color="error">Error — validation messages, destructive actions</Text>
      <Text color="success">Success — confirmations, positive feedback</Text>
    </div>
  ),
}

export const Truncate: Story = {
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <Text truncate>
        This is a very long string of text that will be truncated with an ellipsis when it overflows its container
      </Text>
    </div>
  ),
}

export const Mono: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Text>Regular Plus Jakarta Sans body text</Text>
      <Text mono>JetBrains Mono — npm install tentile</Text>
      <Text mono size="sm" color="muted">const button = &lt;Button variant="primary"&gt;Click&lt;/Button&gt;</Text>
    </div>
  ),
}

export const Composition: Story = {
  render: () => (
    <div style={{ maxWidth: '560px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text size="lg" weight="semibold">Getting started with Tentile</Text>
      <Text color="muted">
        Tentile is a composable React component library built for production.
        Install it once, use it everywhere.
      </Text>
      <Text size="sm" color="subtle">Last updated February 2026</Text>
    </div>
  ),
}
