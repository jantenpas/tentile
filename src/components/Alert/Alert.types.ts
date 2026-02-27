export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  onDismiss?: () => void
  className?: string
}
