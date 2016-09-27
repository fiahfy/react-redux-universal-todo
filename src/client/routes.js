import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/app'
import Main from './containers/main'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
)
