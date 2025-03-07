
import React from 'react';
import { LucideIcon } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const MetricsCard = ({ title, value, icon: Icon, trend, className }: MetricsCardProps) => {
  return (
    <DashboardCard className={cn("flex flex-col", className)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-olive-600">{title}</h3>
        <div className="rounded-full p-2 bg-olive-100 text-olive-700">
          <Icon size={18} />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-olive-800">{value}</p>
          {trend && (
            <p className={cn(
              "text-xs font-medium flex items-center gap-1 mt-1",
              trend.isPositive ? "text-emerald-600" : "text-rose-600"
            )}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              <span className="text-olive-500 ml-1">vs last month</span>
            </p>
          )}
        </div>
      </div>
    </DashboardCard>
  );
};

export default MetricsCard;
