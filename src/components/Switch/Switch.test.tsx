import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './Switch'

describe('Switch', () => {
  it('renders a checkbox with role switch', () => {
    render(<Switch checked={false} onChange={() => {}} />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('renders a label when provided', () => {
    render(<Switch label="Dark mode" checked={false} onChange={() => {}} />)
    expect(screen.getByLabelText('Dark mode')).toBeInTheDocument()
  })

  it('reflects checked state', () => {
    render(<Switch label="On" checked={true} onChange={() => {}} />)
    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('calls onChange with true when toggled on', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Switch label="Toggle" checked={false} onChange={onChange} />)
    await user.click(screen.getByRole('switch'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('calls onChange with false when toggled off', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Switch label="Toggle" checked={true} onChange={onChange} />)
    await user.click(screen.getByRole('switch'))
    expect(onChange).toHaveBeenCalledWith(false)
  })

  it('is disabled when disabled prop is set', () => {
    render(<Switch label="Disabled" checked={false} onChange={() => {}} disabled />)
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  it('renders a hint when provided', () => {
    render(<Switch label="Emails" hint="Once a week max." checked={false} onChange={() => {}} />)
    expect(screen.getByText('Once a week max.')).toBeInTheDocument()
  })
})
