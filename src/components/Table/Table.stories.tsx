import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'striped'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const COLUMNS = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
]

const DATA = [
  { name: 'Jan tenPas', role: 'Engineer', status: 'Active' },
  { name: 'Alex Smith', role: 'Designer', status: 'Active' },
  { name: 'Sam Rivera', role: 'Product', status: 'Away' },
  { name: 'Jordan Lee', role: 'Engineer', status: 'Inactive' },
]

export const Default: Story = {
  args: {
    columns: COLUMNS,
    data: DATA,
  },
}

export const Striped: Story = {
  args: {
    columns: COLUMNS,
    data: DATA,
    variant: 'striped',
  },
}

export const WithReactNodes: Story = {
  render: () => (
    <Table
      columns={[
        { key: 'component', label: 'Component' },
        { key: 'status', label: 'Status' },
        { key: 'version', label: 'Version' },
      ]}
      data={[
        { component: 'Button', status: <span style={{ color: '#16a34a' }}>Stable</span>, version: '0.2.0' },
        { component: 'Select', status: <span style={{ color: '#16a34a' }}>Stable</span>, version: '0.3.0' },
        { component: 'Tabs', status: <span style={{ color: '#ca8a04' }}>Beta</span>, version: '0.3.0' },
      ]}
      variant="striped"
    />
  ),
}
