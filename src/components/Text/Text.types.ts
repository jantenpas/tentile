import type { HTMLAttributes } from 'react'

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'
export type TextColor = 'default' | 'muted' | 'subtle' | 'brand' | 'error' | 'success'
export type TextAlign = 'left' | 'center' | 'right'
export type TextAs = 'p' | 'span' | 'label' | 'div' | 'strong' | 'em' | 'small'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextAs
  size?: TextSize
  weight?: TextWeight
  color?: TextColor
  align?: TextAlign
  truncate?: boolean
  mono?: boolean
}
