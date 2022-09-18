import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import styles from "./Tabs.module.css"
import cx from "clsx"

const TabList = [
  { name: "Code", pathname: "/code" },
  { name: "Issues", pathname: "/issue" },
  { name: "Pull requests", pathname: "/pulls" },
  { name: "Actions", pathname: "/actions" },
  { name: "Projects", pathname: "/projects" },
  { name: "Security", pathname: "/security" },
  // { name: "Insights", pathname: "/insights" },
  // { name: "Settings", pathname: "/settings" },
]

export default function Tabs() {
  const { pathname } = useLocation()

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, index) => (
        <Tab
          key={`${index}`}
          item={tab}
          selected={(pathname === "/" ? "/issue" : pathname) === tab.pathname}
        />
      ))}
    </ul>
  )
}

function Tab({ item, selected, number }) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button className={cx(styles.tab, { [styles.selected]: selected })}>
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  )
}
