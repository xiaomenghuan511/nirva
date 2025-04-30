
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  Star, 
  Award, 
  TrendingUp,
  FileText,
  BookOpen,
  Users,
  Search,
  Calendar,
  Globe,
  ListTodo
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Reflections: React.FC = () => {
  const { toast } = useToast();

  // Section 1: Gratitude and Personal Reflections
  const personalReflections = {
    gratitude: [
      "Deep conversations with friends who listen and share wisdom",
      "Access to art and film that opens my eyes to different perspectives",
      "The privilege to contemplate my future on my own terms"
    ],
    celebrations: [
      "Making time for meaningful connections despite a busy schedule",
      "Being open to different cultural experiences and perspectives",
      "Taking steps to consider my future options thoughtfully"
    ],
    improvements: [
      "Finding better balance between solitude and social connection",
      "Being more productive with my free time instead of oversleeping",
      "Managing feelings of envy about others' lives more constructively"
    ]
  };

  // Section 2: Insight Categories (existing data)
  const reflectionCategories = [
    {
      title: "Relationships",
      icon: <Users className="h-5 w-5 text-nirva-soft-peach" />,
      insights: [
        "Deep conversations with friends provide invaluable emotional support and perspective.",
        "I value authentic connections but feel frustrated by unpredictable dating experiences.",
        "Being 'ghosted' after meaningful connections is a recurring pattern that causes confusion."
      ]
    },
    {
      title: "Self-Discovery",
      icon: <Search className="h-5 w-5 text-nirva-soft-peach" />,
      insights: [
        "I'm contemplating the balance between solitude and social connection in my life.",
        "When I have excess free time, I tend toward unproductive behaviors like oversleeping.",
        "I feel both curious about and envious of others' stable family lives."
      ]
    },
    {
      title: "Future Planning",
      icon: <Calendar className="h-5 w-5 text-nirva-soft-peach" />,
      insights: [
        "I'm considering egg freezing and planning to make decisions about children by age 40.",
        "Financial considerations and family support are important factors in my fertility decisions.",
        "I'm open to alternative pathways to parenthood beyond traditional routes."
      ]
    },
    {
      title: "Cultural Perspectives",
      icon: <Globe className="h-5 w-5 text-nirva-soft-peach" />,
      insights: [
        "Art and film provide windows into different cultural and historical experiences.",
        "My family background gives me a unique perspective on political events like Tiananmen Square.",
        "I'm exploring philosophical concepts from different cultures like Tibetan Buddhist compassion."
      ]
    }
  ];

  // Section 3: Potential Goals
  const potentialGoals = [
    {
      id: 1,
      title: "Deepen meaningful relationships",
      subTasks: [
        "Schedule monthly deep conversations with close friends",
        "Join a community group aligned with my interests",
        "Practice active listening techniques"
      ]
    },
    {
      id: 2,
      title: "Explore fertility options",
      subTasks: [
        "Research egg freezing clinics and costs",
        "Schedule consultation with fertility specialist",
        "Create financial plan for family planning options"
      ]
    },
    {
      id: 3,
      title: "Expand cultural understanding",
      subTasks: [
        "Watch one international film per week",
        "Read books from diverse cultural perspectives",
        "Attend cultural events in my community"
      ]
    }
  ];

  const handleAddToTodoList = (goalId: number) => {
    // Find the goal by ID
    const goal = potentialGoals.find(g => g.id === goalId);
    
    // In a real app, we would add this goal to the todo list in a database
    // For now, just show a toast notification
    toast({
      title: "Added to todo list",
      description: `"${goal?.title}" and ${goal?.subTasks.length} tasks have been added to your todo list.`
    });
  };

  return (
    <Layout title="Reflections">
      <div className="px-4 py-5 space-y-10">
        <div className="bg-nirva-soft-yellow/60 p-6 rounded-xl">
          <h2 className="text-xl font-medium mb-3">April 19, 2025 Reflections</h2>
          <p className="text-muted-foreground">
            Today was a day of deep conversations with friends, self-reflection, and cultural experiences. My emotions
            fluctuated between relaxation, joy, reflection, slight anxiety, and nostalgia.
          </p>
        </div>
        
        {/* Section 1: Personal Reflections */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 bg-nirva-soft-green/30 rounded-full flex items-center justify-center">
              <Star className="h-4 w-4 text-nirva-soft-green" />
            </div>
            <h2 className="text-lg font-medium">Personal Reflections</h2>
          </div>
          
          <div className="space-y-4">
            <Card className="border-nirva-soft-green/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 flex flex-row items-center">
                <Star className="h-5 w-5 text-nirva-soft-green mr-2" />
                <CardTitle className="text-lg">I am feeling grateful for:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {personalReflections.gratitude.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-2 w-2 bg-nirva-soft-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-nirva-soft-yellow/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 flex flex-row items-center">
                <Award className="h-5 w-5 text-nirva-soft-yellow mr-2" />
                <CardTitle className="text-lg">I can celebrate:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {personalReflections.celebrations.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-2 w-2 bg-nirva-soft-yellow rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-nirva-soft-blue/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 flex flex-row items-center">
                <TrendingUp className="h-5 w-5 text-nirva-soft-blue mr-2" />
                <CardTitle className="text-lg">I can do better at:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {personalReflections.improvements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-2 w-2 bg-nirva-soft-blue rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Section 2: Insights (existing data) */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 bg-nirva-soft-peach/30 rounded-full flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-nirva-soft-peach" />
            </div>
            <h2 className="text-lg font-medium">Detailed Insights</h2>
          </div>
          
          <div className="space-y-4">
            {reflectionCategories.map((category, index) => (
              <Card key={index} className="border-nirva-soft-peach/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 flex flex-row items-center">
                  {category.icon}
                  <CardTitle className="text-lg ml-2">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.insights.map((insight, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-2 w-2 bg-nirva-soft-peach rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Section 3: Potential Goals */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 bg-nirva-soft-purple/30 rounded-full flex items-center justify-center">
              <FileText className="h-4 w-4 text-nirva-soft-purple" />
            </div>
            <h2 className="text-lg font-medium">I can consider pursuing the following goals:</h2>
          </div>
          
          <div className="space-y-4">
            {potentialGoals.map((goal) => (
              <Card key={goal.id} className="border-nirva-soft-purple/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-nirva-soft-purple mr-2" />
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleAddToTodoList(goal.id)}
                    className="text-primary hover:text-primary/70"
                  >
                    <ListTodo className="h-4 w-4 mr-1" />
                    To-Do
                  </Button>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {goal.subTasks.map((task, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-2 w-2 bg-nirva-soft-purple rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Reflections;
