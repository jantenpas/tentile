import React, { forwardRef } from 'react'
import type { KeyboardEvent } from 'react'
import styles from './Card.module.css'
import type { CardProps } from './Card.types'

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'md',
      interactive = false,
      className,
      children,
      onClick,
      onActivate,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.card,
      styles[variant],
      styles[padding],
      interactive ? styles.interactive : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (interactive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        if (onActivate) {
          onActivate()
        } else if (onClick) {
          onClick(e as unknown as React.MouseEvent<HTMLDivElement>)
        }
      }
      onKeyDown?.(e)
    }

    return (
      <div
        ref={ref}
        className={classes}
        tabIndex={interactive ? 0 : undefined}
        role={interactive ? 'button' : undefined}
        onClick={onClick}
        onKeyDown={interactive ? handleKeyDown : onKeyDown}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
