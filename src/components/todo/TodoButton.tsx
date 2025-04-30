
import React, { useState } from 'react';
import { List } from 'lucide-react';
import TodoList from './TodoList';

const TodoButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="relative p-2 rounded-full hover:bg-accent/50 transition-colors"
      >
        <List className="h-5 w-5" />
        <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">
          3
        </span>
      </button>
      
      {isOpen && <TodoList onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default TodoButton;
