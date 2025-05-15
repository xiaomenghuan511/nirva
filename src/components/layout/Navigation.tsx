
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, BarChart3, MessageSquare, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => path === route ? 'tab-active' : '';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-10">
      <div className="flex justify-around items-center h-16 px-4">
        <Link to="/" className={`flex flex-col items-center group ${isActive('/')}`}>
          <BookOpen className="nav-icon" />
          <span className="nav-text">Smart Diary</span>
        </Link>
        
        <Link to="/reflections" className={`flex flex-col items-center group ${isActive('/reflections')}`}>
          <MessageSquare className="nav-icon" />
          <span className="nav-text">Reflections</span>
        </Link>
        
        <Link to="/dashboard" className={`flex flex-col items-center group ${isActive('/dashboard')}`}>
          <BarChart3 className="nav-icon" />
          <span className="nav-text">Dashboard</span>
        </Link>

        <Link to="/me" className={`flex flex-col items-center group ${isActive('/me')}`}>
          <User className="nav-icon" />
          <span className="nav-text">Me</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
