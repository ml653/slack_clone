import React from 'react'

export default (props) => {
  console.log(props.channel)
  return <div id='top-bar'>
    <div id='channel-name'>
      {/* {props.channel.name} */}
    </div>
    <div className='items'>
      <div id='star'/>
      <div className='member-list'/>
      <div className='description'/>
    </div>
  </div>
}
