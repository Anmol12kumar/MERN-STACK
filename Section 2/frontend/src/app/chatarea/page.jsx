'use client';
import { Trash2, Send } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);

    const addMessage = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            const newMessage = {
                id: Date.now(),
                text: e.target.value
            };
            setMessages([...messages, newMessage]);
            e.target.value = '';
        }
    };

    const deleteMessage = (id) => {
        setMessages(messages.filter((msg) => msg.id !== id));
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white shadow-xl rounded-lg flex flex-col overflow-hidden">

                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    {messages.length === 0 ? (
                        <p className="text-center text-gray-400 font-bold mt-10">💬 No messages yet</p>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} className="flex justify-end mb-4">
                                <div
                                    className="relative bg-blue-500 text-white px-4 py-2 max-w-xs shadow-md break-words
                                rounded-2xl"
                                >
                                    <p>{msg.text}</p>

                                    <div className="absolute bottom-0 right-0 w-0 h-0 
                                    border-t-8 border-t-blue-500 
                                    border-l-8 border-l-transparent"></div>

                                    <button
                                        onClick={() => deleteMessage(msg.id)}
                                        className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 shadow-md"
                                    >
                                        <Trash2 size={14} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    <div ref={chatEndRef}></div>
                </div>

                <div className="border-t p-3 bg-white flex items-center gap-2">
                    <input
                        type="text"
                        onKeyDown={addMessage}
                        className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Write your message..."
                    />
                    <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600">
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatApp;