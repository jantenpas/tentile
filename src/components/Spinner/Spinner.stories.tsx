import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }

export const Neutral: Story = { args: { color: 'neutral' } }

export const OnDark: Story = {
  args: { color: 'white' },
  decorators: [(Story) => <div style={{ background: '#1a1a2e', padding: '24px', borderRadius: '8px' }}><Story /></div>],
}
