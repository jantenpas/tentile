import React from 'react'
import type { PropRow } from '../components/PropsTable'
import { Alert } from '@lib/components/Alert/Alert'
import { Badge } from '@lib/components/Badge/Badge'
import { Breadcrumb } from '@lib/components/Breadcrumb/Breadcrumb'
import { Button } from '@lib/components/Button/Button'
import { Card } from '@lib/components/Card/Card'
import { Checkbox } from '@lib/components/Checkbox/Checkbox'
import { EditableText } from '@lib/components/EditableText/EditableText'
import { Header } from '@lib/components/Header/Header'
import { Heading } from '@lib/components/Heading/Heading'
import { Input } from '@lib/components/Input/Input'
import { Link } from '@lib/components/Link/Link'
import { Modal } from '@lib/components/Modal/Modal'
import { ProgressBar } from '@lib/components/ProgressBar/ProgressBar'
import { RadioGroup } from '@lib/components/Radio/Radio'
import { Select } from '@lib/components/Select/Select'
import { Spinner } from '@lib/components/Spinner/Spinner'
import { Stack } from '@lib/components/Stack/Stack'
import { StatCard } from '@lib/components/StatCard/StatCard'
import { Switch } from '@lib/components/Switch/Switch'
import { Table } from '@lib/components/Table/Table'
import { Tabs } from '@lib/components/Tabs/Tabs'
import { Text } from '@lib/components/Text/Text'
import { Textarea } from '@lib/components/Textarea/Textarea'
import { Tooltip } from '@lib/components/Tooltip/Tooltip'
import { Collapsible } from '@lib/components/Collapsible/Collapsible'
import { StyleGuideShowcase } from '../components/StyleGuideShowcase'

export interface ComponentExample {
  title: string
  render: () => React.ReactNode
  code: string
}

export interface ComponentEntry {
  slug: string
  name: string
  description: string
  examples: ComponentExample[]
  props?: PropRow[]
}

const noop = () => {}
const noopAsync = async () => {}

function ControlledModalExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm deletion"
        footer={
          <Stack direction="row" gap={2}>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Delete
            </Button>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Stack>
        }
      >
        <Text size="sm" color="subtle">
          Are you sure you want to delete this item? This action cannot be undone.
        </Text>
      </Modal>
    </>
  )
}

function ControlledTabsExample() {
  const [activeTab, setActiveTab] = React.useState('overview')

  return (
    <Tabs
      tabs={[
        {
          id: 'overview',
          label: 'Overview',
          content: <Text size="sm">Overview content goes here.</Text>,
        },
        {
          id: 'settings',
          label: 'Settings',
          content: <Text size="sm">Settings content goes here.</Text>,
        },
        {
          id: 'logs',
          label: 'Logs',
          content: <Text size="sm">Log output would appear here.</Text>,
        },
      ]}
      activeTab={activeTab}
      onChange={setActiveTab}
    />
  )
}

const componentListUnsorted: ComponentEntry[] = [
  {
    slug: 'alert',
    name: 'Alert',
    description: 'Contextual feedback messages for success, warning, error, and info states.',
    props: [
      {
        name: 'variant',
        type: "'info' | 'success' | 'warning' | 'error'",
        default: "'info'",
        description: 'Visual style and semantic meaning of the alert.',
      },
      {
        name: 'title',
        type: 'string',
        description: 'Optional bold heading displayed above the message.',
      },
      { name: 'children', type: 'ReactNode', description: 'The alert message content.' },
      {
        name: 'icon',
        type: 'ReactNode',
        description: 'Custom icon to replace the default variant icon.',
      },
      {
        name: 'onDismiss',
        type: '() => void',
        description: 'If provided, renders a dismiss button that calls this handler.',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class name for the root element.',
      },
    ],
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Stack direction="column" gap={2}>
            <Alert variant="success">Your changes were saved successfully.</Alert>
            <Alert variant="warning">Your session will expire in 5 minutes.</Alert>
            <Alert variant="error">Failed to connect to the server.</Alert>
            <Alert variant="info">A new version is available. Refresh to update.</Alert>
          </Stack>
        ),
        code: `<Alert variant="success">Your changes were saved successfully.</Alert>
<Alert variant="warning">Your session will expire in 5 minutes.</Alert>
<Alert variant="error">Failed to connect to the server.</Alert>
<Alert variant="info">A new version is available. Refresh to update.</Alert>`,
      },
      {
        title: 'With title',
        render: () => (
          <Alert variant="error" title="Payment failed">
            We couldn't process your card. Please check your details and try again.
          </Alert>
        ),
        code: `<Alert variant="error" title="Payment failed">
  We couldn't process your card. Please check your details and try again.
</Alert>`,
      },
    ],
  },

  {
    slug: 'badge',
    name: 'Badge',
    description: 'Small label for status, categories, or counts.',
    props: [
      {
        name: 'variant',
        type: "'default' | 'brand' | 'success' | 'warning' | 'error' | 'info'",
        default: "'default'",
        description: 'Color and semantic meaning of the badge.',
      },
      {
        name: 'size',
        type: "'sm' | 'md'",
        default: "'md'",
        description: 'Controls the badge size.',
      },
      { name: 'dot', type: 'boolean', description: 'Renders a small status dot before the label.' },
      { name: 'children', type: 'ReactNode', description: 'Badge label content.' },
    ],
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Stack direction="row" gap={2} align="center">
            <Badge variant="default">Default</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </Stack>
        ),
        code: `<Badge variant="default">Default</Badge>
<Badge variant="brand">Brand</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`,
      },
      {
        title: 'With dot indicator',
        render: () => (
          <Stack direction="row" gap={2} align="center">
            <Badge variant="success" dot>
              Live
            </Badge>
            <Badge variant="warning" dot>
              Degraded
            </Badge>
            <Badge variant="error" dot>
              Offline
            </Badge>
          </Stack>
        ),
        code: `<Badge variant="success" dot>Live</Badge>
<Badge variant="warning" dot>Degraded</Badge>
<Badge variant="error" dot>Offline</Badge>`,
      },
    ],
  },

  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Navigation trail showing the current page hierarchy.',
    props: [
      {
        name: 'items',
        type: 'BreadcrumbItem[]',
        description:
          'Array of breadcrumb steps. Each item has a `label` and optional `href`. The last item is treated as the current page.',
      },
      {
        name: 'separator',
        type: "'slash' | 'chevron' | 'dot' | ReactNode",
        default: "'chevron'",
        description: 'Character or element rendered between crumbs.',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class for the root element.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <Breadcrumb
            items={[
              { label: 'Home', href: '#' },
              { label: 'Settings', href: '#' },
              { label: 'Profile' },
            ]}
          />
        ),
        code: `<Breadcrumb
  items={[
    { label: 'Home', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Profile' },
  ]}
/>`,
      },
    ],
  },

  {
    slug: 'button',
    name: 'Button',
    description: 'Triggers actions. Supports multiple variants, sizes, and states.',
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'ghost'",
        default: "'primary'",
        description: 'Visual style of the button.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls padding and font size.',
      },
      {
        name: 'isLoading',
        type: 'boolean',
        default: 'false',
        description: 'Replaces content with a spinner and disables the button.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Stretches the button to fill its container.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Disables the button and applies disabled styling.',
      },
      { name: 'children', type: 'ReactNode', description: 'Button label content.' },
    ],
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Stack direction="row" gap={2} align="center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </Stack>
        ),
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`,
      },
      {
        title: 'Sizes',
        render: () => (
          <Stack direction="row" gap={2} align="center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Stack>
        ),
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      },
      {
        title: 'States',
        render: () => (
          <Stack direction="row" gap={2} align="center">
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </Stack>
        ),
        code: `<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`,
      },
    ],
  },

  {
    slug: 'card',
    name: 'Card',
    description: 'Surface container for grouping related content.',
    props: [
      {
        name: 'variant',
        type: "'elevated' | 'outlined' | 'filled'",
        default: "'elevated'",
        description: 'Visual treatment of the card surface.',
      },
      {
        name: 'padding',
        type: "'none' | 'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Inner padding of the card.',
      },
      {
        name: 'interactive',
        type: 'boolean',
        default: 'false',
        description: 'Applies hover/focus styles and makes the card keyboard-activatable.',
      },
      {
        name: 'onActivate',
        type: '() => void',
        description:
          'Called when the card is activated via keyboard (Enter/Space). Falls back to onClick.',
      },
      { name: 'children', type: 'ReactNode', description: 'Content rendered inside the card.' },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <Card style={{ maxWidth: 320 }}>
            <Heading level={3} size="sm">
              Card title
            </Heading>
            <Text color="subtle" size="sm">
              Some supporting text for this card. Keep it brief and useful.
            </Text>
          </Card>
        ),
        code: `<Card>
  <Heading level={3} size="sm">Card title</Heading>
  <Text color="subtle" size="sm">Some supporting text for this card.</Text>
</Card>`,
      },
      {
        title: 'Variants',
        render: () => (
          <Stack direction="column" gap={2}>
            <Card variant="filled">Filled</Card>
            <Card variant="outlined">Outlined</Card>
            <Card variant="elevated">Elevated</Card>
          </Stack>
        ),
        code: `<Card variant="filled">Filled</Card>
<Card variant="outlined">Outlined</Card>
<Card variant="elevated">Elevated</Card>`,
      },
    ],
  },

  {
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'Binary toggle for boolean form fields.',
    props: [
      { name: 'checked', type: 'boolean', description: 'Controlled checked state.' },
      {
        name: 'onChange',
        type: '(checked: boolean) => void',
        description: 'Called when the user toggles the checkbox.',
      },
      {
        name: 'label',
        type: 'string',
        description: 'Visible label rendered next to the checkbox.',
      },
      { name: 'hint', type: 'string', description: 'Helper text displayed below the label.' },
      {
        name: 'error',
        type: 'string',
        description: 'Error message displayed below the label in error styling.',
      },
      {
        name: 'indeterminate',
        type: 'boolean',
        description: 'Renders a dash (mixed state) instead of a checkmark.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Prevents interaction and applies disabled styling.',
      },
    ],
    examples: [
      {
        title: 'States',
        render: () => (
          <Stack direction="column" gap={2}>
            <Checkbox label="Unchecked" checked={false} onChange={noop} />
            <Checkbox label="Checked" checked onChange={noop} />
            <Checkbox label="Disabled" checked={false} onChange={noop} disabled />
            <Checkbox label="Disabled checked" checked onChange={noop} disabled />
          </Stack>
        ),
        code: `<Checkbox label="Unchecked" checked={false} onChange={() => {}} />
<Checkbox label="Checked" checked onChange={() => {}} />
<Checkbox label="Disabled" checked={false} onChange={() => {}} disabled />`,
      },
    ],
  },

  {
    slug: 'editable-text',
    name: 'EditableText',
    description: 'Inline text that can be clicked to edit in place.',
    props: [
      { name: 'value', type: 'string', description: 'Controlled current text value.' },
      {
        name: 'onSave',
        type: '(value: string) => Promise<void>',
        description:
          'Async handler called when the user confirms an edit. Entering saving state during the promise.',
      },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Placeholder shown when the value is empty.',
      },
      { name: 'label', type: 'string', description: 'Accessible label for the edit field.' },
      {
        name: 'rows',
        type: 'number',
        description: 'Number of textarea rows when editing multi-line content.',
      },
      {
        name: 'editTooltip',
        type: 'string',
        description: 'Tooltip text shown on the edit trigger button.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => <EditableText value="Click me to edit" onSave={noopAsync} />,
        code: `<EditableText value="Click me to edit" onSave={async () => {}} />`,
      },
    ],
  },

  {
    slug: 'header',
    name: 'Header',
    description: 'Page-level header bar with optional brand content, navigation, and actions.',
    props: [
      { name: 'title', type: 'string', description: 'Main heading text.' },
      {
        name: 'logo',
        type: 'ReactNode',
        description: 'Logo or branding element rendered on the left.',
      },
      {
        name: 'nav',
        type: 'ReactNode',
        description: 'Navigation links rendered in the center area.',
      },
      {
        name: 'actions',
        type: 'ReactNode',
        description: 'Buttons or controls rendered on the right.',
      },
      {
        name: 'variant',
        type: "'default' | 'bordered' | 'elevated'",
        default: "'default'",
        description: 'Visual treatment of the header bar.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls the header height and padding.',
      },
      {
        name: 'sticky',
        type: 'boolean',
        default: 'false',
        description: 'Sticks the header to the top of the viewport on scroll.',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class for the root element.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => <Header title="Dashboard" />,
        code: `<Header title="Dashboard" />`,
      },
      {
        title: 'With actions',
        render: () => (
          <Header title="Team members" actions={<Button size="sm">Invite member</Button>} />
        ),
        code: `<Header
  title="Team members"
  actions={<Button size="sm">Invite member</Button>}
/>`,
      },
    ],
  },

  {
    slug: 'heading',
    name: 'Heading',
    description: 'Semantic headings with independent size control.',
    props: [
      {
        name: 'level',
        type: '1 | 2 | 3 | 4 | 5 | 6',
        default: '2',
        description:
          'The HTML heading element to render (h1–h6). Controls semantics, not appearance.',
      },
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
        description: 'Visual size of the heading, independent of the semantic level.',
      },
      {
        name: 'color',
        type: "'default' | 'muted' | 'brand'",
        default: "'default'",
        description: 'Text color of the heading.',
      },
      { name: 'children', type: 'ReactNode', description: 'Heading text content.' },
    ],
    examples: [
      {
        title: 'Scale',
        render: () => (
          <Stack direction="column" gap={2}>
            <Heading level={1} size="2xl">
              Heading 2xl
            </Heading>
            <Heading level={2} size="xl">
              Heading xl
            </Heading>
            <Heading level={3} size="lg">
              Heading lg
            </Heading>
            <Heading level={4} size="md">
              Heading md
            </Heading>
            <Heading level={5} size="lg">
              Heading lg
            </Heading>
          </Stack>
        ),
        code: `<Heading level={1} size="2xl">Heading 2xl</Heading>
<Heading level={2} size="xl">Heading xl</Heading>
<Heading level={3} size="lg">Heading lg</Heading>`,
      },
    ],
  },

  {
    slug: 'input',
    name: 'Input',
    description: 'Single-line text input with label, helper text, and validation states.',
    props: [
      { name: 'label', type: 'string', description: 'Visible label above the input.' },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls input height and font size.',
      },
      {
        name: 'status',
        type: "'default' | 'error'",
        default: "'default'",
        description: 'Validation state that applies ring/border color.',
      },
      { name: 'hint', type: 'string', description: 'Helper text shown below the input.' },
      {
        name: 'error',
        type: 'string',
        description: 'Error message shown below the input (overrides hint).',
      },
      {
        name: 'leadingIcon',
        type: 'ReactNode',
        description: 'Icon rendered inside the left edge of the input.',
      },
      {
        name: 'trailingIcon',
        type: 'ReactNode',
        description: 'Icon rendered inside the right edge of the input.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Stretches the input to fill its container.',
      },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Placeholder text shown when the input is empty.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Prevents interaction and applies disabled styling.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <Stack direction="column" gap={4} style={{ maxWidth: 320 }}>
            <Input label="Email" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
          </Stack>
        ),
        code: `<Input label="Email" placeholder="you@example.com" />
<Input label="Password" type="password" placeholder="••••••••" />`,
      },
      {
        title: 'Validation states',
        render: () => (
          <Stack direction="column" gap={4} style={{ maxWidth: 320 }}>
            <Input label="Username" hint="That username is available." defaultValue="jansmith" />
            <Input
              label="Email"
              status="error"
              error="Please enter a valid email address."
              defaultValue="not-an-email"
            />
          </Stack>
        ),
        code: `<Input label="Username" hint="That username is available." />
<Input label="Email" status="error" error="Please enter a valid email address." />`,
      },
    ],
  },

  {
    slug: 'link',
    name: 'Link',
    description: 'Anchor element with consistent styling and optional external indicator.',
    props: [
      { name: 'href', type: 'string', description: 'The URL the link points to.' },
      {
        name: 'variant',
        type: "'default' | 'subtle' | 'unstyled'",
        default: "'default'",
        description: 'Visual style of the link.',
      },
      {
        name: 'external',
        type: 'boolean',
        description: 'Opens the link in a new tab and appends an external icon.',
      },
      { name: 'children', type: 'ReactNode', description: 'Link text content.' },
    ],
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Stack direction="row" gap={4} align="center">
            <Link href="#">Default</Link>
            <Link href="#" variant="subtle">
              Subtle
            </Link>
            <Link href="#" variant="unstyled">
              Unstyled
            </Link>
            <Link href="https://github.com" external>
              External
            </Link>
          </Stack>
        ),
        code: `<Link href="#">Default</Link>
<Link href="#" variant="subtle">Subtle</Link>
<Link href="#" variant="unstyled">Unstyled</Link>
<Link href="https://github.com" external>External</Link>`,
      },
    ],
  },

  {
    slug: 'modal',
    name: 'Modal',
    description: 'Dialog overlay for focused interactions and confirmations.',
    props: [
      { name: 'open', type: 'boolean', description: 'Controls whether the modal is visible.' },
      {
        name: 'onClose',
        type: '() => void',
        description:
          'Called when the user dismisses the modal (backdrop click, Escape key, or close button).',
      },
      { name: 'title', type: 'string', description: 'Heading text rendered in the modal header.' },
      { name: 'children', type: 'ReactNode', description: 'Main body content of the modal.' },
      {
        name: 'footer',
        type: 'ReactNode',
        description: 'Content rendered in the sticky modal footer (typically action buttons).',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls the maximum width of the modal panel.',
      },
      {
        name: 'closeOnBackdrop',
        type: 'boolean',
        default: 'true',
        description: 'Whether clicking the backdrop dismisses the modal.',
      },
    ],
    examples: [
      {
        title: 'Controlled',
        render: () => <ControlledModalExample />,
        code: `const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open modal</Button>
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm deletion"
  footer={
    <Stack direction="row" gap={2}>
      <Button variant="primary" onClick={() => setOpen(false)}>Delete</Button>
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    </Stack>
  }
>
  <Text size="sm" color="subtle">
    Are you sure you want to delete this item?
  </Text>
</Modal>`,
      },
    ],
  },

  {
    slug: 'progress-bar',
    name: 'ProgressBar',
    description: 'Visualizes completion percentage for tasks or loading states.',
    props: [
      {
        name: 'value',
        type: 'number',
        description: 'Current progress value. Should be between 0 and max.',
      },
      {
        name: 'max',
        type: 'number',
        default: '100',
        description: 'Maximum value for the progress bar.',
      },
      {
        name: 'variant',
        type: "'brand' | 'success' | 'error'",
        default: "'brand'",
        description: 'Fill color of the progress bar.',
      },
      { name: 'label', type: 'string', description: 'Accessible label for screen readers.' },
      {
        name: 'showPercent',
        type: 'boolean',
        default: 'false',
        description: 'Displays the percentage value as text above the bar.',
      },
    ],
    examples: [
      {
        title: 'Values',
        render: () => (
          <Stack direction="column" gap={2} style={{ maxWidth: 400 }}>
            <ProgressBar value={25} />
            <ProgressBar value={50} />
            <ProgressBar value={75} />
            <ProgressBar value={100} />
          </Stack>
        ),
        code: `<ProgressBar value={25} />
<ProgressBar value={50} />
<ProgressBar value={100} />`,
      },
      {
        title: 'Variants',
        render: () => (
          <Stack direction="column" gap={2} style={{ maxWidth: 400 }}>
            <ProgressBar value={60} variant="brand" />
            <ProgressBar value={60} variant="success" />
            <ProgressBar value={60} variant="error" />
          </Stack>
        ),
        code: `<ProgressBar value={60} variant="brand" />
<ProgressBar value={60} variant="success" />
<ProgressBar value={60} variant="error" />`,
      },
    ],
  },

  {
    slug: 'radio',
    name: 'Radio',
    description: 'Single-select option from a group.',
    props: [
      {
        name: 'options',
        type: 'RadioOption[]',
        description: 'Array of options. Each has a `value`, `label`, and optional `disabled`.',
      },
      { name: 'value', type: 'string', description: 'Controlled selected value.' },
      {
        name: 'onChange',
        type: '(value: string) => void',
        description: 'Called when the user selects an option.',
      },
      {
        name: 'name',
        type: 'string',
        description: 'HTML name attribute shared across all radio inputs in the group.',
      },
      { name: 'label', type: 'string', description: 'Group label rendered above the options.' },
      { name: 'hint', type: 'string', description: 'Helper text shown below the group.' },
      { name: 'error', type: 'string', description: 'Error message shown below the group.' },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'vertical'",
        description: 'Layout direction of the radio options.',
      },
      { name: 'disabled', type: 'boolean', description: 'Disables all options in the group.' },
      { name: 'required', type: 'boolean', description: 'Marks the field as required.' },
    ],
    examples: [
      {
        title: 'RadioGroup',
        render: () => (
          <RadioGroup
            name="plan"
            options={[
              { value: 'free', label: 'Free' },
              { value: 'pro', label: 'Pro' },
              { value: 'enterprise', label: 'Enterprise' },
            ]}
            value="pro"
            onChange={noop}
          />
        ),
        code: `<RadioGroup
  name="plan"
  options={[
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise' },
  ]}
  value="pro"
  onChange={() => {}}
/>`,
      },
    ],
  },

  {
    slug: 'select',
    name: 'Select',
    description: 'Dropdown for selecting a single value from a list.',
    props: [
      {
        name: 'options',
        type: 'SelectOption[]',
        description: 'Array of options. Each has a `value` and `label`.',
      },
      { name: 'value', type: 'string', description: 'Controlled selected value.' },
      {
        name: 'onChange',
        type: '(value: string) => void',
        description: 'Called when the user picks an option.',
      },
      { name: 'label', type: 'string', description: 'Visible label above the select.' },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Placeholder text when no value is selected.',
      },
      { name: 'error', type: 'string', description: 'Error message shown below the select.' },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Prevents interaction and applies disabled styling.',
      },
      { name: 'required', type: 'boolean', description: 'Marks the field as required.' },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <div style={{ maxWidth: 280 }}>
            <Select
              label="Role"
              value="editor"
              onChange={noop}
              options={[
                { value: 'viewer', label: 'Viewer' },
                { value: 'editor', label: 'Editor' },
                { value: 'admin', label: 'Admin' },
              ]}
            />
          </div>
        ),
        code: `<Select
  label="Role"
  value="editor"
  onChange={() => {}}
  options={[
    { value: 'viewer', label: 'Viewer' },
    { value: 'editor', label: 'Editor' },
    { value: 'admin', label: 'Admin' },
  ]}
/>`,
      },
    ],
  },

  {
    slug: 'spinner',
    name: 'Spinner',
    description: 'Animated loading indicator.',
    props: [
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls the diameter of the spinner.',
      },
      {
        name: 'color',
        type: "'brand' | 'neutral' | 'white'",
        default: "'brand'",
        description: 'Color of the spinner ring.',
      },
      {
        name: 'label',
        type: 'string',
        default: "'Loading…'",
        description: 'Accessible screen-reader label.',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class for the root element.',
      },
    ],
    examples: [
      {
        title: 'Sizes',
        render: () => (
          <Stack direction="row" gap={4} align="center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </Stack>
        ),
        code: `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`,
      },
    ],
  },

  {
    slug: 'stack',
    name: 'Stack',
    description: 'Flex layout primitive for spacing children horizontally or vertically.',
    props: [
      {
        name: 'direction',
        type: "'row' | 'column' | 'row-reverse' | 'column-reverse'",
        default: "'row'",
        description: 'Flex direction for laying out children.',
      },
      {
        name: 'gap',
        type: '0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16',
        default: '4',
        description: 'Space between children, mapped to design tokens (0 = no gap, 16 = 4rem).',
      },
      {
        name: 'align',
        type: 'CSSProperties["alignItems"]',
        description: 'Cross-axis alignment of children (e.g. "center", "flex-start").',
      },
      {
        name: 'justify',
        type: 'CSSProperties["justifyContent"]',
        description: 'Main-axis distribution of children (e.g. "space-between").',
      },
      {
        name: 'wrap',
        type: 'boolean',
        default: 'false',
        description: 'Allows children to wrap onto the next line.',
      },
      {
        name: 'as',
        type: 'ElementType',
        default: "'div'",
        description: 'HTML element or component to render as the root.',
      },
      { name: 'children', type: 'ReactNode', description: 'Items to lay out.' },
    ],
    examples: [
      {
        title: 'Row',
        render: () => (
          <Stack direction="row" gap={4} align="center">
            <Badge variant="brand">One</Badge>
            <Badge variant="success">Two</Badge>
            <Badge variant="info">Three</Badge>
          </Stack>
        ),
        code: `<Stack direction="row" gap={4} align="center">
  <Badge variant="brand">One</Badge>
  <Badge variant="success">Two</Badge>
  <Badge variant="info">Three</Badge>
</Stack>`,
      },
      {
        title: 'Column',
        render: () => (
          <Stack direction="column" gap={2}>
            <Button fullWidth>First</Button>
            <Button fullWidth variant="secondary">
              Second
            </Button>
            <Button fullWidth variant="ghost">
              Third
            </Button>
          </Stack>
        ),
        code: `<Stack direction="column" gap={2}>
  <Button fullWidth>First</Button>
  <Button fullWidth variant="secondary">Second</Button>
  <Button fullWidth variant="ghost">Third</Button>
</Stack>`,
      },
    ],
  },

  {
    slug: 'stat-card',
    name: 'StatCard',
    description: 'Metric display card with optional trend indicator.',
    props: [
      {
        name: 'value',
        type: 'string | number',
        description: 'The primary metric value to display.',
      },
      {
        name: 'label',
        type: 'string',
        description: 'Label describing what the metric represents.',
      },
      {
        name: 'trend',
        type: 'StatCardTrend',
        description:
          'Optional trend indicator. Includes `direction` ("up" | "down" | "neutral"), `value` (string), and optional `label`.',
      },
      { name: 'icon', type: 'ReactNode', description: 'Icon rendered in the card.' },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class for the root element.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              maxWidth: 600,
            }}
          >
            <StatCard label="Revenue" value="$12,400" trend={{ value: '8.2%', direction: 'up' }} />
            <StatCard label="Users" value="3,280" trend={{ value: '1.4%', direction: 'down' }} />
            <StatCard label="Uptime" value="99.9%" />
          </div>
        ),
        code: `<StatCard label="Revenue" value="$12,400" trend={{ value: '8.2%', direction: 'up' }} />
<StatCard label="Users" value="3,280" trend={{ value: '1.4%', direction: 'down' }} />
<StatCard label="Uptime" value="99.9%" />`,
      },
    ],
  },

  {
    slug: 'switch',
    name: 'Switch',
    description: 'Toggle control for binary on/off settings.',
    props: [
      { name: 'checked', type: 'boolean', description: 'Controlled on/off state.' },
      {
        name: 'onChange',
        type: '(checked: boolean) => void',
        description: 'Called when the user toggles the switch.',
      },
      { name: 'label', type: 'string', description: 'Visible label rendered next to the switch.' },
      { name: 'hint', type: 'string', description: 'Helper text shown below the label.' },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls the size of the toggle track and thumb.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Prevents interaction and applies disabled styling.',
      },
    ],
    examples: [
      {
        title: 'States',
        render: () => (
          <Stack direction="column" gap={2}>
            <Switch label="Notifications" checked onChange={noop} />
            <Switch label="Dark mode" checked={false} onChange={noop} />
            <Switch label="Disabled" checked={false} onChange={noop} disabled />
          </Stack>
        ),
        code: `<Switch label="Notifications" checked onChange={() => {}} />
<Switch label="Dark mode" checked={false} onChange={() => {}} />
<Switch label="Disabled" checked={false} onChange={() => {}} disabled />`,
      },
    ],
  },

  {
    slug: 'table',
    name: 'Table',
    description: 'Data table with typed columns and optional striping.',
    props: [
      {
        name: 'columns',
        type: 'TableColumn[]',
        description:
          'Column definitions. Each has a `key` (maps to data keys) and `label` (header text).',
      },
      {
        name: 'data',
        type: 'Record<string, ReactNode>[]',
        description: 'Array of row objects. Keys correspond to column `key` values.',
      },
      {
        name: 'variant',
        type: "'default' | 'striped'",
        default: "'default'",
        description: 'Applies alternating row background in striped mode.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <Table
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'role', label: 'Role' },
              { key: 'status', label: 'Status' },
            ]}
            data={[
              {
                name: 'Alice Chen',
                role: 'Admin',
                status: (
                  <Badge variant="success" dot>
                    Active
                  </Badge>
                ),
              },
              {
                name: 'Bob Martin',
                role: 'Editor',
                status: (
                  <Badge variant="success" dot>
                    Active
                  </Badge>
                ),
              },
              {
                name: 'Carol Wu',
                role: 'Viewer',
                status: (
                  <Badge variant="default" dot>
                    Inactive
                  </Badge>
                ),
              },
            ]}
          />
        ),
        code: `<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ]}
  data={[
    { name: 'Alice Chen', role: 'Admin', status: <Badge variant="success" dot>Active</Badge> },
    { name: 'Bob Martin', role: 'Editor', status: <Badge variant="success" dot>Active</Badge> },
    { name: 'Carol Wu', role: 'Viewer', status: <Badge variant="default" dot>Inactive</Badge> },
  ]}
/>`,
      },
    ],
  },

  {
    slug: 'tabs',
    name: 'Tabs',
    description: 'Tabbed interface for switching between views.',
    props: [
      {
        name: 'tabs',
        type: 'TabItem[]',
        description:
          'Array of tab definitions. Each has an `id`, `label`, and `content` (ReactNode).',
      },
      {
        name: 'activeTab',
        type: 'string',
        description: 'Controlled ID of the currently active tab.',
      },
      {
        name: 'onChange',
        type: '(tabId: string) => void',
        description: 'Called when the user clicks a tab.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => <ControlledTabsExample />,
        code: `const [activeTab, setActiveTab] = useState('overview')

<Tabs
  tabs={[
    { id: 'overview', label: 'Overview', content: <Text>Overview content.</Text> },
    { id: 'settings', label: 'Settings', content: <Text>Settings content.</Text> },
    { id: 'logs', label: 'Logs', content: <Text>Log output.</Text> },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
/>`,
      },
    ],
  },

  {
    slug: 'text',
    name: 'Text',
    description: 'Body text with size, weight, color, and alignment variants.',
    props: [
      {
        name: 'as',
        type: "'p' | 'span' | 'label' | 'div' | 'strong' | 'em' | 'small'",
        default: "'p'",
        description: 'HTML element to render.',
      },
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: 'Font size.',
      },
      {
        name: 'weight',
        type: "'regular' | 'medium' | 'semibold' | 'bold'",
        default: "'regular'",
        description: 'Font weight.',
      },
      {
        name: 'color',
        type: "'default' | 'muted' | 'subtle' | 'brand' | 'error' | 'success'",
        default: "'default'",
        description: 'Text color mapped to design tokens.',
      },
      {
        name: 'align',
        type: "'left' | 'center' | 'right'",
        default: "'left'",
        description: 'Text alignment.',
      },
      {
        name: 'truncate',
        type: 'boolean',
        default: 'false',
        description:
          'Truncates overflow text with an ellipsis (requires a width constraint on the container).',
      },
      {
        name: 'mono',
        type: 'boolean',
        default: 'false',
        description: 'Switches to the monospace font family.',
      },
      { name: 'children', type: 'ReactNode', description: 'Text content.' },
    ],
    examples: [
      {
        title: 'Sizes',
        render: () => (
          <Stack direction="column" gap={2}>
            <Text size="xl">Extra large — 20px</Text>
            <Text size="lg">Large — 18px</Text>
            <Text size="md">Medium — 16px (default)</Text>
            <Text size="sm">Small — 14px</Text>
            <Text size="xs">Extra small — 12px</Text>
          </Stack>
        ),
        code: `<Text size="xl">Extra large</Text>
<Text size="lg">Large</Text>
<Text size="md">Medium (default)</Text>
<Text size="sm">Small</Text>
<Text size="xs">Extra small</Text>`,
      },
      {
        title: 'Colors',
        render: () => (
          <Stack direction="column" gap={2}>
            <Text color="default">Default</Text>
            <Text color="subtle">Subtle</Text>
            <Text color="brand">Brand</Text>
            <Text color="success">Success</Text>
            <Text color="error">Error</Text>
          </Stack>
        ),
        code: `<Text color="default">Default</Text>
<Text color="subtle">Subtle</Text>
<Text color="brand">Brand</Text>`,
      },
    ],
  },

  {
    slug: 'textarea',
    name: 'Textarea',
    description: 'Multi-line text input with label and validation states.',
    props: [
      { name: 'label', type: 'string', description: 'Visible label above the textarea.' },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Controls font size and padding.',
      },
      {
        name: 'status',
        type: "'default' | 'error'",
        default: "'default'",
        description: 'Validation state that applies ring/border color.',
      },
      { name: 'hint', type: 'string', description: 'Helper text shown below the textarea.' },
      {
        name: 'error',
        type: 'string',
        description: 'Error message shown below the textarea (overrides hint).',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Stretches the textarea to fill its container.',
      },
      {
        name: 'autoResize',
        type: 'boolean',
        default: 'false',
        description: 'Automatically grows the textarea height as content is typed.',
      },
      { name: 'rows', type: 'number', description: 'Initial number of visible text rows.' },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <Stack direction="column" gap={4} style={{ maxWidth: 380 }}>
            <Textarea label="Description" placeholder="Enter a description..." rows={3} />
            <Textarea label="Notes" status="error" error="This field is required." rows={3} />
          </Stack>
        ),
        code: `<Textarea label="Description" placeholder="Enter a description..." rows={3} />
<Textarea label="Notes" status="error" error="This field is required." rows={3} />`,
      },
    ],
  },

  {
    slug: 'collapsible',
    name: 'Collapsible',
    description:
      'A disclosure primitive for progressively revealing supporting content behind a button trigger.',
    props: [
      {
        name: 'trigger',
        type: 'ReactNode',
        description:
          'Content rendered inside the toggle button. Prefer text or inline elements for valid button markup.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        description: 'Content revealed when the section is open.',
      },
      {
        name: 'indented',
        type: 'boolean',
        default: 'false',
        description:
          'Adds left indentation to the revealed content for nested navigation or grouped child items.',
      },
      {
        name: 'defaultOpen',
        type: 'boolean',
        default: 'true',
        description: 'Whether the section is open on first render (uncontrolled).',
      },
      {
        name: 'open',
        type: 'boolean',
        description: 'Controlled open state. When provided, the component is fully controlled.',
      },
      {
        name: 'onOpenChange',
        type: '(open: boolean) => void',
        description: 'Called when the open state changes.',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class for the root element.',
      },
    ],
    examples: [
      {
        title: 'Default',
        render: () => (
          <Collapsible defaultOpen trigger="Section title">
            <div style={{ paddingTop: '0.5rem' }}>
              <Text size="sm" color="subtle">
                Content revealed when the section is open.
              </Text>
            </div>
          </Collapsible>
        ),
        code: `<Collapsible defaultOpen trigger="Section title">
  <div style={{ paddingTop: '0.5rem' }}>
    <Text size="sm" color="subtle">Content revealed when the section is open.</Text>
  </div>
</Collapsible>`,
      },
      {
        title: 'Starts collapsed',
        render: () => (
          <Collapsible defaultOpen={false} trigger="Click to reveal">
            <div style={{ paddingTop: '0.5rem' }}>
              <Text size="sm" color="subtle">
                You had to click to see this.
              </Text>
            </div>
          </Collapsible>
        ),
        code: `<Collapsible defaultOpen={false} trigger="Click to reveal">
  <div style={{ paddingTop: '0.5rem' }}>
    <Text size="sm" color="subtle">You had to click to see this.</Text>
  </div>
</Collapsible>`,
      },
      {
        title: 'Custom inline trigger',
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
            <div style={{ paddingTop: '0.5rem' }}>
              <Text size="sm" color="subtle">
                Inline trigger content keeps the chevron aligned and preserves valid button
                semantics.
              </Text>
            </div>
          </Collapsible>
        ),
        code: `<Collapsible
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
      <Badge variant="default" size="sm">24</Badge>
    </Stack>
  }
>
  <div style={{ paddingTop: '0.5rem' }}>
    <Text size="sm" color="subtle">
      Inline trigger content keeps the chevron aligned and preserves valid button semantics.
    </Text>
  </div>
</Collapsible>`,
      },
    ],
  },

  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'Short contextual text revealed on hover.',
    props: [
      {
        name: 'content',
        type: 'ReactNode',
        description: 'Text or element displayed inside the tooltip.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        description: 'The trigger element. Must accept a ref and forward DOM event handlers.',
      },
      {
        name: 'placement',
        type: "'top' | 'bottom' | 'left' | 'right'",
        default: "'top'",
        description: 'Preferred position of the tooltip relative to the trigger.',
      },
      { name: 'disabled', type: 'boolean', description: 'Prevents the tooltip from appearing.' },
    ],
    examples: [
      {
        title: 'Placements',
        render: () => (
          <Stack direction="row" gap={6} align="center" style={{ padding: '2rem' }}>
            <Tooltip content="Tooltip on top" placement="top">
              <Button variant="secondary" size="sm">
                Top
              </Button>
            </Tooltip>
            <Tooltip content="Tooltip on right" placement="right">
              <Button variant="secondary" size="sm">
                Right
              </Button>
            </Tooltip>
            <Tooltip content="Tooltip on bottom" placement="bottom">
              <Button variant="secondary" size="sm">
                Bottom
              </Button>
            </Tooltip>
            <Tooltip content="Tooltip on left" placement="left">
              <Button variant="secondary" size="sm">
                Left
              </Button>
            </Tooltip>
          </Stack>
        ),
        code: `<Tooltip content="Tooltip on top" placement="top">
  <Button variant="secondary" size="sm">Top</Button>
</Tooltip>`,
      },
    ],
  },
]

export const componentList: ComponentEntry[] = [...componentListUnsorted].sort((a, b) =>
  a.name.localeCompare(b.name)
)

export const styleGuideEntry: ComponentEntry = {
  slug: 'style-guide',
  name: 'Style Guide',
  description:
    'A visual reference for the design tokens and foundational UI patterns that power the library.',
  examples: [
    {
      title: 'Foundations',
      render: () => <StyleGuideShowcase />,
      code: `/* src/tokens/index.css */
:root {
  --font-family-heading: 'Sora', system-ui, sans-serif;
  --font-family-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --color-brand-700: #0f766e;
  --color-neutral-900: #1c1917;
  --space-4: 1rem;
  --radius-lg: 0.75rem;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --transition-normal: 200ms ease;
}`,
    },
  ],
}
