import { values } from 'lodash'

export function updateField(field) {
  return e => {
    this.setState({
      [field]: e.currentTarget.value
    })
  }
}

export function getDirectMessageMembers(currentUserId, channelMembers) {
  return values(channelMembers)
    .filter(member => member.id !== currentUserId)
}

export function getChannelDisplayName(channel, userId, includeUserId=false){
  const members = values(channel.members)
    .filter(member => includeUserId ? true : member.id !== userId)
    .map(member => member.username)
    .join(', ')

  return channel.isDirectMessage ? `@${members}` : `#${channel.name}`
}
