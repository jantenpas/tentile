import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

const FRUITS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        label="Favorite fruit"
        placeholder="Select one..."
        options={FRUITS}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('banana')
    return (
      <Select
        label="Favorite fruit"
        options={FRUITS}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        label="Favorite fruit"
        placeholder="Select one..."
        options={FRUITS}
        value={value}
        onChange={setValue}
        error="Please select an option."
        required
      />
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <Select
      label="Favorite fruit"
      options={FRUITS}
      value="apple"
      onChange={() => {}}
      disabled
    />
  ),
}
