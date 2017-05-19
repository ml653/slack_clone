import React from 'react'
// import HeaderAuthButton from './header_auth_button'
import LoginFormContainer from './login_form_container'

const LoginPage = () => {
  return (
    <main className="auth">
      {/* <header className="auth-header">
        <a className="logo">Slack</a>
        <HeaderAuthButton />
        </header> */}

      <div className='auth-form'>
        <LoginFormContainer />
      </div>

      <footer className="auth-footer">
        {/* <p className="footer-info">Created by Steven Li.</p> */}
        <nav>
          <ul className="footer-links"/>
        </nav>
      </footer>
    </main>
  )
}

export default LoginPage
