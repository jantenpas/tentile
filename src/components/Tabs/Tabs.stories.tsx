import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

const DEMO_TABS = [
  { id: 'overview', label: 'Overview', content: <p>This is the Overview panel.</p> },
  { id: 'settings', label: 'Settings', content: <p>Adjust your settings here.</p> },
  { id: 'activity', label: 'Activity', content: <p>Recent activity will appear here.</p> },
]

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('overview')
    return <Tabs tabs={DEMO_TABS} activeTab={active} onChange={setActive} />
  },
}

export const ManyTabs: Story = {
  render: () => {
    const tabs = [
      { id: 'a', label: 'General', content: <p>General settings.</p> },
      { id: 'b', label: 'Security', content: <p>Security options.</p> },
      { id: 'c', label: 'Billing', content: <p>Billing information.</p> },
      { id: 'd', label: 'Integrations', content: <p>Connect third-party tools.</p> },
      { id: 'e', label: 'Advanced', content: <p>Advanced configuration.</p> },
    ]
    const [active, setActive] = useState('a')
    return <Tabs tabs={tabs} activeTab={active} onChange={setActive} />
  },
}
