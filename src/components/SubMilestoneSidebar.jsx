import React, { useState } from 'react';

const Activity = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleInputChange = (event) => {
      setNewMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      if (newMessage.trim() !== '') {
        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        setNewMessage('');
        // You can add logic here for handling sending messages to a server or other participants
      }
    };
  
    return (
      <div>
        <div className="chat-box rounded absolute top-0 right-0">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user' : 'other'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-box rounded absolute top-1/4 right-0">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    );
  };

const Share = () => (
    <div className="bg-gray-200 p-2 rounded absolute top-0 right-0 mt-2 mr-2">
    <h3>Small Card</h3>
    {/* Add content for small card */}
  </div>
);

const MyNotes  = () => (
    <div className="bg-gray-200 p-2 rounded absolute top-0 right-0 mt-2 mr-2">
    <h3>Small Card</h3>
    {/* Add content for small card */}
  </div>
);

const SubMilestoneSidebar = () => {
  const options = ['Activity', 'Share', 'My Notes'];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const closePopup = () => {
    setSelectedOption(null);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'Activity':
        return <Activity />;
      case 'Share':
        return <Share />;
      case 'My Notes':
        return <MyNotes />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen fixed right-0">
      {/* Sidebar */}
      <div className="bg-gray-300 w-1/4 p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Options</h2>
          <ul>
            {options.map((option) => (
              <li
                key={option}
                className={`cursor-pointer ${
                  selectedOption === option && 'bg-blue-500 text-white'
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popup */}
      {selectedOption && (
        <div className="fixed top-0 right-1/4 w-1/4 h-screen flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            {renderSelectedComponent()}
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMilestoneSidebar;
