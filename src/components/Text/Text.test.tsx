import { render, screen } from '@testing-library/react'
import { Text } from './Text'

describe('Text', () => {
  it('renders children', () => {
    render(<Text>Hello</Text>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders as a p tag by default', () => {
    render(<Text>Hello</Text>)
    expect(screen.getByText('Hello').tagName).toBe('P')
  })

  it('renders as a custom tag via the as prop', () => {
    render(<Text as="span">Hello</Text>)
    expect(screen.getByText('Hello').tagName).toBe('SPAN')
  })

  it('applies more classes when truncate is true', () => {
    const { container: withTruncate } = render(<Text truncate>Hello</Text>)
    const { container: withoutTruncate } = render(<Text>Hello</Text>)
    const truncateClasses = (withTruncate.firstChild as Element).className.split(' ').length
    const defaultClasses = (withoutTruncate.firstChild as Element).className.split(' ').length
    expect(truncateClasses).toBeGreaterThan(defaultClasses)
  })

  it('applies more classes when mono is true', () => {
    const { container: withMono } = render(<Text mono>Hello</Text>)
    const { container: withoutMono } = render(<Text>Hello</Text>)
    const monoClasses = (withMono.firstChild as Element).className.split(' ').length
    const defaultClasses = (withoutMono.firstChild as Element).className.split(' ').length
    expect(monoClasses).toBeGreaterThan(defaultClasses)
  })

  it('sets title to children when truncate is true and children is a string', () => {
    render(<Text truncate>Hello world</Text>)
    expect(screen.getByText('Hello world')).toHaveAttribute('title', 'Hello world')
  })

  it('does not set title when truncate is true but children is not a string', () => {
    render(<Text truncate><span>Hello</span></Text>)
    expect(screen.getByText('Hello').closest('p')).not.toHaveAttribute('title')
  })

  it('does not override an existing title prop when truncate is true', () => {
    render(<Text truncate title="Custom title">Hello world</Text>)
    expect(screen.getByText('Hello world')).toHaveAttribute('title', 'Custom title')
  })
})
