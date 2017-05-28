import React from 'react'
import { getDirectMessageMembers } from 'Util/selector_util'

function buildChannelName(userId, channel) {
  if(channel.isDirectMessage) {
    return getDirectMessageMembers(userId, channel.members)
      .map(user => `${user.username}`)
      .join(', ')
  } else {
    return `# ${channel.name}`
  }
}

export default (props) => {
  return <div id='header'>
    <div>
      <div className='channel-name'>
        {buildChannelName(props.userId, props.channel)}
      </div>
      <div className='items'>
        <div className='star item'>
          <i className="fa fa-star-o" aria-hidden="true"/>
        </div>
        <div className='members item'>
          <i className="fa fa-user-o  fa-align-center fa-fw" aria-hidden="true"/>
          <p>
            {Object.values(props.channel.members).length}
          </p>
        </div>
      </div>
    </div>
    
    <img className='info-button' src='/images/side_panel.png'/>
  </div>
}
