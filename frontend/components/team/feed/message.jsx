import React from 'react'

function formatDate(date){
  return date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
}

export default ({message}) => (
  <li className='message'>
    <div className='message-avatar'>
      <img src={message.img_url}/>
    </div>

    <div className='message-content'>
      <div className='message-info'>
        <span className='message-username'>{message.username}</span>
        <span className='message-date'>{formatDate(message.created_at)}</span>
      </div>
      <div className='message-text'>
        {message.text}
      </div>
    </div>
  </li>
)
