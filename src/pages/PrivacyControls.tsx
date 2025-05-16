import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Apple, ArrowRight, BookText, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const PrivacyControls: React.FC = () => {
  const [cloudEnabled, setCloudEnabled] = React.useState(true);
  const [nirvaAppEnabled, setNirvaAppEnabled] = React.useState(true);
  const [nirvaNecklaceEnabled, setNirvaNecklaceEnabled] = React.useState(true);
  const [journalingSuggestionsEnabled, setJournalingSuggestionsEnabled] = React.useState(true);
  const [appleHealthEnabled, setAppleHealthEnabled] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [healthDialogOpen, setHealthDialogOpen] = React.useState(false);
  
  const handleJournalSuggestionClick = () => {
    // In a real app, this would use platform-specific APIs to open system settings
    // For the web demo, we'll show a dialog explaining what would happen
    setDialogOpen(true);
  };
  
  const handleAppleHealthClick = () => {
    // In a real app, this would open Apple Health settings
    // For the web demo, we'll show a dialog explaining what would happen
    setHealthDialogOpen(true);
  };
  
  return (
    <Layout 
      title="Privacy Controls" 
      showBackButton={true}
      backTo="/me"
    >
      <div className="flex flex-col gap-6 px-4 py-6">
        {/* Private Cloud Card */}
        <Card className="border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col items-center p-6 text-center">
              <div className="bg-secondary w-20 h-20 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="h-10 w-10 text-foreground" />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-medium">Nirva <span className="font-bold">PRIVATE CLOUD</span></h2>
                  <p className="text-muted-foreground">
                    Nirva Private Cloud is your private and secure cloud storage service
                  </p>
                </div>
                
                <ul className="text-left space-y-4 pl-6">
                  <li className="flex items-baseline gap-2">
                    <span className="font-medium">1.</span>
                    <span>Ensures your data is backed up to prevent loss.</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="font-medium">2.</span>
                    <span>Automatically syncs data across APP and WEB for streamlined management.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connected Devices */}
        <div className="space-y-4">
          <h3 className="text-lg text-muted-foreground font-medium px-2">CONNECTED DEVICES</h3>
          
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Device 1 - Nirva App */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="bg-background border border-border rounded-md w-10 h-14 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Nirva App</h4>
                    <p className="text-muted-foreground text-sm">This iPhone 13 Pro Max</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={nirvaAppEnabled} 
                    onCheckedChange={setNirvaAppEnabled}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
              
              {/* Device 2 - Nirva Necklace */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-background border border-border rounded-md w-10 h-14 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Nirva Necklace</h4>
                    <p className="text-muted-foreground text-sm">DEVICE-W2RJK-45</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={nirvaNecklaceEnabled} 
                    onCheckedChange={setNirvaNecklaceEnabled} 
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* User Permissions - New Section */}
        <div className="space-y-4">
          <h3 className="text-lg text-muted-foreground font-medium px-2">USER PERMISSIONS</h3>
          
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Journaling Suggestions */}
              <div 
                className="flex items-center justify-between p-4 border-b border-border cursor-pointer hover:bg-muted/50"
                onClick={handleJournalSuggestionClick}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-background border border-border rounded-md w-10 h-10 flex items-center justify-center">
                    <BookText className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Journaling Suggestions</h4>
                    <p className="text-muted-foreground text-sm">Allow Nirva to suggest journal topics</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              
              {/* Apple Health Sync */}
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50"
                onClick={handleAppleHealthClick}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-background border border-border rounded-md w-10 h-10 flex items-center justify-center">
                    <Apple className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Sync with Apple Health</h4>
                    <p className="text-muted-foreground text-sm">Access health data for better insights</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* System Settings Dialog (Simulates Apple system page for Journaling) */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Journaling Suggestions</DialogTitle>
            <DialogDescription className="text-center pt-4">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-500 w-16 h-16 rounded-xl flex items-center justify-center">
                  <BookText className="h-8 w-8 text-white" />
                </div>
              </div>
              <p className="text-base mb-4">
                iPhone uses on-device intelligence to create journaling suggestions based on your everyday moments.
              </p>
              
              <div className="flex items-center gap-3 my-6 justify-start text-left">
                <div className="bg-blue-500 rounded-full p-2">
                  <BookText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Curated for You</h4>
                  <p className="text-sm text-muted-foreground">
                    Suggestions can help you reflect on topics you might want to write about.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 my-6 justify-start text-left">
                <div className="bg-blue-500 rounded-full p-2">
                  <BookText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Your Data Stays Private</h4>
                  <p className="text-sm text-muted-foreground">
                    Journaling apps can only access your data if it is included in a suggestion.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Turn On Journaling Suggestions</Button>
                <Button variant="ghost" onClick={() => setDialogOpen(false)}>Not Now</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
      {/* Apple Health Dialog (Simulates Apple Health settings page) */}
      <Dialog open={healthDialogOpen} onOpenChange={setHealthDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Apple Health</DialogTitle>
            <DialogDescription className="text-center pt-4">
              <div className="flex justify-center mb-6">
                <div className="bg-red-400 w-16 h-16 rounded-xl flex items-center justify-center">
                  <Apple className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-3">automatically sync your data with apple health.</h2>
              
              <p className="text-base mb-6">
                Integrating Nirva with Apple Health allows you to easily track and manage your mental well-being. 
                By syncing State of Mind and Mindful Minutes data, you'll get a comprehensive view of your 
                mindfulness progress, alongside other health metrics, all in one convenient place.
              </p>
              
              <div className="mt-12 flex flex-col gap-4">
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-full">
                  Sync Health Data
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PrivacyControls;
