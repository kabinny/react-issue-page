import { useState } from "react"
import styles from "./Tabs.module.css"
import cx from "clsx"

const TabList = [
  "Code",
  "Issues",
  "Pull requests",
  "Actions",
  "Projects",
  "Security",
  "Insights",
  "Settings",
]

export default function Tabs() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, index) => (
        <Tab
          key={`${index}`}
          title={tab}
          selected={selectedTabIndex === index}
          onClick={() => setSelectedTabIndex(index)}
        />
      ))}
    </ul>
  )
}

function Tab({ title, selected, onClick, number }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  )
}
