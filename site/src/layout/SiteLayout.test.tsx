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

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

const originalMatchMedia = window.matchMedia

function getSidebarElement() {
  const sidebar = document.getElementById('site-sidebar')
  expect(sidebar).toBeInTheDocument()
  return sidebar as HTMLElement
}

describe('SiteLayout', () => {
  afterEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: originalMatchMedia,
    })
  })

  it('collapses the sidebar by default on the home route', () => {
    renderAt('/')
    expect(getSidebarElement().className).toMatch(/sidebarCollapsed/)
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

    expect(getSidebarElement().className).toMatch(/sidebarCollapsed/)
  })

  it('toggles the sidebar when the sidebar collapse button is clicked', async () => {
    const user = userEvent.setup()
    renderAt('/components')

    const sidebar = screen.getByRole('navigation', { name: 'Sidebar' })
    await user.click(within(sidebar).getByRole('button', { name: /collapse sidebar/i }))

    expect(sidebar.className).toMatch(/sidebarCollapsed/)
  })

  it('collapses the sidebar by default on mobile content routes', () => {
    mockMatchMedia(true)
    renderAt('/components')
    expect(getSidebarElement().className).toMatch(/sidebarCollapsed/)
  })

  it('opens the mobile sidebar with a dismiss backdrop', async () => {
    const user = userEvent.setup()
    mockMatchMedia(true)
    renderAt('/components')

    const header = screen.getByRole('banner')
    await user.click(within(header).getByRole('button', { name: /open sidebar/i }))

    expect(screen.getByRole('navigation', { name: 'Sidebar' }).className).not.toMatch(
      /sidebarCollapsed/
    )
    await user.click(screen.getByRole('button', { name: /close sidebar navigation/i }))
    expect(getSidebarElement().className).toMatch(/sidebarCollapsed/)
  })

  it('renders children in the main content area', () => {
    renderAt('/')
    expect(screen.getByText('page content')).toBeInTheDocument()
  })
})
