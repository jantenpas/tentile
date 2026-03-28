export type EditableTextState = 'read' | 'editing' | 'saving' | 'error'

export interface EditableTextProps {
  value: string
  onSave: (value: string) => Promise<void>
  placeholder?: string
  label?: string
  rows?: number
  editTooltip?: string
}
