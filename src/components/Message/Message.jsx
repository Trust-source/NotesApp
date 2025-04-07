import React from 'react'
import './Message.scss'

function Message({word}) {
  return (
    <div className='Message'>{word}</div>
  )
}

export default Message