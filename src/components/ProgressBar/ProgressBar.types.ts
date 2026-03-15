export type ProgressBarVariant = 'brand' | 'success' | 'error'

export interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercent?: boolean
  variant?: ProgressBarVariant
}
