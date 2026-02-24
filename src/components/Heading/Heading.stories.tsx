import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'brand'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    level: 2,
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Heading level={1}>H1 — Tentile Design System</Heading>
      <Heading level={2}>H2 — Build faster with components</Heading>
      <Heading level={3}>H3 — Composable, accessible, typed</Heading>
      <Heading level={4}>H4 — Designed for production</Heading>
      <Heading level={5}>H5 — Consistent at every scale</Heading>
      <Heading level={6}>H6 — Tokens all the way down</Heading>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={2} color="default">Default — warm near-black</Heading>
      <Heading level={2} color="muted">Muted — secondary content</Heading>
      <Heading level={2} color="brand">Brand — teal accent</Heading>
    </div>
  ),
}

export const SizeOverride: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={1} size="sm">H1 tag, small size</Heading>
      <Heading level={6} size="xl">H6 tag, xl size</Heading>
    </div>
  ),
}

export const HeroExample: Story = {
  render: () => (
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Heading level={1} size="2xl" color="brand">
        Build interfaces that last.
      </Heading>
      <Heading level={2} size="md" color="muted">
        Tentile is a composable React component library built for production.
      </Heading>
    </div>
  ),
}
