import React from 'react'

class LoginForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
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
    this.props.login(this.state)
  }

  render() {
    const errors = this.props.errors
      .map(err => <p className='alert'>{err}</p>)

    return(
      <div>
        <ul>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign in to Slack</h1>
          <p>Enter your <b>email address</b> and <b>password</b>.</p>

          <input
            placeholder='you@example.com'
            type='email'
            value={this.state.username}
            required
            onChange={this.updateField('email')} />

          <input
            placeholder='password'
            type='password'
            value={this.state.password}
            minLength="6"
            required
            onChange={this.updateField('password')}/>

          <button
            className='sign-in'
            type='submit'
            onSubmit={this.handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
