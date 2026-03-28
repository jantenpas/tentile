import { render, screen } from '@testing-library/react'
import { Breadcrumb } from './Breadcrumb'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumb' },
]

describe('Breadcrumb', () => {
  it('renders all item labels', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Components')).toBeInTheDocument()
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument()
  })

  it('renders a nav with accessible label', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
  })

  it('marks the last item as current page', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByText('Breadcrumb')).toHaveAttribute('aria-current', 'page')
  })

  it('does not mark non-last items as current', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByText('Home')).not.toHaveAttribute('aria-current')
  })

  it('renders hrefs as anchor tags', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Components' })).toHaveAttribute('href', '/components')
  })

  it('renders the last item without an anchor even if href is provided', () => {
    const withHrefOnLast = [
      { label: 'Home', href: '/' },
      { label: 'Current', href: '/current' },
    ]
    render(<Breadcrumb items={withHrefOnLast} />)
    expect(screen.queryByRole('link', { name: 'Current' })).not.toBeInTheDocument()
    expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page')
  })

  it('renders items without href as plain text', () => {
    render(<Breadcrumb items={[{ label: 'Home' }, { label: 'Page' }]} />)
    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument()
  })

  it('renders a single item without separators', () => {
    const { container } = render(<Breadcrumb items={[{ label: 'Home' }]} />)
    expect(container.querySelectorAll('li')).toHaveLength(1)
  })

  it('accepts a custom ReactNode separator', () => {
    render(<Breadcrumb items={items} separator={<span data-testid="sep">›</span>} />)
    expect(screen.getAllByTestId('sep')).toHaveLength(items.length - 1)
  })
})
