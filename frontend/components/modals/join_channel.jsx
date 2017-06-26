import React from 'react'
import { publicChannels } from 'Util/api_util'
import ChannelSuggestions from './channel_suggestions'
import { values } from 'lodash'

export default class JoinChannel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      channels: []
    }

    this.updateField = this.updateField.bind(this)
    this.subscribeToChannel = this.subscribeToChannel.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentWillMount() {
    publicChannels(this.props.userId)
      .then(channels => {
        this.setState({
          channels: values(channels)
        })
      })
  }

  subscribeToChannel(channelId){
    return () => {
      this.props.subscribeToChannel({
        user_id: this.props.userId,
        channel_id: channelId
      }).then(() => this.props.history.push('/'))
    }
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    return <div className='modal-background'>
      <div className='modal'>
        <div className='modal-exit'>
          <img src='/images/exit_x.png' onClick={this.handleCancel}/>
        </div>

        <div className='modal-header'>
          <h1>Join Channel</h1>
        </div>

        <form>
          <div className='new-direct-message-form' >
            <div className='new-direct-message-input'>
              <input
                placeholder='Search channels.'
                type='text'
                value={this.state.search}
                onChange={this.updateField('search')} />
            </div>

            <div className='modal-submission'>
              <button
                className='join-channel-button'
                type='submit'
                disabled={false}
                onSubmit={this.handleSubmit}>
                New Channel
              </button>
            </div>
          </div>
        </form>

        <ChannelSuggestions
          search={this.state.search}
          channels={this.state.channels}
          subscribeToChannel={this.subscribeToChannel}/>

      </div>
    </div>
  }
}
