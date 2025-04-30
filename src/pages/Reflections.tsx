
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ReflectionPrompt from '../components/reflections/ReflectionPrompt';
import AffirmationCard from '../components/timeline/AffirmationCard';

const Reflections: React.FC = () => {
  const [activePrompt, setActivePrompt] = useState(0);
  
  // Sample prompts
  const prompts = [
    {
      id: 1,
      question: "What are you grateful for today?",
      type: "self" as const
    },
    {
      id: 2,
      question: "What is one goal you'd like to achieve this week?",
      type: "goal" as const
    },
    {
      id: 3,
      question: "How did you practice self-care today?",
      type: "self" as const
    }
  ];
  
  const handleSaveReflection = (answer: string) => {
    console.log("Saved reflection:", answer);
    // In a real app, we'd save this to a database
    
    // Move to next prompt if available
    if (activePrompt < prompts.length - 1) {
      setActivePrompt(activePrompt + 1);
    }
  };
  
  return (
    <Layout title="Reflections">
      <div className="px-4 py-5">
        {/* Affirmation for the day */}
        <AffirmationCard 
          affirmation="Your journey is uniquely yours. Embrace each step with patience and courage, knowing that every experience is shaping your growth."
          mood="reflective"
        />
        
        {/* Reflection prompts */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Daily Reflection</h2>
          
          <ReflectionPrompt 
            question={prompts[activePrompt].question}
            type={prompts[activePrompt].type}
            onSave={handleSaveReflection}
          />
        </div>
        
        {/* Past reflections section - placeholder for now */}
        <div className="glass-card p-4">
          <h2 className="text-lg font-medium mb-3">Previous Reflections</h2>
          <div className="bg-siltstone-soft-beige p-3 rounded-lg mb-3">
            <div className="text-xs font-medium text-muted-foreground mb-1">YESTERDAY</div>
            <p className="text-sm">Grateful for the peaceful morning walk and the chance to connect with nature.</p>
          </div>
          
          <div className="bg-siltstone-soft-peach p-3 rounded-lg">
            <div className="text-xs font-medium text-muted-foreground mb-1">MONDAY</div>
            <p className="text-sm">My goal this week is to practice mindfulness for 10 minutes each morning.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reflections;
