import React from 'react'
import UserSuggestionItem from './user_suggestion_item'
import ChannelSuggestionItem from './channel_suggestion_item'

export default class UserSuggestions extends React.Component {

  render() {
    const userSuggestions = this.props.members
    .map(member => {
        return <UserSuggestionItem
          key={`member-${member.id}`}
          member={member}
          addMember={this.props.addMember(member)}
        />
    })

    const channelSuggestions = this.props.channels
    .map(channel => {
        return <ChannelSuggestionItem
          key={`channel-${channel.id}`}
          channel={channel}
          userId={this.props.userId}
          addMember={this.props.addMember}
          />
    })

    return <ul className='modal-suggestions'>
      {channelSuggestions}
      {userSuggestions}
    </ul>
  }
}
