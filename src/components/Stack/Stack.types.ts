import type { CSSProperties, ElementType, HTMLAttributes } from 'react'

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type StackAlign = CSSProperties['alignItems']
export type StackJustify = CSSProperties['justifyContent']
export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16

export interface StackProps extends HTMLAttributes<HTMLElement> {
  direction?: StackDirection
  gap?: StackGap
  align?: StackAlign
  justify?: StackJustify
  wrap?: boolean
  as?: ElementType
}
