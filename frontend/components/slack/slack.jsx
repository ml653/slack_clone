import React from 'react'
import Feed from './feed'
import Sidebar from './sidebar'
import UserInput from './user_input'

class Slack extends React.Component {

  render() {
    return (
      <div>
        <Sidebar/>
        <div id='messenger'>
          <Feed/>
          <UserInput/>
        </div>
      </div>
    )
  }
}

export default Slack
