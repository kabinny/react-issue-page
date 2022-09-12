import { useEffect, useState } from "react"
import styles from "./Modal.module.css"
import cx from "clsx"

export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState(searchDataList)

  useEffect(() => {
    // 보통 정규식을 사용한다.
    setFilteredData(searchDataList.filter((item) => item === searchValue))
  }, [searchDataList, searchValue])

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div key={data} onClick={onClickCell} role="button">
          {data}
        </div>
      ))}
    </div>
  )
}
