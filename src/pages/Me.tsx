
import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  Avatar, 
  AvatarImage, 
  AvatarFallback 
} from '@/components/ui/avatar';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  Clock, 
  Bell, 
  Shield, 
  Download, 
  Settings, 
  ChevronRight, 
  Info 
} from 'lucide-react';

const Me: React.FC = () => {
  return (
    <Layout title="Me">
      <div className="flex flex-col gap-4 px-4 py-5">
        {/* User Profile Section */}
        <div className="flex items-center w-full p-4 bg-background rounded-lg border border-border">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>WW</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex-grow">
            <h2 className="text-lg font-medium">Weiwei</h2>
          </div>
          <ChevronRight className="text-muted-foreground" size={20} />
        </div>

        {/* Device Section */}
        <Card className="border-border">
          <CardContent className="p-4 space-y-2">
            <h3 className="text-lg font-medium mb-2">Nirva Necklace</h3>
            <div className="flex items-center justify-center">
              <span className="text-green-500 text-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Connected
              </span>
            </div>
            
            <div className="flex justify-center my-4">
              <div className="rounded-lg overflow-hidden border border-border p-1">
                <img 
                  src="/lovable-uploads/957d9c4b-3a8d-4de6-9846-74215013098e.png" 
                  alt="Nirva Necklace"
                  className="w-full max-w-[200px] rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between px-2 py-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-3 bg-green-500 rounded-sm"></div>
                <span className="text-foreground">Battery Level</span>
              </div>
              <div className="flex items-center gap-2">
                <span>High</span>
                <Info size={16} className="text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings List */}
        <Card className="border-border">
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              <li className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Reflection Time</p>
                    <p className="text-sm text-muted-foreground">Set when you want daily reflections</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <Bell className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Notifications</p>
                    <p className="text-sm text-muted-foreground">Manage app alerts and reminders</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <Shield className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Privacy Controls</p>
                    <p className="text-sm text-muted-foreground">Manage your data and sharing preferences</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <Download className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Export Data</p>
                    <p className="text-sm text-muted-foreground">Download your journal and insights</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <Settings className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">General Settings</p>
                    <p className="text-sm text-muted-foreground">Language, theme, and app preferences</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Me;
