import { forwardRef } from 'react'
import styles from './Badge.module.css'
import type { BadgeProps } from './Badge.types'

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      dot = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.badge,
      styles[variant],
      styles[size],
      dot ? styles.dot : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
