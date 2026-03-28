import { useId } from 'react'
import styles from './Switch.module.css'
import type { SwitchProps } from './Switch.types'

export function Switch({ label, hint, checked, onChange, disabled, size = 'md', className, id, ...props }: SwitchProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hintId = `${inputId}-hint`

  return (
    <div className={[styles.wrapper, disabled ? styles.disabled : '', className ?? ''].filter(Boolean).join(' ')}>
      <label htmlFor={inputId} className={styles.label}>
        <input
          {...props}
          id={inputId}
          type="checkbox"
          role="switch"
          className={styles.input}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          aria-describedby={hint ? hintId : undefined}
        />
        <span className={[styles.track, styles[size]].join(' ')} aria-hidden="true">
          <span className={styles.thumb} />
        </span>
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
      {hint && <span id={hintId} className={styles.hint}>{hint}</span>}
    </div>
  )
}

Switch.displayName = 'Switch'
