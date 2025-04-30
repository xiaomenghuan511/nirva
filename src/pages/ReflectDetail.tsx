
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReflectionPrompt from '../components/reflections/ReflectionPrompt';

const guidedQuestions = [
  "How did this experience make you feel?",
  "What thoughts came up during this experience?",
  "What did you learn from this experience?",
  "How might this experience impact your future actions or decisions?",
];

const ReflectDetail: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  
  const handleBack = () => {
    navigate(-1);
  };
  
  const handleSaveAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
    
    if (currentQuestionIndex < guidedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, navigate back
      navigate(-1);
    }
  };
  
  const progress = ((currentQuestionIndex + 1) / guidedQuestions.length) * 100;
  
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
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>Question {currentQuestionIndex + 1} of {guidedQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <ReflectionPrompt
          question={guidedQuestions[currentQuestionIndex]}
          type="self"
          onSave={handleSaveAnswer}
        />
      </main>
    </div>
  );
};

export default ReflectDetail;
