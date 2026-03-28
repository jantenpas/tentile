import { useId } from 'react'
import styles from './Radio.module.css'
import type { RadioGroupProps, RadioProps } from './Radio.types'

export function Radio({ label, value, checked, onChange, name, disabled, ...props }: RadioProps) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={[styles.radio, disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
    >
      <input
        {...props}
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
        className={styles.input}
      />
      <span className={styles.indicator} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </label>
  )
}

Radio.displayName = 'Radio'

export function RadioGroup({
  options,
  value,
  onChange,
  name,
  label,
  hint,
  error,
  orientation = 'vertical',
  disabled = false,
  required,
}: RadioGroupProps) {
  const groupId = useId()
  const errorId = `${groupId}-error`
  const hintId = `${groupId}-hint`

  return (
    <fieldset
      className={styles.fieldset}
      aria-required={required}
      aria-describedby={error ? errorId : hint ? hintId : undefined}
    >
      {label && (
        <legend
          className={[styles.legend, required ? styles.required : ''].filter(Boolean).join(' ')}
        >
          {label}
        </legend>
      )}

      <div
        className={[
          styles.group,
          orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        ].join(' ')}
        role="radiogroup"
      >
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name={name}
            label={opt.label}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
            disabled={disabled || opt.disabled}
          />
        ))}
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
    </fieldset>
  )
}

RadioGroup.displayName = 'RadioGroup'
