import { StyleGuideShowcase } from '../components/StyleGuideShowcase'
import { styleGuideEntry } from '../data/components'
import styles from './StyleGuidePage.module.css'

export default function StyleGuidePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.name}>{styleGuideEntry.name}</h1>
        <p className={styles.description}>{styleGuideEntry.description}</p>
      </div>

      <div className={styles.content}>
        <StyleGuideShowcase />
      </div>
    </div>
  )
}
