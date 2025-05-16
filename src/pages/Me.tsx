
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Upload, Settings, ChevronRight, Info, Undo2 } from 'lucide-react';
const Me: React.FC = () => {
  const navigate = useNavigate();
  const handleOnboardingClick = () => {
    navigate('/onboarding');
  };
  const handleProfileClick = () => {
    navigate('/user-profile');
  };
  const handleNirvaSettingsClick = () => {
    navigate('/nirva-voice');
  };
  const handleReflectionTimeClick = () => {
    navigate('/notification-settings');
  };
  const handlePrivacyControlsClick = () => {
    navigate('/privacy-controls');
  };
  return <Layout title="Me">
      <div className="flex flex-col gap-4 px-4 py-5">
        {/* User Profile Section */}
        <div className="flex items-center w-full p-4 bg-background rounded-lg border border-border cursor-pointer" onClick={handleProfileClick}>
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
              {/* The empty div with rounded border has been removed */}
            </div>
            
            <div className="flex items-center justify-between px-2 py-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-3 bg-green-500 rounded-sm"></div>
                <span className="text-foreground">Battery Level</span>
              </div>
              <div className="flex items-center gap-2">
                <span>88%</span>
                <Info size={16} className="text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings List */}
        <Card className="border-border">
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              {/* Onboarding Row */}
              <li className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50" onClick={handleOnboardingClick}>
                <div className="flex items-center gap-3">
                  <Undo2 className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Onboarding</p>
                    <p className="text-sm text-muted-foreground">Restart the setup process</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50" onClick={handleReflectionTimeClick}>
                <div className="flex items-center gap-3">
                  <Clock className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Reflection Time</p>
                    <p className="text-sm text-muted-foreground">Set when you want daily reflections</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50" onClick={handlePrivacyControlsClick}>
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
                  <Upload className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Update Data</p>
                    <p className="text-sm text-muted-foreground">Upload your recorded audio</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50" onClick={handleNirvaSettingsClick}>
                <div className="flex items-center gap-3">
                  <Settings className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Nirva Settings</p>
                    <p className="text-sm text-muted-foreground">Customize Nirva's voice</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>;
};
export default Me;
