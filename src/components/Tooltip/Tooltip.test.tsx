import { render, screen } from '@testing-library/react'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('renders children', () => {
    render(
      <Tooltip content="Info">
        <button>Hover</button>
      </Tooltip>
    )
    expect(screen.getByRole('button', { name: 'Hover' })).toBeInTheDocument()
  })

  it('renders the tooltip content with role="tooltip"', () => {
    render(
      <Tooltip content="Helpful tip">
        <button>Hover</button>
      </Tooltip>
    )
    expect(screen.getByRole('tooltip')).toHaveTextContent('Helpful tip')
  })

  it('renders children directly when disabled', () => {
    render(
      <Tooltip content="Hidden" disabled>
        <button>Hover</button>
      </Tooltip>
    )
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Hover' })).toBeInTheDocument()
  })

  it('applies a different class for each placement', () => {
    const { container: bottom } = render(
      <Tooltip content="Info" placement="bottom">
        <button>B</button>
      </Tooltip>
    )
    const { container: left } = render(
      <Tooltip content="Info" placement="left">
        <button>B</button>
      </Tooltip>
    )
    expect((bottom.firstChild as Element).className).not.toBe(
      (left.firstChild as Element).className
    )
  })

  it('applies a different class for top vs bottom placement', () => {
    const { container: top } = render(
      <Tooltip content="Info" placement="top">
        <button>B</button>
      </Tooltip>
    )
    const { container: bottom } = render(
      <Tooltip content="Info" placement="bottom">
        <button>B</button>
      </Tooltip>
    )
    expect((top.firstChild as Element).className).not.toBe((bottom.firstChild as Element).className)
  })
})
