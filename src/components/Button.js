import styles from "./Button.module.css"
import cx from "clsx"

export default function Button({ buttonStyle, children, type = "button" }) {
  return (
    <button className={cx(styles.button, styles[buttonStyle])} type={type}>
      {children}
    </button>
  )
}
