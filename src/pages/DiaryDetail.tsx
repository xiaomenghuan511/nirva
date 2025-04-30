
import React from 'react';
import { ArrowLeft, MapPin, Clock, Star, Share2, MessageSquare } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Sample diary entry detail
const diaryEntry = {
  id: 1,
  title: 'Morning Meditation',
  date: 'April 30, 2025',
  timeRange: '6:30 AM - 6:45 AM',
  location: 'Home',
  content: `Today I started my day with a peaceful meditation session. I focused on gratitude and set my intentions for the day. I felt centered and ready to face whatever challenges might come my way.

The guided meditation helped me acknowledge my thoughts without judgment and return to my breath when my mind wandered. I'm noticing that with consistent practice, it's becoming easier to maintain focus.

I want to continue this habit and perhaps extend the session to 20 minutes tomorrow.`,
  isBookmarked: true,
  mood: 'calm',
  category: 'wellness'
};

const DiaryDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const handleBack = () => {
    navigate(-1);
  };
  
  const handleReflect = () => {
    navigate(`/reflect/${id}`);
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex justify-between items-center px-4 h-14">
          <button 
            onClick={handleBack}
            className="p-2 -ml-2 rounded-full hover:bg-accent/50"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-4">
            <button className="text-muted-foreground hover:text-amber-400">
              <Star className="h-5 w-5" fill={diaryEntry.isBookmarked ? "currentColor" : "none"} />
            </button>
            
            <button className="text-muted-foreground hover:text-primary">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Content */}
      <main className="pt-14 px-4 py-5">
        <div className="mb-6">
          <h1 className="text-2xl font-medium">{diaryEntry.title}</h1>
          
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span className="mr-4">{diaryEntry.timeRange}</span>
            
            {diaryEntry.location && (
              <>
                <MapPin className="h-4 w-4 mr-1" />
                <span>{diaryEntry.location}</span>
              </>
            )}
          </div>
          
          <div className="mt-1 text-sm text-muted-foreground">
            {diaryEntry.date}
          </div>
        </div>
        
        <div className="prose prose-sm max-w-none">
          {diaryEntry.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="fixed bottom-5 left-0 right-0 flex justify-center">
          <button
            onClick={handleReflect}
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Reflect on this
          </button>
        </div>
      </main>
    </div>
  );
};

export default DiaryDetail;
