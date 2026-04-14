import { useEffect, useId, useRef, useState } from 'react'
import styles from './Collapsible.module.css'
import type { CollapsibleProps } from './Collapsible.types'

export function Collapsible({
  trigger,
  children,
  indented = false,
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  className,
}: CollapsibleProps) {
  const contentId = useId()
  const contentRef = useRef<HTMLDivElement>(null)
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  useEffect(() => {
    const element = contentRef.current

    if (!element) return

    if (isOpen) {
      element.removeAttribute('inert')
      return
    }

    element.setAttribute('inert', '')
  }, [isOpen])

  function toggle() {
    const next = !isOpen
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={styles.triggerInner}>
          <span className={styles.triggerContent}>{trigger}</span>
          <svg
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M2 4.5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        ref={contentRef}
        id={contentId}
        className={`${styles.content} ${isOpen ? '' : styles.contentCollapsed}`}
        aria-hidden={!isOpen}
      >
        <div
          className={`${styles.contentInner} ${indented ? styles.contentInnerIndented : ''}`.trim()}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

Collapsible.displayName = 'Collapsible'
