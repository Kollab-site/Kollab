
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ApproachStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const ApproachStep = ({ title, description, icon, color, delay = 0 }: ApproachStepProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4",
        "opacity-0 animate-fade-in"
      )}
      style={{ 
        animationDelay: `${delay}s`, 
        animationFillMode: 'forwards',
        borderTopColor: `var(--${color.split('-')[1]})` 
      }}
    >
      <CardContent className="p-6">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 bg-gradient-to-r",
          color
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ApproachStep;
