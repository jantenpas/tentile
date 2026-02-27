import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: { variant: 'info', title: 'FYI', children: 'This is an informational message.' },
}

export const Success: Story = {
  args: { variant: 'success', title: 'Done!', children: 'Your changes have been saved.' },
}

export const Warning: Story = {
  args: { variant: 'warning', title: 'Watch out', children: 'This action cannot be undone.' },
}

export const Error: Story = {
  args: { variant: 'error', title: 'Something went wrong', children: 'Please try again later.' },
}

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible',
    children: 'Click the × to dismiss.',
    onDismiss: () => alert('Dismissed'),
  },
}

export const NoTitle: Story = {
  args: { variant: 'success', children: 'Operation completed successfully.' },
}
