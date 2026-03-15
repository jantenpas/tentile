import styles from './ProgressBar.module.css'
import type { ProgressBarProps } from './ProgressBar.types'

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = false,
  variant = 'brand',
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(value, 0), max)
  const percent = Math.round((clamped / max) * 100)

  return (
    <div className={styles.wrapper}>
      {(label || showPercent) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showPercent && <span className={styles.percent}>{percent}%</span>}
        </div>
      )}
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={[styles.fill, styles[variant]].join(' ')}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
