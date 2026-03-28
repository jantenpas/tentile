import { forwardRef, useEffect, useId, useRef } from 'react'
import styles from './Checkbox.module.css'
import type { CheckboxProps } from './Checkbox.types'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      hint,
      error,
      checked,
      indeterminate = false,
      onChange,
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const hintId = `${inputId}-hint`
    const errorId = `${inputId}-error`
    const internalRef = useRef<HTMLInputElement>(null)
    const resolvedRef = (ref ?? internalRef) as React.RefObject<HTMLInputElement>

    useEffect(() => {
      if (resolvedRef.current) resolvedRef.current.indeterminate = indeterminate
    }, [indeterminate, resolvedRef])

    return (
      <div
        className={[styles.wrapper, disabled ? styles.disabled : '', className ?? '']
          .filter(Boolean)
          .join(' ')}
      >
        <label htmlFor={inputId} className={styles.label}>
          <input
            {...props}
            ref={resolvedRef}
            id={inputId}
            type="checkbox"
            className={styles.input}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
          />
          <span className={styles.indicator} aria-hidden="true">
            {indeterminate ? (
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                <path d="M1 1h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
          {label && <span className={styles.labelText}>{label}</span>}
        </label>

        {error && (
          <span id={errorId} className={styles.errorMessage} role="alert">
            {error}
          </span>
        )}
        {hint && !error && (
          <span id={hintId} className={styles.hint}>
            {hint}
          </span>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
