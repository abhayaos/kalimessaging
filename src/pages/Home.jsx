// src/pages/Home.jsx
import React, { useState, useRef, useEffect } from 'react';
import Dp from '../assets/dp.png';
import { ArrowLeftIcon, PaperClipIcon, FaceSmileIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
// If you don't have @heroicons/react installed → npm install @heroicons/react

const stories = [
  { id: 1, name: 'Abhaya', img: Dp },
  { id: 2, name: 'Sita', img: Dp },
  { id: 3, name: 'Ram', img: Dp },
  { id: 4, name: 'Gita', img: Dp },
  { id: 5, name: 'Hari', img: Dp },
  { id: 6, name: 'Shyam', img: Dp },
];

const chats = [
  { id: 1, name: 'Abhaya', lastMessage: 'Hey, what’s up?', time: '10:30 AM', img: Dp, unread: 2 },
  { id: 2, name: 'Sita', lastMessage: 'Are you coming today?', time: '9:45 AM', img: Dp },
  { id: 3, name: 'Ram', lastMessage: 'Check this out bro 🔥', time: 'Yesterday', img: Dp, unread: 1 },
  { id: 4, name: 'Gita', lastMessage: 'Good night ❤️', time: 'Yesterday', img: Dp },
];

const messagesMock = [
  { id: 1, fromMe: false, text: 'Hey!', time: '10:28 AM' },
  { id: 2, fromMe: true, text: 'Hi there! Long time', time: '10:29 AM' },
  { id: 3, fromMe: false, text: 'Yeah, how have you been?', time: '10:30 AM' },
  { id: 4, fromMe: true, text: 'Pretty good actually 😄', time: '10:31 AM' },
];

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [messages, setMessages] = useState(messagesMock);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      fromMe: true,
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isMobile = window.innerWidth < 768; // simple check (you can use better resize listener if needed)

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      {/* Sidebar - visible on desktop, hidden on mobile unless no chat selected */}
      <aside
        className={`
          md:w-96 lg:w-[420px] bg-white border-r border-gray-200 flex flex-col
          ${selectedChat && isMobile ? 'hidden' : 'flex'}
        `}
      >
        {/* Header - Search + New Message (simplified) */}
        <div className="p-3 border-b bg-white flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Messages</h1>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <PaperAirplaneIcon className="w-6 h-6 text-blue-600 rotate-45" />
          </button>
        </div>
{/* Stories row */}
<div className="
  flex space-x-4 px-4 py-3 overflow-x-auto 
  scrollbar-hide           {/* ← hides scrollbar cross-browser */}
  snap-x snap-mandatory    {/* optional: nicer snap feel on mobile */}
  scroll-smooth
  -mx-1                    {/* optional: lets content go edge-to-edge */}
">
  {stories.map((story) => (
    <div 
      key={story.id} 
      className="flex flex-col items-center flex-shrink-0 snap-start"
    >
      <div className="w-16 h-16 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
        <div className="w-full h-full rounded-full border-2 border-white overflow-hidden shadow-sm">
          <img 
            src={story.img} 
            alt={story.name} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      <span className="text-xs mt-1 text-gray-700 truncate w-16 text-center">
        {story.name}
      </span>
    </div>
  ))}
</div>
        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`
                flex items-center px-4 py-3 cursor-pointer transition
                hover:bg-gray-50 active:bg-gray-100
                ${selectedChat?.id === chat.id ? 'bg-blue-50' : ''}
              `}
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <img src={chat.img} alt={chat.name} className="w-full h-full object-cover" />
                </div>
                {chat.unread > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unread}
                  </span>
                )}
              </div>

              <div className="ml-3 flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className={`font-medium ${chat.unread ? 'text-black' : 'text-gray-900'}`}>
                    {chat.name}
                  </h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className={`text-sm truncate ${chat.unread ? 'font-medium text-black' : 'text-gray-500'}`}>
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-gray-50 min-h-0">
        {/* Chat Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center space-x-3">
            {/* Back button - only on mobile or when sidebar is hidden */}
            {(isMobile || !selectedChat) && (
              <button
                onClick={() => setSelectedChat(null)}
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 md:hidden"
              >
                <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
              </button>
            )}

            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <img
                src={selectedChat?.img || Dp}
                alt={selectedChat?.name || 'Chat'}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{selectedChat?.name || 'Select a chat'}</h2>
              <p className="text-xs text-green-600">Active now</p>
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100 text-blue-600 font-medium hidden md:block">
            Details
          </button>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
          {selectedChat ? (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}
              >
                {!msg.fromMe && (
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 mt-1">
                    <img src={selectedChat.img} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                <div
                  className={`
                    max-w-[70%] px-4 py-3 rounded-2xl break-words shadow-sm
                    ${
                      msg.fromMe
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                    }
                  `}
                >
                  {msg.text}
                  <div className="text-xs mt-1 opacity-70 text-right">
                    {msg.time}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              <p>Select a conversation to start chatting</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        {selectedChat && (
          <footer className="bg-white border-t border-gray-200 p-4 flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <PaperClipIcon className="w-6 h-6 text-gray-600" />
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaceSmileIcon className="w-6 h-6 text-gray-600" />
            </button>

            <input
              type="text"
              placeholder="Aa"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900 placeholder-gray-500"
            />

            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className={`
                p-3 rounded-full transition
                ${inputValue.trim() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}
              `}
            >
              <PaperAirplaneIcon className="w-6 h-6" />
            </button>
          </footer>
        )}
      </main>
    </div>
  );
};

export default Home;