
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface MoodChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  period: 'day' | 'week' | 'month' | 'year';
}

// Sample data
const moodData = {
  day: [
    { name: 'Happy', value: 40, color: '#a0e4b3' },
    { name: 'Calm', value: 30, color: '#9b87f5' },
    { name: 'Focused', value: 20, color: '#D3E4FD' },
    { name: 'Stressed', value: 10, color: '#FFDEE2' },
  ],
  week: [
    { name: 'Happy', value: 35, color: '#a0e4b3' },
    { name: 'Calm', value: 25, color: '#9b87f5' },
    { name: 'Focused', value: 20, color: '#D3E4FD' },
    { name: 'Stressed', value: 15, color: '#FFDEE2' },
    { name: 'Tired', value: 5, color: '#FDE1D3' },
  ],
  month: [
    { name: 'Happy', value: 30, color: '#a0e4b3' },
    { name: 'Calm', value: 20, color: '#9b87f5' },
    { name: 'Focused', value: 15, color: '#D3E4FD' },
    { name: 'Stressed', value: 20, color: '#FFDEE2' },
    { name: 'Tired', value: 10, color: '#FDE1D3' },
    { name: 'Anxious', value: 5, color: '#F1F0FB' },
  ],
  year: [
    { name: 'Happy', value: 25, color: '#a0e4b3' },
    { name: 'Calm', value: 20, color: '#9b87f5' },
    { name: 'Focused', value: 15, color: '#D3E4FD' },
    { name: 'Stressed', value: 15, color: '#FFDEE2' },
    { name: 'Tired', value: 15, color: '#FDE1D3' },
    { name: 'Anxious', value: 10, color: '#F1F0FB' },
  ],
};

const MoodChart: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState<'day' | 'week' | 'month' | 'year'>('day');
  
  return (
    <div className="glass-card p-4">
      <h3 className="font-medium mb-3">Mood Tracking</h3>
      
      <div className="flex justify-between mb-4">
        {(['day', 'week', 'month', 'year'] as const).map((period) => (
          <button
            key={period}
            className={`px-3 py-1 text-sm rounded-full ${
              activePeriod === period 
                ? 'bg-primary text-white' 
                : 'bg-accent/50 text-foreground'
            }`}
            onClick={() => setActivePeriod(period)}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={moodData[activePeriod]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {moodData[activePeriod].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodChart;
