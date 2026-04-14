import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Sidebar from './Sidebar'
import { SidebarContext } from './SidebarContext'

vi.mock('../data/components', () => ({
  componentList: [
    { slug: 'alert', name: 'Alert' },
    { slug: 'button', name: 'Button' },
  ],
}))

function renderSidebar(collapsed = false) {
  const toggle = vi.fn()
  render(
    <MemoryRouter initialEntries={['/']}>
      <SidebarContext.Provider value={{ collapsed, toggle }}>
        <Sidebar />
      </SidebarContext.Provider>
    </MemoryRouter>
  )
  return { toggle }
}

describe('Sidebar', () => {
  it('renders navigation sections', () => {
    renderSidebar()
    expect(screen.getByRole('link', { name: 'Getting Started' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /style guide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /components/i })).toBeInTheDocument()
  })

  it('applies the collapsed class when collapsed', () => {
    renderSidebar(true)
    expect(screen.getByRole('navigation', { name: 'Sidebar' }).className).toMatch(
      /sidebarCollapsed/
    )
  })

  it('does not apply the collapsed class when expanded', () => {
    renderSidebar(false)
    expect(screen.getByRole('navigation', { name: 'Sidebar' }).className).not.toMatch(
      /sidebarCollapsed/
    )
  })

  it('calls toggle when the collapse button is clicked', async () => {
    const user = userEvent.setup()
    const { toggle } = renderSidebar()
    await user.click(screen.getByRole('button', { name: /collapse sidebar/i }))
    expect(toggle).toHaveBeenCalledOnce()
  })

  it('marks the Getting Started link as active on the home route', () => {
    renderSidebar()
    expect(screen.getByRole('link', { name: 'Getting Started' }).className).toMatch(/active/)
  })

  it('renders component list links', () => {
    renderSidebar()
    expect(screen.getByRole('link', { name: 'Alert' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Button' })).toBeInTheDocument()
  })
})
