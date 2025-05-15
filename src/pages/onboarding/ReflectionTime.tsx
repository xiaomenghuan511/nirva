
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft } from 'lucide-react';

const ReflectionTime: React.FC = () => {
  const navigate = useNavigate();
  const [morningEnabled, setMorningEnabled] = useState(true);
  const [eveningEnabled, setEveningEnabled] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-nirva-cream p-6">
      <div className="flex justify-start items-center pt-4">
        <button onClick={() => navigate('/onboarding/age')} className="text-nirva-neutral-body">
          <ArrowLeft size={24} />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center mt-8">
        <h1 className="text-2xl font-bold mb-6 text-nirva-neutral-heading">
          When do you want to carve out time for <span className="bg-white px-3 py-1 rounded">morning intention and evening reflection</span>
        </h1>
        
        <div className="w-full mt-12">
          <div className="bg-white rounded-xl p-6 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-nirva-neutral-body text-sm">Morning</p>
                <p className="text-2xl font-bold flex items-center text-nirva-neutral-heading">8:00 AM <span className="ml-1">›</span></p>
              </div>
              <Switch 
                checked={morningEnabled} 
                onCheckedChange={setMorningEnabled} 
                className="data-[state=checked]:bg-nirva-gold" 
              />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-nirva-neutral-body text-sm">Evening</p>
                <p className="text-2xl font-bold flex items-center text-nirva-neutral-heading">9:00 PM <span className="ml-1">›</span></p>
              </div>
              <Switch 
                checked={eveningEnabled} 
                onCheckedChange={setEveningEnabled} 
                className="data-[state=checked]:bg-nirva-gold" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-auto mb-8">
        <Button 
          variant="default"
          className="w-full rounded-full py-6 bg-nirva-gold hover:bg-nirva-soft-gold text-nirva-neutral-heading flex items-center justify-center gap-2"
          onClick={() => navigate('/onboarding/loading')}
        >
          Continue
          <span className="ml-1">›</span>
        </Button>
      </div>
    </div>
  );
};

export default ReflectionTime;
