import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { Button } from '../Button'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <polygon points="14,2 26,21 2,21" fill="#0F766E" />
  </svg>
)

const NavLinks = () => (
  <>
    {['Home', 'Components', 'Docs'].map((label) => (
      <a
        key={label}
        href="#"
        style={{
          padding: '0.375rem 0.75rem',
          borderRadius: '6px',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--color-neutral-700)',
          textDecoration: 'none',
        }}
      >
        {label}
      </a>
    ))}
  </>
)

export const Default: Story = {
  args: {
    title: 'Tentile UI',
    variant: 'default',
    size: 'md',
  },
}

export const WithLogo: Story = {
  render: () => <Header logo={<Logo />} title="Tentile UI" variant="bordered" />,
}

export const WithNav: Story = {
  render: () => <Header logo={<Logo />} title="Tentile UI" nav={<NavLinks />} variant="bordered" />,
}

export const WithActions: Story = {
  render: () => (
    <Header
      logo={<Logo />}
      title="Tentile UI"
      nav={<NavLinks />}
      actions={
        <>
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="primary" size="sm">
            Get started
          </Button>
        </>
      }
      variant="bordered"
    />
  ),
}

export const Elevated: Story = {
  render: () => (
    <Header
      logo={<Logo />}
      title="Tentile UI"
      nav={<NavLinks />}
      actions={
        <Button variant="primary" size="sm">
          Get started
        </Button>
      }
      variant="elevated"
    />
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Header title="Small header" size="sm" variant="bordered" />
      <Header title="Medium header" size="md" variant="bordered" />
      <Header title="Large header" size="lg" variant="bordered" />
    </div>
  ),
}

export const Sticky: Story = {
  render: () => (
    <div style={{ height: '300px', overflowY: 'auto' }}>
      <Header title="Sticky Header" variant="bordered" sticky />
      <div style={{ padding: '2rem', color: 'var(--color-neutral-600)' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i}>Scroll down to see the header stick to the top.</p>
        ))}
      </div>
    </div>
  ),
}
