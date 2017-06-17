import React from 'react'
import UserSuggestions from './user_suggestions'
import { loadUsers, loadDMChannelsAndUsers } from 'Util/api_util'
import ChosenMember from './chosen_member'
import { values, merge } from 'lodash'

export default class NewDirectMessage extends React.Component {

  componentWillMount() {
    // Load all users and channels; TODO
    loadDMChannelsAndUsers(this.props.userId)
      .then(n => {
        const newState = merge({}, this.state, {
          users: n.users,
          channels: n.channels
        })
        this.updateUsersAndChannels(newState)
        this.setState(this.updateUsersAndChannels(newState))
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      cursorIndex: null,
      members: [],
      users: [],
      shownUsers: [],
      channels: [],
      shownChannels: [],
      search: '',
      channel: {
        author_id: this.props.userId,
        isDirectMessage: true, // TODO
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

  updateUsersAndChannels(state){
    // Update shownUsers
    const memberIds = state.members.map(n => n.id)
    state.shownUsers = state.users
      .filter(user => memberIds.indexOf(user.id) < 0)

    // Update shownChannels
    state.shownChannels = state.channels
      .filter(channel => values(channel.members)
        .some(member => {
          return memberIds.indexOf(member.id) < 0 && this.props.userId !== member.id
        }))

    return state
  }

  addMember(member) {
    return () => {
      // Set state
      const memberIds = this.state.members.map(n => n.id)
      if(memberIds.indexOf(member.id) < 0) {
        this.state.members.push(member)
        this.state.search = ''
        const newState = this.updateUsersAndChannels(this.state)
        this.setState(newState)
      }
    }
  }

  removeMember(member) {
    return () => {
      const index = this.state.members.indexOf(member)
      if(index >= 0) {
        this.state.members.splice(index, 1)
        const newState = this.updateUsersAndChannels(this.state)
        this.setState(newState)
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
                  value={this.state.search}
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

          <UserSuggestions
            search={this.state.search}
            userId={this.props.userId}
            members={this.state.shownUsers}
            addMember={this.addMember}
            channels={this.state.shownChannels} />
        </div>
      </div>
    )
  }
}
