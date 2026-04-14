import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select } from './Select'

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
]

describe('Select', () => {
  it('renders a combobox with the provided options', () => {
    render(<Select options={options} value="" onChange={vi.fn()} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument()
  })

  it('renders a label associated with the select', () => {
    render(<Select options={options} value="" onChange={vi.fn()} label="Fruit" />)
    expect(screen.getByLabelText('Fruit')).toBeInTheDocument()
  })

  it('renders a placeholder option', () => {
    render(<Select options={options} value="" onChange={vi.fn()} placeholder="Pick one" />)
    expect(screen.getByRole('option', { name: 'Pick one' })).toBeDisabled()
  })

  it('calls onChange with the selected value', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Select options={options} value="" onChange={onChange} label="Choose" />)
    await user.selectOptions(screen.getByRole('combobox'), 'b')
    expect(onChange).toHaveBeenCalledWith('b')
  })

  it('renders an error message with role alert', () => {
    render(<Select options={options} value="" onChange={vi.fn()} error="Required" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Required')
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('disables the select when disabled is true', () => {
    render(<Select options={options} value="" onChange={vi.fn()} disabled />)
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('marks the select as required', () => {
    render(<Select options={options} value="" onChange={vi.fn()} label="Role" required />)
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true')
  })
})
