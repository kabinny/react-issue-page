import { useState } from "react"
import cx from "clsx"
import styles from "./ListContainer.module.css"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import Modal from "./components/Modal"
import Pagination from "./components/Pagination"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenCloseFilters />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(filteredData) => {
              // 필터링된 요소에 맞게 데이터르 불러오기
              // const data = getData('필터링된 정보')
              // setList(data)
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listItem, index) => (
            <ListItem key={index} badges={[{ color: "red", title: "Bug" }]} />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  )
}

function ListFilter({ onChangeFilter }) {
  return (
    <>
      <div className={styles.filterLists}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  )
}

function ListFilterItem({ onClick, children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter labels"
          searchDataList={["bug", "Labels", "Apple"]}
          onClickCell={() => {
            // 클릭된 정보를 통해 리스트 필터링
            onChangeFilter()
          }}
        />
      </div>
    </div>
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