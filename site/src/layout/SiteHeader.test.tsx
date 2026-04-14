import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import { SidebarContext } from './SidebarContext'

function renderHeader(sidebarCtx = { collapsed: false, toggle: vi.fn() }) {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <SidebarContext.Provider value={sidebarCtx}>
        <SiteHeader />
      </SidebarContext.Provider>
    </MemoryRouter>
  )
}

describe('SiteHeader', () => {
  it('renders primary nav links', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: 'Getting Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Components' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Style Guide' })).toBeInTheDocument()
  })

  it('renders npm and GitHub utility links', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: 'npm' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('calls toggle when the sidebar button is clicked', async () => {
    const user = userEvent.setup()
    const toggle = vi.fn()
    renderHeader({ collapsed: false, toggle })
    await user.click(screen.getByRole('button', { name: /collapse sidebar/i }))
    expect(toggle).toHaveBeenCalledOnce()
  })

  it('reflects collapsed state in the sidebar toggle aria-label', () => {
    renderHeader({ collapsed: true, toggle: vi.fn() })
    expect(screen.getByRole('button', { name: /expand sidebar/i })).toBeInTheDocument()
  })

  it('toggles the theme attribute on the document when the theme button is clicked', async () => {
    const user = userEvent.setup()
    renderHeader()
    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    await user.click(screen.getByRole('button', { name: /switch to light mode/i }))
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })
})
