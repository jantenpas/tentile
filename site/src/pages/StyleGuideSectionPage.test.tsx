import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import StyleGuideSectionPage from './StyleGuideSectionPage'

function renderAt(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/style-guide/${slug}`]}>
      <Routes>
        <Route path="/style-guide/:slug" element={<StyleGuideSectionPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('StyleGuideSectionPage', () => {
  it('renders the section heading for a valid slug', () => {
    renderAt('typography')
    expect(screen.getByRole('heading', { name: /typography/i })).toBeInTheDocument()
  })

  it('renders a not-found message for an unknown slug', () => {
    renderAt('nonexistent')
    expect(screen.getByText(/nonexistent/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back to style guide/i })).toBeInTheDocument()
  })
})
