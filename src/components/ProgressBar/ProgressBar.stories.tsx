import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'success', 'error'],
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    value: 60,
  },
}

export const WithLabel: Story = {
  args: {
    value: 40,
    label: 'Upload progress',
    showPercent: true,
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '320px' }}>
      <ProgressBar value={70} label="Brand" showPercent variant="brand" />
      <ProgressBar value={85} label="Success" showPercent variant="success" />
      <ProgressBar value={30} label="Error" showPercent variant="error" />
    </div>
  ),
}

export const EdgeCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '320px' }}>
      <ProgressBar value={0} label="Empty" showPercent />
      <ProgressBar value={50} label="Half" showPercent />
      <ProgressBar value={100} label="Complete" showPercent />
    </div>
  ),
}
