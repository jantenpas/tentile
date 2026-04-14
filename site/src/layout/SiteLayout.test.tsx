import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import SiteLayout from './SiteLayout'

vi.mock('../data/components', () => ({
  componentList: [
    { slug: 'alert', name: 'Alert' },
    { slug: 'button', name: 'Button' },
  ],
}))

function renderAt(pathname: string) {
  return render(
    <MemoryRouter initialEntries={[pathname]}>
      <SiteLayout>
        <div>page content</div>
      </SiteLayout>
    </MemoryRouter>
  )
}

describe('SiteLayout', () => {
  it('collapses the sidebar by default on the home route', () => {
    renderAt('/')
    expect(screen.getByRole('navigation', { name: 'Sidebar' }).className).toMatch(
      /sidebarCollapsed/
    )
  })

  it('expands the sidebar by default on non-home routes', () => {
    renderAt('/components')
    expect(screen.getByRole('navigation', { name: 'Sidebar' }).className).not.toMatch(
      /sidebarCollapsed/
    )
  })

  it('toggles the sidebar when the header button is clicked', async () => {
    const user = userEvent.setup()
    renderAt('/components')

    const header = screen.getByRole('banner')
    await user.click(within(header).getByRole('button', { name: /collapse sidebar/i }))

    expect(screen.getByRole('navigation', { name: 'Sidebar' }).className).toMatch(
      /sidebarCollapsed/
    )
  })

  it('toggles the sidebar when the sidebar collapse button is clicked', async () => {
    const user = userEvent.setup()
    renderAt('/components')

    const sidebar = screen.getByRole('navigation', { name: 'Sidebar' })
    await user.click(within(sidebar).getByRole('button', { name: /collapse sidebar/i }))

    expect(sidebar.className).toMatch(/sidebarCollapsed/)
  })

  it('renders children in the main content area', () => {
    renderAt('/')
    expect(screen.getByText('page content')).toBeInTheDocument()
  })
})
