
import React from 'react';

interface AffirmationCardProps {
  affirmation: string;
  mood?: 'calm' | 'energetic' | 'focused' | 'reflective';
  onSwipe?: (direction: 'left' | 'right') => void;
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({
  affirmation,
  mood = 'calm',
  onSwipe
}) => {
  // Define gradient backgrounds based on mood
  const gradientStyles = {
    calm: "bg-gradient-to-br from-amber-50 to-amber-100",
    energetic: "bg-gradient-to-br from-amber-50 to-orange-100",
    focused: "bg-gradient-to-br from-amber-50 to-blue-100",
    reflective: "bg-gradient-to-br from-amber-50 to-purple-100",
  };

  // Touch handling for swipe
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  // Required minimum distance for a swipe (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!onSwipe) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      onSwipe('left');
    }
    
    if (isRightSwipe) {
      onSwipe('right');
    }
  };

  // Mouse events for desktop swipe
  const [mouseStart, setMouseStart] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  
  const onMouseDown = (e: React.MouseEvent) => {
    setMouseStart(e.clientX);
    setIsDragging(true);
  };
  
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    // We don't need to track the position during move, 
    // we'll calculate the direction on mouse up
  };
  
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || !onSwipe) return;
    
    const distance = mouseStart - e.clientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      onSwipe('left');
    }
    
    if (isRightSwipe) {
      onSwipe('right');
    }
    
    setIsDragging(false);
  };
  
  // Handle mouse leaving the element while dragging
  const onMouseLeave = () => {
    setIsDragging(false);
  };

  // Select gradient based on mood
  const gradientClass = gradientStyles[mood];

  return (
    <div 
      className={`p-6 rounded-xl mb-6 shadow-sm border border-border ${gradientClass} transition-colors duration-300 animate-slide-in-right cursor-grab active:cursor-grabbing`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      <p className="affirmation">"{affirmation}"</p>
    </div>
  );
};

export default AffirmationCard;
