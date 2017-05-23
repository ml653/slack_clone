import React from 'react'
import Message from './message'
import scrollIntoView from 'scroll-into-view'
import Scroll from 'react-scroll'
const scroller = Scroll.animateScroll;


class Feed extends React.Component {

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    $('.scroll').scrollTop(100000)

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
  }

  render() {
    const messages = Object.values(this.props.messages).map((message, i, arr) => (
      <div key={message.id}
        id={ i === arr.length - 1 ? 'last-child' : '' }
        ref={((message) => {
        this.lastMessage = message
      })}>

        <Message
          message={message}
       />
       </div>
    ))

    console.log('y', this.lastMessage)
    // this.lastChild = messages[messages.length - 1]
    // debugger

    return <div id='style-1' className='scroll'>
      <ul id='feed'>
        {messages}
        {/* <Message message={Object.values(this.props.messages)[0]} /> */}
      </ul>
    </div>
  }
}

export default Feed
