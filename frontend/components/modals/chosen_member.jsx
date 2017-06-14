import React from 'react'

export default (props) => (
  <div className='chosen-member'
    onClick={props.removeMember(props.user)}>
    <img src={props.user.img_url}/>
    <p>{ props.user.username }</p>
    <img
      className='close'
      src='/images/exit_x.png'/>
  </div>
)
