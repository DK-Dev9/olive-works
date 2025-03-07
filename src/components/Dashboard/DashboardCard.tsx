
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const DashboardCard = ({ className, children, ...props }: DashboardCardProps) => {
  return (
    <div 
      className={cn(
        "dash-card animate-fade-up", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
