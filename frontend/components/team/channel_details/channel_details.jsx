import React from 'react'
import { values } from 'lodash'
import {getChannelDisplayName} from 'Util/selector_util'

export default class ChannelDetails extends React.Component {
  initialize() {
  }

  getCreatedBy(channel){
    const parsedDate = new Date(channel.created_at)
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }

    return `Created by ${channel.author.username} on ` +
      `${parsedDate.toLocaleDateString('us', options)}.`
  }

  render() {
    const members = values(this.props.channel.members).map(member => {
      return <ChannelMember member={member} key={member.id}/>
    })
    return <div id='right-panel' className='channel-details'>
      <div id='channel-about'>
        About {getChannelDisplayName(this.props.channel, this.props.userId, true)}
      </div>

      <div id='channel-info'>
        <div className='title'>
          <i className='fa fa-info-circle' aria-hidden='true'/>
          Channel Info
        </div>

        <div id='channel-description'>
          <h5>Purpose</h5>
          <p>{this.props.channel.description}</p>
          <h4>{this.getCreatedBy(this.props.channel)}</h4>
        </div>
      </div>

      <div id='channel-members'>
        <div className='title'>
          <i className='fa fa-user-o' aria-hidden='true'/>
          Members
        </div>
        <ul>
          {members}
        </ul>
      </div>
    </div>
  }
}

const ChannelMember = (props) => {
  return <div className='member'>
    <img src={props.member.img_url}/>
    {props.member.username}
  </div>
}
