import { values } from 'lodash'

export function getDirectMessageMembers(currentUserId, channelMembers) {
  return values(channelMembers)
    .filter(member => member.id !== currentUserId)
    .map(member => member.username).join(', ')
}
