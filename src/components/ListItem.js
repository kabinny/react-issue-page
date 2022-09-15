import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItemLayout"
import Badge from "./Badge"

// dayjs의 time from now를 사용하려면 RelativeTime 플러그인이 필요하다.
dayjs.extend(relativeTime)

export default function ListItem({
  checked,
  onClickCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels
  const state = data.state === "open" ? "opened" : "closed"
  const date = data.state === "open" ? data.created_at : data.closed_at

  return (
    <ListItemLayout checked={checked} onClick={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((badgeProps, index) => (
              <Badge key={index} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  )
}
