import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible } from './Collapsible'
import { Stack } from '../Stack/Stack'
import { Text } from '../Text/Text'
import { Badge } from '../Badge/Badge'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  args: {
    trigger: 'Section title',
    children: (
      <Text size="sm" color="subtle">
        Content revealed when the section is open.
      </Text>
    ),
    defaultOpen: true,
  },
}

export const StartsCollapsed: Story = {
  args: {
    trigger: 'Collapsed by default',
    children: (
      <Text size="sm" color="subtle">
        You had to click to see this.
      </Text>
    ),
    defaultOpen: false,
  },
}

export const IndentedContent: Story = {
  args: {
    trigger: 'Indented content',
    indented: true,
    children: (
      <Stack direction="column" gap={1}>
        <Text size="sm" color="subtle">
          Nested item one
        </Text>
        <Text size="sm" color="subtle">
          Nested item two
        </Text>
      </Stack>
    ),
    defaultOpen: true,
  },
}

export const CustomTrigger: Story = {
  render: () => (
    <Collapsible
      defaultOpen
      trigger={
        <Stack as="span" direction="row" gap={2} align="center">
          <Text
            as="span"
            size="xs"
            weight="semibold"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--color-neutral-400)',
            }}
          >
            Components
          </Text>
          <Badge variant="default" size="sm">
            24
          </Badge>
        </Stack>
      }
    >
      <Stack direction="column" gap={1} style={{ paddingTop: '0.5rem' }}>
        {['Alert', 'Badge', 'Button', 'Card', 'Input'].map((name) => (
          <Text key={name} size="sm">
            {name}
          </Text>
        ))}
      </Stack>
    </Collapsible>
  ),
}
