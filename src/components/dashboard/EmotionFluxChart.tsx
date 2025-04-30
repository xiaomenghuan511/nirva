
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

// Sample data for the emotion/energy flux throughout the day
const fluxData = [
  { time: '6:00', level: 5, event: '' },
  { time: '7:00', level: 6, event: 'Morning meditation' },
  { time: '8:30', level: 7.5, event: 'Coffee with partner' },
  { time: '10:00', level: 8, event: 'Productive work session' },
  { time: '12:00', level: 7, event: '' },
  { time: '13:00', level: 6.5, event: 'Lunch with colleagues' },
  { time: '14:00', level: 4, event: 'Difficult client meeting' },
  { time: '15:30', level: 3, event: '' },
  { time: '16:00', level: 5, event: 'Solved a tough problem' },
  { time: '17:30', level: 7, event: 'Evening walk' },
  { time: '19:00', level: 8, event: 'Dinner with friends' },
  { time: '21:00', level: 6, event: '' },
  { time: '22:00', level: 4.5, event: 'Preparing for tomorrow' },
];

// Highlight specific points that represent significant events
const highlightPoints = [
  { time: '8:30', level: 7.5, label: 'Coffee with partner' },
  { time: '10:00', level: 8, label: 'Productive work session' },
  { time: '14:00', level: 4, label: 'Difficult client meeting' },
  { time: '16:00', level: 5, label: 'Solved a tough problem' },
  { time: '17:30', level: 7, label: 'Evening walk' },
  { time: '19:00', level: 8, label: 'Dinner with friends' },
];

const EmotionFluxChart: React.FC = () => {
  const chartConfig = {
    line: { theme: { light: '#9b87f5', dark: '#9b87f5' } },
    grid: { theme: { light: '#f0f0f0', dark: '#333' } },
    positive: { theme: { light: '#a0e4b3', dark: '#a0e4b3' } },
    negative: { theme: { light: '#FFDEE2', dark: '#FFDEE2' } },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Energy & Emotion Flux</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">
          Your mood and energy levels throughout today, with key events highlighted
        </div>
        
        <div className="h-72">
          <ChartContainer config={chartConfig}>
            <LineChart data={fluxData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 10]} 
                ticks={[0, 2, 4, 6, 8, 10]} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => {
                  if (value === 0) return 'Low';
                  if (value === 5) return 'Neutral';
                  if (value === 10) return 'High';
                  return '';
                }}
              />
              <ReferenceLine y={5} stroke="#D3E4FD" strokeWidth={2} strokeDasharray="3 3" />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="p-2 bg-background border rounded-md shadow-md">
                        <p className="font-medium">{data.time}</p>
                        <p className="text-sm">Energy level: {data.level}/10</p>
                        {data.event && <p className="text-sm text-muted-foreground">{data.event}</p>}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="level"
                stroke="#9b87f5"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6, fill: '#9b87f5' }}
              />
              
              {/* Highlight specific points */}
              {highlightPoints.map((point, index) => {
                const dataPoint = fluxData.find(d => d.time === point.time);
                if (!dataPoint) return null;
                
                return (
                  <ReferenceLine
                    key={index}
                    x={point.time}
                    stroke="#9b87f5"
                    strokeDasharray="3 3"
                    label={{
                      value: point.label,
                      position: 'top',
                      fill: '#9b87f5',
                      fontSize: 10,
                      offset: 10
                    }}
                  />
                );
              })}
            </LineChart>
          </ChartContainer>
        </div>
        
        <div className="flex justify-between text-sm mt-4 text-muted-foreground">
          <div>Morning</div>
          <div>Afternoon</div>
          <div>Evening</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionFluxChart;
