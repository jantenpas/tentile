import type { ReactNode } from 'react'
import styles from './Breadcrumb.module.css'
import type { BreadcrumbProps, BreadcrumbSeparator } from './Breadcrumb.types'

const SEPARATORS: Record<BreadcrumbSeparator, ReactNode> = {
  slash: <span aria-hidden="true">/</span>,
  chevron: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M4 2L8 6L4 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dot: <span aria-hidden="true">·</span>,
}

export function Breadcrumb({ items, separator = 'chevron', className }: BreadcrumbProps) {
  const separatorNode =
    typeof separator === 'string' ? SEPARATORS[separator as BreadcrumbSeparator] : separator

  return (
    <nav
      aria-label="Breadcrumb"
      className={[styles.nav, className ?? ''].filter(Boolean).join(' ')}
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className={styles.item}>
              {index > 0 && <span className={styles.separator}>{separatorNode}</span>}
              {isLast || !item.href ? (
                <span
                  className={[styles.crumb, isLast ? styles.current : styles.link].join(' ')}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className={[styles.crumb, styles.link].join(' ')}>
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
