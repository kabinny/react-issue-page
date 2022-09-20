import styles from "./Button.module.css"
import cx from "clsx"

export default function Button({
  buttonStyle,
  children,
  type = "button",
  disabled,
}) {
  return (
    <button
      className={cx(styles.button, styles[buttonStyle])}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
