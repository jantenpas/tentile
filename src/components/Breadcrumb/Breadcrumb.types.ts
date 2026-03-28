import type { ReactNode } from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export type BreadcrumbSeparator = 'slash' | 'chevron' | 'dot'

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: BreadcrumbSeparator | ReactNode
  className?: string
}
