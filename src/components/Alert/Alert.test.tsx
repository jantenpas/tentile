import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders children', () => {
    render(<Alert>Alert content</Alert>)
    expect(screen.getByText('Alert content')).toBeInTheDocument()
  })

  it('renders title', () => {
    render(<Alert title="Heads up">Content</Alert>)
    expect(screen.getByText('Heads up')).toBeInTheDocument()
  })

  it.each(['error', 'warning'] as const)('has role="alert" for %s variant', (variant) => {
    render(<Alert variant={variant}>Content</Alert>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it.each(['info', 'success'] as const)('has role="status" for %s variant', (variant) => {
    render(<Alert variant={variant}>Content</Alert>)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('does not render dismiss button when onDismiss is not provided', () => {
    render(<Alert>Content</Alert>)
    expect(screen.queryByRole('button', { name: 'Dismiss' })).not.toBeInTheDocument()
  })

  it('renders dismiss button when onDismiss is provided', () => {
    render(<Alert onDismiss={() => {}}>Content</Alert>)
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument()
  })

  it('calls onDismiss when dismiss button is clicked', async () => {
    const user = userEvent.setup()
    const onDismiss = vi.fn()
    render(<Alert onDismiss={onDismiss}>Content</Alert>)
    await user.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(onDismiss).toHaveBeenCalledOnce()
  })

  it('renders custom icon', () => {
    render(<Alert icon="🔔">Content</Alert>)
    expect(screen.getByText('🔔')).toBeInTheDocument()
  })

  it('renders default icon when no icon is provided', () => {
    render(<Alert variant="info">Content</Alert>)
    expect(screen.getByText('ℹ')).toBeInTheDocument()
  })
})
