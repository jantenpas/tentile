import styles from './Spinner.module.css'
import type { SpinnerProps } from './Spinner.types'

export function Spinner({
  size = 'md',
  color = 'brand',
  label = 'Loading…',
  className,
}: SpinnerProps) {
  const classes = [styles.spinner, styles[size], styles[color], className ?? '']
    .filter(Boolean)
    .join(' ')

  return (
    <span role="status" aria-label={label} className={classes}>
      <span className={styles.srOnly}>{label}</span>
    </span>
  )
}

Spinner.displayName = 'Spinner'
