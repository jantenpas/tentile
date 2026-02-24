import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputStatus = 'default' | 'error'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  size?: InputSize
  status?: InputStatus
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  fullWidth?: boolean
}
