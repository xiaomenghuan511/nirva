
import React from 'react';
import { X } from 'lucide-react';

interface TodoListProps {
  onClose: () => void;
}

// Sample to-do data
const todos = [
  { id: 1, title: 'Morning meditation', category: 'Wellness', priority: 'high', completed: false },
  { id: 2, title: 'Prepare presentation for meeting', category: 'Work', priority: 'high', completed: false },
  { id: 3, title: 'Call mom', category: 'Personal', priority: 'medium', completed: true },
  { id: 4, title: 'Schedule dentist appointment', category: 'Health', priority: 'low', completed: false },
  { id: 5, title: 'Evening reading - 30 mins', category: 'Wellness', priority: 'medium', completed: false },
];

const priorityColors = {
  high: 'bg-red-500',
  medium: 'bg-amber-400',
  low: 'bg-green-500'
};

const TodoList: React.FC<TodoListProps> = ({ onClose }) => {
  const categories = [...new Set(todos.map(todo => todo.category))];
  
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="absolute right-0 top-14 w-80 max-h-[70vh] glass-card overflow-hidden animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-background p-3 border-b border-border flex items-center justify-between">
          <h2 className="font-medium">Todo List</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-accent/50">
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="p-2 overflow-y-auto max-h-[calc(70vh-60px)]">
          {categories.map(category => (
            <div key={category} className="mb-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2 px-2">{category}</h3>
              
              <div className="space-y-1">
                {todos
                  .filter(todo => todo.category === category)
                  .map(todo => (
                    <div 
                      key={todo.id}
                      className={`p-2 rounded-lg flex items-start ${
                        todo.completed ? 'bg-muted/50' : 'bg-card hover:bg-accent/10'
                      }`}
                    >
                      <div 
                        className={`h-3 w-3 rounded-full mt-1 mr-2 flex-shrink-0 ${
                          priorityColors[todo.priority as keyof typeof priorityColors]
                        }`}
                      ></div>
                      <span className={`text-sm flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {todo.title}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          
          <button className="w-full mt-2 p-2 text-sm text-primary hover:bg-accent/20 rounded-lg">
            + Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
