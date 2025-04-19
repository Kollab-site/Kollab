
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ImpactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stat: string;
  statLabel: string;
  delay?: number;
}

const ImpactCard = ({ title, description, icon, stat, statLabel, delay = 0 }: ImpactCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-end space-x-2">
          <span className="text-4xl font-bold text-brand-purple">{stat}</span>
          <span className="text-gray-500 pb-1">{statLabel}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactCard;
