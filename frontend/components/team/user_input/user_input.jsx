import React from 'react'
import * as SelectorUtil from 'Util/selector_util'

export default class UserInput extends React.Component {

  onKeyPress(e) {
    if(e.key === 'Enter') {
      e.preventDefault()
      this.props.sendMessage({
        text: e.target.value,
        channel_id: this.props.channel.id,
        user_id: this.props.userId
      })
      .then(e.target.value = '')
    }
  }

  render() {

    let placeholderSuffix
    switch (true) {
    case this.props.channel && this.props.channel.isDirectMessage:
      placeholderSuffix = `@${SelectorUtil.getDirectMessageMembers(
        this.props.userId, this.props.channel.members)
        .map(member => member.username)
        .join(', ')}`
      break
    case this.props.channel && !this.props.channel.isDirectMessage:
      placeholderSuffix = `#${this.props.channel.name}`
      break
    default:
      placeholderSuffix = ''
    }

    return <div id='user-input'>
      <input type='textarea' onKeyPress={this.onKeyPress.bind(this)}
        placeholder={ `Message ${placeholderSuffix}`}/>
    </div>
  }
}
