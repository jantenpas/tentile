import styles from './Table.module.css'
import type { TableProps } from './Table.types'

export function Table({ columns, data, variant = 'default', style }: TableProps) {
  return (
    <div className={styles.wrapper} style={style}>
      <table className={[styles.table, styles[variant]].join(' ')}>
        <thead className={styles.thead}>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={styles.th} scope="col">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={styles.tr}>
              {columns.map((col) => (
                <td key={col.key} className={styles.td}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
