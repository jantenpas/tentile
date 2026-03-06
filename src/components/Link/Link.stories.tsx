import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'unstyled'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default link',
    variant: 'default',
  },
}

export const Subtle: Story = {
  args: {
    href: '#',
    children: 'Subtle link',
    variant: 'subtle',
  },
}

export const Unstyled: Story = {
  args: {
    href: '#',
    children: 'Unstyled link',
    variant: 'unstyled',
  },
}

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'Opens in new tab',
    external: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#" variant="default">Default link</Link>
      <Link href="#" variant="subtle">Subtle link</Link>
      <Link href="#" variant="unstyled">Unstyled link</Link>
      <Link href="https://example.com" external>External link</Link>
    </div>
  ),
}
