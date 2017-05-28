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
        onClick={this.props.addMember(member)}
        className='user'>
          <img src='/assets/profile_img_1.png'/>
          <div className='content'>
            <h5 className='username'>
              { member.username }
            </h5>
          </div>
      </li>
    })

    return <ul className='modal-suggestions'>
      {suggestions}
    </ul>
  }
}
