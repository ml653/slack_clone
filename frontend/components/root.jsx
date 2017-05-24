import React from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import LoginPage from './authentication/login_page'
import NewChanelContainer from 'Components/modals/new_channel_container'
import NewDirectMessage from 'Components/modals/new_direct_message'

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import TeamContainer from './team/team_container'

class Root extends React.Component {

  render() {
    return <Provider store={this.props.store}>
        <HashRouter>
          <Switch>
            <AuthRoute path='/login' component={LoginPage}/>
            <ProtectedRoute path='/new-channel' component={NewChanelContainer}/>
            <ProtectedRoute path='/new-direct-message' component={NewDirectMessage}/>
            <ProtectedRoute path='/' component={TeamContainer}/>

          </Switch>
        </HashRouter>
      </Provider>
  }
}

export default Root
