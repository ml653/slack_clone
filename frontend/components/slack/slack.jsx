import React from 'react'
import Message from './message'

class Slack extends React.Component {

  render() {
    const message = {
      username: 'steven',
      created_at: new Date(),
      img_url: '/assets/profile_img_1.png',
      text: 'The quick brown fox jumped over the lazy dog.',
    }
    return (
      <div id='app'>

        <div id='sidebar' className='sidebar-menu'>

          <div id='user' className='sidebar-item'>
            <h2>Slack</h2>
            <p id='username'>stevenli</p>
          </div>

          <div id='channels'>
            <ul id='groups'>
              <li className='channel sidebar-item selected'>CHANNELS</li>
              <li className='channel sidebar-item'>#EBB</li>
              <li className='channel sidebar-item'>#Estonian Translation</li>
            </ul>

            <ul id='direct-messages'>
              <li className='channel sidebar-item'>DIRECT MESSAGES</li>
              <li className='channel sidebar-item'>#Slackbot</li>
              <li className='channel sidebar-item'>#Chelsea</li>
              <li className='channel sidebar-item'>#Mark</li>
              <li className='channel sidebar-item'>#Robbie</li>
            </ul>
          </div>

        </div>

        <div id='messenger'>

          <ul id='feed'>
            <Message message={message} />
            <Message message={message} />
            <Message message={message} />
          </ul>

          <div id='user-input'>
            <input type='textarea'
              placeholder='Message'/>
          </div>

        </div>
      </div>
    )
  }
}

export default Slack
