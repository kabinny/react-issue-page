import styles from "./Header.module.css"
import Button from "./components/Button"
import Space from "./components/Space"
import Tabs from "./components/Tabs"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button buttonStyle="default">
          Watch <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button buttonStyle="default">Fork</Button>
        <Space />
        <Button buttonStyle="default">Star</Button>{" "}
      </div>
      <Tabs />
    </div>
  )
}
