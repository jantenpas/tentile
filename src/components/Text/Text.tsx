import { forwardRef } from 'react'
import styles from './Text.module.css'
import type { TextProps, TextAs } from './Text.types'

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Tag = 'p',
      size = 'md',
      weight = 'regular',
      color = 'default',
      align = 'left',
      truncate = false,
      mono = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.text,
      styles[size],
      styles[weight],
      styles[color],
      styles[align],
      truncate ? styles.truncate : '',
      mono ? styles.mono : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    const Component = Tag as TextAs

    const truncateTitle =
      truncate && typeof children === 'string' && !props.title
        ? children
        : undefined

    return (
      <Component ref={ref as never} className={classes} title={truncateTitle} {...props}>
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'
