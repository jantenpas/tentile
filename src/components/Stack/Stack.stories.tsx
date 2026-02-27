import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Stack>

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '8px 16px', background: 'var(--color-brand-100)', borderRadius: '4px' }}>
    {children}
  </div>
)

export const Vertical: Story = {
  render: () => (
    <Stack gap={3}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" gap={3}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
}

export const Centered: Story = {
  render: () => (
    <Stack direction="row" gap={3} align="center" justify="center" style={{ height: '120px', border: '1px dashed #ccc' }}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
    </Stack>
  ),
}

export const Wrapped: Story = {
  render: () => (
    <Stack direction="row" gap={2} wrap style={{ maxWidth: '200px' }}>
      {Array.from({ length: 6 }, (_, i) => <Box key={i}>Item {i + 1}</Box>)}
    </Stack>
  ),
}
