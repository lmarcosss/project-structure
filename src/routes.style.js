import { createUseStyles } from 'react-jss'

export default createUseStyles({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  '@global html, body, #root': {
    height: '100%',
  },
})
