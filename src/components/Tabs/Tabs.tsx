import styles from './Tabs.module.css'
import type { TabsProps } from './Tabs.types'

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  const panelId = (id: string) => `tabpanel-${id}`
  const tabId = (id: string) => `tab-${id}`

  const activePanel = tabs.find((t) => t.id === activeTab)

  return (
    <div className={styles.container}>
      <div className={styles.tablist} role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              id={tabId(tab.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId(tab.id)}
              className={[styles.tab, isActive ? styles.active : ''].filter(Boolean).join(' ')}
              onClick={() => onChange(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {activePanel && (
        <div
          id={panelId(activePanel.id)}
          role="tabpanel"
          aria-labelledby={tabId(activePanel.id)}
          className={styles.panel}
        >
          {activePanel.content}
        </div>
      )}
    </div>
  )
}
