
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Mic, Send } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi Wei! I know you have spent some great time with Ashley and Trent today. Do you want to chat more about it?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  
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
            text: "Thanks for sharing. I've noted this down in your reflections. Would you like to discuss anything specific about your time with Ashley or Trent?", 
            isUser: false 
          }
        ]);
      }, 1000);
    }
  };
  
  const startRecording = () => {
    setIsRecording(true);
    // Simulating voice recording - in a real app, this would use the Web Audio API
    console.log("Started recording voice...");
  };
  
  const stopRecording = () => {
    setIsRecording(false);
    // Simulating voice recording end and processing
    console.log("Stopped recording voice...");
    
    // Simulate transcribed text and response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "I really enjoyed the conversation about crystals with Ashley.", isUser: true }
      ]);
      
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: "That sounds fascinating! Crystal work can be very grounding. Did you have a favorite crystal that Ashley showed you?", isUser: false }
        ]);
      }, 1000);
    }, 500);
  };

  // Handle click outside to close the chat
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <>
      {/* Floating chat button - only show when chat is closed */}
      {!isOpen && (
        <button 
          onClick={toggleChat}
          className="fixed right-4 bottom-20 z-20 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all bg-primary text-white animate-pulse-soft"
        >
          <span className="font-medium text-lg">N</span>
        </button>
      )}
      
      {/* Chat overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm">
          <div 
            ref={chatRef}
            className="absolute bottom-20 right-4 w-80 h-96 glass-card overflow-hidden animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-3 flex items-center">
              <div className="h-2 w-2 rounded-full bg-nirva-mint mr-2 animate-pulse-soft"></div>
              <span className="font-medium">Nirva</span>
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
            <div className="absolute bottom-0 left-0 right-0 border-t border-border p-3 bg-background/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <form onSubmit={handleSend} className="flex flex-1">
                  <Textarea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Message Nirva..."
                    className="flex-1 resize-none py-2 px-3 rounded-l-lg border-l border-y focus:outline-none focus:ring-1 focus:ring-primary h-10 min-h-0"
                  />
                  <Button 
                    type="submit"
                    className="bg-primary text-white rounded-r-lg rounded-l-none h-10"
                  >
                    <Send size={16} />
                  </Button>
                </form>
                
                <Button
                  size="icon"
                  className={`rounded-full ${isRecording ? 'bg-destructive' : 'bg-primary'}`}
                  onMouseDown={startRecording}
                  onMouseUp={stopRecording}
                  onTouchStart={startRecording}
                  onTouchEnd={stopRecording}
                >
                  <Mic size={18} /> 
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
