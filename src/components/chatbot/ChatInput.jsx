import React, { useState } from 'react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me about Ankit's skills, experience, or projects..."
          disabled={disabled}
          className="chat-input"
        />
        <button 
          type="submit" 
          disabled={!message.trim() || disabled}
          className="send-button"
        >
          <span>Send</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <div className="quick-suggestions">
        <button 
          type="button" 
          onClick={() => setMessage("Tell me about Ankit's skills")}
          className="suggestion-btn"
        >
          Skills
        </button>
        <button 
          type="button" 
          onClick={() => setMessage("What projects has Ankit worked on?")}
          className="suggestion-btn"
        >
          Projects
        </button>
        <button 
          type="button" 
          onClick={() => setMessage("How can I contact Ankit?")}
          className="suggestion-btn"
        >
          Contact
        </button>
      </div>
    </form>
  );
};

export default ChatInput;