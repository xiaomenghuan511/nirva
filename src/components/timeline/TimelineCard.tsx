import React from 'react';
import { BookOpen, Clock, MapPin, Star, Heart, Home, Briefcase, MapPinned, MessagesSquare, UtensilsCrossed, Car, ArrowUp, ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
  emotion?: string;
  locationType?: string;
  activityType?: string;
  energyImpact?: 'positive' | 'negative';
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
  emotion,
  locationType,
  activityType,
  energyImpact,
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

  // Generate emotion badge
  const getEmotionBadge = () => {
    if (!emotion) return null;
    
    let bgColor = "bg-gray-100";
    let textColor = "text-gray-700";
    let icon = <Heart className="h-3 w-3 mr-1" />;
    
    switch(emotion.toLowerCase()) {
      case 'peaceful':
        bgColor = "bg-blue-100";
        textColor = "text-blue-700";
        break;
      case 'energized':
        bgColor = "bg-amber-100";
        textColor = "text-amber-700";
        break;
      case 'engaged':
        bgColor = "bg-green-100";
        textColor = "text-green-700";
        break;
      case 'disengaged':
        bgColor = "bg-red-100";
        textColor = "text-red-700";
        break;
      default:
        break;
    }
    
    return (
      <div className={`flex items-center rounded-full px-2 py-1 text-xs ${bgColor} ${textColor}`}>
        {icon}
        <span>{emotion}</span>
      </div>
    );
  };
  
  // Generate location type badge
  const getLocationTypeBadge = () => {
    if (!locationType) return null;
    
    let bgColor = "bg-gray-100";
    let textColor = "text-gray-700";
    let icon = <MapPinned className="h-3 w-3 mr-1" />;
    
    switch(locationType.toLowerCase()) {
      case 'home':
        bgColor = "bg-purple-100";
        textColor = "text-purple-700";
        icon = <Home className="h-3 w-3 mr-1" />;
        break;
      case 'work':
        bgColor = "bg-blue-100";
        textColor = "text-blue-700";
        icon = <Briefcase className="h-3 w-3 mr-1" />;
        break;
      case 'outdoor':
        bgColor = "bg-green-100";
        textColor = "text-green-700";
        icon = <MapPinned className="h-3 w-3 mr-1" />;
        break;
      default:
        break;
    }
    
    return (
      <div className={`flex items-center rounded-full px-2 py-1 text-xs ${bgColor} ${textColor}`}>
        {icon}
        <span>{locationType}</span>
      </div>
    );
  };
  
  // Generate activity type badge
  const getActivityTypeBadge = () => {
    if (!activityType) return null;
    
    let bgColor = "bg-gray-100";
    let textColor = "text-gray-700";
    let icon = <Clock className="h-3 w-3 mr-1" />;
    
    switch(activityType.toLowerCase()) {
      case 'conversation':
        bgColor = "bg-indigo-100";
        textColor = "text-indigo-700";
        icon = <MessagesSquare className="h-3 w-3 mr-1" />;
        break;
      case 'meal':
        bgColor = "bg-orange-100";
        textColor = "text-orange-700";
        icon = <UtensilsCrossed className="h-3 w-3 mr-1" />;
        break;
      case 'transportation':
        bgColor = "bg-cyan-100";
        textColor = "text-cyan-700";
        icon = <Car className="h-3 w-3 mr-1" />;
        break;
      default:
        break;
    }
    
    return (
      <div className={`flex items-center rounded-full px-2 py-1 text-xs ${bgColor} ${textColor}`}>
        {icon}
        <span>{activityType}</span>
      </div>
    );
  };
  
  // Generate energy impact badge with arrow icons
  const getEnergyImpactBadge = () => {
    if (!energyImpact) return null;
    
    if (energyImpact === 'positive') {
      return (
        <div className="flex items-center rounded-full px-2 py-1 text-xs bg-green-100 text-green-700">
          <ArrowUp className="h-3 w-3" />
        </div>
      );
    } else {
      return (
        <div className="flex items-center rounded-full px-2 py-1 text-xs bg-red-100 text-red-700">
          <ArrowDown className="h-3 w-3" />
        </div>
      );
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
          
          {/* Event labels */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {getEmotionBadge()}
            {getLocationTypeBadge()}
            {getActivityTypeBadge()}
            {getEnergyImpactBadge()}
          </div>
          
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
