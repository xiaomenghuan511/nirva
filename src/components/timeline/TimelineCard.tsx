
import React from 'react';
import { BookOpen, Clock, MapPin, Star } from 'lucide-react';

interface TimelineCardProps {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location?: string;
  people?: { id: number; name: string; avatar?: string }[];
  isBookmarked?: boolean;
  category?: string;
  onClick?: () => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  description,
  startTime,
  endTime,
  location,
  people = [],
  isBookmarked = false,
  category = 'event',
  onClick
}) => {
  // Generate a dynamic category icon
  const getCategoryIcon = () => {
    switch(category.toLowerCase()) {
      case 'work':
        return <div className="bg-blue-100 p-2 rounded-lg"><BookOpen className="h-4 w-4 text-blue-500" /></div>;
      case 'personal':
        return <div className="bg-green-100 p-2 rounded-lg"><Clock className="h-4 w-4 text-green-500" /></div>;
      case 'health':
        return <div className="bg-red-100 p-2 rounded-lg"><Clock className="h-4 w-4 text-red-500" /></div>;
      default:
        return <div className="bg-purple-100 p-2 rounded-lg"><Clock className="h-4 w-4 text-purple-500" /></div>;
    }
  };

  return (
    <div 
      className="timeline-card cursor-pointer transition-all hover:shadow-lg active:scale-98"
      onClick={onClick}
    >
      {/* Time range */}
      <div className="text-xs font-medium text-muted-foreground mb-2">
        {startTime} - {endTime}
      </div>
      
      <div className="flex items-start gap-3">
        {/* Category icon */}
        {getCategoryIcon()}
        
        <div className="flex-1">
          {/* Title and bookmark */}
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{title}</h3>
            <button className="text-muted-foreground hover:text-amber-400">
              <Star className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          
          {/* Footer: location and people */}
          <div className="flex items-center justify-between mt-3">
            {location && (
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{location}</span>
              </div>
            )}
            
            {people.length > 0 && (
              <div className="flex -space-x-2">
                {people.slice(0, 3).map(person => (
                  <div 
                    key={person.id}
                    className="h-6 w-6 rounded-full bg-accent flex items-center justify-center border border-background"
                    title={person.name}
                  >
                    {person.avatar ? (
                      <img src={person.avatar} alt={person.name} className="h-full w-full rounded-full object-cover" />
                    ) : (
                      <span className="text-xs font-medium">{person.name.charAt(0)}</span>
                    )}
                  </div>
                ))}
                {people.length > 3 && (
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border border-background">
                    +{people.length - 3}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
