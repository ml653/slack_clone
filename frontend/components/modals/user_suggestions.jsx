import React from 'react'
import UserSuggestionItem from './user_suggestion_item'
import ChannelSuggestionItem from './channel_suggestion_item'
import { values } from 'lodash'

export default class UserSuggestions extends React.Component {

  render() {
    const regexp = new RegExp(this.props.search)
    const userSuggestions = this.props.members
      .filter(member => this.props.search === '' || regexp.test(member.username))
      .map(member => {
        return <UserSuggestionItem
          key={`member-${member.id}`}
          member={member}
          addMember={this.props.addMember(member)}
        />
    })

    const channelSuggestions = this.props.channels
    .filter(channel => {
      // At least one of the names, not including the user matches
      return values(channel.members)
        .some(member => this.props.search === '' || regexp.test(member.username))
    })
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
