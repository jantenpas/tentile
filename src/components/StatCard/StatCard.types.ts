import type { ReactNode } from 'react'

export type TrendDirection = 'up' | 'down' | 'neutral'

export interface StatCardTrend {
  direction: TrendDirection
  value: string
  label?: string
}

export interface StatCardProps {
  value: string | number
  label: string
  trend?: StatCardTrend
  icon?: ReactNode
  className?: string
}
