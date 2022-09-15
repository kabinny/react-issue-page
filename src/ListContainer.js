import { useState, useEffect } from "react"
import axios from "axios"
import styles from "./ListContainer.module.css"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import Pagination from "./components/Pagination"
import ListFilter from "./components/ListFilter"
import OpenCloseFilters from "./components/OpenCloseFilters"

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  async function getData() {
    const { data } = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`,
    )
    setList(data)
  }

  // API 로 데이터로 받아오는 작업은 useEffect 안에 넣어야 한다.
  // 그리고 화면을 그리는 컴포넌트에 위치하면 된다.
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button buttonStyle="green">New Issue</Button>
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
          {list.map((listItem) => (
            <ListItem
              key={listItem.id}
              data={listItem}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
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
