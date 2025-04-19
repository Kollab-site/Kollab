
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  animate?: boolean;
  motionProps?: MotionProps;
}

export const Container = ({
  children,
  className,
  as: Component = 'div',
  size = 'lg',
  padding = true,
  animate = false,
  motionProps,
}: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  const containerClasses = cn(
    'w-full mx-auto',
    sizeClasses[size],
    padding && 'px-4 sm:px-6 lg:px-8',
    className
  );

  const defaultMotionProps: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    ...motionProps
  };

  if (animate) {
    return (
      <motion.div
        {...defaultMotionProps}
        className={containerClasses}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
};

export default Container;
