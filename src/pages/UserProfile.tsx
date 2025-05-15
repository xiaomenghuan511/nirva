
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Camera, ArrowLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/me');
  };

  const handleLogout = () => {
    // In a real app, we would clear session/auth state here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background px-4 py-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={handleBack} className="text-foreground">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-medium text-center flex-grow">Account & Profile</h1>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </div>

      {/* Profile Avatar */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>WW</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 bg-background rounded-full p-1 border border-border">
            <Camera size={18} className="text-foreground" />
          </div>
        </div>
      </div>

      {/* Profile Options */}
      <div className="space-y-4">
        {/* Name Option */}
        <Card className="border-border">
          <div className="flex items-center justify-between p-4 cursor-pointer">
            <span className="text-foreground">Name</span>
            <div className="flex items-center text-muted-foreground">
              <span className="mr-2">Weiwei</span>
              <ChevronRight size={20} />
            </div>
          </div>
        </Card>

        {/* Manage Logins Option */}
        <Card className="border-border">
          <div className="flex items-center justify-between p-4 cursor-pointer">
            <span className="text-foreground">Manage My Logins</span>
            <ChevronRight size={20} className="text-muted-foreground" />
          </div>
        </Card>

        {/* Log Out Button */}
        <Button
          variant="outline" 
          className="w-full py-6 bg-muted hover:bg-muted/80 text-foreground"
          onClick={handleLogout}
        >
          Log Out
        </Button>

        {/* Spacer */}
        <div className="h-16"></div>

        {/* Delete Account Button and warning have been removed */}
      </div>
    </div>
  );
};

export default UserProfile;
