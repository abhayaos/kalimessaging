// src/pages/Home.jsx
import React, { useState, useRef, useEffect } from 'react'
import Dp from '../assets/dp.png'

const stories = [
  { id: 1, name: 'Abhaya', img: Dp },
  { id: 2, name: 'Sita', img: Dp },
  { id: 3, name: 'Ram', img: Dp },
  { id: 4, name: 'Gita', img: Dp },
  { id: 5, name: 'Hari', img: Dp },
]

const chats = [
  { id: 1, name: 'Abhaya', lastMessage: 'Hey, what’s up?', time: '10:30 AM', img: Dp },
  { id: 2, name: 'Sita', lastMessage: 'Are you coming?', time: '9:45 AM', img: Dp },
  { id: 3, name: 'Ram', lastMessage: 'Check this out!', time: 'Yesterday', img: Dp },
  { id: 4, name: 'Gita', lastMessage: 'Good night!', time: 'Yesterday', img: Dp },
]

const messagesMock = [
  { id: 1, fromMe: true, text: 'Hey!' },
  { id: 2, fromMe: false, text: 'Hi there!' },
  { id: 3, fromMe: true, text: 'How are you?' },
  { id: 4, fromMe: false, text: 'I’m good, you?' },
]

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(chats[0])
  const [messages, setMessages] = useState(messagesMock)
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return
    setMessages([...messages, { id: messages.length + 1, fromMe: true, text: inputValue }])
    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar - Chat List */}
      <aside className="hidden md:flex flex-col w-80 bg-white border-r">
        {/* Stories */}
        <div className="flex space-x-3 overflow-x-auto p-4 border-b">
          {stories.map(story => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-blue-500 overflow-hidden">
                <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs mt-1">{story.name}</span>
            </div>
          ))}
        </div>

        {/* Chat List */}
        <div className="flex-1 sticky overflow-y-auto">
          {chats.map(chat => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 transition ${
                selectedChat.id === chat.id ? 'bg-gray-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                  <img src={chat.img} alt={chat.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{chat.name}</h3>
                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{chat.time}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b shadow-sm z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={selectedChat.img} alt={selectedChat.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="font-semibold text-lg">{selectedChat.name}</h2>
          </div>
          <button className="text-blue-500 font-semibold">Info</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 pb-28 space-y-3">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
              {!msg.fromMe && (
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                  <img src={selectedChat.img} alt={selectedChat.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div
                className={`p-3 rounded-lg max-w-xs break-words ${
                  msg.fromMe ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t flex space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
