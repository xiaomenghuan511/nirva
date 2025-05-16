
import React from 'react';
import Layout from '../components/layout/Layout';
import { socialData } from '../components/dashboard/SocialMap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SocialMapFull: React.FC = () => {
  // Sort people by time spent (descending)
  const sortedPeople = [...socialData].sort((a, b) => b.timeSpent - a.timeSpent);
  
  // Calculate total hours
  const totalHours = sortedPeople.reduce((sum, person) => sum + person.timeSpent, 0);
  
  // Colors based on energy impact
  const getColor = (impact: string) => {
    switch(impact) {
      case 'positive': return '#F2FCE2'; // Soft Green
      case 'neutral': return '#FEF7CD'; // Soft Yellow
      case 'negative': return '#ea384c'; // Red
      default: return '#F2FCE2';
    }
  };

  return (
    <Layout title="Holistic Social Map" showBackButton>
      <div className="px-4 py-5 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Social Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-4">
              Total time spent with others: <span className="font-medium text-foreground">{totalHours.toFixed(1)} hours</span>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Energy Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedPeople.map((person, index) => (
                  <TableRow key={index} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">{person.name}</TableCell>
                    <TableCell>{person.timeSpent}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: getColor(person.energyImpact) }}
                        />
                        <span className="capitalize">{person.energyImpact}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Relationship Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sortedPeople.map((person, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">{person.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{person.timeSpent} hours</span>
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: getColor(person.energyImpact) }}
                      />
                    </div>
                  </div>
                  <p className="text-sm mb-3">{person.description}</p>
                  
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground mb-1">RELATIONSHIP TIPS:</h4>
                    <ul className="text-sm list-disc list-inside">
                      {person.tips.map((tip, i) => (
                        <li key={i} className="mb-1">{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SocialMapFull;
