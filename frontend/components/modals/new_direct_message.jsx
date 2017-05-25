import React from 'react'
import UserSuggestions from './user_suggestions'
import { loadUsers } from 'Util/api_util'

export default class NewDirectMessage extends React.Component {

  componentWillMount() {
    loadUsers()
      .then(users => {
        this.setState({
          allUsers: Object.values(users)
        })
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      cursorIndex: null,
      allUsers: [],
      members: [],
      search: '',
      channel: {
        name: '_',
        description: '_',
        author_id: this.props.userId,
        isDirectMessage: true,
        private: true
      }
    }
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  isButtonEnabled() {
    return (this.state.allUsuers.length !== 0)
  }

  handleSubmit() {
  }

  render() {
    return (
      <div className='modal-background'>
        <div className='modal'>
          <div className='modal-header'>
            <h1>Direct Messages</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className='new-direct-message-form' >
              <input
                placeholder='Find or start a conversation.'
                type='text'
                value={this.state.name}
                onChange={this.updateField('search')} />

              <div className='modal-submission'>
                <button
                  className='create-direct-message-button'
                  type='submit'
                  disabled={false}
                  onSubmit={this.handleSubmit}>
                  Go
                </button>
              </div>
            </div>
          </form>

          <UserSuggestions members={this.state.allUsers} />
        </div>
      </div>
    )
  }
}
