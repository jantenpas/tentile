import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default" dot>Inactive</Badge>
      <Badge variant="success" dot>Live</Badge>
      <Badge variant="warning" dot>Degraded</Badge>
      <Badge variant="error" dot>Offline</Badge>
      <Badge variant="info" dot>Syncing</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <Badge size="sm" variant="brand">Small</Badge>
      <Badge size="md" variant="brand">Medium</Badge>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {[
        { name: 'Authentication service', status: 'success', label: 'Operational' },
        { name: 'Payment gateway',        status: 'warning', label: 'Degraded'    },
        { name: 'Email delivery',         status: 'error',   label: 'Outage'      },
        { name: 'CDN',                    status: 'success', label: 'Operational' },
      ].map((item) => (
        <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-sm)' }}>
            {item.name}
          </span>
          <Badge variant={item.status as 'success' | 'warning' | 'error'} dot size="sm">
            {item.label}
          </Badge>
        </div>
      ))}
    </div>
  ),
}
