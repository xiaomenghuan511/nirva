
import React from 'react';
import Layout from '../components/layout/Layout';
import AffirmationCard from '../components/timeline/AffirmationCard';
import TimelineCard from '../components/timeline/TimelineCard';
import { useNavigate } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// Sample timeline data based on the diary entry
const timelineEvents = [
  {
    id: 1,
    title: 'Morning in the Park with Ashley',
    description: 'Deep conversations about life, dating experiences, and exploring crystals and tarot cards.',
    startTime: '10:00 AM',
    endTime: '1:00 PM',
    location: 'Park',
    category: 'personal',
    isBookmarked: true,
    emotion: 'peaceful',
    locationType: 'outdoor',
    activityType: 'conversation',
    energyImpact: 'positive',
    people: [
      { id: 1, name: 'Ashley' }
    ]
  },
  {
    id: 2,
    title: 'Departure from Park',
    description: 'Said goodbye to Ashley and prepared to meet Trent for our trip to San Francisco.',
    startTime: '1:00 PM',
    endTime: '1:30 PM',
    location: 'Park',
    category: 'personal',
    emotion: 'calm',
    locationType: 'outdoor',
    activityType: 'transportation',
    energyImpact: 'positive',
    people: [
      { id: 1, name: 'Ashley' }
    ]
  },
  {
    id: 3,
    title: 'Drive to San Francisco with Trent',
    description: 'Philosophical discussions about work, life perspectives, and AI companionship during our drive.',
    startTime: '1:30 PM',
    endTime: '2:50 PM',
    location: 'In the car',
    category: 'personal',
    emotion: 'engaged',
    locationType: 'transportation',
    activityType: 'conversation',
    energyImpact: 'positive',
    people: [
      { id: 2, name: 'Trent' }
    ]
  },
  {
    id: 4,
    title: 'Cafe Visit near Roxy Theatre',
    description: 'Quick stop for pastries and tea before the movie, though the food was disappointing.',
    startTime: '2:50 PM',
    endTime: '3:10 PM',
    location: 'Nordic-style Cafe',
    category: 'personal',
    emotion: 'disengaged',
    locationType: 'outdoor',
    activityType: 'meal',
    energyImpact: 'negative',
    people: [
      { id: 2, name: 'Trent' }
    ]
  },
  {
    id: 5,
    title: 'Film: "Summer Palace" at Roxy Theatre',
    description: 'Watched a thought-provoking Chinese film that touched on the Tiananmen Square incident.',
    startTime: '3:10 PM',
    endTime: '5:40 PM',
    location: 'Roxy Theatre',
    category: 'personal',
    emotion: 'engaged',
    locationType: 'outdoor',
    activityType: 'entertainment',
    energyImpact: 'positive',
    people: [
      { id: 2, name: 'Trent' }
    ]
  },
  {
    id: 6,
    title: 'Evening Dinner & Discussion',
    description: 'Reflective conversation about the film, politics, and society while having Nepalese/Peruvian dinner.',
    startTime: '5:40 PM',
    endTime: '7:30 PM',
    location: 'Nepalese/Peruvian Restaurant',
    category: 'personal',
    emotion: 'reflective',
    locationType: 'outdoor',
    activityType: 'meal',
    energyImpact: 'positive',
    people: [
      { id: 2, name: 'Trent' }
    ]
  }
];

// Affirmation data for multiple cards
const affirmations = [
  {
    text: "Today was a day of deep conversations with friends, self-reflection, and cultural experiences.",
    mood: "reflective" as const
  },
  {
    text: "Meaningful connections with others help me understand myself better and grow as a person.",
    mood: "calm" as const
  },
  {
    text: "I am grateful for friends who share their wisdom and provide space for authentic expression.",
    mood: "focused" as const
  }
];

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  const handleEventClick = (id: number) => {
    navigate(`/diary/${id}`);
  };
  
  return (
    <Layout title="Smart Diary">
      <div className="px-4 py-5">
        <Carousel className="mb-8">
          <CarouselContent>
            {affirmations.map((affirmation, index) => (
              <CarouselItem key={index}>
                <AffirmationCard 
                  affirmation={affirmation.text}
                  mood={affirmation.mood}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-2">
            <div className="flex gap-1">
              {affirmations.map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-primary opacity-60"
                />
              ))}
            </div>
          </div>
        </Carousel>
        
        <div className="mb-4">
          <h2 className="text-lg font-medium">April 19, 2025</h2>
        </div>
        
        {timelineEvents.map((event) => (
          <TimelineCard
            key={event.id}
            {...event}
            onClick={() => handleEventClick(event.id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
