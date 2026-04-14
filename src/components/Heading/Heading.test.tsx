import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'
import styles from './Heading.module.css'

describe('Heading', () => {
  it('uses the matching semantic heading tag', () => {
    render(<Heading level={3}>Section title</Heading>)

    const heading = screen.getByRole('heading', { level: 3, name: 'Section title' })
    expect(heading.tagName).toBe('H3')
  })

  it('falls back to the default size for the heading level', () => {
    render(<Heading level={4}>Default size heading</Heading>)

    expect(screen.getByRole('heading', { level: 4 })).toHaveClass(styles.md)
  })

  it('uses an explicit size override when provided', () => {
    render(
      <Heading level={2} size="xs" color="muted">
        Overridden heading
      </Heading>
    )

    expect(screen.getByRole('heading', { level: 2 })).toHaveClass(styles.xs, styles.muted)
  })
})
