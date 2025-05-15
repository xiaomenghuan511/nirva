
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Sun, Moon, BarChart } from 'lucide-react';

const NotificationSettings: React.FC = () => {
  const navigate = useNavigate();
  const [morningEnabled, setMorningEnabled] = useState(true);
  const [eveningEnabled, setEveningEnabled] = useState(true);
  const [weeklyEnabled, setWeeklyEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex items-center p-4 border-b border-border bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-10">
        <button onClick={() => navigate('/me')} className="text-foreground">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium ml-4">Notifications</h1>
      </div>

      <div className="pt-16 px-4 pb-24">
        {/* Enable Notifications Banner */}
        <div className="bg-white dark:bg-card rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="text-nirva-gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">Enable Notifications</h2>
              <p className="text-muted-foreground mt-1">
                You haven't enabled notifications yet. Enabling notifications can help you build a consistent habit and stay on track with your goals.
              </p>
              <Button 
                variant="default"
                className="w-full mt-4 rounded-full py-6 bg-nirva-gold hover:bg-nirva-soft-gold text-nirva-neutral-heading flex items-center justify-center"
              >
                Go to settings
              </Button>
            </div>
          </div>
        </div>

        {/* Daily Notifications */}
        <h3 className="text-lg font-medium mb-4">Daily Notifications</h3>
        
        <div className="bg-white dark:bg-card rounded-xl mb-6 overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-foreground">
                  <Sun className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Morning Intention</p>
                  <p className="text-sm text-muted-foreground">Kickstart your day with mindful reflections and insights</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <span className="text-lg">9:00am</span>
                <Switch 
                  checked={morningEnabled} 
                  onCheckedChange={setMorningEnabled}
                  className="data-[state=checked]:bg-nirva-gold" 
                />
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-foreground">
                  <Moon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Evening Reflection</p>
                  <p className="text-sm text-muted-foreground">Wrap up your day with thoughtful reflections and insights</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <span className="text-lg">10:00pm</span>
                <Switch 
                  checked={eveningEnabled} 
                  onCheckedChange={setEveningEnabled} 
                  className="data-[state=checked]:bg-nirva-gold" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Weekly Notifications */}
        <h3 className="text-lg font-medium mb-4">Weekly Notifications</h3>
        
        <div className="bg-white dark:bg-card rounded-xl">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-foreground">
                  <BarChart className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Weekly Report</p>
                  <p className="text-sm text-muted-foreground">Get notified when your weekly report is ready, every Sunday.</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <span className="text-lg">1:00pm</span>
                <Switch 
                  checked={weeklyEnabled}
                  onCheckedChange={setWeeklyEnabled}
                  className="data-[state=checked]:bg-nirva-gold" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
