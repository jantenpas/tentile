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
        {external && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.75em"
            height="0.75em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={styles.externalIcon}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </a>
    )
  }
)

Link.displayName = 'Link'
