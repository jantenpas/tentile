import type { AnchorHTMLAttributes } from 'react'

export type LinkVariant = 'default' | 'subtle' | 'unstyled'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant
  external?: boolean
}
