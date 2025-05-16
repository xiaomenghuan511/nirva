
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for each metric type
const mockData = {
  mood: {
    daily: [{
      day: 'Sat',
      value: 81
    }, {
      day: 'Sun',
      value: 85
    }, {
      day: 'Mon',
      value: 76
    }, {
      day: 'Tue',
      value: 82
    }, {
      day: 'Wed',
      value: 80
    }, {
      day: 'Thu',
      value: 85
    }, {
      day: 'Fri',
      value: 83
    }],
    weekly: [{
      week: 'Week 1',
      value: 78
    }, {
      week: 'Week 2',
      value: 82
    }, {
      week: 'Week 3',
      value: 79
    }, {
      week: 'Week 4',
      value: 85
    }],
    monthly: [{
      month: 'Jan',
      value: 75
    }, {
      month: 'Feb',
      value: 78
    }, {
      month: 'Mar',
      value: 80
    }, {
      month: 'Apr',
      value: 82
    }, {
      month: 'May',
      value: 85
    }]
  },
  stress: {
    daily: [{
      day: 'Sat',
      value: 4.2
    }, {
      day: 'Sun',
      value: 3.5
    }, {
      day: 'Mon',
      value: 5.3
    }, {
      day: 'Tue',
      value: 4.1
    }, {
      day: 'Wed',
      value: 3.2
    }, {
      day: 'Thu',
      value: 2.9
    }, {
      day: 'Fri',
      value: 3.3
    }],
    weekly: [{
      week: 'Week 1',
      value: 4.5
    }, {
      week: 'Week 2',
      value: 3.8
    }, {
      week: 'Week 3',
      value: 3.2
    }, {
      week: 'Week 4',
      value: 2.9
    }],
    monthly: [{
      month: 'Jan',
      value: 5.2
    }, {
      month: 'Feb',
      value: 4.8
    }, {
      month: 'Mar',
      value: 4.3
    }, {
      month: 'Apr',
      value: 3.7
    }, {
      month: 'May',
      value: 3.2
    }]
  },
  energy: {
    daily: [{
      day: 'Sat',
      value: 7.2
    }, {
      day: 'Sun',
      value: 7.8
    }, {
      day: 'Mon',
      value: 6.5
    }, {
      day: 'Tue',
      value: 7.1
    }, {
      day: 'Wed',
      value: 8.0
    }, {
      day: 'Thu',
      value: 7.5
    }, {
      day: 'Fri',
      value: 8.3
    }],
    weekly: [{
      week: 'Week 1',
      value: 6.8
    }, {
      week: 'Week 2',
      value: 7.2
    }, {
      week: 'Week 3',
      value: 7.5
    }, {
      week: 'Week 4',
      value: 8.1
    }],
    monthly: [{
      month: 'Jan',
      value: 6.5
    }, {
      month: 'Feb',
      value: 6.8
    }, {
      month: 'Mar',
      value: 7.2
    }, {
      month: 'Apr',
      value: 7.6
    }, {
      month: 'May',
      value: 8.0
    }]
  },
  'mood-detail': {
    daily: [{
      day: 'Sat',
      happy: 40,
      calm: 30,
      focused: 20,
      stressed: 10
    }, {
      day: 'Sun',
      happy: 45,
      calm: 25,
      focused: 20,
      stressed: 10
    }, {
      day: 'Mon',
      happy: 30,
      calm: 20,
      focused: 30,
      stressed: 20
    }, {
      day: 'Tue',
      happy: 35,
      calm: 30,
      focused: 25,
      stressed: 10
    }, {
      day: 'Wed',
      happy: 40,
      calm: 30,
      focused: 20,
      stressed: 10
    }, {
      day: 'Thu',
      happy: 45,
      calm: 25,
      focused: 25,
      stressed: 5
    }, {
      day: 'Fri',
      happy: 40,
      calm: 35,
      focused: 20,
      stressed: 5
    }],
    weekly: [{
      week: 'Week 1',
      happy: 35,
      calm: 25,
      focused: 20,
      stressed: 20
    }, {
      week: 'Week 2',
      happy: 40,
      calm: 30,
      focused: 20,
      stressed: 10
    }, {
      week: 'Week 3',
      happy: 45,
      calm: 30,
      focused: 15,
      stressed: 10
    }, {
      week: 'Week 4',
      happy: 40,
      calm: 35,
      focused: 20,
      stressed: 5
    }],
    monthly: [{
      month: 'Jan',
      happy: 30,
      calm: 25,
      focused: 25,
      stressed: 20
    }, {
      month: 'Feb',
      happy: 35,
      calm: 30,
      focused: 20,
      stressed: 15
    }, {
      month: 'Mar',
      happy: 40,
      calm: 30,
      focused: 20,
      stressed: 10
    }, {
      month: 'Apr',
      happy: 45,
      calm: 25,
      focused: 20,
      stressed: 10
    }, {
      month: 'May',
      happy: 40,
      calm: 35,
      focused: 20,
      stressed: 5
    }]
  },
  time: {
    daily: [{
      day: 'Sat',
      work: 7,
      exercise: 1,
      social: 3,
      learning: 1,
      selfCare: 2,
      unknown: 3
    }, {
      day: 'Sun',
      work: 2,
      exercise: 2,
      social: 5,
      learning: 2,
      selfCare: 3,
      unknown: 2
    }, {
      day: 'Mon',
      work: 9,
      exercise: 1,
      social: 1,
      learning: 1,
      selfCare: 1,
      unknown: 3
    }, {
      day: 'Tue',
      work: 8,
      exercise: 1,
      social: 2,
      learning: 1.5,
      selfCare: 1.5,
      unknown: 2
    }, {
      day: 'Wed',
      work: 8,
      exercise: 1,
      social: 2,
      learning: 1,
      selfCare: 1,
      unknown: 3
    }, {
      day: 'Thu',
      work: 7,
      exercise: 1.5,
      social: 3,
      learning: 1,
      selfCare: 1,
      unknown: 2.5
    }, {
      day: 'Fri',
      work: 6,
      exercise: 1,
      social: 4,
      learning: 0.5,
      selfCare: 1.5,
      unknown: 3
    }],
    weekly: [{
      week: 'Week 1',
      work: 40,
      exercise: 7,
      social: 14,
      learning: 8,
      selfCare: 9,
      unknown: 14
    }, {
      week: 'Week 2',
      work: 42,
      exercise: 6,
      social: 12,
      learning: 10,
      selfCare: 8,
      unknown: 14
    }, {
      week: 'Week 3',
      work: 38,
      exercise: 8,
      social: 15,
      learning: 7,
      selfCare: 10,
      unknown: 14
    }, {
      week: 'Week 4',
      work: 35,
      exercise: 10,
      social: 18,
      learning: 8,
      selfCare: 11,
      unknown: 10
    }],
    monthly: [{
      month: 'Jan',
      work: 160,
      exercise: 25,
      social: 55,
      learning: 30,
      selfCare: 35,
      unknown: 55
    }, {
      month: 'Feb',
      work: 155,
      exercise: 28,
      social: 58,
      learning: 32,
      selfCare: 38,
      unknown: 49
    }, {
      month: 'Mar',
      work: 165,
      exercise: 30,
      social: 50,
      learning: 35,
      selfCare: 40,
      unknown: 40
    }, {
      month: 'Apr',
      work: 150,
      exercise: 32,
      social: 60,
      learning: 38,
      selfCare: 45,
      unknown: 35
    }, {
      month: 'May',
      work: 145,
      exercise: 35,
      social: 65,
      learning: 36,
      selfCare: 44,
      unknown: 35
    }]
  }
};

// Helper to get title based on metric type
const getTitleForMetric = (metricType: string): string => {
  switch (metricType) {
    case 'mood':
      return 'Mood Score';
    case 'stress':
      return 'Stress Level';
    case 'energy':
      return 'Energy Level';
    case 'mood-detail':
      return 'Mood Tracking';
    case 'time':
      return 'Awake Time Allocation';
    default:
      return 'Data Trend';
  }
};

const DataTrend: React.FC = () => {
  const {
    metricType = 'mood'
  } = useParams<{
    metricType: string;
  }>();
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month'>('day');

  // Get data for the selected metric and timeframe
  const data = mockData[metricType as keyof typeof mockData] || mockData.mood;
  const timeframeData = timeframe === 'day' ? data.daily : timeframe === 'week' ? data.weekly : data.monthly;
  const xAxisDataKey = timeframe === 'day' ? 'day' : timeframe === 'week' ? 'week' : 'month';

  // Get display title
  const title = getTitleForMetric(metricType);

  // Custom colors for different metrics
  const colors = {
    happy: '#a0e4b3',
    calm: '#9b87f5',
    focused: '#D3E4FD',
    stressed: '#FFDEE2',
    work: '#9b87f5',
    exercise: '#a0e4b3',
    social: '#FFDEE2',
    learning: '#FDE1D3',
    selfCare: '#FEF7CD',
    unknown: '#F1F0FB'
  };

  // Function to determine if the data has a value property
  const hasValueProperty = metricType !== 'mood-detail' && metricType !== 'time';

  // Function to safely get the current value
  const getCurrentValue = () => {
    if (!hasValueProperty || timeframeData.length === 0) return null;
    const lastEntry = timeframeData[timeframeData.length - 1];
    // Check if the entry has a value property before accessing it
    if ('value' in lastEntry) {
      return lastEntry.value;
    }
    return null;
  };

  return (
    <Layout title={title} showBackButton>
      <div className="px-4 py-5 space-y-6">
        <Card>
          <CardContent className="p-0">
            {/* Tabs for timeframe selection */}
            <Tabs defaultValue="day" onValueChange={value => setTimeframe(value as 'day' | 'week' | 'month')} className="w-full">
              <TabsList className="grid grid-cols-3 w-full rounded-none">
                <TabsTrigger value="day" className="rounded-none py-3">Day</TabsTrigger>
                <TabsTrigger value="week" className="rounded-none py-3">Week</TabsTrigger>
                <TabsTrigger value="month" className="rounded-none py-3">Month</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Current value display */}
            <div className="px-6 py-10 flex justify-center items-center">
              {hasValueProperty && (
                <div className="text-7xl font-bold">
                  {getCurrentValue() ?? '0'}
                </div>
              )}
            </div>

            {/* Chart */}
            <div className="h-64 px-2">
              <ResponsiveContainer width="100%" height="100%">
                {metricType === 'mood-detail' ? (
                  <LineChart data={timeframeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                    <XAxis dataKey={xAxisDataKey} tick={{ fontSize: 12 }} />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="happy" stroke={colors.happy} strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="calm" stroke={colors.calm} strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="focused" stroke={colors.focused} strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="stressed" stroke={colors.stressed} strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                ) : metricType === 'time' ? (
                  <LineChart data={timeframeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                    <XAxis dataKey={xAxisDataKey} tick={{ fontSize: 12 }} />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="work" stroke={colors.work} strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="exercise" stroke={colors.exercise} strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="social" stroke={colors.social} strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="learning" stroke={colors.learning} strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="selfCare" stroke={colors.selfCare} strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                ) : (
                  <LineChart data={timeframeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                    <XAxis dataKey={xAxisDataKey} tick={{ fontSize: 12 }} />
                    <YAxis 
                      domain={metricType === 'mood' ? [40, 100] : [0, 10]} 
                      allowDecimals={metricType !== 'mood'} 
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={metricType === 'mood' ? '#9b87f5' : metricType === 'energy' ? '#9b87f5' : '#a0e4b3'} 
                      strokeWidth={3} 
                      dot={{ r: 4 }} 
                      activeDot={{ r: 6 }} 
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>

            {/* Days of week labels */}
            {timeframe === 'day'}

            {/* Legend for complex charts */}
            {(metricType === 'mood-detail' || metricType === 'time') && (
              <div className="flex flex-wrap justify-center gap-4 px-4 py-4 text-xs">
                {metricType === 'mood-detail' ? (
                  <>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#a0e4b3] mr-1"></div>
                      <span>Happy</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#9b87f5] mr-1"></div>
                      <span>Calm</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#D3E4FD] mr-1"></div>
                      <span>Focused</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFDEE2] mr-1"></div>
                      <span>Stressed</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#9b87f5] mr-1"></div>
                      <span>Work</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#a0e4b3] mr-1"></div>
                      <span>Exercise</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFDEE2] mr-1"></div>
                      <span>Social</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FDE1D3] mr-1"></div>
                      <span>Learning</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FEF7CD] mr-1"></div>
                      <span>Self-Care</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional insights section */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Info size={18} className="text-muted-foreground" />
              <h3 className="font-medium">Insights</h3>
            </div>
            
            {metricType === 'mood' && (
              <div className="space-y-3">
                <p>Your mood has been generally trending upward this {timeframe}.</p>
                <p>Morning periods seem to have higher scores than evenings.</p>
                <p>Consider activities that boost your mood during lower periods.</p>
              </div>
            )}
            
            {metricType === 'stress' && (
              <div className="space-y-3">
                <p>Your stress levels have decreased over this {timeframe}.</p>
                <p>Meditation sessions appear to reduce stress levels significantly.</p>
                <p>Work-related stress peaks on Mondays and gradually decreases throughout the week.</p>
              </div>
            )}
            
            {metricType === 'energy' && (
              <div className="space-y-3">
                <p>Your energy levels peak in the late morning and early afternoon.</p>
                <p>Social interactions appear to boost your energy significantly.</p>
                <p>Consider scheduling important tasks during your high-energy periods.</p>
              </div>
            )}
            
            {metricType === 'mood-detail' && (
              <div className="space-y-3">
                <p>Happiness and calmness are your dominant emotions this {timeframe}.</p>
                <p>Stress levels peak during midweek but decrease on weekends.</p>
                <p>Focus appears to be strongest in the mornings - consider scheduling important tasks then.</p>
              </div>
            )}
            
            {metricType === 'time' && (
              <div className="space-y-3">
                <p>Work takes up the majority of your awake hours this {timeframe}.</p>
                <p>Self-care and exercise time has increased compared to previous periods.</p>
                <p>Consider increasing learning activities to meet your personal growth goals.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DataTrend;
