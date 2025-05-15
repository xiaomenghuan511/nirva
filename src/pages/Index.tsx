import React, { useState } from 'react';
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
import { format, addDays, subDays, startOfWeek, addWeeks, subWeeks } from 'date-fns';
import { Calendar, ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

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
    energyImpact: 'positive' as const,
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
    energyImpact: 'positive' as const,
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
    energyImpact: 'positive' as const,
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
    energyImpact: 'negative' as const,
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
    energyImpact: 'positive' as const,
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
    energyImpact: 'positive' as const,
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

// Dates that have entries - for demo purposes we'll hardcode April 19, 20, and 23, 2025
const datesWithEntries = [
  new Date(2025, 3, 19), // April 19, 2025
  new Date(2025, 3, 20), // April 20, 2025
  new Date(2025, 3, 23), // April 23, 2025
];

// Helper function to check if a date has entries
const hasEntries = (date: Date) => {
  return datesWithEntries.some(entryDate => 
    format(entryDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
  );
};

const Index: React.FC = () => {
  const navigate = useNavigate();
  // Set default date to April 19, 2025
  const defaultDate = new Date(2025, 3, 19); // April 19, 2025
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);
  
  // Define April 19, 2025 as a reference date for "Today"
  const isApril19 = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === '2025-04-19';
  };
  
  const handleEventClick = (id: number) => {
    navigate(`/diary/${id}`);
  };
  
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  // Updated to navigate to previous week instead of previous day
  const handlePreviousWeek = () => {
    setSelectedDate(prevDate => subWeeks(prevDate, 1));
  };

  // Updated to navigate to next week instead of next day
  const handleNextWeek = () => {
    setSelectedDate(prevDate => addWeeks(prevDate, 1));
  };

  // Get start of the current week (Sunday)
  const weekStart = startOfWeek(selectedDate);
  
  // Generate array of weekdays
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(weekStart, i);
    return {
      date: day,
      dayName: format(day, 'EEE').substring(0, 2),
      dayNumber: format(day, 'd'),
      isToday: isApril19(day),
      isSelected: format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'),
      hasEntries: hasEntries(day)
    };
  });
  
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
        
        {/* Date Selection Row */}
        <div className="mb-6">
          <div className="flex flex-col">
            <div className="flex justify-end items-center mb-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateChange}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex justify-between items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={handlePreviousWeek}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex justify-between items-center overflow-x-auto no-scrollbar flex-grow mx-2">
                {weekDays.map((day, index) => (
                  <div 
                    key={index}
                    onClick={() => handleDateChange(day.date)}
                    className="flex flex-col items-center justify-center cursor-pointer relative"
                  >
                    <div className={`px-2 py-1 rounded-full ${
                      day.isSelected ? 'bg-primary text-primary-foreground' : 
                      day.isToday ? 'font-bold' : ''
                    }`}>
                      <span className="text-xs font-medium">{day.dayName}</span>
                      <span className="text-base">{day.dayNumber}</span>
                    </div>
                    {day.hasEntries && (
                      <div className="w-1.5 h-1.5 bg-[#FEF7CD] rounded-full mt-1 absolute -bottom-2.5"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={handleNextWeek}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">
                {isApril19(selectedDate) ? `Today ${format(selectedDate, 'MMMM d')}` : format(selectedDate, 'MMMM d')}
              </h3>
            </div>
          </div>
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
