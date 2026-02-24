import { forwardRef } from 'react'
import styles from './Heading.module.css'
import type { HeadingProps, HeadingLevel } from './Heading.types'

const defaultSizeMap: Record<HeadingLevel, string> = {
  1: '2xl',
  2: 'xl',
  3: 'lg',
  4: 'md',
  5: 'sm',
  6: 'xs',
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 2,
      size,
      color = 'default',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    const resolvedSize = size ?? defaultSizeMap[level]

    const classes = [
      styles.heading,
      styles[resolvedSize],
      styles[color],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Tag ref={ref} className={classes} {...props}>
        {children}
      </Tag>
    )
  }
)

Heading.displayName = 'Heading'
