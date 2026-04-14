import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './SiteLayout.module.css'
import SiteHeader from './SiteHeader'
import Sidebar from './Sidebar'
import { SidebarContext } from './SidebarContext'

interface SiteLayoutProps {
  children: React.ReactNode
}

function useSidebarState(defaultCollapsed: boolean) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  return { collapsed, toggle: () => setCollapsed((c) => !c) }
}

function SiteLayoutInner({
  children,
  defaultCollapsed,
}: SiteLayoutProps & { defaultCollapsed: boolean }) {
  const sidebar = useSidebarState(defaultCollapsed)

  return (
    <SidebarContext.Provider value={sidebar}>
      <div className={styles.root}>
        <SiteHeader />
        <div className={styles.body}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <SiteLayoutInner key={isHome ? 'home' : 'content'} defaultCollapsed={isHome}>
      {children}
    </SiteLayoutInner>
  )
}
