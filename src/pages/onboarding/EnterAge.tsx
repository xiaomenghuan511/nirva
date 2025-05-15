
import React from 'react';
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <div className="flex justify-between items-center pt-4">
        <button onClick={() => navigate('/onboarding/name')}>
          <ArrowLeft size={24} className="text-gray-500" />
        </button>
        <button className="text-gray-500" onClick={() => navigate('/onboarding/reflection')}>
          Skip
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center mt-8">
        <h1 className="text-2xl font-bold mb-2">How old are you?</h1>
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 max-w-xs">
          <p className="text-center text-gray-700">
            Your answer will help Nirva better know you.
          </p>
        </div>
        
        <div className="w-full space-y-3 mt-4">
          {ageRanges.map((range) => (
            <Button
              key={range}
              variant="outline"
              className="w-full py-6 rounded-full bg-white hover:bg-gray-50"
              onClick={() => navigate('/onboarding/reflection')}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="w-full mt-auto mb-8">
        <Button 
          variant="default"
          className="w-full rounded-full py-6 bg-black hover:bg-black/90 text-white flex items-center justify-center gap-2"
          onClick={() => navigate('/onboarding/reflection')}
        >
          Continue
          <span className="ml-1">›</span>
        </Button>
      </div>
    </div>
  );
};

export default EnterAge;
