import React from 'react'
import { withRouter } from 'react-router-dom'

class NewGroup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author_id: this.props.userId,
      description: '',
      isDirectMessage: false,
      private: false
    }
    this.updateField = this.updateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createChannel(this.state, [])
      .then(() => this.props.history.push('/'))
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='modal-background'>
        <div className='modal'>
          <div className='modal-header'>
            <h1>Create a Channel</h1>
            <p>Channels are where your team communicates. They're best organized around a topic.
            - #leads, for example.</p>
          </div>

          <form onSubmit={this.handleSubmit}>

            <label><b>Name</b></label>
            <input
              placeholder='# e.g. leads'
              type='text'
              value={this.state.name}
              required
              onChange={this.updateField('name')} />
            <div className='modal-info'>
              Names must be lowercase, without spaces or periods, and shorter tan 22 characters.
            </div>

            <label><b>Description</b> (Optional)</label>
            <input
              type='text'
              value={this.state.password}
              onChange={this.updateField('description')}/>
              <div className='modal-info'>
                What is this channel about?
              </div>

            <div className='modal-submission'>
              <button
                className='cancel-button'
                onClick={this.handleCancel}>
                Cancel
              </button>

              <button
                className='create-group-button'
                type='submit'
                onSubmit={this.handleSubmit}>
                Create Channel
              </button>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(NewGroup)
