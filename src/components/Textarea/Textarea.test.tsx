import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('renders', () => {
    render(<Textarea />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label', () => {
    render(<Textarea label="Notes" />)
    expect(screen.getByLabelText('Notes')).toBeInTheDocument()
  })

  it('renders hint', () => {
    render(<Textarea hint="Enter your notes here" />)
    expect(screen.getByText('Enter your notes here')).toBeInTheDocument()
  })

  it('renders error message', () => {
    render(<Textarea error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('sets aria-invalid when error is provided', () => {
    render(<Textarea error="Required" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not set aria-invalid without error', () => {
    render(<Textarea />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')
  })

  it('is disabled', () => {
    render(<Textarea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('forwards ref to textarea element', () => {
    const ref = createRef<HTMLTextAreaElement>()
    render(<Textarea ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('sets aria-describedby to hint id when hint is provided', () => {
    render(<Textarea hint="Some hint" />)
    const textarea = screen.getByRole('textbox')
    const hintId = textarea.getAttribute('aria-describedby')
    expect(hintId).toBeTruthy()
    expect(document.getElementById(hintId!)).toHaveTextContent('Some hint')
  })

  it('sets aria-describedby to error id when error is provided', () => {
    render(<Textarea error="Some error" />)
    const textarea = screen.getByRole('textbox')
    const errorId = textarea.getAttribute('aria-describedby')
    expect(errorId).toBeTruthy()
    expect(document.getElementById(errorId!)).toHaveTextContent('Some error')
  })

  it('renders required label', () => {
    render(<Textarea label="Notes" required />)
    expect(screen.getByLabelText('Notes')).toBeRequired()
  })

  it('renders fullWidth', () => {
    render(<Textarea fullWidth />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('calls onInput handler', async () => {
    const user = userEvent.setup()
    const onInput = vi.fn()
    render(<Textarea onInput={onInput} />)
    await user.type(screen.getByRole('textbox'), 'hello')
    expect(onInput).toHaveBeenCalled()
  })

  it('autoResize adjusts height on input without onInput prop', async () => {
    const user = userEvent.setup()
    render(<Textarea autoResize />)
    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'hello')
    expect(textarea.style.height).toBeDefined()
  })

  it('autoResize calls onInput prop when provided', async () => {
    const user = userEvent.setup()
    const onInput = vi.fn()
    render(<Textarea autoResize onInput={onInput} />)
    await user.type(screen.getByRole('textbox'), 'hello')
    expect(onInput).toHaveBeenCalled()
  })
})
