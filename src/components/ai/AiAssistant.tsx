
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic, MicOff, X, Phone } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi Wei! I know you have spent some great time with Ashley and Trent today. Do you want to chat more about it?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isVoiceMode) {
      setIsVoiceMode(false);
    }
  };

  const toggleVoiceMode = () => {
    setIsVoiceMode(!isVoiceMode);
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
        setIsSpeaking(true);
        setMessages(prev => [
          ...prev,
          { text: "That sounds fascinating! Crystal work can be very grounding. Did you have a favorite crystal that Ashley showed you?", isUser: false }
        ]);
        
        // Simulate AI finished speaking
        setTimeout(() => {
          setIsSpeaking(false);
        }, 3000);
      }, 1000);
    }, 500);
  };
  
  const endCall = () => {
    setIsVoiceMode(false);
    setIsRecording(false);
    setIsSpeaking(false);
  };

  // Handle click outside to close the chat
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !isVoiceMode && chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isVoiceMode]);
  
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
      
      {/* Voice Chat Mode */}
      {isVoiceMode && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-between dark:bg-background">
          {/* Top area */}
          <div className="w-full pt-12 flex justify-end px-6">
            <button 
              onClick={endCall} 
              className="p-2 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Middle area - Gold gradient circle with enhanced animation */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div 
              className={`rounded-full bg-gradient-to-b from-[hsl(var(--voice-gradient-from))] to-[hsl(var(--voice-gradient-to))] transition-all duration-700 ease-in-out
                ${isSpeaking 
                  ? 'w-72 h-72 animate-[pulse_3s_ease-in-out_infinite]' 
                  : isRecording 
                    ? 'w-60 h-60 animate-[pulse_1.5s_ease-in-out_infinite]' 
                    : 'w-60 h-60'
                }`}
            ></div>
          </div>
          
          {/* Bottom controls */}
          <div className="w-full pb-12 flex justify-center gap-8">
            <button className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300">
              <Phone size={24} />
            </button>
            
            <button 
              className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300"
              onMouseDown={startRecording}
              onMouseUp={stopRecording}
              onTouchStart={startRecording}
              onTouchEnd={stopRecording}
            >
              {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            
            <button className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300">
              <span className="font-bold">•••</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Regular Chat overlay */}
      {isOpen && !isVoiceMode && (
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm">
          <div 
            ref={chatRef}
            className="absolute bottom-20 right-4 w-80 h-96 glass-card overflow-hidden animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse-soft"></div>
                <span className="font-medium">Nirva</span>
              </div>
              <button 
                onClick={toggleVoiceMode}
                className="p-1 rounded hover:bg-primary-foreground/10"
                title="Start voice conversation"
              >
                <Phone size={16} />
              </button>
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
                    <span className="sr-only">Send</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
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
