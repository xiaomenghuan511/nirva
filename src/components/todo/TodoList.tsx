
import React, { useState } from 'react';
import { X, ListCheck, Check } from 'lucide-react';

interface TodoListProps {
  onClose: () => void;
}

interface Todo {
  id: number;
  title: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  subtasks?: { id: number; title: string; completed: boolean }[];
}

// Sample to-do data
const initialTodos: Todo[] = [
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
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Try to get todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });
  
  // Toggle todo completion status
  const toggleTodoCompletion = (todoId: number, subtaskId?: number) => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.map(todo => {
        if (subtaskId !== undefined && todo.id === todoId && todo.subtasks) {
          // Toggle a subtask
          return {
            ...todo,
            subtasks: todo.subtasks.map(subtask => 
              subtask.id === subtaskId 
                ? { ...subtask, completed: !subtask.completed } 
                : subtask
            )
          };
        } else if (todo.id === todoId) {
          // Toggle the main todo
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

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
          <div className="flex items-center">
            <ListCheck className="h-5 w-5 mr-2 text-primary" />
            <h2 className="font-medium">To-Do List</h2>
          </div>
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
                      className="space-y-1"
                    >
                      <div 
                        className={`p-2 rounded-lg flex items-start ${
                          todo.completed ? 'bg-muted/50' : 'bg-card hover:bg-accent/10'
                        } cursor-pointer`}
                        onClick={() => toggleTodoCompletion(todo.id)}
                      >
                        <div 
                          className={`h-3 w-3 rounded-full mt-1 mr-2 flex-shrink-0 ${
                            priorityColors[todo.priority]
                          }`}
                        ></div>
                        <span className={`text-sm flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {todo.title}
                        </span>
                        {todo.completed && (
                          <Check className="h-3 w-3 text-muted-foreground ml-1" />
                        )}
                      </div>
                      
                      {/* Render subtasks if they exist */}
                      {todo.subtasks && todo.subtasks.length > 0 && (
                        <div className="pl-5 space-y-1">
                          {todo.subtasks.map(subtask => (
                            <div 
                              key={subtask.id}
                              className={`p-1.5 rounded-lg flex items-start ${
                                subtask.completed ? 'bg-muted/30' : 'bg-card/50 hover:bg-accent/5'
                              } cursor-pointer`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleTodoCompletion(todo.id, subtask.id);
                              }}
                            >
                              <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                              <span className={`text-xs flex-1 ${subtask.completed ? 'line-through text-muted-foreground' : ''}`}>
                                {subtask.title}
                              </span>
                              {subtask.completed && (
                                <Check className="h-3 w-3 text-muted-foreground ml-1" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
          
          <button className="w-full mt-2 p-2 text-sm text-primary hover:bg-accent/20 rounded-lg flex items-center justify-center">
            <Check className="h-4 w-4 mr-1" /> Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
