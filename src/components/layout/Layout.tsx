
import React from 'react';
import Navigation from './Navigation';
import TodoButton from '../todo/TodoButton';
import AiAssistant from '../ai/AiAssistant';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex justify-between items-center px-4 h-14">
          <h1 className="text-lg font-medium">{title || 'Nirva'}</h1>
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
