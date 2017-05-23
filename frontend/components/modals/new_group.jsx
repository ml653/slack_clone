import React from 'react'

export default class NewGroup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
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
                onClick={this.handleSubmit}>
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
