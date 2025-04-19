
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hasShadow?: boolean;
  hasBorder?: boolean;
  isHoverable?: boolean;
}

const Card = ({
  className,
  children,
  hasShadow = true,
  hasBorder = true,
  isHoverable = false,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl overflow-hidden',
        hasShadow && 'shadow-md',
        hasBorder && 'border border-gray-100',
        isHoverable && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div 
      className={cn('p-6 border-b border-gray-100', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div 
      className={cn('p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div 
      className={cn('p-6 border-t border-gray-100', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
