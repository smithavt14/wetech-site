import React from "react"
import Styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={Styles.page}>
      {children}
    </div>
  )
}