
import React from 'react';
import { FileText, Package, ShoppingCart, User } from 'lucide-react';
import DashboardCard from './DashboardCard';
import { cn } from '@/lib/utils';

type ActivityType = 'invoice' | 'order' | 'client' | 'product';

interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
  className?: string;
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case 'invoice':
      return FileText;
    case 'order':
      return ShoppingCart;
    case 'client':
      return User;
    case 'product':
      return Package;
    default:
      return FileText;
  }
};

const getActivityColor = (type: ActivityType) => {
  switch (type) {
    case 'invoice':
      return 'bg-blue-100 text-blue-600';
    case 'order':
      return 'bg-amber-100 text-amber-600';
    case 'client':
      return 'bg-purple-100 text-purple-600';
    case 'product':
      return 'bg-emerald-100 text-emerald-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

const RecentActivity = ({ activities, className }: RecentActivityProps) => {
  return (
    <DashboardCard className={cn("", className)}>
      <h3 className="text-lg font-semibold text-olive-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          const colorClass = getActivityColor(activity.type);
          
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={cn("rounded-full p-2", colorClass)}>
                <Icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-olive-800">{activity.title}</p>
                <p className="text-xs text-olive-600 mt-0.5">{activity.description}</p>
                <p className="text-xs text-olive-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
};

export default RecentActivity;
