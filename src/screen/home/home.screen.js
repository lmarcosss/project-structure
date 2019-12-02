import React from 'react'
import appStyle from './home.style.js'
import { Link } from 'react-router-dom'

export function HomeScreen() {
  const style = appStyle()

  return (
    <div className={style.container}>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
