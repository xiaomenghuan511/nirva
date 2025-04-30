
import React, { useState } from 'react';
import { Mic } from 'lucide-react';

interface ReflectionPromptProps {
  question: string;
  type: 'self' | 'goal';
  onSave: (answer: string) => void;
}

const ReflectionPrompt: React.FC<ReflectionPromptProps> = ({
  question,
  type,
  onSave
}) => {
  const [answer, setAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  
  const handleSave = () => {
    if (answer.trim()) {
      onSave(answer);
      setAnswer('');
    }
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, we would start/stop voice recording here
  };
  
  return (
    <div className="mb-4">
      <div className={`px-4 py-3 rounded-lg ${
        type === 'self' ? 'bg-nirva-soft-purple' : 'bg-nirva-soft-blue'
      }`}>
        <p className="font-medium">{question}</p>
      </div>
      
      <div className="mt-3 relative">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full min-h-32 p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Write your reflection..."
        />
        
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <button
            onClick={toggleRecording}
            className={`p-2 rounded-full ${
              isRecording ? 'bg-destructive text-white' : 'bg-accent'
            }`}
          >
            <Mic className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="mt-2 text-right">
        <button
          onClick={handleSave}
          disabled={!answer.trim()}
          className="px-4 py-1 bg-primary text-white rounded-lg disabled:opacity-50"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ReflectionPrompt;
