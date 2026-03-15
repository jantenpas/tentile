export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  error?: string
  id?: string
}
