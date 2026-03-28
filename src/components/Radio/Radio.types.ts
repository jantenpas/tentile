import type { InputHTMLAttributes } from 'react'

export interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}

export type RadioGroupOrientation = 'horizontal' | 'vertical'

export interface RadioGroupProps {
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  name: string
  label?: string
  hint?: string
  error?: string
  orientation?: RadioGroupOrientation
  disabled?: boolean
  required?: boolean
}

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> {
  label: string
  value: string
  checked: boolean
  onChange: (value: string) => void
  name: string
}
