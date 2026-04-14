import { render, screen } from '@testing-library/react'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders a progressbar with correct aria attributes', () => {
    render(<ProgressBar value={40} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '40')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '100')
  })

  it('renders a label', () => {
    render(<ProgressBar value={50} label="Loading" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders a percentage when showPercent is true', () => {
    render(<ProgressBar value={75} showPercent />)
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('clamps value below 0 to 0', () => {
    render(<ProgressBar value={-10} showPercent />)
    expect(screen.getByText('0%')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })

  it('clamps value above max to max', () => {
    render(<ProgressBar value={200} max={100} showPercent />)
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('respects a custom max', () => {
    render(<ProgressBar value={1} max={4} showPercent />)
    expect(screen.getByText('25%')).toBeInTheDocument()
  })
})
