import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './SiteHeader.module.css'
import { useSidebar } from './SidebarContext'

export default function SiteHeader() {
  const { collapsed: sidebarCollapsed, toggle: onToggleSidebar, isMobile } = useSidebar()
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  function toggleTheme() {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
  const sidebarToggleLabel = sidebarCollapsed
    ? 'Open sidebar'
    : isMobile
      ? 'Close sidebar'
      : 'Collapse sidebar'

  return (
    <header className={styles.header}>
      <div className={styles.brandGroup}>
        <button
          type="button"
          className={styles.sidebarToggle}
          onClick={onToggleSidebar}
          aria-label={sidebarToggleLabel}
          aria-controls="site-sidebar"
          aria-expanded={!sidebarCollapsed}
        >
          <span className={styles.hamburger} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <NavLink to="/" className={styles.logo}>
          <img
            src={isDark ? '/tentile-logo-dark.svg' : '/tentile-logo-light.svg'}
            alt="Tentile UI"
            className={styles.logoImg}
          />
        </NavLink>
      </div>

      <nav className={styles.primaryNav} aria-label="Primary">
        <NavLink to="/" end className={navLinkClass}>
          Getting Started
        </NavLink>
        <NavLink to="/components" className={navLinkClass}>
          Components
        </NavLink>
        <NavLink to="/style-guide" className={navLinkClass}>
          Style Guide
        </NavLink>
      </nav>

      <nav className={styles.utilityNav} aria-label="Secondary">
        <a
          href="https://www.npmjs.com/package/tentile"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
        >
          npm
        </a>
        <a
          href="https://github.com/jantenpas/tentile"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
        >
          GitHub
        </a>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? '☀' : '☾'}
        </button>
      </nav>
    </header>
  )
}
