
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#f3d0c1] to-[#f5b8a9] p-6">
      <div className="w-full flex justify-start pt-4">
        <span className="text-white/0">.</span> {/* Spacer */}
      </div>
      
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex space-x-4">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <div className="mt-1 w-4 h-1.5 bg-black rounded-full transform rotate-[20deg]"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md w-full max-w-xs">
          <h1 className="text-xl font-medium text-center mb-1">Hi there,</h1>
          <p className="text-xl font-medium text-center">I am Nirva.</p>
        </div>
      </div>
      
      <div className="w-full space-y-4">
        <Button 
          className="w-full rounded-full py-6 shadow-md bg-white hover:bg-gray-100 text-black"
          onClick={() => navigate('/onboarding/name')}
        >
          Hi, Nirva!
        </Button>
        
        <p className="text-white/70 text-xs text-center mt-4">
          I ALREADY HAVE AN ACCOUNT
        </p>
      </div>
    </div>
  );
};

export default Welcome;
