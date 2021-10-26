/* eslint-disable react/prop-types */
import React from 'react'
import '../../assets/styles/form.css'

const Message = (props) => {
  const msg = props.err ? 'error occured' : props.msgData
  return (
    <div
      onClick={props.onClick}
      className="ui label"
      style={{
        backgroundColor: 'green',
        color: 'beige',
        marginBottom: '6px'
      }}
    >
      {' '}
      {msg} <i className="fa fa-arrow-down" aria-hidden="true"></i>
    </div>
  )
}

export default Message
