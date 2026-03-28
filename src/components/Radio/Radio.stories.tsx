import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from './Radio'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

const COLORS = [
  { label: 'Teal', value: 'teal' },
  { label: 'Purple', value: 'purple' },
  { label: 'Slate', value: 'slate' },
]

export const Default: Story = {
  args: {
    name: 'color',
    label: 'Favorite color',
    options: COLORS,
    orientation: 'vertical',
    disabled: false,
    required: false,
  },
  render: (args) => {
    const [value, setValue] = useState('teal')
    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
}

export const Horizontal: Story = {
  args: {
    ...Default.args,
    name: 'color-h',
    orientation: 'horizontal',
  },
  render: Default.render,
}

export const WithHint: Story = {
  args: {
    name: 'plan',
    label: 'Billing plan',
    hint: 'You can change this later in settings.',
    options: [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise' },
    ],
    required: true,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
}

export const WithError: Story = {
  args: {
    name: 'plan-error',
    label: 'Billing plan',
    options: [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
    ],
    error: 'Please select a plan to continue.',
    required: true,
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
}

export const WithDisabledOption: Story = {
  args: {
    name: 'plan-disabled',
    label: 'Billing plan',
    options: [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise (contact sales)', value: 'enterprise', disabled: true },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState('free')
    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
}

export const Disabled: Story = {
  args: {
    name: 'plan-all-disabled',
    label: 'Billing plan',
    options: COLORS,
    disabled: true,
  },
  render: (args) => <RadioGroup {...args} value="teal" onChange={() => {}} />,
}
