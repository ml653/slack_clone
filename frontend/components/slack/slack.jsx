import React from 'react'

class Slack extends React.Component {

  render() {
    return (
      <div>
        {/* <div id='sidebar' className='sidebar-menu'>

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

        </div> */}

        <div id='messenger'>
          <ul id='feed'>
            <li className='message'>
              <div className='message-avatar'>
                <img src='/assets/kitten.jpg'/>
              </div>

              <div className='message-content'>
                <div className='message-info'>
                  <div className='message-username'>steven</div>
                  <div className='message-date'>5:59 PM</div>
                </div>
                <div className='message-text'>
                  The quick brown fox jumped over the lazy dog.
                </div>
              </div>

            </li>

            <li className='message'>
              <div className='message-avatar'>
                <img src='/assets/kitten.jpg'/>
              </div>

              <div className='message-content'>
                <div className='message-info'>
                  <div className='message-username'>steven</div>
                  <div className='message-date'>5:59 PM</div>
                </div>
                <div className='message-text'>
                  The quick brown fox jumped over the lazy dog.
                </div>
              </div>
            </li>

            <li className='message'>
              <div className='message-avatar'>
                <img src='/assets/kitten.jpg'/>
              </div>

              <div className='message-content'>
                <div className='message-info'>
                  <div className='message-username'>steven</div>
                  <div className='message-date'>5:59 PM</div>
                </div>
                <div className='message-text'>
                  The quick brown fox jumped over the lazy dog.
                </div>
              </div>
            </li>
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
