import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { componentList } from '../data/components'
import { Collapsible } from '@lib/components/Collapsible/Collapsible'
import { styleGuideSections } from '../components/StyleGuideShowcase'
import { useSidebar } from './SidebarContext'

export default function Sidebar() {
  const { collapsed, toggle, collapse, isMobile } = useSidebar()
  const [componentsOpen, setComponentsOpen] = useState(true)
  const [styleGuideOpen, setStyleGuideOpen] = useState(true)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.active : ''}`
  const closeMobileSidebar = () => {
    if (isMobile) collapse()
  }

  return (
    <nav
      id="site-sidebar"
      className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ''}`}
      aria-label="Sidebar"
      aria-hidden={collapsed}
    >
      <div className={styles.sidebarInner}>
        <div className={styles.sidebarTopBar}>
          <button
            type="button"
            className={styles.sidebarCollapseButton}
            onClick={toggle}
            aria-label={isMobile ? 'Close sidebar' : 'Collapse sidebar'}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M8.75 3.5L5.25 7L8.75 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.section}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${styles.homeLink} ${isActive ? styles.active : ''}`}
            onClick={closeMobileSidebar}
          >
            Getting Started
          </NavLink>
        </div>

        <div className={styles.section}>
          <Collapsible
            open={styleGuideOpen}
            onOpenChange={setStyleGuideOpen}
            indented
            defaultOpen
            trigger={<span className={styles.sectionTrigger}>Style Guide</span>}
            className={styles.collapsible}
          >
            <ul className={styles.list}>
              <li>
                <NavLink to="/style-guide" end className={linkClass} onClick={closeMobileSidebar}>
                  Overview
                </NavLink>
              </li>
            </ul>
            <ul className={styles.list}>
              {styleGuideSections.map((section) => (
                <li key={section.slug}>
                  <NavLink
                    to={`/style-guide/${section.slug}`}
                    className={linkClass}
                    onClick={closeMobileSidebar}
                  >
                    {section.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Collapsible>
        </div>

        <div className={styles.section}>
          <Collapsible
            open={componentsOpen}
            onOpenChange={setComponentsOpen}
            indented
            trigger={<span className={styles.sectionTrigger}>Components</span>}
            className={styles.collapsible}
          >
            <ul className={styles.list}>
              <li>
                <NavLink to="/components" end className={linkClass} onClick={closeMobileSidebar}>
                  Component Summary
                </NavLink>
              </li>
            </ul>
            <ul className={styles.list}>
              {componentList.map((c) => (
                <li key={c.slug}>
                  <NavLink
                    to={`/components/${c.slug}`}
                    className={linkClass}
                    onClick={closeMobileSidebar}
                  >
                    {c.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Collapsible>
        </div>
      </div>
    </nav>
  )
}
