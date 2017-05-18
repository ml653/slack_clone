import React from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import LoginForm from './authentication/login_form'

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Slack from './slack/slack'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <AuthRoute path='/login' component={LoginForm}/>
          <ProtectedRoute path='/' component={Slack}/>
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default Root
