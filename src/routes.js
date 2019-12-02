import React from 'react'
import { HomeScreen } from './screen'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import appStyle from './routes.style'

export default function Routes() {
  const style = appStyle()

  return (
    <BrowserRouter className={style.container}>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  )
}
