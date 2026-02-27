export type SpinnerSize = 'sm' | 'md' | 'lg'
export type SpinnerColor = 'brand' | 'neutral' | 'white'

export interface SpinnerProps {
  size?: SpinnerSize
  color?: SpinnerColor
  label?: string
  className?: string
}
