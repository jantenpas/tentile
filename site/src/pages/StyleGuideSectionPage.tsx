import { useParams } from 'react-router-dom'
import { StyleGuideSectionContent, styleGuideSections } from '../components/StyleGuideShowcase'
import type { StyleGuideSectionSlug } from '../components/StyleGuideShowcase'
import styles from './StyleGuidePage.module.css'

export default function StyleGuideSectionPage() {
  const { slug } = useParams<{ slug: StyleGuideSectionSlug }>()
  const section = styleGuideSections.find((entry) => entry.slug === slug)

  if (!slug || !section) {
    return (
      <div className={styles.notFound}>
        <p>
          Style guide section <code>{slug}</code> not found.
        </p>
        <a href="/style-guide">Back to style guide</a>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.name}>{section.name}</h1>
        <p className={styles.description}>{section.description}</p>
      </div>

      <div className={styles.content}>
        <StyleGuideSectionContent slug={slug} />
      </div>
    </div>
  )
}
