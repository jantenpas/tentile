import styles from './Tooltip.module.css'
import type { TooltipProps } from './Tooltip.types'

export function Tooltip({ content, children, placement = 'top', disabled = false }: TooltipProps) {
  if (disabled) return <>{children}</>

  return (
    <span className={[styles.wrapper, styles[placement]].join(' ')}>
      {children}
      <span className={styles.tooltip} role="tooltip">
        {content}
      </span>
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
