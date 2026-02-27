import styles from './Alert.module.css'
import type { AlertProps, AlertVariant } from './Alert.types'

const DEFAULT_ICONS: Record<AlertVariant, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
}

const ROLES: Record<AlertVariant, 'alert' | 'status'> = {
  info: 'status',
  success: 'status',
  warning: 'alert',
  error: 'alert',
}

export function Alert({
  variant = 'info',
  title,
  children,
  icon,
  onDismiss,
  className,
}: AlertProps) {
  const classes = [styles.alert, styles[variant], className ?? ''].filter(Boolean).join(' ')
  const resolvedIcon = icon ?? DEFAULT_ICONS[variant]

  return (
    <div role={ROLES[variant]} className={classes}>
      <span className={styles.icon} aria-hidden="true">{resolvedIcon}</span>

      <div className={styles.content}>
        {title && <p className={styles.title}>{title}</p>}
        {children && <div className={styles.body}>{children}</div>}
      </div>

      {onDismiss && (
        <button
          type="button"
          className={styles.dismiss}
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          ✕
        </button>
      )}
    </div>
  )
}

Alert.displayName = 'Alert'
