import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it.each(['primary', 'secondary', 'ghost'] as const)('renders %s variant', (variant) => {
    render(<Button variant={variant}>Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<Button size={size}>Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('calls onClick handler', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Button</Button>)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup({ pointerEventsCheck: 0 })
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick}>Button</Button>)
    await user.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('sets aria-busy when loading', () => {
    render(<Button isLoading>Button</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })

  it('is disabled when loading', () => {
    render(<Button isLoading>Button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders fullWidth', () => {
    render(<Button fullWidth>Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('forwards ref to button element', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Button</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
