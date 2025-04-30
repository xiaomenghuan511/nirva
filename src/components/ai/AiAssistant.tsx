
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! I'm your Nirva assistant. How can I help with your reflections today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            text: "Thanks for sharing. I've noted this down in your reflections. Would you like me to suggest a mindfulness exercise based on what you've shared?", 
            isUser: false 
          }
        ]);
      }, 1000);
    }
  };
  
  return (
    <>
      {/* Floating chat button */}
      <button 
        onClick={toggleChat}
        className={`fixed right-4 bottom-20 z-20 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isOpen ? 'bg-destructive text-white' : 'bg-primary text-white animate-pulse-soft'
        }`}
      >
        <MessageSquare size={20} />
      </button>
      
      {/* Chat overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" onClick={toggleChat}>
          <div 
            className="absolute bottom-20 right-4 w-80 h-96 glass-card overflow-hidden animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-3 flex items-center">
              <div className="h-2 w-2 rounded-full bg-nirva-mint mr-2 animate-pulse-soft"></div>
              <span className="font-medium">Nirva Assistant</span>
            </div>
            
            {/* Messages area */}
            <div className="p-3 h-[calc(100%-106px)] overflow-y-auto flex flex-col space-y-3">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`max-w-[80%] p-3 rounded-2xl ${msg.isUser ? 
                    'bg-primary text-white self-end rounded-br-none' : 
                    'bg-gray-100 dark:bg-gray-800 self-start rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            
            {/* Input area */}
            <form onSubmit={handleSend} className="absolute bottom-0 left-0 right-0 border-t border-border p-3 bg-background/80 backdrop-blur-sm">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Message Nirva..."
                  className="flex-1 py-2 px-3 rounded-l-lg border-l border-y focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button 
                  type="submit"
                  className="bg-primary text-white px-4 rounded-r-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
