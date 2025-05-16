
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import ReflectionPrompt from '../components/reflections/ReflectionPrompt';

// Single reflection question that combines feeling and learning
const guidedQuestion = "How did you feel about this experience? What have you learned?";

const ReflectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [answer, setAnswer] = React.useState('');
  
  const handleBack = () => {
    navigate(-1);
  };
  
  const handleSaveAnswer = (answer: string) => {
    // Save answer to localStorage so it persists between page views
    if (id) {
      localStorage.setItem(`reflection-${id}`, answer);
    }
    
    // Navigate back to the diary detail page after answering
    navigate(`/diary/${id}`);
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex justify-between items-center px-4 h-14">
          <button 
            onClick={handleBack}
            className="p-2 -ml-2 rounded-full hover:bg-accent/50"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <h1 className="text-lg font-medium">Guided Reflection</h1>
          
          <div className="w-9"></div> {/* Empty div for centering title */}
        </div>
      </header>
      
      {/* Content */}
      <main className="pt-14 px-4 py-5">
        <ReflectionPrompt
          question={guidedQuestion}
          type="self"
          onSave={handleSaveAnswer}
        />
      </main>
    </div>
  );
};

export default ReflectDetail;
