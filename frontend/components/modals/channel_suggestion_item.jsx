import React from 'react'
import { getChannelDisplayName } from 'Util/selector_util'

export default (props) => {
  const addAllMembers = () => {
    for (let memberId in props.channel.members){
      if(props.userId !== parseInt(memberId, 10)){
        props.addMember(props.channel.members[memberId])()
      }
    }
  }

  return <li key={props.channel.id}
    onClick={addAllMembers}
    className='user'>
    <img src='/images/profile_img_1.png'/>
    <div className='content'>
      <h5 className='username'>
        { getChannelDisplayName(props.channel, null, { includeUserId: true, prefix: false}) }
      </h5>
    </div>
  </li>
}
