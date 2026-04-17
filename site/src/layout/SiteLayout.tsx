import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './SiteLayout.module.css'
import SiteHeader from './SiteHeader'
import Sidebar from './Sidebar'
import { SidebarContext } from './SidebarContext'

interface SiteLayoutProps {
  children: React.ReactNode
}

const mobileNavigationQuery = '(max-width: 768px)'

function getMediaQueryMatch(query: string) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia(query).matches
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => getMediaQueryMatch(query))

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return

    const media = window.matchMedia(query)
    const handleChange = () => setMatches(media.matches)

    handleChange()
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

function useSidebarState(defaultCollapsed: boolean) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  useEffect(() => {
    setCollapsed(defaultCollapsed)
  }, [defaultCollapsed])

  const toggle = useCallback(() => setCollapsed((c) => !c), [])
  const collapse = useCallback(() => setCollapsed(true), [])
  const expand = useCallback(() => setCollapsed(false), [])

  return useMemo(
    () => ({
      collapsed,
      toggle,
      collapse,
      expand,
    }),
    [collapsed, toggle, collapse, expand]
  )
}

function SiteLayoutInner({
  children,
  defaultCollapsed,
  isMobile,
  pathname,
}: SiteLayoutProps & { defaultCollapsed: boolean; isMobile: boolean; pathname: string }) {
  const sidebar = useSidebarState(defaultCollapsed)
  const contextValue = useMemo(() => ({ ...sidebar, isMobile }), [sidebar, isMobile])
  const { collapse } = sidebar

  useEffect(() => {
    if (isMobile) collapse()
  }, [isMobile, pathname, collapse])

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className={styles.root}>
        <SiteHeader />
        <div className={styles.body}>
          <Sidebar />
          {isMobile && !sidebar.collapsed && (
            <button
              type="button"
              className={styles.sidebarBackdrop}
              aria-label="Close sidebar navigation"
              onClick={sidebar.collapse}
            />
          )}
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isMobile = useMediaQuery(mobileNavigationQuery)
  const defaultCollapsed = isHome || isMobile

  return (
    <SiteLayoutInner
      key={isHome ? 'home' : 'content'}
      defaultCollapsed={defaultCollapsed}
      isMobile={isMobile}
      pathname={pathname}
    >
      {children}
    </SiteLayoutInner>
  )
}
