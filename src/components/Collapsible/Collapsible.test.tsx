import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Stack } from '../Stack/Stack'
import { Text } from '../Text/Text'
import { Badge } from '../Badge/Badge'
import { Collapsible } from './Collapsible'
import styles from './Collapsible.module.css'

describe('Collapsible', () => {
  it('renders an expanded disclosure by default', () => {
    render(<Collapsible trigger="Section title">Content</Collapsible>)

    const trigger = screen.getByRole('button', { name: /section title/i })
    const content = document.getElementById(trigger.getAttribute('aria-controls') ?? '')

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger).toHaveAttribute('aria-controls')
    expect(content).toHaveAttribute('aria-hidden', 'false')
  })

  it('toggles content when clicked', async () => {
    const user = userEvent.setup()

    render(
      <Collapsible defaultOpen={false} trigger="Click to reveal">
        Content
      </Collapsible>
    )

    const trigger = screen.getByRole('button', { name: /click to reveal/i })
    const content = document.getElementById(trigger.getAttribute('aria-controls') ?? '')

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(content).toHaveAttribute('aria-hidden', 'true')
    expect(content).toHaveAttribute('inert')

    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(content).toHaveAttribute('aria-hidden', 'false')
    expect(content).not.toHaveAttribute('inert')
  })

  it('supports inline custom trigger content', () => {
    render(
      <Collapsible
        trigger={
          <Stack as="span" direction="row" gap={2} align="center">
            <Text as="span" size="xs" weight="semibold">
              Components
            </Text>
            <Badge size="sm">24</Badge>
          </Stack>
        }
      >
        Content
      </Collapsible>
    )

    expect(screen.getByRole('button', { name: /components 24/i })).toBeInTheDocument()
  })

  it('supports controlled state and emits open changes without mutating internally', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()

    render(
      <Collapsible open={false} onOpenChange={onOpenChange} trigger="Controlled section">
        Content
      </Collapsible>
    )

    const trigger = screen.getByRole('button', { name: /controlled section/i })
    const content = document.getElementById(trigger.getAttribute('aria-controls') ?? '')

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(content).toHaveAttribute('aria-hidden', 'true')

    await user.click(trigger)

    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(content).toHaveAttribute('aria-hidden', 'true')
  })

  it('optionally indents revealed content', () => {
    render(
      <Collapsible indented trigger="Indented section">
        Content
      </Collapsible>
    )

    const trigger = screen.getByRole('button', { name: /indented section/i })
    const content = document.getElementById(trigger.getAttribute('aria-controls') ?? '')

    expect(content?.firstElementChild).toHaveClass(styles.contentInnerIndented)
  })
})
