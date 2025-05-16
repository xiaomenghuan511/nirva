import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Upload, Settings, ChevronRight, Info, Undo2, Bluetooth, WifiOff, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
const Me: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    toast
  } = useToast();
  const [isNecklaceConnected, setIsNecklaceConnected] = useState(true);
  const [isPairingDialogOpen, setIsPairingDialogOpen] = useState(false);
  const [pairingStep, setPairingStep] = useState<'wakeup' | 'bluetooth' | 'complete'>(null);

  // Check if the necklace was forgotten when coming from NecklaceDetails
  useEffect(() => {
    if (location.state?.necklaceForgotten) {
      setIsNecklaceConnected(false);
    }
  }, [location.state]);
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
  const handleNecklaceDetailsClick = () => {
    navigate('/necklace-details');
  };
  const handleConnectNecklace = () => {
    // Start the pairing process
    setIsPairingDialogOpen(true);
    setPairingStep('wakeup');
  };
  const handleWakeupContinue = () => {
    // Move to the Bluetooth pairing step
    setPairingStep('bluetooth');
  };
  const handleBluetoothPair = () => {
    // Move to the completion step
    setPairingStep('complete');
  };
  const handlePairingComplete = () => {
    // Close the dialog and set the necklace as connected
    setIsPairingDialogOpen(false);
    setPairingStep(null);
    setIsNecklaceConnected(true);
    toast({
      title: "Device Connected",
      description: "Your Nirva Necklace has been successfully paired."
    });
  };
  const handleCancelPairing = () => {
    // Cancel the pairing process
    setIsPairingDialogOpen(false);
    setPairingStep(null);
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
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Nirva Necklace</h3>
              {isNecklaceConnected && <ChevronRight className="text-muted-foreground cursor-pointer" size={20} onClick={handleNecklaceDetailsClick} />}
            </div>
            
            {isNecklaceConnected ? <>
                <div className="flex flex-col items-center justify-center py-4 cursor-pointer" onClick={handleNecklaceDetailsClick}>
                  <div className="w-32 h-32 relative mb-3">
                    <img src="/lovable-uploads/c70c4b88-b8d7-4b5a-a76f-13ee369a2016.png" alt="Nirva Necklace" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-green-500 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Connected
                  </span>
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
              </> : <div className="flex flex-col items-center justify-center py-8">
                
                <p className="text-muted-foreground mb-4">No device connected</p>
                <Button onClick={handleConnectNecklace} className="bg-primary text-primary-foreground">
                  Connect Your Necklace
                </Button>
              </div>}
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

      {/* Pairing Dialogs based on the screenshots */}
      <Dialog open={isPairingDialogOpen} onOpenChange={setIsPairingDialogOpen}>
        <DialogContent className="max-w-md rounded-md">
          {pairingStep === 'wakeup' && <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-nirva-gold">
                <div className="text-white w-10 h-10">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5C8.141 5 5 8.141 5 12C5 15.859 8.141 19 12 19C15.859 19 19 15.859 19 12C19 8.141 15.859 5 12 5ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z" fill="white" />
                    <path d="M12 9C11.448 9 11 9.448 11 10V12C11 12.552 11.448 13 12 13C12.552 13 13 12.552 13 12V10C13 9.448 12.552 9 12 9Z" fill="white" />
                  </svg>
                </div>
              </div>
              <DialogTitle className="text-3xl font-semibold mb-4 text-center">Wake up your Nirva</DialogTitle>
              <p className="text-center text-muted-foreground mb-8">
                Your Nirva was put into a deep sleep for shipping. Put your Nirva on the charging pad. A light will appear within 10 seconds.
              </p>
              <Button onClick={handleWakeupContinue} className="w-full text-white py-6 rounded-full bg-nirva-gold">
                Continue
              </Button>
            </div>}

          {pairingStep === 'bluetooth' && <div className="flex flex-col items-center">
              <DialogTitle className="text-2xl font-semibold mb-4">Bluetooth Pairing Request</DialogTitle>
              <p className="text-center text-lg mb-8">"Nirva" would like to pair with your iPhone.</p>
              <div className="flex w-full gap-4">
                <Button variant="outline" onClick={handleCancelPairing} className="flex-1 text-muted-foreground border-muted">
                  Cancel
                </Button>
                <Button onClick={handleBluetoothPair} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                  Pair
                </Button>
              </div>
            </div>}

          {pairingStep === 'complete' && <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-nirva-gold">
                <Check className="text-white" size={48} />
              </div>
              <DialogTitle className="text-3xl font-semibold mb-4">Setup complete.</DialogTitle>
              <p className="text-center text-xl text-gray-500 mb-8">You may now wear your Nirva Necklace.</p>
              
              <div className="w-full bg-gray-50 rounded-lg p-4 mb-3">
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-2 bg-nirva-gold">
                    <Check className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Firmware up to date</p>
                    <p className="text-gray-500">Your Nirva Necklace is on the latest firmware.</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-50 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-2 bg-nirva-gold">
                    <Check className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Nirva Necklace paired successfully.</p>
                    <p className="text-gray-500">Next, we'll check for available updates.</p>
                  </div>
                </div>
              </div>
              
              <Button onClick={handlePairingComplete} className="w-full text-white py-6 rounded-full bg-nirva-gold">
                Done
              </Button>
            </div>}
        </DialogContent>
      </Dialog>
    </Layout>;
};
export default Me;