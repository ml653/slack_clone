import React from 'react'

export default ({sidebar}) => (
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
)
