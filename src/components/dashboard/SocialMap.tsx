
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Person {
  name: string;
  timeSpent: number; // in hours
  energyImpact: 'positive' | 'neutral' | 'negative';
  description: string;
  tips: string[];
}

const people: Person[] = [
  {
    name: 'Ashley',
    timeSpent: 3,
    energyImpact: 'positive',
    description: 'Deep, supportive conversation. Vulnerability was met with understanding. Shared activities (park relaxation, tarot) felt healing and calming. Provided a safe space for reflection.',
    tips: [
      'Reciprocate Support: Ensure you\'re actively listening and offering support for her challenges (job search, etc.) as she does for you.',
      'Follow Through: Act on plans discussed, like the library meet-up, to build reliability.',
      'Shared Fun: Continue exploring shared interests beyond processing difficulties, like the arts or potential future activities.'
    ]
  },
  {
    name: 'Trent',
    timeSpent: 5.5,
    energyImpact: 'positive',
    description: 'Highly engaging, intellectually stimulating conversations. Covered a wide range of topics (work, philosophy, film, society). Shared cultural experience (movie) fostered connection. Provided a space for debate and idea exploration. The minor negative point (cafe anxiety/disappointment) was situational.',
    tips: [
      'Acknowledge Commitments: Address things like listening to the record he gave you to show you value his gestures and follow through.',
      'Appreciate His Perspective: Even when disagreeing (like on AI ethics), acknowledge and show respect for his viewpoint to maintain positive discourse.',
      'Continue Shared Exploration: Lean into shared interests like film, exploring challenging ideas, and trying new experiences (restaurants, neighborhoods). Ask about his work/life updates proactively.'
    ]
  }
];

export const socialData = [
  ...people,
  {
    name: 'Michael',
    timeSpent: 8.5,
    energyImpact: 'positive',
    description: 'Long-time friend who brings perspective and shared history. Conversations are effortless and restorative.',
    tips: [
      'Schedule Regular Check-ins: Make time for your monthly calls even when busy.',
      'Share Your Growth: Keep them updated on your personal development.',
      'Plan That Trip: Follow through on your discussed travel plans.'
    ]
  },
  {
    name: 'Emma',
    timeSpent: 4.2,
    energyImpact: 'neutral',
    description: 'Coworker with shared professional interests. Relationship is primarily work-focused but pleasant.',
    tips: [
      'Set Clear Boundaries: Maintain professional focus while being friendly.',
      'Acknowledge Expertise: Continue to recognize and appreciate their skills.',
      'Find Common Interests: Look for non-work topics to deepen connection.'
    ]
  },
  {
    name: 'Jason',
    timeSpent: 2.1,
    energyImpact: 'negative',
    description: 'Interactions often feel draining due to negativity and complaining. Limited shared interests.',
    tips: [
      'Limit Duration: Keep interactions brief and purposeful.',
      'Redirect Conversations: Steer toward more positive topics when possible.',
      'Consider Distance: It may be healthy to reduce frequency of interaction.'
    ]
  },
  {
    name: 'Sarah',
    timeSpent: 6.8,
    energyImpact: 'positive',
    description: 'Creative collaborator who inspires new ideas. Time flies during conversations about art and projects.',
    tips: [
      'Schedule Making Sessions: Set aside time for collaborative creation.',
      'Share Inspirations: Continue exchanging creative resources.',
      'Celebrate Wins: Acknowledge each other\'s creative successes.'
    ]
  },
  {
    name: 'Raj',
    timeSpent: 3.7,
    energyImpact: 'positive',
    description: 'Wise mentor who provides guidance and perspective on career and personal growth.',
    tips: [
      'Come Prepared: Make the most of conversations with specific questions.',
      'Express Gratitude: Acknowledge the value they bring to your life.',
      'Pay It Forward: Share lessons learned with others who might benefit.'
    ]
  }
];

const SocialMap: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(null);
  const navigate = useNavigate();
  
  // Calculate dimensions and positions
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;
  
  // Colors based on energy impact
  const getColor = (impact: string) => {
    switch(impact) {
      case 'positive': return '#F2FCE2'; // Soft Green
      case 'neutral': return '#FEF7CD'; // Soft Yellow
      case 'negative': return '#ea384c'; // Red
      default: return '#F2FCE2';
    }
  };
  
  // Calculate size based on time spent (now with larger values)
  const getSize = (hours: number) => {
    const maxSize = 80; // Increased for better visibility
    const minSize = 20; // Increased minimum size
    // Scale size based on time spent
    if (hours >= 5) return maxSize;
    if (hours <= 0.1) return minSize;
    return minSize + (maxSize - minSize) * (hours / 5);
  };
  
  // Calculate position for each person
  const calculatePositions = () => {
    const totalPeople = people.length;
    return people.map((person, index) => {
      const angle = (index / totalPeople) * 2 * Math.PI;
      const distanceFromCenter = maxRadius;
      
      const x = centerX + distanceFromCenter * Math.cos(angle);
      const y = centerY + distanceFromCenter * Math.sin(angle);
      
      return { ...person, x, y };
    });
  };
  
  const peopleWithPositions = calculatePositions();

  const handleViewFullMap = () => {
    navigate('/social-map-full');
  };
  
  return (
    <div className="glass-card p-4 relative">
      <h3 className="font-medium mb-3">Social Map</h3>
      
      <div className="relative h-[300px] mb-4">
        {/* You - central hub */}
        <div className="absolute" style={{ left: centerX - 25, top: centerY - 25 }}>
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md text-sm font-bold">
            YOU
          </div>
        </div>
        
        {/* Lines radiating outward */}
        {peopleWithPositions.map((person, index) => (
          <div 
            key={`line-${index}`} 
            className="absolute" 
            style={{ 
              left: centerX, 
              top: centerY, 
              width: Math.abs(person.x - centerX), 
              height: Math.abs(person.y - centerY),
              transformOrigin: '0 0',
              transform: `rotate(${Math.atan2(person.y - centerY, person.x - centerX)}rad)`,
              borderTop: '1px solid rgba(155, 155, 155, 0.5)'
            }}
          />
        ))}
        
        {/* People circles */}
        {peopleWithPositions.map((person, index) => {
          const size = getSize(person.timeSpent);
          return (
            <div 
              key={`person-${index}`}
              className="absolute flex flex-col items-center justify-center rounded-full cursor-pointer hover:shadow-lg transition-shadow"
              style={{ 
                left: person.x - size/2, 
                top: person.y - size/2, 
                width: size, 
                height: size, 
                backgroundColor: getColor(person.energyImpact),
                border: '1px solid rgba(155, 155, 155, 0.5)'
              }}
              onClick={() => setSelectedPerson(person)}
            >
              <span className="text-sm font-medium">
                {person.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {person.timeSpent}h
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Selected person details */}
      {selectedPerson && (
        <div className="p-3 border rounded-lg bg-background/50">
          <div className="flex justify-between">
            <h4 className="font-medium">{selectedPerson.name}</h4>
            <div className="flex items-center text-sm">
              <span className="mr-2">Time: ~{selectedPerson.timeSpent} {selectedPerson.timeSpent === 1 ? 'hour' : 'hours'}</span>
              <span 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: getColor(selectedPerson.energyImpact) }}
              ></span>
            </div>
          </div>
          <p className="text-sm mt-2">{selectedPerson.description}</p>
          
          {selectedPerson.tips.length > 0 && selectedPerson.tips[0] !== 'Standard politeness suffices.' && (
            <div className="mt-3">
              <p className="text-xs font-medium text-muted-foreground">TIPS FOR IMPROVING RELATIONSHIP:</p>
              <ul className="text-sm list-disc list-inside">
                {selectedPerson.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
          
          <button 
            className="mt-3 text-xs text-primary"
            onClick={() => setSelectedPerson(null)}
          >
            Close
          </button>
        </div>
      )}
      
      <div className="mt-3 flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#F2FCE2] mr-1"></div>
          <span>Energizing</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FEF7CD] mr-1"></div>
          <span>Neutral</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#ea384c] mr-1"></div>
          <span>Draining</span>
        </div>
      </div>

      {/* View full map button/arrow */}
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute top-2 right-2"
        onClick={handleViewFullMap}
        aria-label="View full social map"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SocialMap;
