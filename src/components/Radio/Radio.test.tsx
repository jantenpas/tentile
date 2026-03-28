import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup } from './Radio'

const OPTIONS = [
  { label: 'Teal', value: 'teal' },
  { label: 'Purple', value: 'purple' },
  { label: 'Slate', value: 'slate' },
]

describe('RadioGroup', () => {
  it('renders all options', () => {
    render(<RadioGroup name="color" options={OPTIONS} value="" onChange={() => {}} />)
    expect(screen.getByRole('radio', { name: 'Teal' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Purple' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Slate' })).toBeInTheDocument()
  })

  it('renders a legend when label is provided', () => {
    render(
      <RadioGroup
        name="color"
        label="Favorite color"
        options={OPTIONS}
        value=""
        onChange={() => {}}
      />
    )
    expect(screen.getByText('Favorite color')).toBeInTheDocument()
  })

  it('does not render a legend when label is omitted', () => {
    const { container } = render(
      <RadioGroup name="color" options={OPTIONS} value="" onChange={() => {}} />
    )
    expect(container.querySelector('legend')).not.toBeInTheDocument()
  })

  it('checks the option matching value', () => {
    render(<RadioGroup name="color" options={OPTIONS} value="purple" onChange={() => {}} />)
    expect(screen.getByRole('radio', { name: 'Purple' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Teal' })).not.toBeChecked()
  })

  it('calls onChange with the selected value', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<RadioGroup name="color" options={OPTIONS} value="teal" onChange={onChange} />)
    await user.click(screen.getByRole('radio', { name: 'Purple' }))
    expect(onChange).toHaveBeenCalledWith('purple')
  })

  it('disables all options when disabled is true', () => {
    render(<RadioGroup name="color" options={OPTIONS} value="" onChange={() => {}} disabled />)
    screen.getAllByRole('radio').forEach((radio) => expect(radio).toBeDisabled())
  })

  it('disables only the option with disabled: true', () => {
    const options = [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro', disabled: true },
    ]
    render(<RadioGroup name="plan" options={options} value="" onChange={() => {}} />)
    expect(screen.getByRole('radio', { name: 'Free' })).toBeEnabled()
    expect(screen.getByRole('radio', { name: 'Pro' })).toBeDisabled()
  })

  it('renders a hint when provided', () => {
    render(
      <RadioGroup name="color" options={OPTIONS} value="" onChange={() => {}} hint="Pick one." />
    )
    expect(screen.getByText('Pick one.')).toBeInTheDocument()
  })

  it('renders an error message when provided', () => {
    render(
      <RadioGroup name="color" options={OPTIONS} value="" onChange={() => {}} error="Required." />
    )
    expect(screen.getByRole('alert')).toHaveTextContent('Required.')
  })

  it('renders options in a row when orientation is horizontal', () => {
    const { container: horizontal } = render(
      <RadioGroup
        name="color"
        options={OPTIONS}
        value=""
        onChange={() => {}}
        orientation="horizontal"
      />
    )
    const { container: vertical } = render(
      <RadioGroup
        name="color2"
        options={OPTIONS}
        value=""
        onChange={() => {}}
        orientation="vertical"
      />
    )
    const hClasses = horizontal.querySelector('[role="radiogroup"]')!.className
    const vClasses = vertical.querySelector('[role="radiogroup"]')!.className
    expect(hClasses).not.toBe(vClasses)
  })

  it('applies an extra class to the legend when required', () => {
    const { container: req } = render(
      <RadioGroup
        name="color"
        label="Color"
        options={OPTIONS}
        value=""
        onChange={() => {}}
        required
      />
    )
    const { container: notReq } = render(
      <RadioGroup name="color2" label="Color" options={OPTIONS} value="" onChange={() => {}} />
    )
    const reqClasses = req.querySelector('legend')!.className.split(' ').length
    const notReqClasses = notReq.querySelector('legend')!.className.split(' ').length
    expect(reqClasses).toBeGreaterThan(notReqClasses)
  })

  it('does not render hint when error is also present', () => {
    render(
      <RadioGroup
        name="color"
        options={OPTIONS}
        value=""
        onChange={() => {}}
        hint="Pick one."
        error="Required."
      />
    )
    expect(screen.queryByText('Pick one.')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('Required.')
  })
})
