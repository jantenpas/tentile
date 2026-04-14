import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders a checkbox input', () => {
    render(<Checkbox checked={false} onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders a label when provided', () => {
    render(<Checkbox label="Accept terms" checked={false} onChange={() => {}} />)
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument()
  })

  it('reflects checked state', () => {
    render(<Checkbox label="Check me" checked={true} onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('calls onChange with true when unchecked box is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox label="Check me" checked={false} onChange={onChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('calls onChange with false when checked box is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox label="Uncheck me" checked={true} onChange={onChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledWith(false)
  })

  it('is disabled when disabled prop is set', () => {
    render(<Checkbox label="Disabled" checked={false} onChange={() => {}} disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('renders a hint when provided', () => {
    render(
      <Checkbox
        label="Subscribe"
        hint="Max one email per week."
        checked={false}
        onChange={() => {}}
      />
    )
    expect(screen.getByText('Max one email per week.')).toBeInTheDocument()
  })

  it('renders an error when provided', () => {
    render(<Checkbox label="Accept" error="Required." checked={false} onChange={() => {}} />)
    expect(screen.getByRole('alert')).toHaveTextContent('Required.')
  })

  it('does not render hint when error is also present', () => {
    render(
      <Checkbox
        label="Accept"
        hint="Please check."
        error="Required."
        checked={false}
        onChange={() => {}}
      />
    )
    expect(screen.queryByText('Please check.')).not.toBeInTheDocument()
  })

  it('sets indeterminate on the input element', () => {
    render(<Checkbox label="Select all" checked={false} indeterminate onChange={() => {}} />)
    expect((screen.getByRole('checkbox') as HTMLInputElement).indeterminate).toBe(true)
  })

  it('supports callback refs', () => {
    const ref = vi.fn()

    render(<Checkbox label="Callback ref" checked={false} onChange={() => {}} ref={ref} />)

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement))
  })
})
