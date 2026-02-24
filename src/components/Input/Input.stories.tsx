import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'jtenpas',
    hint: 'Only letters, numbers, and underscores.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    defaultValue: 'notanemail',
    error: 'Please enter a valid email address.',
  },
}

export const WithSuccess: Story = {
  args: {
    label: 'Username',
    placeholder: 'jtenpas',
    defaultValue: 'jtenpas',
    status: 'success',
    hint: 'Username is available.',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '320px' }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Email address',
    defaultValue: 'you@example.com',
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    required: true,
    hint: 'We\'ll never share your email.',
  },
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '320px' }}>
      <Input
        label="Search"
        placeholder="Search components..."
        leadingIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 10L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        }
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        leadingIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M1.5 5.5L8 9.5L14.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        }
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '400px' }}>
      <Input label="Full name" placeholder="Jan tenPas" required fullWidth />
      <Input label="Email address" placeholder="jan@example.com" required fullWidth hint="We'll never share your email." />
      <Input label="Password" type="password" placeholder="••••••••" required fullWidth />
    </div>
  ),
}
