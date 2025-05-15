
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading process and redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="mb-16">
        <div className="w-24 h-16">
          {/* Simple bird silhouette */}
          <div className="w-12 h-12 bg-black rounded-tr-full rounded-tl-[50px] relative">
            <div className="absolute right-0 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-6 bg-black"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-6 bg-black"></div>
          </div>
          <div className="h-2 w-full bg-black rounded mt-1"></div>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-8 text-center">
        Personalization is<br />almost ready...
      </h1>
      
      <div className="w-full max-w-md space-y-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gray-400 w-1/2"></div>
        </div>
        
        <div className="bg-white rounded-xl p-6 flex items-center">
          <div className="flex-grow">
            <p className="font-medium">Creating your optimal plan</p>
          </div>
          <div className="animate-spin h-5 w-5 border-2 border-gray-500 border-t-transparent rounded-full"></div>
        </div>
        
        <div className="bg-gray-200/50 rounded-xl p-6">
          <p className="text-gray-400">Customizing exercises and preparing guided journals</p>
        </div>
        
        <div className="bg-gray-200/50 rounded-xl p-6">
          <p className="text-gray-400">Finalizing your personalized wellness experience</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
