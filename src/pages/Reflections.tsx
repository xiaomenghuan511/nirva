
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Reflections: React.FC = () => {
  const reflectionCategories = [
    {
      title: "Relationships",
      insights: [
        "Deep conversations with friends provide invaluable emotional support and perspective.",
        "I value authentic connections but feel frustrated by unpredictable dating experiences.",
        "Being 'ghosted' after meaningful connections is a recurring pattern that causes confusion."
      ]
    },
    {
      title: "Self-Discovery",
      insights: [
        "I'm contemplating the balance between solitude and social connection in my life.",
        "When I have excess free time, I tend toward unproductive behaviors like oversleeping.",
        "I feel both curious about and envious of others' stable family lives."
      ]
    },
    {
      title: "Future Planning",
      insights: [
        "I'm considering egg freezing and planning to make decisions about children by age 40.",
        "Financial considerations and family support are important factors in my fertility decisions.",
        "I'm open to alternative pathways to parenthood beyond traditional routes."
      ]
    },
    {
      title: "Cultural Perspectives",
      insights: [
        "Art and film provide windows into different cultural and historical experiences.",
        "My family background gives me a unique perspective on political events like Tiananmen Square.",
        "I'm exploring philosophical concepts from different cultures like Tibetan Buddhist compassion."
      ]
    }
  ];

  return (
    <Layout title="Reflections">
      <div className="px-4 py-5 space-y-6">
        <div className="bg-nirva-soft-yellow/60 p-6 rounded-xl">
          <h2 className="text-xl font-medium mb-3">April 19, 2025 Reflections</h2>
          <p className="text-muted-foreground">
            Today was a day of deep conversations with friends, self-reflection, and cultural experiences. My emotions
            fluctuated between relaxation, joy, reflection, slight anxiety, and nostalgia.
          </p>
        </div>
        
        {reflectionCategories.map((category, index) => (
          <Card key={index} className="border-nirva-soft-peach/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.insights.map((insight, i) => (
                  <li key={i} className="flex items-start">
                    <div className="h-2 w-2 bg-nirva-soft-peach rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Reflections;
