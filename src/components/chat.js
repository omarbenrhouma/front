import { useState } from 'react';
import '../assets/css/chat.css'
import axios from 'axios';
import img from '../assets/Add.png'
function ChatBox() {
  const [messages, setMessages] = useState([{
    id:0,
    type: 'user',
    message: 'This is a chat box that will help you define assets more quickly by simply providing the details of the asset.'
  }]);
  const [inputValue, setInputValue] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    const msg = inputValue.trim();
    if (msg === '') {
      return;
    }

    setTimeout(() => generateMessage(msg, 'self'), 1000);
    setInputValue('');
  }

  async function generateMessage(msg, type) {
    const msgObj = {
      id: messages.length + 1,
      type: type,
      message: msg
    };
    setMessages(prevMessages => [...prevMessages, msgObj]);
  
    if (type === 'self') {
      // Make an HTTP request to the API
      axios.get(`http://127.0.0.1:8000/chatbot/${msg}`)
      .then(res => {
        generateMessage(res.data,'user');
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  




  function toggleChatBox() {
    const chatCircle = document.getElementById('chat-circle');
    const chatBox = document.querySelector('.chat-box');
    chatCircle.classList.toggle('scale');
    chatBox.classList.toggle('scale');
  }

  return (
    <div className="chat-container">
      <div id="chat-circle" className="btn btn-raised" onClick={toggleChatBox}>
        <div id="chat-overlay"></div>
        <i className="material-icons"></i>
      </div>
      <div className="chat-box scale">
        <div className="chat-box-header">
         Chat Bot
          <span className="chat-box-toggle" onClick={toggleChatBox}><i className="material-icons"><img src={img} alt="plus"  className='img' style={{height:'30px',width:'30px',}}/>
</i></span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs">
            {messages.map(msg => (
              <div className={`chat-msg ${msg.type}`} key={msg.id}>
                <div className="cm-msg-text">{msg.message}</div>
                {msg.buttons && (
                  <div className="cm-msg-button">
                    <ul>{msg.buttons}</ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="chat-input">
          <form onSubmit={handleSubmit}>
            <input type="text" id="chat-input" placeholder="Send a message..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button type="submit" className="btnn btnn-primary"><i className="material-icons">send</i></button>
</form>
</div>
</div>
</div>
);
}

export default ChatBox;
