import React from 'react'

export default class ChannelSuggestions extends React.Component {

  parseDate(date) {
    const parsedDate = new Date(date)
    return parsedDate.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
  }

  render() {
    console.log(this.props)
    const suggestions = this.props.channels
    .map(channel => {
      return <li key={channel.id}
        // onClick={this.props.addChannel(channel)}
        className='channel'>
          <div className='content'>
            <h5>{channel.name}</h5>
            <p>
              Created by <b>{channel.author.username}</b> on {this.parseDate(channel.created_at)}.
            </p>
            {/* <div className='channel-name'>{channel.name}</div>
            <div className='channel-info'>
              Created by <b>{channel.author.username}</b> on {this.parseDate(channel.created_at)}.
            </div> */}
          </div>
      </li>
    })

    return <ul className='modal-suggestions'>
      {suggestions}
    </ul>
  }
}
