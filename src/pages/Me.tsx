
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Upload, Settings, ChevronRight, Info, Undo2, Bluetooth, WifiOff, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const Me: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNecklaceConnected, setIsNecklaceConnected] = useState(true);
  const [pairingStep, setPairingStep] = useState<number>(0);
  const [isPairingDialogOpen, setIsPairingDialogOpen] = useState(false);
  const [isPairingSheetOpen, setIsPairingSheetOpen] = useState(false);

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
    setPairingStep(1);
    setIsPairingDialogOpen(true);
  };

  const handleNext = () => {
    // Skipping step 3 (which was removed)
    if (pairingStep === 2) {
      setPairingStep(4);
    } else if (pairingStep < 5) {
      setPairingStep(prevStep => prevStep + 1);
    } else {
      // Finish pairing process
      setIsPairingDialogOpen(false);
      setIsPairingSheetOpen(false);
      setIsNecklaceConnected(true);
    }
  };

  const handleCancel = () => {
    setPairingStep(0);
    setIsPairingDialogOpen(false);
    setIsPairingSheetOpen(false);
  };

  const renderPairingContent = () => {
    switch (pairingStep) {
      case 1:
        return <DialogContent className="sm:max-w-md rounded-md">
            <DialogHeader>
              
            </DialogHeader>
            <div className="flex flex-col items-center py-8 space-y-4 text-white rounded-lg px-4 bg-nirva-beige">
              <div className="rounded-full p-6 bg-nirva-gold">
                <Droplet size={32} />
              </div>
              <h2 className="text-2xl font-semibold">Wake up your Nirva</h2>
              <p className="text-center">Your Nirva was put into a deep sleep for shipping. Put your Nirva on the charging pad. A light will appear within 10 seconds.</p>
            </div>
            <Button onClick={handleNext} className="w-full mt-4">Continue</Button>
          </DialogContent>;
      case 2:
        return <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-semibold">Setup your Pendant</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center py-10 space-y-4">
              <div className="bg-blue-600 rounded-full p-6">
                <Bluetooth className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-semibold">Connecting to your Pendant</h2>
              <p className="text-gray-500">Connecting to your pendant...</p>
              
              <div className="mt-32 w-full">
                <Sheet open={true}>
                  <SheetContent side="bottom" className="p-0 rounded-t-xl">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-center">Bluetooth Pairing Request</h3>
                      <p className="text-center my-2">"Nirva" would like to pair with your iPhone.</p>
                      <div className="flex border-t mt-4">
                        <Button variant="ghost" className="flex-1 border-r" onClick={handleCancel}>
                          Cancel
                        </Button>
                        <Button variant="ghost" className="flex-1 text-blue-500 font-semibold" onClick={handleNext}>
                          Pair
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </DialogContent>;
      case 4:
        return <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-semibold">Setup your Pendant</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center py-10 space-y-4 bg-purple-900 text-white rounded-lg px-4">
              <div className="bg-purple-800 rounded-full p-6">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M18 4h-2.5v-1.5h-7v1.5h-2.5v2h12v-2z" />
                  <path d="M10 10v7" />
                  <path d="M13.5 9l-3.5 3-3.5-3" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Wake up your Pendant</h2>
              <p className="text-center">
                Your Pendant was put into a deep sleep for shipping. Look in the box for a USB-C cable and 
                plug it in to wake it. A light will appear within 10 seconds.
              </p>
            </div>
            
            <div className="mt-6">
                <Button className="w-full" onClick={handleNext}>Continue</Button>
            </div>
          </DialogContent>;
      case 5:
        return <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-semibold">Setup your Pendant</DialogTitle>
            </DialogHeader>
            
            <div className="py-6 space-y-4">
              <div className="flex justify-center">
                <div className="bg-green-500 rounded-full p-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-center">Setup complete.</h2>
              <p className="text-gray-500 text-center">You may now wear your Nirva Necklace.</p>
              
              <div className="bg-gray-100 rounded-lg p-4 my-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 rounded-full p-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Firmware up to date</h3>
                    <p className="text-gray-500 text-sm">Your Nirva Necklace is on the latest firmware.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 my-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 rounded-full p-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Nirva Necklace paired successfully.</h3>
                    <p className="text-gray-500 text-sm">Next, we'll check for available updates.</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" onClick={handleNext}>Done</Button>
            </div>
          </DialogContent>;
      default:
        return null;
    }
  };

  return (
    <Layout title="Me">
      <div className="flex flex-col gap-4 px-4 py-5">
        {/* User Profile Section */}
        <div
          className="flex items-center w-full p-4 bg-background rounded-lg border border-border cursor-pointer"
          onClick={handleProfileClick}
        >
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
              {isNecklaceConnected && (
                <ChevronRight
                  className="text-muted-foreground cursor-pointer"
                  size={20}
                  onClick={handleNecklaceDetailsClick}
                />
              )}
            </div>
            
            {isNecklaceConnected ? (
              <>
                <div
                  className="flex flex-col items-center justify-center py-4 cursor-pointer"
                  onClick={handleNecklaceDetailsClick}
                >
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/lovable-uploads/c70c4b88-b8d7-4b5a-a76f-13ee369a2016.png"
                      alt="Nirva Necklace"
                      className="w-full h-full object-contain"
                    />
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
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <WifiOff className="text-muted-foreground mb-4" size={48} />
                <p className="text-muted-foreground mb-4">No device connected</p>
                <Button onClick={handleConnectNecklace} className="bg-primary text-primary-foreground">
                  Connect Your Necklace
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Settings List */}
        <Card className="border-border">
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              {/* Onboarding Row */}
              <li
                className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50"
                onClick={handleOnboardingClick}
              >
                <div className="flex items-center gap-3">
                  <Undo2 className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Onboarding</p>
                    <p className="text-sm text-muted-foreground">Restart the setup process</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li
                className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50"
                onClick={handleReflectionTimeClick}
              >
                <div className="flex items-center gap-3">
                  <Clock className="text-foreground" size={20} />
                  <div>
                    <p className="font-medium">Reflection Time</p>
                    <p className="text-sm text-muted-foreground">Set when you want daily reflections</p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </li>
              
              <li
                className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50"
                onClick={handlePrivacyControlsClick}
              >
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
              
              <li
                className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-accent/50"
                onClick={handleNirvaSettingsClick}
              >
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
      
      {/* Pairing Process Dialog */}
      <Dialog open={isPairingDialogOpen} onOpenChange={setIsPairingDialogOpen}>
        {renderPairingContent()}
      </Dialog>
    </Layout>
  );
};

export default Me;
