
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ReflectionPrompt from '../components/reflections/ReflectionPrompt';

// Sample reflection questions
const selfReflectionQuestions = [
  "How did you feel throughout the day today?",
  "What moment made you feel most alive or present today?",
  "What challenged you today, and how did you respond?",
  "What are you grateful for right now?",
  "What did you learn about yourself today?"
];

const goalReflectionQuestions = [
  "What progress did you make toward your goals today?",
  "What will you prioritize tomorrow and why?",
  "How could you improve your approach to challenges?"
];

const Reflections: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'self' | 'goals'>('self');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const questions = activeSection === 'self' ? selfReflectionQuestions : goalReflectionQuestions;
  const progress = Math.round(
    (Object.keys(answers).length / (selfReflectionQuestions.length + goalReflectionQuestions.length)) * 100
  );
  
  const handleSaveAnswer = (answer: string) => {
    const questionKey = `${activeSection}-${currentQuestionIndex}`;
    setAnswers({...answers, [questionKey]: answer});
    
    // Move to next question or section
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (activeSection === 'self') {
      setActiveSection('goals');
      setCurrentQuestionIndex(0);
    } else {
      // All questions answered
      setCurrentQuestionIndex(0);
      setActiveSection('self');
      // In a real app, we would save all answers here
    }
  };
  
  return (
    <Layout title="Daily Reflection">
      <div className="px-4 py-5">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>Reflection Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Section tabs */}
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 px-4 text-center rounded-l-lg ${
              activeSection === 'self' 
                ? 'bg-primary text-white' 
                : 'bg-muted'
            }`}
            onClick={() => {
              setActiveSection('self');
              setCurrentQuestionIndex(0);
            }}
          >
            Self-Reflection
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center rounded-r-lg ${
              activeSection === 'goals' 
                ? 'bg-primary text-white' 
                : 'bg-muted'
            }`}
            onClick={() => {
              setActiveSection('goals');
              setCurrentQuestionIndex(0);
            }}
          >
            Goal-Driven
          </button>
        </div>
        
        {/* Current question */}
        <ReflectionPrompt
          question={questions[currentQuestionIndex]}
          type={activeSection}
          onSave={handleSaveAnswer}
        />
        
        {/* Question navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 rounded-lg border border-border disabled:opacity-50"
          >
            Previous
          </button>
          
          <div className="flex items-center">
            {questions.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 w-2 rounded-full mx-1 ${
                  idx === currentQuestionIndex ? 'bg-primary' : 'bg-muted'
                }`}
              ></div>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentQuestionIndex(Math.min(questions.length - 1, currentQuestionIndex + 1))}
            disabled={currentQuestionIndex === questions.length - 1}
            className="px-4 py-2 rounded-lg border border-border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Reflections;
