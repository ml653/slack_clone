import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { HashRouter } from 'react-router-dom'
import LoginForm from './authentication/login_form'

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <HashRouter>
          <Route path='/' component={LoginForm} />
      </HashRouter>
    </Provider>
  )
}


export default Root
