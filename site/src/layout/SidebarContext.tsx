import { createContext, useContext } from 'react'

interface SidebarContextValue {
  collapsed: boolean
  toggle: () => void
  collapse: () => void
  expand: () => void
  isMobile: boolean
}

export const SidebarContext = createContext<SidebarContextValue | null>(null)

export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within a SidebarProvider')
  return ctx
}
