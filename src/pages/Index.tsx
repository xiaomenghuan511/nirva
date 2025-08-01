import React, { useState, useEffect, useRef } from 'react';
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
import { Calendar, ChevronLeft, ChevronRight, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import type { CarouselApi } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { handleCarouselSwipe } from '@/lib/utils';

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

const Index: React.FC = () => {
  const navigate = useNavigate();
  // Set default date to April 19, 2025
  const defaultDate = new Date(2025, 3, 19); // April 19, 2025
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);
  
  // Add search functionality
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(timelineEvents);
  const { toast } = useToast();
  
  // Add saved events functionality
  const [savedEvents, setSavedEvents] = useState<number[]>([]);
  const [showSavedEvents, setShowSavedEvents] = useState(false);
  
  // Initialize savedEvents from localStorage on component mount
  useEffect(() => {
    const savedIds = localStorage.getItem('savedEvents');
    if (savedIds) {
      setSavedEvents(JSON.parse(savedIds));
    }
  }, []);
  
  // Save to localStorage whenever savedEvents changes
  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);
  
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

  // Search functionality
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredEvents(timelineEvents);
      return;
    }
    
    const query = searchQuery.toLowerCase().trim();
    const results = timelineEvents.filter(event => 
      event.title.toLowerCase().includes(query) || 
      event.description.toLowerCase().includes(query) ||
      event.location?.toLowerCase().includes(query) ||
      event.people?.some(person => person.name.toLowerCase().includes(query))
    );
    
    setFilteredEvents(results);
    setSearchDialogOpen(false);
    
    toast({
      title: `Search Results`,
      description: `Found ${results.length} matching events`,
    });
  };

  // Reset search results when search query is cleared
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredEvents(timelineEvents);
    }
  }, [searchQuery]);

  // Save event functionality
  const handleToggleSaveEvent = (id: number) => {
    setSavedEvents(prev => {
      if (prev.includes(id)) {
        // If already saved, remove it
        const newSavedEvents = prev.filter(eventId => eventId !== id);
        toast({
          title: 'Event removed from saved collection',
          description: 'The event has been removed from your saved collection.',
        });
        return newSavedEvents;
      } else {
        // If not saved, add it
        toast({
          title: 'Event saved',
          description: 'The event has been added to your saved collection.',
        });
        return [...prev, id];
      }
    });
  };

  // Toggle between showing all events and saved events
  const handleToggleSavedEventsView = () => {
    setShowSavedEvents(prev => !prev);
    
    if (!showSavedEvents && savedEvents.length === 0) {
      toast({
        title: 'No saved events',
        description: 'You have not saved any events yet. Click the star icon on an event to save it.',
      });
    }
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
      isSelected: format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
    };
  });

  // Calculate events to display based on the current view mode
  const eventsToDisplay = showSavedEvents 
    ? filteredEvents.filter(event => savedEvents.includes(event.id))
    : filteredEvents;

  // Add state for carousel API and current slide
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const totalSlides = affirmations.length;
  
  // Handle manual swiping
  const handleSwipe = (direction: 'left' | 'right') => {
    handleCarouselSwipe(api, direction);
  };

  // Set up auto-rotation with useEffect
  useEffect(() => {
    if (!api) return;
    
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  // Keep track of current slide
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  
  return (
    <Layout title="Smart Diary">
      <div className="px-4 py-5">
        <Carousel className="mb-8" setApi={setApi}>
          <CarouselContent>
            {affirmations.map((affirmation, index) => (
              <CarouselItem key={index}>
                <AffirmationCard 
                  affirmation={affirmation.text}
                  mood={affirmation.mood}
                  onSwipe={handleSwipe}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-2">
            <div className="flex gap-1">
              {affirmations.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${
                    current === index ? 'bg-primary' : 'bg-primary opacity-60'
                  } transition-opacity duration-300`}
                />
              ))}
            </div>
          </div>
        </Carousel>
        
        {/* Date Selection Row */}
        <div className="mb-6">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              {/* Calendar button on the left */}
              <div className="flex items-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
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
              
              {/* Date text centered */}
              <h3 className="text-sm font-medium flex-1 text-center">
                {showSavedEvents ? 'Saved Events' : (isApril19(selectedDate) ? `Today ${format(selectedDate, 'MMMM d')}` : format(selectedDate, 'MMMM d'))}
              </h3>
              
              {/* Right side with star and search buttons */}
              <div className="flex items-center gap-2">
                {/* Star button for saved events */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8" 
                  onClick={handleToggleSavedEventsView}
                >
                  <Star 
                    className="h-5 w-5 text-muted-foreground" 
                    fill={showSavedEvents ? "currentColor" : "none"}
                  />
                </Button>
                
                {/* Search button */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8" 
                  onClick={() => setSearchDialogOpen(true)}
                >
                  <Search className="h-5 w-5 text-muted-foreground" />
                </Button>
              </div>
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
                    className={`flex flex-col items-center justify-center cursor-pointer px-2 py-1 rounded-full ${
                      day.isSelected ? 'bg-primary text-primary-foreground' : 
                      day.isToday ? 'font-bold' : ''
                    }`}
                  >
                    <span className="text-xs font-medium">{day.dayName}</span>
                    <span className="text-base">{day.dayNumber}</span>
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
            
            {/* Removed the date text from here as it's now moved to the top row */}
          </div>
        </div>
        
        {/* Search Dialog */}
        <Dialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Search Events</DialogTitle>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Input
                  type="text"
                  placeholder="Enter keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="col-span-3"
                  autoFocus
                />
              </div>
              <Button onClick={handleSearch} type="submit">Search</Button>
            </div>
          </DialogContent>
        </Dialog>
        
        {eventsToDisplay.length === 0 && showSavedEvents && (
          <div className="text-center py-12 text-muted-foreground">
            <Star className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <h4 className="text-lg font-medium">No saved events</h4>
            <p className="mt-2">You haven't saved any events yet. Click the star icon on an event to save it.</p>
          </div>
        )}
        
        {eventsToDisplay.map((event) => (
          <TimelineCard
            key={event.id}
            {...event}
            isBookmarked={savedEvents.includes(event.id)}
            onBookmarkToggle={() => handleToggleSaveEvent(event.id)}
            onClick={() => handleEventClick(event.id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
