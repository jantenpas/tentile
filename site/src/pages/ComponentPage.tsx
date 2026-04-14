import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ComponentPage.module.css'
import { componentList } from '../data/components'
import PropsTable from '../components/PropsTable'

export default function ComponentPage() {
  const { slug = '' } = useParams()
  const component = componentList.find((c) => c.slug === slug)

  if (!component) {
    return (
      <div className={styles.notFound}>
        <p>
          Component <code>{slug}</code> not found.
        </p>
        <a href="/">Back to overview</a>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.name}>{component.name}</h1>
        <p className={styles.description}>{component.description}</p>
      </div>

      <div className={styles.examples}>
        {component.examples.map((example, i) => (
          <ExampleBlock key={i} title={example.title} render={example.render} code={example.code} />
        ))}
      </div>

      {component.props && component.props.length > 0 && (
        <div className={styles.propsSection}>
          <h2 className={styles.sectionHeading}>Props</h2>
          <PropsTable props={component.props} />
        </div>
      )}
    </div>
  )
}

function ExampleBlock({
  title,
  render,
  code,
}: {
  title: string
  render: () => React.ReactNode
  code: string
}) {
  const [copied, setCopied] = useState(false)

  function copyCode() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{title}</h2>
      <div className={styles.preview}>{render()}</div>
      <div className={styles.codeWrapper}>
        <button className={styles.copyBtn} onClick={copyCode} aria-label="Copy code">
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre className={styles.code}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
