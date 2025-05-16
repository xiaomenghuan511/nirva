
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { handleCarouselSwipe } from '@/lib/utils';

interface Voice {
  id: string;
  name: string;
  traits: string[];
  current?: boolean;
  color: string;
}

const voices: Voice[] = [{
  id: 'voice-1',
  name: 'Cindy',
  traits: ['Warm', 'Supportive', 'Friendly'],
  current: true,
  color: 'from-primary/60 to-primary/30'
}, {
  id: 'voice-2',
  name: 'Emma',
  traits: ['Calm', 'Soothing', 'Professional'],
  color: 'from-nirva-soft-gold/70 to-nirva-soft-gold/40'
}, {
  id: 'voice-3',
  name: 'David',
  traits: ['Clear', 'Focused', 'Direct'],
  color: 'from-nirva-soft-sand/70 to-nirva-soft-sand/40'
}, {
  id: 'voice-4',
  name: 'Sarah',
  traits: ['Energetic', 'Encouraging', 'Bright'],
  color: 'from-nirva-soft-cream/70 to-nirva-soft-cream/40'
}, {
  id: 'voice-5',
  name: 'Michael',
  traits: ['Thoughtful', 'Gentle', 'Relaxed'],
  color: 'from-nirva-soft-beige/70 to-nirva-soft-beige/40'
}, {
  id: 'voice-6',
  name: 'Olivia',
  traits: ['Articulate', 'Compassionate', 'Warm'],
  color: 'from-nirva-soft-brown/40 to-nirva-soft-brown/20'
}];

const NirvaVoice: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVoice, setSelectedVoice] = useState<string>(voices.find(v => v.current)?.id || voices[0].id);
  const [api, setApi] = React.useState<any>();

  const handleBack = () => {
    navigate('/me');
  };

  const handleContinue = () => {
    // In a real app, we would save the selected voice
    // Removed toast notification
    navigate('/me');
  };

  const playVoiceSample = (voiceId: string) => {
    // In a real app, this would play a voice sample
    console.log(`Playing voice sample for ${voiceId}`);
  };

  // Handle voice selection when carousel changes
  const handleSelect = () => {
    if (!api) return;
    // Get the current slide index
    const currentIndex = api.selectedScrollSnap();
    if (currentIndex !== undefined && voices[currentIndex]) {
      setSelectedVoice(voices[currentIndex].id);
    }
  };

  React.useEffect(() => {
    if (!api) return;
    api.on('select', handleSelect);

    // Cleanup
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  // Function to handle swipe gestures using the utility function
  const onSwipe = (direction: 'left' | 'right') => {
    handleCarouselSwipe(api, direction);
  };

  const currentVoice = voices.find(voice => voice.id === selectedVoice);

  return <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center">
        <button onClick={handleBack} className="text-foreground">
          <ArrowLeft size={24} />
        </button>
        <div className="flex-grow"></div>
        
      </div>
      
      {/* Content */}
      <div className="flex-grow flex flex-col items-center px-4 py-5 relative">
        <div className="w-full text-center mb-10">
          <h1 className="text-xl font-medium text-foreground">Choose Nirva's Voice</h1>
          <p className="text-sm text-muted-foreground mt-1">Select a voice that resonates with you</p>
          
        </div>
        
        <div className="w-full mt-8">
          <Carousel setApi={setApi} className="w-full" opts={{
          align: "center",
          loop: true
        }}>
            <CarouselContent>
              {voices.map((voice, index) => <CarouselItem key={voice.id} className="flex flex-col items-center">
                  <div className="relative flex flex-col items-center justify-center mb-6 mx-0 my-[5px]">
                    <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${voice.color} flex items-center justify-center relative cursor-pointer ${selectedVoice === voice.id ? 'ring-2 ring-primary' : ''}`} onClick={() => {
                  setSelectedVoice(voice.id);
                  playVoiceSample(voice.id);
                }}>
                      {/* Removed the name display from here */}
                      <div className="w-44 h-44 rounded-full bg-gradient-to-br backdrop-blur-sm flex items-center justify-center"></div>
                    </div>
                    
                    {/* Voice name displayed below the bubble */}
                    
                    
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {voice.traits.map((trait, idx) => <div key={idx} className="px-4 py-2 bg-background/80 border border-muted rounded-full text-sm">
                          {trait}
                        </div>)}
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </div>
          </Carousel>
          
          <div className="flex justify-center space-x-2 mt-6">
            {voices.map((voice, index) => <div key={index} className={`w-2 h-2 rounded-full ${currentVoice?.id === voice.id ? 'bg-primary' : 'bg-muted-foreground/40'}`} onClick={() => {
            api?.scrollTo(index);
          }} />)}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-4 py-5">
        <Button onClick={handleContinue} className="w-full py-6 bg-foreground text-background">
          Confirm
        </Button>
      </div>
    </div>;
};

export default NirvaVoice;
