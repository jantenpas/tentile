import { act, render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EditableText } from './EditableText'

const noop = async () => {}

describe('EditableText', () => {
  it('renders value in read mode', () => {
    render(<EditableText value="Hello world" onSave={noop} />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('renders placeholder when value is empty', () => {
    render(<EditableText value="" onSave={noop} placeholder="No value set." />)
    expect(screen.getByText('No value set.')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<EditableText value="Hello" onSave={noop} label="System Prompt" />)
    expect(screen.getByText('System Prompt')).toBeInTheDocument()
  })

  it('switches to edit mode on edit button click', async () => {
    const user = userEvent.setup()
    render(<EditableText value="Hello world" onSave={noop} />)
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveValue('Hello world')
  })

  it('reverts to read mode on cancel', async () => {
    const user = userEvent.setup()
    render(<EditableText value="Hello world" onSave={noop} />)
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    await user.clear(screen.getByRole('textbox'))
    await user.type(screen.getByRole('textbox'), 'Changed')
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(screen.getByText('Hello world')).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('calls onSave with the edited value', async () => {
    const user = userEvent.setup()
    const onSave = vi.fn().mockResolvedValue(undefined)
    render(<EditableText value="Hello" onSave={onSave} />)
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    await user.clear(screen.getByRole('textbox'))
    await user.type(screen.getByRole('textbox'), 'Updated value')
    await user.click(screen.getByRole('button', { name: 'Save' }))
    await waitFor(() => expect(onSave).toHaveBeenCalledWith('Updated value'))
  })

  it('returns to read mode after successful save', async () => {
    const user = userEvent.setup()
    const onSave = vi.fn().mockResolvedValue(undefined)
    render(<EditableText value="Hello" onSave={onSave} />)
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    await user.click(screen.getByRole('button', { name: 'Save' }))
    await waitFor(() => expect(screen.queryByRole('textbox')).not.toBeInTheDocument())
  })

  it('shows error message when onSave rejects with an Error', async () => {
    const user = userEvent.setup()
    const onSave = vi.fn().mockRejectedValue(new Error('Server error'))
    render(<EditableText value="Hello" onSave={onSave} />)
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    await user.click(screen.getByRole('button', { name: 'Save' }))
    await waitFor(() => expect(screen.getByText('Server error')).toBeInTheDocument())
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows fallback error message when onSave rejects with a non-Error', async () => {
    const user = userEvent.setup()
    const onSave = vi.fn().mockRejectedValue('oops')
    render(<EditableText value="Hello" onSave={onSave} />)
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    await user.click(screen.getByRole('button', { name: 'Save' }))
    await waitFor(() =>
      expect(screen.getByText('Something went wrong. Please try again.')).toBeInTheDocument()
    )
  })

  it('disables textarea and buttons while saving', async () => {
    const user = userEvent.setup()
    let resolve: (() => void) | undefined
    const onSave = vi.fn().mockReturnValue(
      new Promise<void>((res) => {
        resolve = res
      })
    )
    render(<EditableText value="Hello" onSave={onSave} />)
    await user.click(screen.getByRole('button', { name: 'Edit' }))
    await user.click(screen.getByRole('button', { name: 'Save' }))
    expect(screen.getByRole('textbox')).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeDisabled()
    await act(async () => {
      resolve?.()
    })
  })

  it('uses default rows of 4', () => {
    render(<EditableText value="Hello" onSave={noop} />)
    // Switch to edit mode to see textarea
    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '4')
  })
})
