import { Link } from 'react-router-dom'
import { Badge } from '@lib/components/Badge/Badge'
import { Heading } from '@lib/components/Heading/Heading'
import { Text } from '@lib/components/Text/Text'
import { componentList } from '../data/components'
import styles from './ComponentsPage.module.css'

export default function ComponentsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <Badge variant="brand" className={styles.eyebrow}>
          Catalog
        </Badge>
        <h1 className={styles.name}>Components</h1>
        <p className={styles.description}>
          Explore every component in the library with short descriptions and direct links into the
          detailed examples, props, and usage guidance.
        </p>
      </div>

      <div className={styles.grid}>
        {componentList.map((component) => (
          <Link key={component.slug} to={`/components/${component.slug}`} className={styles.card}>
            <Heading level={2} size="xs" className={styles.cardName}>
              {component.name}
            </Heading>
            <Text size="sm" className={styles.cardDesc}>
              {component.description}
            </Text>
            <Text size="xs" weight="semibold" className={styles.cardMeta}>
              View component
            </Text>
          </Link>
        ))}
      </div>
    </div>
  )
}
