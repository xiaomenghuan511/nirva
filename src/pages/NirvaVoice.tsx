import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Volume } from 'lucide-react';
interface Voice {
  id: string;
  name: string;
  traits: string[];
  current?: boolean;
}
const voices: Voice[] = [{
  id: 'voice-1',
  name: 'Cindy',
  traits: ['Warm', 'Supportive', 'Friendly'],
  current: true
}, {
  id: 'voice-2',
  name: 'Emma',
  traits: ['Calm', 'Soothing', 'Professional']
}, {
  id: 'voice-3',
  name: 'David',
  traits: ['Clear', 'Focused', 'Direct']
}, {
  id: 'voice-4',
  name: 'Sarah',
  traits: ['Energetic', 'Encouraging', 'Bright']
}, {
  id: 'voice-5',
  name: 'Michael',
  traits: ['Thoughtful', 'Gentle', 'Relaxed']
}, {
  id: 'voice-6',
  name: 'Olivia',
  traits: ['Articulate', 'Compassionate', 'Warm']
}];
const NirvaVoice: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVoice, setSelectedVoice] = useState<string>(voices.find(v => v.current)?.id || voices[0].id);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handleBack = () => {
    navigate('/me');
  };
  const handleContinue = () => {
    // In a real app, we would save the selected voice
    navigate('/me');
  };
  const playVoiceSample = (voiceId: string) => {
    // In a real app, this would play a voice sample
    console.log(`Playing voice sample for ${voiceId}`);
  };
  const currentVoice = voices.find(voice => voice.id === selectedVoice);
  return <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center">
        <button onClick={handleBack} className="text-foreground">
          <ArrowLeft size={24} />
        </button>
        <div className="flex-grow"></div>
        <button className="text-foreground p-2" onClick={() => playVoiceSample(selectedVoice)}>
          
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-grow flex flex-col items-center px-4 py-5 relative">
        <div className="w-full text-center mb-10">
          <h1 className="text-xl font-medium text-foreground">Choose Nirva's Voice</h1>
          <p className="text-sm text-muted-foreground mt-1">Select a voice that resonates with you</p>
        </div>
        
        <RadioGroup value={selectedVoice} onValueChange={setSelectedVoice} className="w-full">
          <div className="relative flex flex-col items-center justify-center mb-6">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center relative">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 backdrop-blur-sm flex items-center justify-center">
                
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              {currentVoice?.traits.map((trait, index) => <div key={index} className="px-4 py-2 bg-background/80 border border-muted rounded-full text-sm">
                  {trait}
                </div>)}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {voices.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full ${currentPage === index ? 'bg-primary' : 'bg-muted-foreground/40'}`} />)}
          </div>
        </RadioGroup>
      </div>
      
      {/* Footer */}
      <div className="px-4 py-5">
        <Button onClick={handleContinue} className="w-full py-6 bg-foreground text-background">Confirm</Button>
      </div>
    </div>;
};
export default NirvaVoice;