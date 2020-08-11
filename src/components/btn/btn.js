import React from "react"
import styles from "./btn.module.css"
import cx from "classnames"

export default function Button(props) {
  return (
  <div className={cx(styles.btn, styles.btnPrimary)}>
    {props.content}
  </div>
  )
}