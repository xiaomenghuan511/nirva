
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Download } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const NecklaceDetails: React.FC = () => {
  const [showForgetDialog, setShowForgetDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleForget = () => {
    setShowForgetDialog(false);
    toast({
      title: "Device forgotten",
      description: "Your Nirva Necklace has been successfully disconnected."
    });
    navigate('/me', { state: { necklaceForgotten: true } });
  };

  return (
    <Layout title="Nirva Necklace" showBackButton={true} backTo="/me">
      <div className="flex flex-col gap-4 px-4 py-6">
        {/* General Info Section */}
        <div className="space-y-2">
          <h3 className="text-lg text-muted-foreground font-medium px-2">GENERAL</h3>
          
          <Card className="border-border">
            <CardContent className="p-0">
              {/* Name */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-foreground">Name</span>
                <span className="text-foreground font-medium">Nirva Necklace</span>
              </div>
              
              {/* Serial Number */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-foreground">Serial Number</span>
                <span className="text-muted-foreground">8800030143627074</span>
              </div>
              
              {/* Storage */}
              <div className="flex items-center justify-between p-4 border-b border-border cursor-pointer">
                <span className="text-foreground">Storage</span>
                <div className="flex items-center gap-2">
                  <span className="text-foreground">Nirva Necklace</span>
                  <ChevronRight className="text-muted-foreground" size={18} />
                </div>
              </div>
              
              {/* Firmware */}
              <div className="flex items-center justify-between p-4">
                <span className="text-foreground">Firmware Update</span>
                <div className="flex items-center gap-2">
                  <span className="text-foreground">V0192</span>
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Status Section */}
        <div className="space-y-2">
          <h3 className="text-lg text-muted-foreground font-medium px-2">STATUS</h3>
          
          <Card className="border-border">
            <CardContent className="p-0">
              {/* Battery */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-foreground">Battery</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-3 bg-green-500 rounded-sm"></div>
                  <span>88%</span>
                </div>
              </div>
              
              {/* Storage */}
              <div className="flex items-center justify-between p-4">
                <span className="text-foreground">Storage</span>
                <div className="flex items-center gap-2">
                  <span className="text-foreground">1.2GB of 8GB</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Maintenance Section */}
        <div className="space-y-2">
          <h3 className="text-lg text-muted-foreground font-medium px-2">MAINTENANCE</h3>
          
          <Card className="border-border">
            <CardContent className="p-0">
              {/* Update Firmware */}
              <div className="flex items-center justify-between p-4 border-b border-border cursor-pointer">
                <span className="text-foreground">Update Firmware</span>
                <div className="flex items-center gap-2">
                  <Download size={18} className="text-muted-foreground" />
                </div>
              </div>
              
              {/* Factory Reset */}
              <div className="flex items-center justify-between p-4">
                <span className="text-foreground">Forget This Device</span>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => setShowForgetDialog(true)}
                >
                  Forget
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Forget Device Dialog */}
      <Dialog open={showForgetDialog} onOpenChange={setShowForgetDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Forget Device</DialogTitle>
            <DialogDescription>
              Are you sure you want to forget this device? This will disconnect your Nirva Necklace and remove it from your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowForgetDialog(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleForget}>Forget Device</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default NecklaceDetails;
