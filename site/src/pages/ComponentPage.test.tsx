import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ComponentPage from './ComponentPage'

function renderAt(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/components/${slug}`]}>
      <Routes>
        <Route path="/components/:slug" element={<ComponentPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('ComponentPage', () => {
  it('renders the component name and description for a valid slug', () => {
    renderAt('button')
    expect(screen.getByRole('heading', { name: 'Button' })).toBeInTheDocument()
  })

  it('renders a not-found message for an unknown slug', () => {
    renderAt('nonexistent')
    expect(screen.getByText(/nonexistent/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back to overview/i })).toBeInTheDocument()
  })

  it('renders a Props section when the component has props defined', () => {
    renderAt('button')
    expect(screen.getByRole('heading', { name: 'Props' })).toBeInTheDocument()
  })

  it('copies code to clipboard when the copy button is clicked', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })

    renderAt('button')

    await user.click(screen.getAllByRole('button', { name: /copy code/i })[0])

    expect(writeText).toHaveBeenCalled()
    expect(await screen.findByText('Copied!')).toBeInTheDocument()
  })
})
