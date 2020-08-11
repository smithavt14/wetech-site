import React from "react"

export default function Container({ children }) {
  return (
  <div style={{padding: '0 80px', maxWidth: '1440px'}}>
    {children}
  </div>
  )
}