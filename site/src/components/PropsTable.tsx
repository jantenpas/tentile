import React from 'react'
import styles from './PropsTable.module.css'

export interface PropRow {
  name: string
  type: string
  default?: string
  description: string
  control?: string
}

interface PropsTableProps {
  props: PropRow[]
}

export default function PropsTable({ props }: PropsTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Default</th>
            <th className={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((row) => (
            <tr key={row.name} className={styles.row}>
              <td className={styles.td}>
                <code className={styles.propName}>{row.name}</code>
              </td>
              <td className={styles.td}>
                <code className={styles.type}>{row.type}</code>
              </td>
              <td className={styles.td}>
                {row.default ? (
                  <code className={styles.default}>{row.default}</code>
                ) : (
                  <span className={styles.empty}>—</span>
                )}
              </td>
              <td className={styles.td}>
                <span className={styles.description}>{row.description}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
