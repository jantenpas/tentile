import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Card } from './Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('is not interactive by default', () => {
    render(<Card>Content</Card>)
    const card = screen.getByText('Content').closest('div')!
    expect(card).not.toHaveAttribute('role', 'button')
    expect(card).not.toHaveAttribute('tabIndex')
  })

  it('has role="button" and tabIndex when interactive', () => {
    render(<Card interactive>Content</Card>)
    const card = screen.getByRole('button')
    expect(card).toHaveAttribute('tabIndex', '0')
  })

  it('calls onClick when interactive card is clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Card interactive onClick={onClick}>Content</Card>)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('calls onActivate on Enter key when interactive', async () => {
    const user = userEvent.setup()
    const onActivate = vi.fn()
    render(<Card interactive onActivate={onActivate}>Content</Card>)
    screen.getByRole('button').focus()
    await user.keyboard('{Enter}')
    expect(onActivate).toHaveBeenCalledOnce()
  })

  it('calls onClick on Enter key when interactive and no onActivate', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Card interactive onClick={onClick}>Content</Card>)
    screen.getByRole('button').focus()
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalled()
  })

  it('calls onActivate on Space key when interactive', async () => {
    const user = userEvent.setup()
    const onActivate = vi.fn()
    render(<Card interactive onActivate={onActivate}>Content</Card>)
    screen.getByRole('button').focus()
    await user.keyboard(' ')
    expect(onActivate).toHaveBeenCalledOnce()
  })

  it('calls onKeyDown for non-activation keys when interactive', async () => {
    const user = userEvent.setup()
    const onKeyDown = vi.fn()
    render(<Card interactive onKeyDown={onKeyDown}>Content</Card>)
    screen.getByRole('button').focus()
    await user.keyboard('{Tab}')
    expect(onKeyDown).toHaveBeenCalled()
  })

  it('does not throw when interactive with no handlers on Enter', async () => {
    const user = userEvent.setup()
    render(<Card interactive>Content</Card>)
    screen.getByRole('button').focus()
    await expect(user.keyboard('{Enter}')).resolves.not.toThrow()
  })

  it('calls onKeyDown when not interactive', () => {
    const onKeyDown = vi.fn()
    render(<Card onKeyDown={onKeyDown}>Content</Card>)
    const card = screen.getByText('Content').closest('div')!
    fireEvent.keyDown(card, { key: 'Enter' })
    expect(onKeyDown).toHaveBeenCalled()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Card ref={ref}>Content</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
