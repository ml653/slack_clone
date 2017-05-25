import React from 'react'
import UserSuggestions from './user_suggestions'

export default class NewDirectMessage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
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
                  onSubmit={this.handleSubmit}>
                  Go
                </button>
              </div>
            </div>
          </form>

          <UserSuggestions />
        </div>
      </div>
    )
  }
}
