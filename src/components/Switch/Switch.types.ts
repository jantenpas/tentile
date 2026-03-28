import type { InputHTMLAttributes } from 'react'

export type SwitchSize = 'sm' | 'md' | 'lg'

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange' | 'size'
> {
  label?: string
  hint?: string
  checked: boolean
  onChange: (checked: boolean) => void
  size?: SwitchSize
}
