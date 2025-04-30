
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

// Energy level data throughout the day based on the description
const energyData = [
  { time: '10:00', level: 5, event: 'Start of day' },
  { time: '10:30', level: 7, event: 'Park session with Ashley' },
  { time: '11:30', level: 9, event: 'Deep Talk & Tarot Reading w/ Ashley' },
  { time: '13:00', level: 5.5, event: 'Ashley leaves, transition period' },
  { time: '13:30', level: 7, event: 'Drive with Trent begins' },
  { time: '14:30', level: 8, event: 'Engaging Drive & Philosophy w/ Trent' },
  { time: '14:50', level: 3, event: 'Cafe Stop - Anxiety & Disappointment' },
  { time: '15:10', level: 5, event: 'Movie starts' },
  { time: '16:30', level: 6, event: 'Immersed in movie' },
  { time: '17:40', level: 7, event: 'Post-movie walk begins' },
  { time: '18:30', level: 8.5, event: 'Post-Movie Discussion & Dinner' },
  { time: '19:00', level: 8, event: 'Evening continues' },
];

// Define key moments to highlight
const keyMoments = [
  { time: '11:30', label: 'Deep Talk & Tarot Reading w/ Ashley', level: 9 },
  { time: '14:30', label: 'Engaging Drive & Philosophy w/ Trent', level: 8 },
  { time: '14:50', label: 'Cafe Stop - Anxiety & Disappointment', level: 3 },
  { time: '18:30', label: 'Post-Movie Discussion & Dinner', level: 8.5 }
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
        <CardTitle className="text-lg font-medium">Energy Level</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ChartContainer config={chartConfig}>
            <LineChart data={energyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 10]} 
                ticks={[0, 2.5, 5, 7.5, 10]} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => {
                  if (value === 0) return 'Low';
                  if (value === 2.5) return 'Low';
                  if (value === 5) return 'Neutral';
                  if (value === 7.5) return 'High';
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
              
              {/* Highlight key moments */}
              {keyMoments.map((moment, index) => (
                <ReferenceLine
                  key={index}
                  x={moment.time}
                  stroke="#9b87f5"
                  strokeDasharray="3 3"
                  label={{
                    value: moment.label,
                    position: moment.level > 5 ? 'top' : 'bottom',
                    fill: '#9b87f5',
                    fontSize: 10,
                    offset: 10
                  }}
                />
              ))}
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionFluxChart;
