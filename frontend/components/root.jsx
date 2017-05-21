import React from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import LoginPage from './authentication/login_page'

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import TeamContainer from './team/team_container'

// const Root = ({ store }) => {
//   return (
//     <Provider store={store}>
//       <HashRouter>
//         <Switch>
//           <AuthRoute path='/login' component={LoginPage}/>
//           <ProtectedRoute path='/' component={Team}/>
//         </Switch>
//       </HashRouter>
//     </Provider>
//   )
// }

class Root extends React.Component {

  render() {
    return <Provider store={this.props.store}>
        <HashRouter>
          <Switch>
            <AuthRoute path='/login' component={LoginPage}/>
            <ProtectedRoute path='/' component={TeamContainer}/>
          </Switch>
        </HashRouter>
      </Provider>
  }
}

export default Root
