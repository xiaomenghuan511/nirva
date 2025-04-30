
import React from 'react';

interface AffirmationCardProps {
  affirmation: string;
  mood?: 'calm' | 'energetic' | 'focused' | 'reflective';
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({ 
  affirmation,
  mood = 'calm' 
}) => {
  // Dynamic background based on mood
  const getBgGradient = () => {
    switch(mood) {
      case 'energetic':
        return 'from-nirva-soft-yellow to-nirva-soft-peach';
      case 'focused':
        return 'from-nirva-soft-blue to-nirva-soft-purple';
      case 'reflective':
        return 'from-nirva-soft-purple to-nirva-soft-pink';
      case 'calm':
      default:
        return 'from-nirva-soft-green to-nirva-soft-blue';
    }
  };

  return (
    <div className={`p-6 rounded-xl mb-6 bg-gradient-to-br ${getBgGradient()} shadow-sm`}>
      <p className="affirmation">"{affirmation}"</p>
      <div className="mt-3 text-right">
        <span className="text-xs font-medium opacity-70">Today's Reflection</span>
      </div>
    </div>
  );
};

export default AffirmationCard;
