import React from 'react'
import { getChannelDisplayName } from 'Util/selector_util'

export default class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.toggleStar = this.toggleStar.bind(this)
  }

  toggleStar() {
    if(this.props.channel.channel_tags && this.props.channel.channel_tags.STAR){
      this.props.deleteChannelTag(this.props.channel.channel_tags.STAR)
    } else {
      this.props.createChannelTag({
        user_id: this.props.userId,
        channel_id: this.props.channel.id,
        info: 'STAR'
      })
    }
  }

  render() {
    const starClass = this.props.channel.channel_tags && this.props.channel.channel_tags.STAR
      ? 'fa-star' : 'fa-star-o'

    return <div id='header'>
      <div>
        <div className='channel-name'>
          { getChannelDisplayName(this.props.channel, null)}
        </div>
        <div className='items'>
          <div className='star item'>
            <i className={ `fa ${starClass}` } aria-hidden="true"
              onClick={this.toggleStar}/>
          </div>
          <div className='members item'
            onClick={this.props.toggleChannelDetails}>
            <i className="fa fa-user-o  fa-align-center fa-fw" aria-hidden="true"/>
            <p>
              {Object.values(this.props.channel.members).length}
            </p>
          </div>
        </div>
      </div>

      <img className='info-button' src='/images/side_panel.png'
        onClick={this.props.toggleChannelDetails}/>
    </div>
  }
}
