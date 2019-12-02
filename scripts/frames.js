const component = name => {
  const toUpperCaseFirstLetter = name.replace(
    name.charAt(0),
    name.toUpperCase().slice(0, 1),
  )

  return `
  import React from 'react'
  import appStyle from './${name}.style.js'
  
  export function ${toUpperCaseFirstLetter}Component() {
    const style = appStyle()
  
    return (
        <div className={style.container}>
            ${toUpperCaseFirstLetter} Component
        </div>
    )
  }
  
  `
}

const screen = name => {
  const toUpperCaseFirstLetter = name.replace(
    name.charAt(0),
    name.toUpperCase().slice(0, 1),
  )

  return `
  import React from 'react'
  import appStyle from './${name}.style.js'
  
  export function ${toUpperCaseFirstLetter}Screen() {
    const style = appStyle()
  
    return (
        <div className={style.container}>
            ${toUpperCaseFirstLetter} Screen
        </div>
    )
  }
  
  `
}

const style = `
import { createUseStyles } from 'react-jss'

export default createUseStyles({
  container: {
    flex: 1
  }
})

`

module.exports = {
  component,
  screen,
  style,
}
