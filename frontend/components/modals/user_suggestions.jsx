import React from 'react'

export default class UserSuggestions extends React.Component {

  addUser(userId) {
    return () => {
      this.props.addUser(userId)
    }
  }

  render() {
    const suggestions = this.props.members
    .map(member => {
      return <li key={member.id}
        onClick={this.props.addMember(member)}>
        <div className='user'>
          <img src='/assets/profile_img_1.png'/>
          <div className='content'>
            <span className='username'>
              { member.username }
            </span>
          </div>
        </div>
      </li>
    })

    return <ul className='modal-suggestions'>
      {suggestions}
    </ul>
  }
}
