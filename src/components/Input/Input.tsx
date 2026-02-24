import { forwardRef, useId } from 'react'
import styles from './Input.module.css'
import type { InputProps } from './Input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      status = 'default',
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      className,
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const hintId = `${inputId}-hint`
    const errorId = `${inputId}-error`

    const resolvedStatus = error ? 'error' : status

    const wrapperClasses = [
      styles.wrapper,
      styles[size],
      styles[resolvedStatus],
      leadingIcon ? styles.hasLeading : '',
      trailingIcon ? styles.hasTrailing : '',
      fullWidth ? styles.fullWidth : '',
    ]
      .filter(Boolean)
      .join(' ')

    const inputClasses = [styles.input, className ?? '']
      .filter(Boolean)
      .join(' ')

    return (
      <div className={wrapperClasses}>
        {label && (
          <label
            htmlFor={inputId}
            className={[styles.label, required ? styles.required : ''].filter(Boolean).join(' ')}
          >
            {label}
          </label>
        )}

        <div className={styles.inputWrapper}>
          {leadingIcon && (
            <span className={styles.iconLeading} aria-hidden="true">
              {leadingIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            disabled={disabled}
            required={required}
            aria-required={required}
            aria-invalid={resolvedStatus === 'error'}
            aria-describedby={
              error ? errorId : hint ? hintId : undefined
            }
            {...props}
          />

          {trailingIcon && (
            <span className={styles.iconTrailing} aria-hidden="true">
              {trailingIcon}
            </span>
          )}
        </div>

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

Input.displayName = 'Input'
