
import React from 'react';
import Layout from '../components/layout/Layout';
import MoodChart from '../components/dashboard/MoodChart';
import TimeAllocation from '../components/dashboard/TimeAllocation';

const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard">
      <div className="px-4 py-5 space-y-6">
        <MoodChart />
        <TimeAllocation />
        
        {/* Highlights section */}
        <div className="glass-card p-4">
          <h3 className="font-medium mb-3">Today's Highlights</h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-nirva-soft-purple rounded-lg">
              <div className="text-xs font-medium text-muted-foreground mb-1">ACHIEVEMENT</div>
              <p>Completed your morning meditation streak - 7 days!</p>
            </div>
            
            <div className="p-3 bg-nirva-soft-green rounded-lg">
              <div className="text-xs font-medium text-muted-foreground mb-1">INSIGHT</div>
              <p>You're most productive between 9-11 AM. Consider scheduling important tasks during this time.</p>
            </div>
            
            <div className="p-3 bg-nirva-soft-peach rounded-lg">
              <div className="text-xs font-medium text-muted-foreground mb-1">SOCIAL</div>
              <p>You've connected with 3 friends this week - maintaining strong relationships!</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
