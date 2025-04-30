
import React from 'react';
import Layout from '../components/layout/Layout';
import AffirmationCard from '../components/timeline/AffirmationCard';
import TimelineCard from '../components/timeline/TimelineCard';
import { useNavigate } from 'react-router-dom';

// Sample timeline data
const timelineEvents = [
  {
    id: 1,
    title: 'Morning Meditation',
    description: 'Started the day with a peaceful 15-minute meditation session focusing on gratitude.',
    startTime: '6:30 AM',
    endTime: '6:45 AM',
    category: 'wellness',
    isBookmarked: true
  },
  {
    id: 2,
    title: 'Team Meeting',
    description: 'Weekly sync with the product team to discuss project roadmap and current blockers.',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    location: 'Conference Room B',
    category: 'work',
    people: [
      { id: 1, name: 'Emma' },
      { id: 2, name: 'Sam' },
      { id: 3, name: 'Taylor' },
      { id: 4, name: 'Morgan' }
    ]
  },
  {
    id: 3,
    title: 'Lunch with Alex',
    description: 'Caught up with an old friend over lunch at the new cafe downtown.',
    startTime: '12:30 PM',
    endTime: '1:45 PM',
    location: 'Bloom Cafe',
    category: 'personal',
    people: [
      { id: 5, name: 'Alex' }
    ]
  },
  {
    id: 4,
    title: 'Project Work',
    description: 'Focused work session on finishing the front-end implementation for the new feature.',
    startTime: '2:00 PM',
    endTime: '5:00 PM',
    category: 'work'
  }
];

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  const handleEventClick = (id: number) => {
    navigate(`/diary/${id}`);
  };
  
  return (
    <Layout title="Timeline">
      <div className="px-4 py-5">
        <AffirmationCard 
          affirmation="Embrace the journey of self-discovery with an open heart and a curious mind."
          mood="calm"
        />
        
        <div className="mb-4">
          <h2 className="text-lg font-medium">Today</h2>
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
