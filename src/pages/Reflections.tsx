
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Star, Award, TrendingUp, FileText, BookOpen, Users, Search, Calendar, Globe, ListTodo, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Reflections: React.FC = () => {
  const { toast } = useToast();

  // State for tracking which cards are expanded
  const [expandedPersonalCards, setExpandedPersonalCards] = useState<{[key: string]: boolean}>({
    gratitude: false,
    celebrations: false,
    improvements: false
  });
  
  const [expandedInsightCards, setExpandedInsightCards] = useState<{[key: string]: boolean}>({
    relationships: false,
    selfDiscovery: false,
    futurePlanning: false,
    culturalPerspectives: false
  });

  // Section 1: Gratitude and Personal Reflections
  const personalReflections = {
    gratitude: ["Deep conversations with friends who listen and share wisdom", "Access to art and film that opens my eyes to different perspectives", "The privilege to contemplate my future on my own terms"],
    celebrations: ["Making time for meaningful connections despite a busy schedule", "Being open to different cultural experiences and perspectives", "Taking steps to consider my future options thoughtfully"],
    improvements: ["Finding better balance between solitude and social connection", "Being more productive with my free time instead of oversleeping", "Managing feelings of envy about others' lives more constructively"]
  };

  // Extended content for personal reflections
  const extendedPersonalReflections = {
    gratitude: "In reflecting on what I'm grateful for today, I find myself particularly appreciative of the deep conversations I've had with friends who truly listen and offer their wisdom. There's something profoundly nourishing about being heard without judgment, about exchanging ideas with people who challenge my thinking in constructive ways. These conversations have helped me navigate complex emotions and decisions, offering perspectives I might never have considered on my own.\n\nI'm also grateful for my access to art and film that opens my eyes to different perspectives. Today's film about Tiananmen Square reminded me how art can transport us to different times and places, helping us understand historical and cultural contexts beyond our own experiences. These artistic windows into other worlds expand my empathy and deepen my understanding of humanity in all its complexity.\n\nFinally, I feel immense gratitude for the privilege to contemplate my future on my own terms. I recognize that having options regarding my fertility, career, and life path is not something available to everyone. This freedom to choose represents both opportunity and responsibility—to make thoughtful decisions that align with my values and goals.",
    celebrations: "Today I celebrate making time for meaningful connections despite my typically hectic schedule. In our fast-paced world, it's easy to prioritize productivity over presence, but I consciously carved out space to be fully present with Ashley and Trent. These connections weren't just casual interactions—they were deep exchanges that enriched my understanding of myself and others. I'm proud that I've maintained this commitment to authentic connection even when my calendar fills up with competing priorities.\n\nI also celebrate my openness to different cultural experiences and perspectives. From exploring metaphysical concepts with Ashley to engaging with challenging political history through film, I embraced opportunities to step outside my cultural comfort zone. This willingness to engage with unfamiliar ideas and perspectives reflects a growth mindset that I've been intentionally cultivating. Rather than dismissing ideas that don't immediately resonate, I've learned to approach them with curiosity.\n\nLastly, I celebrate taking steps to consider my future options thoughtfully. My reflections on fertility choices represent a balanced approach to major life decisions—considering both practical factors like finances and timing while also honoring my emotional responses and deeper values. This thoughtful approach prevents impulsive decisions while still moving me forward toward clarity.",
    improvements: "When it comes to areas for improvement, I recognize I need to find a better balance between solitude and social connection. While I value my independence and time alone, I sometimes isolate myself when feeling overwhelmed, which can lead to disconnection from important relationships. I'd benefit from developing more strategies for maintaining social connections even during periods when my energy for interaction is low. This might include shorter check-ins, nature walks with friends that don't require constant conversation, or group activities that provide structure to social time.\n\nI also need to be more productive with my free time instead of oversleeping. While adequate rest is important, I notice a pattern where excess free time often leads to oversleeping rather than engaging in activities that energize and fulfill me. This pattern seems to emerge particularly when I feel directionless or overwhelmed by options. Creating more structure for my free time—planning specific activities in advance and setting gentle alarms—could help me use this time more intentionally for activities that contribute to my well-being and goals.\n\nFinally, I want to manage feelings of envy about others' lives more constructively. When I observe friends with stable family structures or clear life paths, I sometimes experience envy that isn't particularly helpful for my own growth. I could transform this energy by getting curious about exactly what I'm envious of and using these insights to clarify my own values and aspirations. Additionally, practicing gratitude more systematically might help counter these feelings of lack with an appreciation for what's present in my own life."
  };

  // Section 2: Insight Categories (existing data)
  const reflectionCategories = [{
    title: "Relationships",
    icon: <Users className="h-5 w-5 text-nirva-soft-peach" />,
    key: "relationships",
    insights: ["Deep conversations with friends provide invaluable emotional support and perspective.", "I value authentic connections but feel frustrated by unpredictable dating experiences.", "Being 'ghosted' after meaningful connections is a recurring pattern that causes confusion."]
  }, {
    title: "Self-Discovery",
    icon: <Search className="h-5 w-5 text-nirva-soft-peach" />,
    key: "selfDiscovery",
    insights: ["I'm contemplating the balance between solitude and social connection in my life.", "When I have excess free time, I tend toward unproductive behaviors like oversleeping.", "I feel both curious about and envious of others' stable family lives."]
  }, {
    title: "Future Planning",
    icon: <Calendar className="h-5 w-5 text-nirva-soft-peach" />,
    key: "futurePlanning",
    insights: ["I'm considering egg freezing and planning to make decisions about children by age 40.", "Financial considerations and family support are important factors in my fertility decisions.", "I'm open to alternative pathways to parenthood beyond traditional routes."]
  }, {
    title: "Cultural Perspectives",
    icon: <Globe className="h-5 w-5 text-nirva-soft-peach" />,
    key: "culturalPerspectives",
    insights: ["Art and film provide windows into different cultural and historical experiences.", "My family background gives me a unique perspective on political events like Tiananmen Square.", "I'm exploring philosophical concepts from different cultures like Tibetan Buddhist compassion."]
  }];

  // Extended content for insight categories
  const extendedInsights = {
    relationships: "My experiences with relationships lately have been both enriching and challenging. The deep conversations I've had with close friends like Ashley and Trent have provided invaluable emotional support and perspective that I couldn't gain elsewhere. These friends create safe spaces where I can express vulnerability and work through complex emotions without fear of judgment. I've noticed these authentic connections share common elements: mutual vulnerability, active listening, and a genuine interest in each other's growth.\n\nOn the other hand, my dating experiences have followed a frustratingly unpredictable pattern. While I value authentic connection in all relationships, the dating landscape seems particularly volatile. Initial connections that feel promising and genuine often dissolve without explanation, leaving me questioning what went wrong or whether I misread the situation entirely.\n\nThis pattern of being 'ghosted' after what seemed like meaningful connections is recurring and causes significant confusion and emotional distress. I find myself analyzing interactions, wondering if I missed signs or somehow contributed to the sudden disconnection. This pattern makes it difficult to trust new connections and sometimes leads me to preemptively withdraw to protect myself from potential rejection. I'm working on maintaining openness despite these experiences while also developing healthier expectations and boundaries in early dating stages.",
    selfDiscovery: "My journey of self-discovery continues to revolve around finding the right balance between solitude and social connection. While I deeply value my independence and time alone for reflection and recharging, I also recognize my fundamental need for meaningful human connection. The challenge lies in determining the optimal ratio that supports my wellbeing—too much solitude leads to disconnection and rumination, while too much socialization depletes my energy and prevents necessary introspection.\n\nI've also noticed a concerning pattern in how I manage excess free time. Rather than using unstructured time for creative pursuits, physical activity, or mindful rest, I often default to oversleeping. This habit seems to function as an avoidance strategy when I feel overwhelmed by options or underlying anxiety. The irony is that oversleeping typically leaves me feeling more lethargic and disconnected, creating a counterproductive cycle.\n\nPerhaps most interesting is my complex emotional response to observing others' stable family lives. I experience a mixture of curiosity and envy when I see friends who have created traditional family structures. This ambivalence reflects my ongoing process of defining my own path—I'm not convinced I want exactly what they have, yet I sometimes feel the absence of that stability. This tension is pushing me to clarify my own values around family and connection, beyond societal expectations or comparative thinking.",
    futurePlanning: "My approach to future planning has become increasingly focused on reproductive decisions as I enter my mid-thirties. I'm seriously considering egg freezing as a way to extend my fertility options, giving myself more time to make thoughtful decisions about parenthood. Setting 40 as a target age for making definitive decisions about children gives me a timeline that balances biological realities with my need for psychological readiness.\n\nThe practical aspects of these fertility decisions weigh heavily in my considerations. Financial planning is essential, as procedures like egg freezing involve significant costs for the initial process, ongoing storage, and potential future IVF treatments. I'm fortunate that my family has expressed willingness to provide support for these options, which introduces both relief and complexity—accepting such support creates certain implicit obligations and expectations that I need to navigate carefully.\n\nBeyond the traditional biological pathways to parenthood, I'm increasingly open to alternative routes. Adoption, fostering, or choosing a child-free life all remain viable options in my thinking. Each path offers different rewards and challenges, and I'm working to evaluate them based on my core values rather than defaulting to conventional expectations. This openness helps me feel less pressure about any single option working out and more focused on finding the path that truly aligns with my authentic desires for connection, contribution, and growth.",
    culturalPerspectives: "My engagement with diverse cultural perspectives has been particularly rich lately, especially through art and film experiences. The Chinese film 'Summer Palace' offered a window into the complex political and social dynamics surrounding Tiananmen Square, presenting historical events through personal stories that made distant history feel immediate and emotionally resonant. This immersive cultural experience expanded my understanding beyond what factual accounts could provide, highlighting art's unique power to bridge cultural and historical divides.\n\nMy family background has given me a unique lens through which I interpret political events like Tiananmen Square. Having relatives with direct connections to Chinese political history provides personal context to events often discussed abstractly in Western media. This intersection of personal history with broader political narratives creates a nuanced perspective that acknowledges both the systemic factors at play and the very real human experiences within those systems.\n\nI've also been exploring philosophical concepts from different cultural traditions, particularly finding resonance with Tibetan Buddhist approaches to compassion. These perspectives offer alternatives to Western individualism, suggesting frameworks where compassion for self and others isn't seen as separate but deeply interconnected. I appreciate how these cultural philosophies challenge assumptions I didn't even realize I held, particularly around independence versus interdependence. These explorations aren't just academic—they're reshaping how I approach relationships, self-care, and my understanding of fulfillment in daily life."
  };

  // Section 3: Potential Goals
  const potentialGoals = [{
    id: 1,
    title: "Deepen meaningful relationships",
    subTasks: ["Schedule monthly deep conversations with close friends", "Join a community group aligned with my interests", "Practice active listening techniques"]
  }, {
    id: 2,
    title: "Explore fertility options",
    subTasks: ["Research egg freezing clinics and costs", "Schedule consultation with fertility specialist", "Create financial plan for family planning options"]
  }, {
    id: 3,
    title: "Expand cultural understanding",
    subTasks: ["Watch one international film per week", "Read books from diverse cultural perspectives", "Attend cultural events in my community"]
  }];

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

  // Toggle expanded state for personal reflection cards
  const togglePersonalCard = (cardKey: string) => {
    setExpandedPersonalCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  // Toggle expanded state for insight cards
  const toggleInsightCard = (cardKey: string) => {
    setExpandedInsightCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  return <Layout title="Reflections">
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
            <Collapsible open={expandedPersonalCards.gratitude} onOpenChange={() => togglePersonalCard('gratitude')}>
              <Card className="border-nirva-soft-green/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 flex flex-row items-center">
                  <Star className="h-5 w-5 text-nirva-soft-green mr-2" />
                  <CardTitle className="text-lg">I am feeling grateful for:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {personalReflections.gratitude.map((item, i) => <li key={i} className="flex items-start">
                        <div className="h-2 w-2 bg-nirva-soft-yellow rounded-full mt-2 mr-2 flex-shrink-0 bg-nirva-cream"></div>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                  
                  <CollapsibleContent className="mt-4 text-muted-foreground">
                    <p className="whitespace-pre-line">{extendedPersonalReflections.gratitude}</p>
                  </CollapsibleContent>
                </CardContent>
                <CardFooter className="pt-0 pb-4 px-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full flex items-center justify-center border border-nirva-soft-green/30">
                      {expandedPersonalCards.gratitude ? (
                        <>Less <ChevronUp className="ml-1 h-4 w-4" /></>
                      ) : (
                        <>Read More <ChevronDown className="ml-1 h-4 w-4" /></>
                      )}
                    </Button>
                  </CollapsibleTrigger>
                </CardFooter>
              </Card>
            </Collapsible>

            <Collapsible open={expandedPersonalCards.celebrations} onOpenChange={() => togglePersonalCard('celebrations')}>
              <Card className="border-nirva-soft-yellow/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 flex flex-row items-center">
                  <Award className="h-5 w-5 text-nirva-soft-yellow mr-2" />
                  <CardTitle className="text-lg">I can celebrate:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {personalReflections.celebrations.map((item, i) => <li key={i} className="flex items-start">
                        <div className="h-2 w-2 bg-nirva-soft-yellow rounded-full mt-2 mr-2 flex-shrink-0 bg-nirva-cream"></div>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                  
                  <CollapsibleContent className="mt-4 text-muted-foreground">
                    <p className="whitespace-pre-line">{extendedPersonalReflections.celebrations}</p>
                  </CollapsibleContent>
                </CardContent>
                <CardFooter className="pt-0 pb-4 px-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full flex items-center justify-center border border-nirva-soft-yellow/30">
                      {expandedPersonalCards.celebrations ? (
                        <>Less <ChevronUp className="ml-1 h-4 w-4" /></>
                      ) : (
                        <>Read More <ChevronDown className="ml-1 h-4 w-4" /></>
                      )}
                    </Button>
                  </CollapsibleTrigger>
                </CardFooter>
              </Card>
            </Collapsible>

            <Collapsible open={expandedPersonalCards.improvements} onOpenChange={() => togglePersonalCard('improvements')}>
              <Card className="border-nirva-soft-blue/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 flex flex-row items-center">
                  <TrendingUp className="h-5 w-5 text-nirva-soft-blue mr-2" />
                  <CardTitle className="text-lg">I can do better at:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {personalReflections.improvements.map((item, i) => <li key={i} className="flex items-start">
                        <div className="h-2 w-2 bg-nirva-soft-yellow rounded-full mt-2 mr-2 flex-shrink-0 bg-nirva-cream"></div>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                  
                  <CollapsibleContent className="mt-4 text-muted-foreground">
                    <p className="whitespace-pre-line">{extendedPersonalReflections.improvements}</p>
                  </CollapsibleContent>
                </CardContent>
                <CardFooter className="pt-0 pb-4 px-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full flex items-center justify-center border border-nirva-soft-blue/30">
                      {expandedPersonalCards.improvements ? (
                        <>Less <ChevronUp className="ml-1 h-4 w-4" /></>
                      ) : (
                        <>Read More <ChevronDown className="ml-1 h-4 w-4" /></>
                      )}
                    </Button>
                  </CollapsibleTrigger>
                </CardFooter>
              </Card>
            </Collapsible>
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
              <Collapsible 
                key={index} 
                open={expandedInsightCards[category.key]} 
                onOpenChange={() => toggleInsightCard(category.key)}
              >
                <Card className="border-nirva-soft-peach/30 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 flex flex-row items-center">
                    {category.icon}
                    <CardTitle className="text-lg ml-2">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.insights.map((insight, i) => <li key={i} className="flex items-start">
                          <div className="h-2 w-2 bg-nirva-soft-yellow rounded-full mt-2 mr-2 flex-shrink-0 bg-nirva-cream"></div>
                          <span>{insight}</span>
                        </li>)}
                    </ul>
                    
                    <CollapsibleContent className="mt-4 text-muted-foreground">
                      <p className="whitespace-pre-line">{extendedInsights[category.key as keyof typeof extendedInsights]}</p>
                    </CollapsibleContent>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 px-6">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full flex items-center justify-center border border-nirva-soft-peach/30">
                        {expandedInsightCards[category.key] ? (
                          <>Less <ChevronUp className="ml-1 h-4 w-4" /></>
                        ) : (
                          <>Read More <ChevronDown className="ml-1 h-4 w-4" /></>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </CardFooter>
                </Card>
              </Collapsible>
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
            {potentialGoals.map(goal => <Card key={goal.id} className="border-nirva-soft-purple/30 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-nirva-soft-purple mr-2" />
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => handleAddToTodoList(goal.id)} className="text-primary hover:text-primary/70">
                    <ListTodo className="h-4 w-4 mr-1" />
                    To-Do
                  </Button>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {goal.subTasks.map((task, i) => <li key={i} className="flex items-start">
                        <div className="h-2 w-2 bg-nirva-soft-yellow rounded-full mt-2 mr-2 flex-shrink-0 bg-nirva-cream"></div>
                        <span>{task}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </section>
      </div>
    </Layout>;
};
export default Reflections;
