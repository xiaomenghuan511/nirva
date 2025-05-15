
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

const EnterName: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f3d0c1] to-[#f5b8a9] p-6">
      <div className="w-full flex justify-start pt-4">
        <button onClick={() => navigate('/onboarding')}>
          <ArrowLeft size={24} className="text-white" />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center pt-8">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex space-x-3">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
              <div className="mt-1 w-3 h-1 bg-black rounded-full transform rotate-[20deg]"></div>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-medium text-white mb-8">
          So nice to meet you! What do your friends call you?
        </h2>
      </div>
      
      <div className="flex-grow">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your nickname..."
          className="w-full bg-white/20 border-none text-white placeholder:text-white/50 text-center py-6"
        />
      </div>
      
      <div className="w-full mt-auto mb-8">
        <Button 
          className="w-full rounded-full py-6 bg-white/20 hover:bg-white/30 text-white font-medium"
          onClick={() => navigate('/onboarding/age')}
          disabled={!name.trim()}
        >
          CONTINUE
        </Button>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterName;
