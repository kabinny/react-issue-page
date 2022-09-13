import styles from "./OpenCloseFilters.module.css"
import { useState } from "react"
import cx from "clsx"

export default function OpenCloseFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true)

  // const data = getData()
  // const openData = data.filter((d) => d.state ==='open')
  const openModeDataSize = 1
  const closeModeDataSize = 2

  return (
    <>
      <OpenCloseFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenCloseFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  )
}

function OpenCloseFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  )
}
