import { useId } from 'react'
import styles from './Select.module.css'
import type { SelectProps } from './Select.types'

export function Select({
  options,
  value,
  onChange,
  label,
  placeholder,
  disabled,
  required,
  error,
  id,
}: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId
  const errorId = `${selectId}-error`

  return (
    <div className={[styles.wrapper, error ? styles.error : ''].filter(Boolean).join(' ')}>
      {label && (
        <label
          htmlFor={selectId}
          className={[styles.label, required ? styles.required : ''].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}

      <div className={styles.selectWrapper}>
        <select
          id={selectId}
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className={styles.chevron} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {error && (
        <span id={errorId} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
