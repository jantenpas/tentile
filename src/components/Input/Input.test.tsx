import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('renders a text input', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders a label associated with the input', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders a hint message', () => {
    render(<Input label="Username" hint="Must be unique" />)
    expect(screen.getByText('Must be unique')).toBeInTheDocument()
  })

  it('renders an error message with role alert and sets aria-invalid', () => {
    render(<Input label="Email" error="Invalid email" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email')
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('hides the hint when an error is present', () => {
    render(<Input label="Email" hint="We need this" error="Required" />)
    expect(screen.queryByText('We need this')).not.toBeInTheDocument()
  })

  it('renders leading and trailing icons', () => {
    render(
      <Input
        leadingIcon={<span data-testid="lead" />}
        trailingIcon={<span data-testid="trail" />}
      />
    )
    expect(screen.getByTestId('lead')).toBeInTheDocument()
    expect(screen.getByTestId('trail')).toBeInTheDocument()
  })

  it('marks the label as required when required is true', () => {
    render(<Input label="Name" required />)
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('aria-required', 'true')
  })

  it('disables the input when disabled is true', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('uses a provided id instead of a generated one', () => {
    render(<Input id="my-input" label="Custom ID" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input')
  })

  it('forwards typed value to onChange', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Input onChange={onChange} />)
    await user.type(screen.getByRole('textbox'), 'hello')
    expect(onChange).toHaveBeenCalled()
  })
})
