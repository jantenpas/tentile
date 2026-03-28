import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { label: 'Accept terms and conditions', checked: false, disabled: false },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}

export const Checked: Story = {
  args: { label: 'I agree', checked: true },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? true)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}

export const Indeterminate: Story = {
  args: { label: 'Select all', checked: false, indeterminate: true },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}

export const WithHint: Story = {
  args: { label: 'Send me updates', hint: 'We send at most one email per week.', checked: false },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}

export const WithError: Story = {
  args: { label: 'Accept terms', error: 'You must accept the terms to continue.', checked: false },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Checkbox label="Unchecked disabled" checked={false} onChange={() => {}} disabled />
      <Checkbox label="Checked disabled" checked={true} onChange={() => {}} disabled />
    </div>
  ),
}

export const NoLabel: Story = {
  args: { checked: false },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}
