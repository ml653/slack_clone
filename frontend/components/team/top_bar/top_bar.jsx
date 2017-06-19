import React from 'react'
import { getChannelDisplayName } from 'Util/selector_util'

export default class TopBar extends React.Component {
  render(){
    return <div id='header'>
      <div>
        <div className='channel-name'>
          { getChannelDisplayName(this.props.channel, this.userId, true)}
        </div>
        <div className='items'>
          <div className='star item'>
            <i className="fa fa-star-o" aria-hidden="true"/>
          </div>
          <div className='members item'
            onClick={this.props.toggleChannelDetails}>
            <i className="fa fa-user-o  fa-align-center fa-fw" aria-hidden="true"/>
            <p>
              {Object.values(this.props.channel.members).length}
            </p>
          </div>
        </div>
      </div>

      <img className='info-button' src='/images/side_panel.png'
        onClick={this.props.toggleChannelDetails}/>
    </div>
  }
}
