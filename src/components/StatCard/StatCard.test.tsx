import { render, screen } from '@testing-library/react'
import { StatCard } from './StatCard'

describe('StatCard', () => {
  it('renders value', () => {
    render(<StatCard value="1,234" label="Total Users" />)
    expect(screen.getByText('1,234')).toBeInTheDocument()
  })

  it('renders label', () => {
    render(<StatCard value="1,234" label="Total Users" />)
    expect(screen.getByText('Total Users')).toBeInTheDocument()
  })

  it('renders trend value and label', () => {
    render(
      <StatCard
        value="1,234"
        label="Users"
        trend={{ direction: 'up', value: '12%', label: 'vs last month' }}
      />
    )
    expect(screen.getByText('12%')).toBeInTheDocument()
    expect(screen.getByText('vs last month')).toBeInTheDocument()
  })

  it('renders up trend arrow', () => {
    render(
      <StatCard value="42" label="Score" trend={{ direction: 'up', value: '5%' }} />
    )
    expect(screen.getByText('↑')).toBeInTheDocument()
  })

  it('renders down trend arrow', () => {
    render(
      <StatCard value="42" label="Score" trend={{ direction: 'down', value: '3%' }} />
    )
    expect(screen.getByText('↓')).toBeInTheDocument()
  })

  it('does not render trend section when trend is not provided', () => {
    render(<StatCard value="42" label="Score" />)
    expect(screen.queryByText('↑')).not.toBeInTheDocument()
    expect(screen.queryByText('↓')).not.toBeInTheDocument()
  })

  it('renders icon', () => {
    render(<StatCard value="42" label="Score" icon="★" />)
    expect(screen.getByText('★')).toBeInTheDocument()
  })
})
