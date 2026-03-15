import type { CSSProperties, ReactNode } from 'react'

export type TableVariant = 'default' | 'striped'

export interface TableColumn {
  key: string
  label: string
}

export interface TableProps {
  columns: TableColumn[]
  data: Record<string, ReactNode>[]
  variant?: TableVariant
  style?: CSSProperties
}
