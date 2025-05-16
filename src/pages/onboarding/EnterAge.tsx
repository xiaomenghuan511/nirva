
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ageRanges = [
  'Under 18',
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  'Over 64'
];

const EnterAge: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleAgeSelect = (age: string) => {
    setSelectedAge(age);
    // Auto-navigate to the next page after selection
    navigate('/onboarding/goal');
  };

  return (
    <div className="min-h-screen flex flex-col bg-nirva-cream p-6">
      <div className="flex justify-between items-center pt-4">
        <button onClick={() => navigate('/onboarding/name')} className="text-nirva-neutral-body">
          <ArrowLeft size={24} />
        </button>
        <button className="text-nirva-soft-brown" onClick={() => navigate('/onboarding/goal')}>
          Skip
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center mt-8">
        <h1 className="text-2xl font-bold mb-2 text-nirva-neutral-heading">How old are you?</h1>
        <div className="border-l-4 border-nirva-gold p-4 rounded-r-xl mb-6 max-w-xs">
          <p className="text-center text-nirva-neutral-body">
            Your answer will help Nirva better know you.
          </p>
        </div>
        
        <div className="w-full space-y-3 mt-4">
          {ageRanges.map((range) => (
            <Button
              key={range}
              variant="outline"
              className={`w-full py-6 rounded-full ${
                selectedAge === range 
                  ? 'bg-nirva-gold text-nirva-neutral-heading' 
                  : 'bg-white hover:bg-nirva-soft-cream text-nirva-neutral-heading'
              }`}
              onClick={() => handleAgeSelect(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-auto mb-8">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-nirva-soft-gold/30"></div>
          <div className="w-2 h-2 rounded-full bg-nirva-gold"></div>
          <div className="w-2 h-2 rounded-full bg-nirva-soft-gold/30"></div>
          <div className="w-2 h-2 rounded-full bg-nirva-soft-gold/30"></div>
        </div>
      </div>
    </div>
  );
};

export default EnterAge;
