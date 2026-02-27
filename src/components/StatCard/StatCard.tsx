import { Card } from '../Card'
import styles from './StatCard.module.css'
import type { StatCardProps, TrendDirection } from './StatCard.types'

const TREND_ARROWS: Record<TrendDirection, string> = {
  up: '↑',
  down: '↓',
  neutral: '→',
}

export function StatCard({ value, label, trend, icon, className }: StatCardProps) {
  return (
    <Card variant="elevated" padding="md" className={[styles.statCard, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      </div>

      <p className={styles.value}>{value}</p>

      {trend && (
        <div className={[styles.trend, styles[trend.direction]].join(' ')}>
          <span className={styles.arrow} aria-hidden="true">{TREND_ARROWS[trend.direction]}</span>
          <span className={styles.trendValue}>{trend.value}</span>
          {trend.label && <span className={styles.trendLabel}>{trend.label}</span>}
        </div>
      )}
    </Card>
  )
}

StatCard.displayName = 'StatCard'
