import type { Meta, StoryObj } from '@storybook/react'
import { EditableText } from './EditableText'

const meta: Meta<typeof EditableText> = {
  title: 'Components/EditableText',
  component: EditableText,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof EditableText>

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const Default: Story = {
  args: {
    value: 'You are a helpful assistant that answers questions concisely and accurately.',
    label: 'System Prompt',
    onSave: async (value) => {
      await delay(800)
      console.log('Saved:', value)
    },
  },
}

export const Empty: Story = {
  args: {
    value: '',
    label: 'System Prompt',
    placeholder: 'No system prompt configured.',
    onSave: async (value) => {
      await delay(800)
      console.log('Saved:', value)
    },
  },
}

export const WithError: Story = {
  args: {
    value: 'This save will fail.',
    label: 'System Prompt',
    onSave: async () => {
      await delay(800)
      throw new Error('Failed to save. The server returned a 500 error.')
    },
  },
}

export const NoLabel: Story = {
  args: {
    value: 'A block of editable text with no label above it.',
    onSave: async (value) => {
      await delay(800)
      console.log('Saved:', value)
    },
  },
}

export const TallRows: Story = {
  args: {
    value: 'A longer prompt that benefits from more textarea rows when editing.',
    label: 'Detailed Prompt',
    rows: 8,
    onSave: async (value) => {
      await delay(800)
      console.log('Saved:', value)
    },
  },
}
