import styles from "./OpenCloseFilters.module.css"
import cx from "clsx"

export default function OpenCloseFilters({ isOpenMode, onClickMode }) {
  // const openModeDataSize = 1
  // const closeModeDataSize = 2

  return (
    <>
      <OpenCloseFilter
        // size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode(true)}
      />
      <OpenCloseFilter
        // size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => onClickMode(false)}
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
      {/* {size} */} {state}
    </span>
  )
}
