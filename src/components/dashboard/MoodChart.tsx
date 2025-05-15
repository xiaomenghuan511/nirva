
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data
const moodData = [
  { name: 'Happy', value: 40, color: '#a0e4b3' },
  { name: 'Calm', value: 30, color: '#9b87f5' },
  { name: 'Focused', value: 20, color: '#D3E4FD' },
  { name: 'Stressed', value: 10, color: '#FFDEE2' },
];

const MoodChart: React.FC = () => {
  return (
    <div className="glass-card p-4">
      <h3 className="font-medium mb-3">Mood Tracking</h3>
      
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={moodData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {moodData.map((entry, index) => (
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
