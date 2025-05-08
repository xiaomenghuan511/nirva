
import React from 'react';

interface AffirmationCardProps {
  affirmation: string;
  mood?: 'calm' | 'energetic' | 'focused' | 'reflective';
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({ 
  affirmation,
  mood = 'calm' 
}) => {
  return (
    <div className="p-6 rounded-xl mb-6 bg-white shadow-sm border border-border">
      <p className="affirmation">"{affirmation}"</p>
    </div>
  );
};

export default AffirmationCard;
