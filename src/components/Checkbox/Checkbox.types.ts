import type { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> {
  label?: string
  hint?: string
  error?: string
  checked: boolean
  indeterminate?: boolean
  onChange: (checked: boolean) => void
}
