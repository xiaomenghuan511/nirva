
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Cloud, ToggleRight } from 'lucide-react';

const PrivacyControls: React.FC = () => {
  const [cloudEnabled, setCloudEnabled] = React.useState(true);
  const [nirvaAppEnabled, setNirvaAppEnabled] = React.useState(true);
  const [nirvaNecklaceEnabled, setNirvaNecklaceEnabled] = React.useState(true);
  
  return (
    <Layout title="Privacy Controls">
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
      </div>
    </Layout>
  );
};

export default PrivacyControls;
