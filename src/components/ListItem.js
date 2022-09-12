import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItemLayout"
import Badge from "./Badge"

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  badges,
}) {
  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          Issue Example
          {badges &&
            badges.map((badgeProps, index) => (
              <Badge key={index} {...badgeProps} />
            ))}
        </div>
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  )
}
