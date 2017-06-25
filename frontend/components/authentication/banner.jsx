import React from 'react'

export default class Banner extends React.Component {
  render() {
    return <nav>
      <div>
        <img src='/images/slack_logo.svg'/>
        <p>Slack(er)</p>
      </div>
      <button onClick={this.props.onClickFnc}>
        {this.props.text}
      </button>
    </nav>
  }
}
