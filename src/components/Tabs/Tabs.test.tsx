import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs } from './Tabs'

const tabs = [
  { id: 'overview', label: 'Overview', content: <p>Overview content</p> },
  { id: 'details', label: 'Details', content: <p>Details content</p> },
  { id: 'history', label: 'History', content: <p>History content</p> },
]

describe('Tabs', () => {
  it('renders all tab buttons', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={vi.fn()} />)
    expect(screen.getByRole('tab', { name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Details' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'History' })).toBeInTheDocument()
  })

  it('marks the active tab with aria-selected', () => {
    render(<Tabs tabs={tabs} activeTab="details" onChange={vi.fn()} />)
    expect(screen.getByRole('tab', { name: 'Details' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Overview' })).toHaveAttribute('aria-selected', 'false')
  })

  it('renders the active panel content', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={vi.fn()} />)
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Overview content')
  })

  it('calls onChange with the tab id when a tab is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Tabs tabs={tabs} activeTab="overview" onChange={onChange} />)
    await user.click(screen.getByRole('tab', { name: 'Details' }))
    expect(onChange).toHaveBeenCalledWith('details')
  })

  it('wires up aria-controls and aria-labelledby between tabs and panels', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={vi.fn()} />)
    const tab = screen.getByRole('tab', { name: 'Overview' })
    const panel = screen.getByRole('tabpanel')
    expect(tab).toHaveAttribute('aria-controls', panel.id)
    expect(panel).toHaveAttribute('aria-labelledby', tab.id)
  })
})
