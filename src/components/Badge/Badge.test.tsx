import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'
import styles from './Badge.module.css'

describe('Badge', () => {
  it('renders content and forwards a ref', () => {
    const ref = createRef<HTMLSpanElement>()

    render(<Badge ref={ref}>Stable</Badge>)

    expect(screen.getByText('Stable')).toBeInTheDocument()
    expect(ref.current).toBe(screen.getByText('Stable'))
  })

  it('applies the dot class when dot is enabled', () => {
    render(<Badge dot>Live</Badge>)

    expect(screen.getByText('Live')).toHaveClass(styles.dot)
  })
})
