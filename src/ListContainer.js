import { useState } from "react"
import cx from "clsx"
import styles from "./ListContainer.module.css"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checkedList, setCheckedList] = useState([])

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{ fontSize: "14px", backgroundColor: "green", color: "white" }}
        >
          New Issue
        </Button>
      </div>
      <OpenCloseFilters />
      <ListItemLayout className={styles.listFilter}>
        <ListFilter />
      </ListItemLayout>
      <div className={styles.container}>
        <ListItem
          checked={checkedList.filter((item) => item.id === 0)[0]}
          onChangeCheckBox={() => {
            const currentChecked = checkedList.filter(
              (item) => item.id === "0",
            )[0]

            if (currentChecked) {
              // 리스트에서 빼기
            } else {
              // 리스트에 추가하기
              setCheckedList((checkedList) => [...checkedList, "0"])
            }
          }}
          badges={[{ color: "red", title: "Bug" }]}
        />
      </div>
    </div>
  )
}

function ListFilter() {
  return (
    <div className={styles.filterLists}>
      <ListFilterItem>Author</ListFilterItem>
      <ListFilterItem>Label</ListFilterItem>
      <ListFilterItem>Projects</ListFilterItem>
      <ListFilterItem>Milestones</ListFilterItem>
      <ListFilterItem>Assignee</ListFilterItem>
      <ListFilterItem>Sort</ListFilterItem>
    </div>
  )
}

function ListFilterItem({ onClick, children }) {
  return (
    <span role="button" onClick={onClick}>
      {children} ▾
    </span>
  )
}

function OpenCloseFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true)

  // const data = getData()
  // const openData = data.filter((d) => d.state ==='open')
  const openModeDataSize = 1
  const closedModeDataSize = 2

  return (
    <>
      <OpenCloseFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenCloseFilter
        size={closedModeDataSize}
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