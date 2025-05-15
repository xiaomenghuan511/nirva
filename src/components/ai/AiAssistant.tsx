
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic, MicOff, X, PhoneOff, PhoneCall } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi Wei! I know you have spent some great time with Ashley and Trent today. Do you want to chat more about it?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [userSpeechVolume, setUserSpeechVolume] = useState(0);
  const [callTime, setCallTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  
  // Simulate speech detection with volume levels
  const simulateSpeechDetection = () => {
    if (isRecording) {
      // Randomly fluctuate the volume to simulate speech patterns
      const newVolume = Math.min(1, Math.max(0.3, Math.random() * 0.7 + 0.3));
      setUserSpeechVolume(newVolume);
      setIsUserSpeaking(true);
      
      animationRef.current = requestAnimationFrame(simulateSpeechDetection);
    } else {
      setIsUserSpeaking(false);
      setUserSpeechVolume(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    }
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isVoiceMode) {
      setIsVoiceMode(false);
    }
  };

  const toggleVoiceMode = () => {
    setIsVoiceMode(!isVoiceMode);
    // Reset and start timer when voice mode is enabled
    setCallTime(0);
  };
  
  // Start timer when voice mode is activated
  useEffect(() => {
    if (isVoiceMode) {
      timerRef.current = setInterval(() => {
        setCallTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      // Clear timer when voice mode is deactivated
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    // Cleanup interval on component unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVoiceMode]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
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
    // Start speech detection animation
    simulateSpeechDetection();
    // Simulating voice recording - in a real app, this would use the Web Audio API
    console.log("Started recording voice...");
  };
  
  const stopRecording = () => {
    setIsRecording(false);
    // Stop speech detection animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsUserSpeaking(false);
    
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
    setIsUserSpeaking(false);
    // Reset timer
    setCallTime(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
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
  
  // Calculate dynamic styles for the voice circle based on user's speech
  const getCircleStyles = () => {
    // Base size
    let size = "60";
    let hue = 43; // Base gold hue
    let saturation = "76%";
    let lightness = "62%"; // Default lightness
    
    if (isUserSpeaking) {
      // Scale the circle size based on volume (ranging from 60 to 80)
      size = String(60 + Math.floor(userSpeechVolume * 20));
      
      // Shift the hue slightly based on volume (from gold toward orange)
      hue = 43 + Math.floor(userSpeechVolume * 15);
      
      // Increase saturation based on volume
      saturation = `${76 + Math.floor(userSpeechVolume * 14)}%`;
      
      // Make it brighter based on volume
      lightness = `${62 + Math.floor(userSpeechVolume * 18)}%`;
    } else if (isSpeaking) {
      // When AI is speaking
      size = "72";
    } 
    
    return {
      width: `${size}%`, // Use percentage for responsive sizing
      height: `${size}%`,
      background: `linear-gradient(to bottom, hsl(${hue}, ${saturation}, ${parseInt(lightness) + 10}%), hsl(${hue}, ${saturation}, ${lightness}))`,
      boxShadow: isUserSpeaking ? `0 0 ${25 + Math.floor(userSpeechVolume * 25)}px hsl(${hue}, ${saturation}, ${lightness})` : '',
      transition: 'all 0.3s ease'
    };
  };
  
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
          <div className="w-full pt-12 flex justify-between px-6">
            {/* Call timer */}
            <div className="text-2xl font-medium text-gray-700 dark:text-gray-300">
              {formatTime(callTime)}
            </div>
            
            {/* Removed the exit button here */}
          </div>
          
          {/* Middle area - Gold gradient circle with enhanced animation */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div 
              style={getCircleStyles()}
              className="rounded-full transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              {/* Optional: Add a subtle pulse animation inside the circle */}
              {isUserSpeaking && (
                <div className="h-1/2 w-1/2 rounded-full bg-white/30 animate-pulse-soft"></div>
              )}
            </div>
          </div>
          
          {/* Bottom controls */}
          <div className="w-full pb-12 flex justify-center gap-8">
            <button 
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white"
              onClick={endCall}
            >
              <PhoneOff size={24} />
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
                <PhoneCall size={16} />
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
                
                {/* Added new button next to the microphone button */}
                <Button
                  size="icon"
                  className="rounded-full bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </Button>
                
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
