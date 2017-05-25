import React from 'react'

export default class UserSuggestions extends React.Component {
  render() {
    return <ul className='modal-suggestions'>
      <li>
        <div className='user'>
          <img src='/assets/profile_img_1.png'/>
          <div className='content'>
            <span className='username'>
              Steven
            </span>
          </div>
        </div>
      </li>
    </ul>
  }
}
