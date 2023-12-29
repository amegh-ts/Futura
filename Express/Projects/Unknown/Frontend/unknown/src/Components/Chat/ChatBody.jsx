import React from 'react'

const ChatBody = ({selectedUserId}) => {
  console.log(selectedUserId);
  return (
    <div>ChatBody
      <h2>{selectedUserId}</h2>
    </div>
  )
}

export default ChatBody