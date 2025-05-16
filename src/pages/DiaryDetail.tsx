import React, { useEffect, useState } from 'react';
import { ArrowLeft, MapPin, Clock, Star, Share2, MessageSquare } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Sample diary entries based on the detailed diary data
const diaryEntries = {
  1: {
    id: 1,
    title: 'Morning in the Park with Ashley',
    date: 'April 19, 2025',
    timeRange: '10:00 AM - 1:00 PM',
    location: 'Park',
    content: `Today I spent a wonderful morning at the park with Ashley, whom I met at the intensive outpatient program (IOP). 

I explained my recording experiment project to her, discussing how it helps with objective memory review. We had an in-depth conversation about dating experiences and my recent frustrations with being "ghosted" after what seemed like promising connections.

We reflected on solitude and socializing. I realized that on weekdays, I barely interact with people, and long periods of solitude (like the past five days) don't feel very healthy, though I do enjoy alone time. When I have free time, I tend to become lazy, sleep too much, and feel like I'm wasting time.

Ashley shared her struggles with similar feelings. I also mentioned visiting a friend who just had a baby, finding the baby cute, and feeling somewhat envious of her stable life situation.

The most relaxing part was when Ashley demonstrated a Nepalese singing bowl and showed her crystal collection. She explained the meanings of various crystals (moonstone, carnelian, amethyst, etc.) and did a tarot reading for me about my "fertility journey." 

We also had an in-depth discussion about my fertility plans - waiting until 40 to decide about having children, the financial costs, and my mother's supportive attitude.`,
    isBookmarked: true,
    mood: 'reflective',
    category: 'personal',
    people: [{
      id: 1,
      name: 'Ashley'
    }]
  },
  2: {
    id: 2,
    title: 'Departure from Park',
    date: 'April 19, 2025',
    timeRange: '1:00 PM - 1:30 PM',
    location: 'Park',
    content: `Said goodbye to Ashley, who planned to stay in the park to read and then go see a movie. We made plans to possibly meet again before she goes to Sedona on May 8th, considering going to the library to work together.

Ashley kindly gave me some baked goods she had made before we parted ways.

I confirmed my next arrangement: meeting Trent around 1:30 PM to go to San Francisco to watch a movie.`,
    isBookmarked: false,
    mood: 'calm',
    category: 'personal',
    people: [{
      id: 1,
      name: 'Ashley'
    }]
  },
  3: {
    id: 3,
    title: 'Drive to San Francisco with Trent',
    date: 'April 19, 2025',
    timeRange: '1:30 PM - 2:50 PM',
    location: 'In the car',
    content: `Met with Trent and drove toward Roxy Theatre in San Francisco. We discussed parking issues near the theater.

Trent described his morning - a terrible run followed by diving into work. He shared work dilemmas: his project is important but messy, and he's fixing problems created by senior engineers. This is good for promotion but conflicts with his thoughts about quitting. I expressed understanding and suggested he showcase his contributions.

We had some fascinating conversations during the drive. Trent talked about the joy engineers get from keyboard shortcuts. I shared ideas about AI companions (idol chat apps) and a friend's mindset shift of viewing life as a GTA game.

I also shared another friend's practice of cultivating compassion through the Tibetan Buddhist concept that "all beings have been your parents/children." I explained how this helped me feel more empathy for an older restaurant server. Trent responded by discussing personal metaphysics and metaphorical knowledge.

When Trent asked about my morning picnic, I detailed meeting Ashley at the intensive outpatient program (IOP) and described the rehabilitation center environment. I mentioned the various interesting people I met there, including a kind young man with sex addiction who was learning Arabic to support Palestine.`,
    isBookmarked: false,
    mood: 'focused',
    category: 'personal',
    people: [{
      id: 2,
      name: 'Trent'
    }]
  },
  4: {
    id: 4,
    title: 'Cafe Visit near Roxy Theatre',
    date: 'April 19, 2025',
    timeRange: '2:50 PM - 3:10 PM',
    location: 'Nordic-style Cafe',
    content: `After parking, we entered a cafe that looked Nordic in style. We discussed and selected various pastries (poppy seed bread, ginger pastry, Morning Bun?) and a Brunch Plate with sourdough to share. I ordered English breakfast tea.

While ordering, I was mindful about controlling sugar and caffeine intake since I'm preparing for egg freezing.

I explained my recording equipment to Trent, showed him last night's AI summary, and mentioned current AI technology problems (inaccuracies, hallucinations, incorrect speaker identification).

When we tasted the food, we both found it disappointing - generally rating the pastries and brunch plate as not very good ("okay", "sweet", "strange", "sour"). Despite this, I was happy to try a new place.

We realized we might miss the 3:00 PM movie start and felt a bit anxious, so we decided to take the brunch plate to go after discussing it.`,
    isBookmarked: false,
    mood: 'energetic',
    category: 'personal',
    people: [{
      id: 2,
      name: 'Trent'
    }]
  },
  5: {
    id: 5,
    title: 'Film: "Summer Palace" at Roxy Theatre',
    date: 'April 19, 2025',
    timeRange: '3:10 PM - 5:40 PM',
    location: 'Roxy Theatre',
    content: `We watched the Chinese film "Summer Palace" at the Roxy Theatre. The film was about 2.5 hours long and quite thought-provoking.

The story touched on the Tiananmen Square incident, which resonated with me personally due to my family background. The film portrayed university life, political movements, and personal relationships in a complex way.`,
    isBookmarked: false,
    mood: 'reflective',
    category: 'personal',
    people: [{
      id: 2,
      name: 'Trent'
    }]
  },
  6: {
    id: 6,
    title: 'Evening Dinner & Discussion',
    date: 'April 19, 2025',
    timeRange: '5:40 PM - 7:30 PM',
    location: 'Nepalese/Peruvian Restaurant',
    content: `After the movie ended, we walked and discussed the film. My memory of the plot was somewhat foggy, with the most vivid impression being the parts involving the Tiananmen Square incident.

I explained the background of the Tiananmen incident to Trent, including my parents' firsthand experiences and the information censorship surrounding it. I shared my personal feelings that revolution and love require similar passion.

Trent mentioned San Francisco's hippie movement (Haight-Ashbury) as a comparison, and I mentioned I had never been there. We discussed the gap between the idealism of university life portrayed in the film and my own real university experience.

We had an in-depth discussion about society and the individual. Trent asked whether "Chinese tech workers" care about politics, and I expressed my belief that it's a mix of powerlessness and apathy, with many people more concerned about personal interests like money and stocks.

We also returned to our earlier discussion about AI idol chat applications. Trent expressed negative views (that they control people, are capital-driven, and distract people from important matters), while I tried to defend them from the perspective of providing companionship.

After walking around looking for a place to eat, we eventually chose a Nepalese/Peruvian restaurant. We ordered Ceviche Mix (medium spicy) and grilled lamb skewers (Sekuwa).`,
    isBookmarked: false,
    mood: 'reflective',
    category: 'personal',
    people: [{
      id: 2,
      name: 'Trent'
    }]
  }
};

const DiaryDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const entryId = id ? parseInt(id) : 1;
  const diaryEntry = diaryEntries[entryId as keyof typeof diaryEntries];
  const [reflection, setReflection] = useState<string | null>(null);
  
  useEffect(() => {
    // Load any saved reflection from localStorage
    if (id) {
      const savedReflection = localStorage.getItem(`reflection-${id}`);
      setReflection(savedReflection);
    }
  }, [id]);
  
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
          <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-accent/50">
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-4">
            <button className="text-muted-foreground hover:text-amber-400">
              <Star className="h-5 w-5" fill={diaryEntry.isBookmarked ? "#CCA25A" : "none"} />
            </button>
            
            <button className="text-muted-foreground hover:text-primary">
              
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
        
        {/* My Notes Section - Show only if there's a saved reflection */}
        {reflection && (
          <div className="mt-8 border-t border-border pt-4">
            <h2 className="text-xl font-medium mb-3">My Notes</h2>
            <div className="bg-accent/30 rounded-lg p-4">
              <p className="text-sm">{reflection}</p>
            </div>
          </div>
        )}
        
        <div className="fixed bottom-5 left-0 right-0 flex justify-center">
          <button 
            onClick={handleReflect} 
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            {reflection ? "Edit notes" : "Reflect on this"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default DiaryDetail;
