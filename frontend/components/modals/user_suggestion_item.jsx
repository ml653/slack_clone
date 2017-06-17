import React from 'react'

export default (props) => {
  return <li key={props.member.id}
    onClick={props.addMember}
    className='user'>
    <img src={props.member.img_url}/>
    <div className='content'>
      <h5 className='username'>
        { props.member.username }
      </h5>
    </div>
  </li>
}
