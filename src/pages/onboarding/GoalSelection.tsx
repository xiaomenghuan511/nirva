
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const goals = [
  'Elevate mood',
  'Reduce stress & anxiety',
  'Know myself',
  'Increase productivity',
  'Something else'
];

const GoalSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
  };

  return (
    <div className="min-h-screen flex flex-col bg-nirva-cream p-6">
      <div className="flex justify-between items-center pt-4">
        <button onClick={() => navigate('/onboarding/age')} className="text-nirva-neutral-body">
          <ArrowLeft size={24} />
        </button>
        <button className="text-nirva-soft-brown" onClick={() => navigate('/onboarding/reflection')}>
          Skip
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center mt-8">
        <h1 className="text-2xl font-bold mb-2 text-nirva-neutral-heading">How can I make your life better?</h1>
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 max-w-xs">
          <p className="text-center text-nirva-neutral-body">
            Your answer will help Nirva better know you.
          </p>
        </div>
        
        <div className="w-full space-y-3 mt-4">
          {goals.map((goal) => (
            <Button
              key={goal}
              variant="outline"
              className={`w-full py-6 rounded-full ${
                selectedGoal === goal 
                  ? 'bg-nirva-gold text-nirva-neutral-heading' 
                  : 'bg-white hover:bg-nirva-soft-cream text-nirva-neutral-heading'
              }`}
              onClick={() => handleGoalSelect(goal)}
            >
              {goal}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="w-full mt-auto mb-8">
        <Button 
          variant="default"
          className="w-full rounded-full py-6 bg-nirva-gold hover:bg-nirva-soft-gold text-nirva-neutral-heading flex items-center justify-center gap-2"
          onClick={() => navigate('/onboarding/reflection')}
        >
          Continue
          <span className="ml-1">›</span>
        </Button>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-nirva-soft-gold/30"></div>
            <div className="w-2 h-2 rounded-full bg-nirva-soft-gold/30"></div>
            <div className="w-2 h-2 rounded-full bg-nirva-gold"></div>
            <div className="w-2 h-2 rounded-full bg-nirva-soft-gold/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSelection;
