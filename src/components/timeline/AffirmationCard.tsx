
import React from 'react';

interface AffirmationCardProps {
  affirmation: string;
  mood?: 'calm' | 'energetic' | 'focused' | 'reflective';
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({
  affirmation,
  mood = 'calm'
}) => {
  // Define gradient backgrounds based on mood
  const gradientStyles = {
    calm: "bg-gradient-to-br from-amber-50 to-amber-100",
    energetic: "bg-gradient-to-br from-amber-50 to-orange-100",
    focused: "bg-gradient-to-br from-amber-50 to-blue-100",
    reflective: "bg-gradient-to-br from-amber-50 to-purple-100",
  };

  // Select gradient based on mood
  const gradientClass = gradientStyles[mood];

  return (
    <div className={`p-6 rounded-xl mb-6 shadow-sm border border-border ${gradientClass} transition-colors duration-300`}>
      <p className="affirmation">"{affirmation}"</p>
    </div>
  );
};

export default AffirmationCard;
