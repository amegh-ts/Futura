import React from 'react'

const ChatBody = ({ selectedChatId }) => {
  console.log(selectedChatId);
  return (
    <div className='chat-body-main'>
      <p>chat with {selectedChatId}</p>
      <div className="chat-body-container">
        <ul class="message-list">
          <li class="message sender-message">
            <div class="message-bubble">Hello! This is a sender message.</div>
          </li>
          <li class="message receiver-message">
            <div class="message-bubble">Hi! This is a received message.</div>
          </li>
        </ul>


      </div>
      <div class="input-container">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  )
}

export default ChatBody