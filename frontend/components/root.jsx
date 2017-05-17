import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import LoginForm from './authentication/login_form'

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('home')
    }
  }

  const _ensureLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/')
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={LoginForm} />
          {/* <IndexRoute component={LoginForm} onEnter={_redirectIfLoggedIn} /> */}
          {/* <Route path='signup' component={SignupPage} onEnter={_redirectIfLoggedIn}>
            <Route path='create-username' component={UsernameSignupContainer} />
            <Route path='create-password' component={PasswordSignupContainer} />
          </Route> */}

          {/* <Route path='home' component={Home} onEnter={_ensureLoggedIn}>
            <IndexRoute component={MessagePanelContainer} />
          </Route> */}
        {/* </Route> */}
      </Router>
    </Provider>
  )
}


export default Root
