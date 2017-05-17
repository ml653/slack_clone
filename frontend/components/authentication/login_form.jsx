import React from 'react'
import { hashHistory } from 'react-router'

class LoginForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: 'guest',
      password: 'password'
    }

    this.updateField = this.updateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn()
  }

  redirectIfLoggedIn() {
    if (this.props.currentUser) {
      hashHistory.push('/home')
    }
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
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h1>Sign in to Slakk</h1>
        <p className='auth-prompt'>Enter your <b>username</b> and <b>password</b>.</p>

        {/* <Errors errorInfo={this.props.errors}/> */}

        <input
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.updateField('username')} />

        <input
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.updateField('password')}/>

        <br />
        <button type='submit'>Sign In</button>
      </form>
    )
  }
}

export default LoginForm
