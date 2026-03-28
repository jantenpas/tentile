import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'select',
      options: ['slash', 'chevron', 'dot'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumb' },
]

export const Default: Story = {
  args: {
    items: ITEMS,
    separator: 'chevron',
  },
}

export const Slash: Story = {
  args: {
    items: ITEMS,
    separator: 'slash',
  },
}

export const Dot: Story = {
  args: {
    items: ITEMS,
    separator: 'dot',
  },
}

export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumb' },
    ],
  },
}

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home' }],
  },
}

export const NoHrefs: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Components' },
      { label: 'Breadcrumb' },
    ],
  },
}

export const CustomSeparator: Story = {
  args: {
    items: ITEMS,
    separator: <span style={{ color: 'var(--color-brand-700)', fontWeight: 600 }}>›</span>,
  },
}
