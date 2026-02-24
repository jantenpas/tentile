import type { HTMLAttributes } from 'react'

export type CardVariant = 'elevated' | 'outlined' | 'filled'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  interactive?: boolean
  /** Called when the card is activated via keyboard (Enter/Space). Defaults to onClick if not provided. */
  onActivate?: () => void
}
