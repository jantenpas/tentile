import styles from './Header.module.css'
import type { HeaderProps } from './Header.types'

export function Header({
  logo,
  title,
  nav,
  actions,
  variant = 'default',
  size = 'md',
  sticky = false,
  className,
}: HeaderProps) {
  const classes = [
    styles.header,
    styles[variant],
    styles[size],
    sticky ? styles.sticky : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className={styles.inner}>
        {(logo || title) && (
          <div className={styles.brand}>
            {logo}
            {title && <span className={styles.title}>{title}</span>}
          </div>
        )}

        {nav && <nav className={styles.nav}>{nav}</nav>}

        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </header>
  )
}

Header.displayName = 'Header'
