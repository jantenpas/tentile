import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Enter text…',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Notes',
    placeholder: 'Enter your notes…',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Bio',
    hint: 'Max 280 characters',
    placeholder: 'Tell us about yourself…',
  },
}

export const WithError: Story = {
  args: {
    label: 'Description',
    error: 'Description is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Notes',
    value: 'Cannot edit this',
    disabled: true,
  },
}

export const AutoResize: Story = {
  args: {
    label: 'Auto-resizing',
    placeholder: 'Start typing…',
    autoResize: true,
  },
}
