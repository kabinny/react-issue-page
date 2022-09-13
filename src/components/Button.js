import styles from "./Button.module.css"
import cx from "clsx"

export default function Button({ buttonStyle, children }) {
  return (
    <button className={cx(styles.button, styles[buttonStyle])}>
      {children}
    </button>
  )
}
