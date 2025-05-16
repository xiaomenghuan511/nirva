
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import MoodChart from '../components/dashboard/MoodChart';
import TimeAllocation from '../components/dashboard/TimeAllocation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import EmotionFluxChart from '../components/dashboard/EmotionFluxChart';
import SocialMap from '../components/dashboard/SocialMap';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  
  // Sample past highlights data
  const pastHighlights = {
    weekly: [
      {
        week: 'May 9 - May 15, 2025',
        items: [
          { type: 'ACHIEVEMENT', content: 'Completed 5 meditation sessions' },
          { type: 'INSIGHT', content: 'Your stress levels were 20% lower when you exercised in the morning' },
          { type: 'SOCIAL', content: 'Connected with 4 friends this week' }
        ]
      },
      {
        week: 'May 2 - May 8, 2025',
        items: [
          { type: 'ACHIEVEMENT', content: 'Hit your step goal 6 days in a row' },
          { type: 'INSIGHT', content: 'You sleep better on days when you read before bed' },
          { type: 'SOCIAL', content: 'Had meaningful conversations with 3 family members' }
        ]
      }
    ],
    monthly: [
      {
        month: 'April 2025',
        items: [
          { type: 'ACHIEVEMENT', content: 'Reduced screen time by 15% compared to March' },
          { type: 'INSIGHT', content: 'Your mood score improved significantly during weeks with outdoor activities' },
          { type: 'SOCIAL', content: 'Expanded your social circle with 2 new connections' }
        ]
      },
      {
        month: 'March 2025',
        items: [
          { type: 'ACHIEVEMENT', content: 'Completed a 30-day mindfulness challenge' },
          { type: 'INSIGHT', content: 'Working in 25-minute focus sessions increased your productivity by 22%' },
          { type: 'SOCIAL', content: 'Reconnected with 5 old friends' }
        ]
      }
    ]
  };

  const navigateToTrend = (metricType: string) => {
    navigate(`/trends/${metricType}`);
  };

  // Get highlight background color based on type
  const getHighlightBgClass = (type: string) => {
    switch(type) {
      case 'ACHIEVEMENT': return 'bg-nirva-soft-purple';
      case 'INSIGHT': return 'bg-nirva-soft-green';
      case 'SOCIAL': return 'bg-nirva-soft-peach';
      default: return 'bg-gray-100';
    }
  };

  return (
    <Layout title="Dashboard">
      <div className="px-4 py-5 space-y-6">
        {/* Summary cards row - side by side */}
        <div className="grid grid-cols-2 gap-4">
          {/* Mood score card */}
          <Card className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Mood Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-4xl font-bold">7.8</div>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-5 w-5 mr-1" />
                  <span className="text-sm">+0.5</span>
                </div>
              </div>
            </CardContent>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => navigateToTrend('mood')}
              aria-label="View mood trends"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>

          {/* Stress level card */}
          <Card className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Stress Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-4xl font-bold">3.2</div>
                <div className="flex items-center text-green-500">
                  <TrendingDown className="h-5 w-5 mr-1" />
                  <span className="text-sm">-1.3</span>
                </div>
              </div>
            </CardContent>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => navigateToTrend('stress')}
              aria-label="View stress trends"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </div>

        {/* Emotion flux chart */}
        <EmotionFluxChart onViewTrend={() => navigateToTrend('energy')} />
        
        {/* Mood chart with arrow */}
        <div className="relative">
          <MoodChart />
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => navigateToTrend('mood-detail')}
            aria-label="View detailed mood trends"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Time allocation with arrow */}
        <div className="relative">
          <TimeAllocation />
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => navigateToTrend('time')}
            aria-label="View time allocation trends"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Social Map visualization */}
        <SocialMap />
        
        {/* Highlights section */}
        <div className="glass-card p-4 relative">
          <h3 className="font-medium mb-3">Today's Highlights</h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-nirva-soft-purple rounded-lg">
              <div className="text-xs font-medium text-muted-foreground mb-1">ACHIEVEMENT</div>
              <p>Completed your morning meditation streak - 7 days!</p>
            </div>
            
            <div className="p-3 bg-nirva-soft-green rounded-lg">
              <div className="text-xs font-medium text-muted-foreground mb-1">INSIGHT</div>
              <p>You're most productive between 9-11 AM. Consider scheduling important tasks during this time.</p>
            </div>
            
            <div className="p-3 bg-nirva-soft-peach rounded-lg">
              <div className="text-xs font-medium text-muted-foreground mb-1">SOCIAL</div>
              <p>You've connected with 3 friends this week - maintaining strong relationships!</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => setHighlightsOpen(true)}
            aria-label="View archived highlights"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Archives Sheet */}
      <Sheet open={highlightsOpen} onOpenChange={setHighlightsOpen}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader className="mb-4">
            <SheetTitle>Archived Highlights</SheetTitle>
          </SheetHeader>
          
          <Tabs defaultValue="weekly">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekly" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {pastHighlights.weekly.map((week, index) => (
                  <AccordionItem key={index} value={`week-${index}`}>
                    <AccordionTrigger>{week.week}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {week.items.map((highlight, i) => (
                          <div 
                            key={i} 
                            className={`p-3 rounded-lg ${getHighlightBgClass(highlight.type)}`}
                          >
                            <div className="text-xs font-medium text-muted-foreground mb-1">{highlight.type}</div>
                            <p>{highlight.content}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="monthly" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {pastHighlights.monthly.map((month, index) => (
                  <AccordionItem key={index} value={`month-${index}`}>
                    <AccordionTrigger>{month.month}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {month.items.map((highlight, i) => (
                          <div 
                            key={i} 
                            className={`p-3 rounded-lg ${getHighlightBgClass(highlight.type)}`}
                          >
                            <div className="text-xs font-medium text-muted-foreground mb-1">{highlight.type}</div>
                            <p>{highlight.content}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </Layout>
  );
};

export default Dashboard;
