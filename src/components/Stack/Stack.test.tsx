import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Stack } from './Stack'

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack><span>Item</span></Stack>)
    expect(screen.getByText('Item')).toBeInTheDocument()
  })

  it('uses column direction by default', () => {
    render(<Stack data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack')).toHaveStyle({ flexDirection: 'column' })
  })

  it('applies row direction', () => {
    render(<Stack direction="row" data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack')).toHaveStyle({ flexDirection: 'row' })
  })

  it('applies gap as CSS var', () => {
    render(<Stack gap={4} data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack')).toHaveStyle({ gap: 'var(--space-4)' })
  })

  it('applies align', () => {
    render(<Stack align="center" data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack')).toHaveStyle({ alignItems: 'center' })
  })

  it('applies justify', () => {
    render(<Stack justify="space-between" data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack')).toHaveStyle({ justifyContent: 'space-between' })
  })

  it('applies flex-wrap when wrap is true', () => {
    render(<Stack wrap data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack')).toHaveStyle({ flexWrap: 'wrap' })
  })

  it('renders as a different element via as prop', () => {
    render(<Stack as="section" data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack').tagName).toBe('SECTION')
  })

  it('applies gap=0 as literal 0', () => {
    render(<Stack gap={0} data-testid="stack"><span>Item</span></Stack>)
    expect(screen.getByTestId('stack')).toHaveStyle({ gap: '0' })
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLElement>()
    render(<Stack ref={ref}><span>Item</span></Stack>)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
