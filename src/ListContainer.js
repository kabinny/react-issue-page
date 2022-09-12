import { useState } from "react"
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
      <ListItemLayout className={styles.listFilter}>
        <div className={styles.filterLists}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>Milestones</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
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
