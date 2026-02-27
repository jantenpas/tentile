import type { Meta, StoryObj } from '@storybook/react'
import { StatCard } from './StatCard'

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StatCard>

export const Default: Story = {
  args: {
    value: '12,345',
    label: 'Total Requests',
  },
}

export const WithTrendUp: Story = {
  args: {
    value: '98.7%',
    label: 'Pass Rate',
    trend: { direction: 'up', value: '2.3%', label: 'vs last week' },
  },
}

export const WithTrendDown: Story = {
  args: {
    value: '142ms',
    label: 'Avg Latency',
    trend: { direction: 'down', value: '18ms', label: 'vs last week' },
  },
}

export const WithIcon: Story = {
  args: {
    value: '1,024',
    label: 'Evaluations',
    icon: '⚡',
    trend: { direction: 'up', value: '8%' },
  },
}
