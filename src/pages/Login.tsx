
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // This would handle authentication in a real app
    navigate('/me');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-8">
      {/* Back Button */}
      <button onClick={handleBack} className="text-primary self-start mb-8">
        <ArrowLeft size={24} />
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between">
        <div className="w-full text-center mb-12">
          <h1 className="text-3xl font-semibold mb-16">Log In</h1>
        </div>

        <div className="w-full space-y-4 mb-8">
          {/* Apple Login Button */}
          <Button 
            variant="outline" 
            className="w-full py-6 bg-foreground text-background rounded-full flex items-center justify-center"
            onClick={handleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Continue with Apple
          </Button>

          {/* Google Login Button */}
          <Button 
            variant="outline" 
            className="w-full py-6 bg-[#4285F4] text-white rounded-full flex items-center justify-center"
            onClick={handleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            Continue with Google
          </Button>

          {/* Email Login Button */}
          <Button 
            variant="outline" 
            className="w-full py-6 bg-background text-foreground border border-border rounded-full flex items-center justify-center"
            onClick={handleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Continue with email
          </Button>
        </div>

        {/* Terms */}
        <div className="text-center text-xs text-muted-foreground mt-auto mb-8">
          <p>
            By signing up to this app you agree with our{' '}
            <a href="#" className="text-primary underline">Terms of Use</a> and{' '}
            <a href="#" className="text-primary underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
