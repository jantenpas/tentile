import type { ReactNode } from 'react'

export interface CollapsibleProps {
  /** Content shown as the clickable trigger */
  trigger: ReactNode
  /** The content revealed when open */
  children: ReactNode
  /** Adds a left indent to revealed content */
  indented?: boolean
  /** Whether the section is open by default */
  defaultOpen?: boolean
  /** Controlled open state */
  open?: boolean
  /** Called when the open state changes */
  onOpenChange?: (open: boolean) => void
  /** Additional class name for the root element */
  className?: string
}
