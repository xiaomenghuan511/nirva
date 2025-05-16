
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import TodoButton from '../todo/TodoButton';
import AiAssistant from '../ai/AiAssistant';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  backTo?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, showBackButton, backTo }) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex justify-between items-center px-4 h-14">
          <div className="flex items-center gap-3">
            {showBackButton && (
              <button 
                onClick={handleBack}
                className="flex items-center justify-center"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h1 className="text-lg font-medium">{title || 'Nirva'}</h1>
          </div>
          <TodoButton />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="pt-14 pb-20">
        {children}
      </main>
      
      {/* AI Assistant */}
      <AiAssistant />
      
      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default Layout;
