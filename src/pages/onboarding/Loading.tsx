
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-nirva-cream p-6">
      <div className="w-full flex justify-start absolute top-0 left-0 pt-6 px-6">
        <button onClick={() => navigate('/onboarding/reflection')} className="text-nirva-neutral-body">
          <ArrowLeft size={24} />
        </button>
      </div>
      
      <div className="mb-16">
        <div className="w-24 h-16">
          {/* Simple bird silhouette */}
          <div className="w-12 h-12 bg-nirva-neutral-heading rounded-tr-full rounded-tl-[50px] relative">
            <div className="absolute right-0 top-0 w-4 h-4 bg-nirva-soft-gold rounded-full"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-6 bg-nirva-neutral-heading"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-6 bg-nirva-neutral-heading"></div>
          </div>
          <div className="h-2 w-full bg-nirva-neutral-heading rounded mt-1"></div>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-8 text-center text-nirva-neutral-heading">
        Personalization is<br />almost ready...
      </h1>
      
      <div className="w-full max-w-md space-y-6">
        <div className="h-2 bg-nirva-soft-beige rounded-full overflow-hidden">
          <div className="h-full bg-nirva-gold w-1/2"></div>
        </div>
        
        <div className="bg-white rounded-xl p-6 flex items-center">
          <div className="flex-grow">
            <p className="font-medium text-nirva-neutral-heading">Creating your optimal plan</p>
          </div>
          <div className="animate-spin h-5 w-5 border-2 border-nirva-gold border-t-transparent rounded-full"></div>
        </div>
        
        <div className="bg-nirva-soft-cream rounded-xl p-6">
          <p className="text-nirva-neutral-body/70">Customizing exercises and preparing guided journals</p>
        </div>
        
        <div className="bg-nirva-soft-cream rounded-xl p-6">
          <p className="text-nirva-neutral-body/70">Finalizing your personalized wellness experience</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
