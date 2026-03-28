import { useState, useRef } from 'react'
import { Card } from '../Card/Card'
import { Stack } from '../Stack/Stack'
import { Text } from '../Text/Text'
import { Button } from '../Button/Button'
import styles from './EditableText.module.css'
import type { EditableTextProps } from './EditableText.types'

export function EditableText({
  value,
  onSave,
  placeholder = 'No value set.',
  label,
  rows = 4,
  editTooltip,
}: EditableTextProps) {
  const [mode, setMode] = useState<'read' | 'editing' | 'saving' | 'error'>('read')
  const [draft, setDraft] = useState(value)
  const [error, setError] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleEdit() {
    setDraft(value)
    setError(null)
    setMode('editing')
    // Focus textarea on next tick after render
    setTimeout(() => textareaRef.current?.focus(), 0)
  }

  function handleCancel() {
    setDraft(value)
    setError(null)
    setMode('read')
  }

  async function handleSave() {
    setMode('saving')
    setError(null)
    try {
      await onSave(draft)
      setMode('read')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
      setMode('error')
    }
  }

  return (
    <Stack direction="column" gap={2} style={{ width: '100%' }}>
      {(label || mode === 'read') && (
        <Stack direction="row" gap={2} align="center">
          {label && (
            <Text as="label" size="sm" weight="medium" color="muted">
              {label}
            </Text>
          )}
          {mode === 'read' && (
            <button
              className={styles.editButton}
              onClick={handleEdit}
              aria-label="Edit"
              title={editTooltip}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          )}
        </Stack>
      )}

      <Card variant="outlined" padding="md">
        {mode === 'read' ? (
          <>
            {value ? (
              <Text as="p" size="md" className={styles.valueText}>
                {value}
              </Text>
            ) : (
              <Text as="p" size="md" color="muted" className={styles.placeholder}>
                {placeholder}
              </Text>
            )}
          </>
        ) : (
          <Stack direction="column" gap={3}>
            <textarea
              ref={textareaRef}
              className={[styles.textarea, mode === 'error' ? styles.textareaError : ''].filter(Boolean).join(' ')}
              value={draft}
              rows={rows}
              onChange={(e) => setDraft(e.target.value)}
              disabled={mode === 'saving'}
              aria-invalid={mode === 'error'}
              aria-describedby={mode === 'error' ? 'editable-text-error' : undefined}
            />

            {mode === 'error' && error && (
              <Text
                as="span"
                size="sm"
                className={styles.errorMessage}
                id="editable-text-error"
              >
                {error}
              </Text>
            )}

            <Stack direction="row" gap={2}>
              <Button
                variant="primary"
                size="sm"
                onClick={handleSave}
                isLoading={mode === 'saving'}
                disabled={mode === 'saving'}
              >
                Save
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancel}
                disabled={mode === 'saving'}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        )}
      </Card>
    </Stack>
  )
}

EditableText.displayName = 'EditableText'
