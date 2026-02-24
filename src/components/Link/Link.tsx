import { forwardRef } from 'react'
import styles from './Link.module.css'
import type { LinkProps } from './Link.types'

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = 'default',
      external = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [styles.link, styles[variant], className ?? '']
      .filter(Boolean)
      .join(' ')

    const externalProps = external
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
          'aria-label': props['aria-label']
            ? props['aria-label']
            : typeof children === 'string'
              ? `${children} (opens in new tab)`
              : undefined,
        }
      : {}

    return (
      <a ref={ref} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
