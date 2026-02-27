import { render, screen } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('has role="status"', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has default aria-label "Loading…"', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading…')
  })

  it('accepts custom aria-label', () => {
    render(<Spinner label="Saving changes" />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Saving changes')
  })

  it('renders sr-only text', () => {
    render(<Spinner label="Processing" />)
    expect(screen.getByText('Processing')).toBeInTheDocument()
  })
})
