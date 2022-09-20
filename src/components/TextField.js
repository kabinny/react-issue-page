import { forwardRef } from "react"
import cx from "clsx"
import styles from "./TextField.module.css"

export default forwardRef(function TextField(
  { type = "input", name, placeholder },
  ref,
) {
  return type === "input" ? (
    <input
      name={name}
      ref={ref}
      className={cx(styles.input, styles.border)}
      placeholder={placeholder}
    />
  ) : (
    <textarea
      name={name}
      ref={ref}
      className={cx(styles.input, styles.textarea, styles.border)}
      placeholder={placeholder}
    ></textarea>
  )
})
