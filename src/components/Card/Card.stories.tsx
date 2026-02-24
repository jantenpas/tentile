import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Button } from '../Button'
import { Badge } from '../Badge'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Heading level={4}>Card Title</Heading>
        <Text color="muted">This is a description inside a card component.</Text>
      </div>
    ),
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
      <Card variant="elevated" style={{ width: '200px' }}>
        <Heading level={5}>Elevated</Heading>
        <Text size="sm" color="muted">Default shadow + border</Text>
      </Card>
      <Card variant="outlined" style={{ width: '200px' }}>
        <Heading level={5}>Outlined</Heading>
        <Text size="sm" color="muted">Border only, no shadow</Text>
      </Card>
      <Card variant="filled" style={{ width: '200px' }}>
        <Heading level={5}>Filled</Heading>
        <Text size="sm" color="muted">Subtle background fill</Text>
      </Card>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
      {['Project Alpha', 'Project Beta', 'Project Gamma'].map((name) => (
        <Card key={name} interactive style={{ width: '200px' }}>
          <Heading level={5}>{name}</Heading>
          <Text size="sm" color="muted">Click to open project</Text>
        </Card>
      ))}
    </div>
  ),
}

export const Composition: Story = {
  render: () => (
    <Card style={{ maxWidth: '380px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Heading level={4}>Tentile UI</Heading>
          <Badge variant="success">Stable</Badge>
        </div>
        <Text color="muted">
          A composable React component library built for production.
          Tiles that snap together to build interfaces.
        </Text>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button size="sm">Get started</Button>
          <Button size="sm" variant="ghost">View docs</Button>
        </div>
      </div>
    </Card>
  ),
}
