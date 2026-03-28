import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { label: 'Enable notifications', checked: false, size: 'md', disabled: false },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Switch {...args} checked={checked} onChange={setChecked} />
  },
}

export const Checked: Story = {
  args: { label: 'Dark mode', checked: true },
  render: (args) => {
    const [checked, setChecked] = useState(true)
    return <Switch {...args} checked={checked} onChange={setChecked} />
  },
}

export const WithHint: Story = {
  args: {
    label: 'Marketing emails',
    hint: 'Receive product updates and announcements.',
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Switch {...args} checked={checked} onChange={setChecked} />
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Switch key={size} label={`Size: ${size}`} size={size} checked={true} onChange={() => {}} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Switch label="Off and disabled" checked={false} onChange={() => {}} disabled />
      <Switch label="On and disabled" checked={true} onChange={() => {}} disabled />
    </div>
  ),
}

export const NoLabel: Story = {
  args: { checked: false },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Switch {...args} checked={checked} onChange={setChecked} />
  },
}
