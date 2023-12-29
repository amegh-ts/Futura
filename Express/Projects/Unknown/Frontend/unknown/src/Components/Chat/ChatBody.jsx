import React from 'react'

const ChatBody = ({selectedChatId}) => {
  console.log(selectedChatId);
  return (
    <div>ChatBody
      <h2>{selectedChatId}</h2>
    </div>
  )
}

export default ChatBody