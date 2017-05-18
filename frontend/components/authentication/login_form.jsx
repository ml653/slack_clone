import React from 'react'

class LoginForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.updateField = this.updateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.clearSessionErrors()
    this.props.login(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Sign in to Slack</h1>
        <p>Enter your <b>email address</b> and <b>password</b>.</p>

        <input
          placeholder='you@example.com'
          type='text'
          value={this.state.username}
          onChange={this.updateField('username')} />

        <input
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.updateField('password')}/>

        <button
          className='sign-in'
          type='submit'
          onSubmit={this.handleSubmit}>
          Sign In
        </button>
      </form>
    )
  }
}

export default LoginForm
