import { merge, values } from 'lodash'

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

const channelDisplayDefaults = { includeUserId: true, prefix: true}
export function getChannelDisplayName(channel, userId, options=channelDisplayDefaults){
  const newOptions = merge({}, channelDisplayDefaults, options)
  const members = values(channel.members)
    .filter(member => newOptions.includeUserId ? true : member.id !== userId)
    .map(member => member.username)
    .join(', ')

  if(newOptions.prefix){
    return channel.isDirectMessage ? `@${members}` : `#${channel.name}`
  } else {
    return channel.isDirectMessage ? `${members}` : `${channel.name}`
  }
}
