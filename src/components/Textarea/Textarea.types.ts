import type { TextareaHTMLAttributes } from 'react'

export type TextareaSize = 'sm' | 'md' | 'lg'
export type TextareaStatus = 'default' | 'error'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  size?: TextareaSize
  status?: TextareaStatus
  fullWidth?: boolean
  autoResize?: boolean
}
