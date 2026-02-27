import { forwardRef } from 'react'
import type { CSSProperties, ElementType } from 'react'
import type { StackProps } from './Stack.types'

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      direction = 'column',
      gap = 2,
      align,
      justify,
      wrap = false,
      as: Tag = 'div' as ElementType,
      style,
      ...props
    },
    ref
  ) => {
    const inlineStyle: CSSProperties = {
      display: 'flex',
      flexDirection: direction,
      gap: gap !== 0 ? `var(--space-${gap})` : 0,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : undefined,
      ...style,
    }

    return <Tag ref={ref} style={inlineStyle} {...props} />
  }
)

Stack.displayName = 'Stack'
