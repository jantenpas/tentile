import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders a title', () => {
    render(<Header title="My App" />)
    expect(screen.getByText('My App')).toBeInTheDocument()
  })

  it('renders a logo', () => {
    render(<Header logo={<img src="/logo.svg" alt="Logo" />} />)
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })

  it('renders nav and actions slots', () => {
    render(<Header nav={<a href="/about">About</a>} actions={<button>Sign in</button>} />)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('applies the sticky class when sticky is true', () => {
    render(<Header title="Sticky" sticky />)
    expect(screen.getByRole('banner').className).toMatch(/sticky/)
  })

  it('applies variant and size classes', () => {
    render(<Header title="Branded" variant="brand" size="lg" />)
    const header = screen.getByRole('banner')
    expect(header.className).toMatch(/brand/)
    expect(header.className).toMatch(/lg/)
  })

  it('renders nothing for brand area when neither logo nor title is provided', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('._brand_')).toBeNull()
  })
})
