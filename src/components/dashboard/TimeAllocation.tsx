
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Work', hours: 8, color: '#9b87f5' },
  { name: 'Sleep', hours: 7, color: '#D3E4FD' },
  { name: 'Exercise', hours: 1, color: '#a0e4b3' },
  { name: 'Social', hours: 2, color: '#FFDEE2' },
  { name: 'Learning', hours: 1.5, color: '#FDE1D3' },
  { name: 'Self-care', hours: 1, color: '#FEF7CD' },
  { name: 'Other', hours: 3.5, color: '#F1F0FB' },
];

const TimeAllocation: React.FC = () => {
  return (
    <div className="glass-card p-4">
      <h3 className="font-medium mb-3">Time Allocation</h3>
      
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
              unit="h"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeAllocation;
