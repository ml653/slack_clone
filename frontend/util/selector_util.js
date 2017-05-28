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
