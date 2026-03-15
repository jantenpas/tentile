import type { ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

export interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onChange: (tabId: string) => void
}
