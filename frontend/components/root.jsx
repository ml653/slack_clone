import React from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import NewChanelContainer from 'Components/modals/new_channel_container'
import NewDirectMessageContainer from 'Components/modals/new_direct_message_container'

import SignupFormContainer from './authentication/sign_up_form_container'
import LoginFormContainer from './authentication/login_form_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import TeamContainer from './team/team_container'

class Root extends React.Component {

  render() {
    return <Provider store={this.props.store}>
        <HashRouter>
          <Switch>
            <AuthRoute path='/login' component={LoginFormContainer}/>
            <AuthRoute path='/sign-up' component={SignupFormContainer}/>
            <ProtectedRoute path='/new-channel' component={NewChanelContainer}/>
            <ProtectedRoute path='/new-direct-message' component={NewDirectMessageContainer}/>
            <ProtectedRoute path='/' component={TeamContainer}/>
          </Switch>
        </HashRouter>
      </Provider>
  }
}

export default Root
