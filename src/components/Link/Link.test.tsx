import { render, screen } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  it('renders an anchor with the given text', () => {
    render(<Link href="/about">About</Link>)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('applies the default variant class', () => {
    render(<Link href="/">Home</Link>)
    expect(screen.getByRole('link').className).toMatch(/default/)
  })

  it('applies a custom variant class', () => {
    render(
      <Link href="/" variant="subtle">
        Subtle
      </Link>
    )
    expect(screen.getByRole('link').className).toMatch(/subtle/)
  })

  it('adds target and rel for external links', () => {
    render(
      <Link href="https://example.com" external>
        Example
      </Link>
    )
    const link = screen.getByRole('link', { name: /example/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('appends "(opens in new tab)" to the aria-label for external string children', () => {
    render(
      <Link href="https://example.com" external>
        Docs
      </Link>
    )
    expect(screen.getByRole('link', { name: 'Docs (opens in new tab)' })).toBeInTheDocument()
  })

  it('uses a provided aria-label over the generated one for external links', () => {
    render(
      <Link href="https://example.com" external aria-label="Custom label">
        Docs
      </Link>
    )
    expect(screen.getByRole('link', { name: 'Custom label' })).toBeInTheDocument()
  })

  it('renders an external icon for external links', () => {
    const { container } = render(
      <Link href="https://example.com" external>
        Docs
      </Link>
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('does not set an auto aria-label when external children are non-string', () => {
    render(
      <Link href="https://example.com" external>
        <span>Icon</span>
      </Link>
    )
    // no auto-generated aria-label — the link just wraps the node
    const link = screen.getByRole('link')
    expect(link.getAttribute('aria-label')).toBeNull()
  })

  it('does not render an external icon for internal links', () => {
    const { container } = render(<Link href="/docs">Docs</Link>)
    expect(container.querySelector('svg')).toBeNull()
  })
})
