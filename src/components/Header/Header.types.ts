import type { ReactNode } from 'react'

export type HeaderVariant = 'default' | 'bordered' | 'elevated'
export type HeaderSize = 'sm' | 'md' | 'lg'

export interface HeaderProps {
  logo?: ReactNode
  title?: string
  nav?: ReactNode
  actions?: ReactNode
  variant?: HeaderVariant
  size?: HeaderSize
  sticky?: boolean
  className?: string
}
