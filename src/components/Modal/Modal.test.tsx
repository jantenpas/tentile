import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from './Modal'

describe('Modal', () => {
  it('renders nothing when closed', () => {
    render(<Modal open={false} onClose={() => {}} title="Test" />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the dialog when open', () => {
    render(<Modal open={true} onClose={() => {}} title="Hello" />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<Modal open={true} onClose={() => {}} title="My Modal" />)
    expect(screen.getByText('My Modal')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <p>Body content</p>
      </Modal>
    )
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })

  it('renders footer', () => {
    render(<Modal open={true} onClose={() => {}} footer={<button>Confirm</button>} />)
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Modal open={true} onClose={onClose} title="Test" />)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Modal open={true} onClose={onClose} title="Test" />)
    await user.click(document.body.querySelector('[data-backdrop="true"]')!)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when dialog content is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose} title="Test">
        <p>Content</p>
      </Modal>
    )
    await user.click(screen.getByText('Content'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Modal open={true} onClose={onClose} title="Test" />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when a non-Escape key is pressed', async () => {
    const onClose = vi.fn()
    render(<Modal open={true} onClose={onClose} title="Test" />)
    fireEvent.keyDown(document, { key: 'Enter' })
    expect(onClose).not.toHaveBeenCalled()
  })

  it('stops propagation for non-Escape keys pressed on the dialog', () => {
    const onClose = vi.fn()
    render(<Modal open={true} onClose={onClose} title="Test" />)

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Enter' })

    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not call onClose on backdrop click when closeOnBackdrop is false', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Modal open={true} onClose={onClose} closeOnBackdrop={false} title="Test" />)
    await user.click(document.body.querySelector('[data-backdrop="true"]')!)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('restores focus to the previously focused element when closed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    const { rerender } = render(
      <>
        <button type="button">Return focus</button>
        <Modal open={true} onClose={onClose} title="Focus test" />
      </>
    )

    const trigger = screen.getByRole('button', { name: 'Return focus' })
    await user.click(trigger)
    expect(trigger).toHaveFocus()

    rerender(
      <>
        <button type="button">Return focus</button>
        <Modal open={false} onClose={onClose} title="Focus test" />
      </>
    )

    expect(screen.getByRole('button', { name: 'Return focus' })).toHaveFocus()
  })
})
