import React from 'react'
import UserSuggestions from './user_suggestions'
import { loadUsers } from 'Util/api_util'
import ChosenMember from './chosen_member'

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
        author_id: this.props.userId,
        isDirectMessage: true,
        private: true
      }
    }

    this.updateField = this.updateField.bind(this)
    this.addMember = this.addMember.bind(this)
    this.removeMember = this.removeMember.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateField(field) {
    return e => {
      e.preventDefault()
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  addMember(member) {
    return () => {
      if(this.state.members.indexOf(member) < 0) {
        this.state.members.push(member)
        this.setState(this.state.members)
      }
    }
  }

  removeMember(member) {
    return () => {
      const index = this.state.members.indexOf(member)
      if(index >= 0) {
        this.state.members.splice(index, 1)
        this.setState(this.state.members)
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const memberIdArr = this.state.members.map(n => n.id)
    this.props.createChannel(this.state.channel, memberIdArr)
      .then(() => this.props.history.push('/'))
  }

  render() {
    const members = this.state.members.map(member => (
      <ChosenMember user={member} removeMember={this.removeMember} key={member.id}/>)
    )

    return (
      <div className='modal-background'>
        <div className='modal'>
          <div className='modal-header'>
            <h1>Direct Messages</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className='new-direct-message-form' >
              <div className='new-direct-message-input'>
                {members}
                <input
                  placeholder={this.state.members.length > 0 ? '' : 'Find or start a conversation.'}
                  type='text'
                  value={this.state.name}
                  onChange={this.updateField('search')} />
              </div>

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

          <UserSuggestions members={this.state.allUsers} addMember={this.addMember}/>
        </div>
      </div>
    )
  }
}
