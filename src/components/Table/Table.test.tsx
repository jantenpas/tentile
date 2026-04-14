import { render, screen } from '@testing-library/react'
import { Table } from './Table'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
]

const data = [
  { name: 'Alice', role: 'Admin' },
  { name: 'Bob', role: 'Viewer' },
]

describe('Table', () => {
  it('renders column headers', () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Role' })).toBeInTheDocument()
  })

  it('renders a row for each data entry', () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByRole('cell', { name: 'Alice' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'Bob' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'Admin' })).toBeInTheDocument()
  })

  it('renders an empty table body when data is empty', () => {
    render(<Table columns={columns} data={[]} />)
    expect(screen.getAllByRole('columnheader')).toHaveLength(2)
    expect(screen.queryAllByRole('row')).toHaveLength(1) // header row only
  })

  it('applies the variant class', () => {
    const { container } = render(<Table columns={columns} data={data} variant="striped" />)
    expect(container.querySelector('table')!.className).toMatch(/striped/)
  })
})
