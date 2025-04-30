
import React from 'react';
import Layout from '../components/layout/Layout';
import MoodChart from '../components/dashboard/MoodChart';
import TimeAllocation from '../components/dashboard/TimeAllocation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import EmotionFluxChart from '../components/dashboard/EmotionFluxChart';
import SocialMap from '../components/dashboard/SocialMap';

const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard">
      <div className="px-4 py-5 space-y-6">
        {/* Summary cards row - side by side */}
        <div className="grid grid-cols-2 gap-4">
          {/* Mood score card */}
          <Card>
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
          </Card>

          {/* Stress level card */}
          <Card>
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
          </Card>
        </div>

        {/* Emotion flux chart */}
        <EmotionFluxChart />
        
        <MoodChart />
        <TimeAllocation />
        
        {/* Social Map visualization */}
        <SocialMap />
        
        {/* Highlights section */}
        <div className="glass-card p-4">
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
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
