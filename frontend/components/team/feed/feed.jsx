import React from 'react'
import Message from './message'

class Feed extends React.Component {

  componentWillMount() {
    console.log('feed mounted')
    this.loadChannel(this.props.match.params.channel)
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.channel !== newProps.match.params.channel) {
      this.loadChannel(newProps.match.params.channel)
    }
  }

  loadChannel(channelId) {
    if(this.props.user.channels[channelId]) {
      this.props.loadChannel(channelId)
    } else {
      this.props.history.push(`/${this.props.user.channels[1].id}`)
    }
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    $('.scroll').scrollTop(100000)
  }

  render() {
    const messages = Object.values(this.props.messages).map((message, i, arr) => (
    <div key={message.id}
      id={ i === arr.length - 1 ? 'last-child' : '' }
      ref={((message) => {
        this.lastMessage = message
      })}>

      <Message message={message}/>
       </div>
    ))

    return <div id='style-1' className='scroll'>
      <ul id='feed'>
        {messages}
      </ul>
    </div>
  }
}

export default Feed

    // if(this.lastMessage !== undefined) {
      // console.log($("#last-child")[0].scrollHeight)
      // $("#last-child").scrollTop($("#last-child")[0].scrollHeight);
      // const height = $("#last-child").offset().top
      // console.log(height)

      // const openTop = this.lastMessage.getBoundingClientRect().top
      // const bodyTop = document.body.getBoundingClientRect().top
      // const absolute = openTop - bodyTop
      // console.log(absolute)
      // window.scrollTo(0, absolute)
      // scrollIntoView(this.lastMessage, {
      //   align:{
      //   left: 0,
      //   top: 0
      //   }
      // })
      // scroller.scrollToBottom(this.lastMessage)
    // }
