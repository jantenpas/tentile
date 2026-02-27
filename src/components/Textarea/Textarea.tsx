import { forwardRef, useId } from 'react'
import type { FormEvent } from 'react'
import styles from './Textarea.module.css'
import type { TextareaProps } from './Textarea.types'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      status = 'default',
      fullWidth = false,
      autoResize = false,
      className,
      id,
      required,
      disabled,
      onInput,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const textareaId = id ?? generatedId
    const hintId = `${textareaId}-hint`
    const errorId = `${textareaId}-error`

    const resolvedStatus = error ? 'error' : status

    const wrapperClasses = [
      styles.wrapper,
      styles[size],
      styles[resolvedStatus],
      fullWidth ? styles.fullWidth : '',
    ]
      .filter(Boolean)
      .join(' ')

    const textareaClasses = [styles.textarea, className ?? '']
      .filter(Boolean)
      .join(' ')

    const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        const el = e.currentTarget
        el.style.height = 'auto'
        el.style.height = `${el.scrollHeight}px`
      }
      onInput?.(e)
    }

    return (
      <div className={wrapperClasses}>
        {label && (
          <label
            htmlFor={textareaId}
            className={[styles.label, required ? styles.required : ''].filter(Boolean).join(' ')}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          disabled={disabled}
          required={required}
          aria-required={required}
          aria-invalid={resolvedStatus === 'error'}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          onInput={handleInput}
          {...props}
        />

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

Textarea.displayName = 'Textarea'
