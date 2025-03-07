
import React from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  PackageCheck, 
  ShoppingCart, 
  ArrowUpRight, 
  Plus,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardCard from '@/components/Dashboard/DashboardCard';
import MetricsCard from '@/components/Dashboard/MetricsCard';
import RecentActivity from '@/components/Dashboard/RecentActivity';
import { useIsMobile } from '@/hooks/use-mobile';

const mockActivities = [
  {
    id: '1',
    type: 'invoice' as const,
    title: 'Invoice #INV-2023-0053 created',
    description: 'New invoice for TechCorp Inc.',
    time: '10 minutes ago'
  },
  {
    id: '2',
    type: 'client' as const,
    title: 'New client added',
    description: 'Acme Industries Ltd. was added to clients',
    time: '1 hour ago'
  },
  {
    id: '3',
    type: 'order' as const,
    title: 'Order #ORD-2023-0112 completed',
    description: 'Order for BioHealth Solutions fulfilled',
    time: '3 hours ago'
  },
  {
    id: '4',
    type: 'product' as const,
    title: 'Product inventory updated',
    description: '5 products restocked in inventory',
    time: '5 hours ago'
  },
];

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen bg-olive-50/50">
      <div className="flex-1 overflow-auto">
        <div className="page-container">
          <div className="section-header">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Dashboard</h1>
              <p className="text-olive-600 mt-1">Welcome back! Here's an overview of your business.</p>
            </div>
            <div className="flex gap-2">
              <Button className="bg-olive-600 hover:bg-olive-700">
                <Plus size={16} className="mr-1" /> New Invoice
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricsCard 
              title="Total Revenue" 
              value="$24,780.50" 
              icon={CreditCard}
              trend={{ value: 12.5, isPositive: true }}
            />
            <MetricsCard 
              title="Active Clients" 
              value="125" 
              icon={Users}
              trend={{ value: 5.3, isPositive: true }}
            />
            <MetricsCard 
              title="Products" 
              value="87" 
              icon={PackageCheck}
              trend={{ value: 2.1, isPositive: true }}
            />
            <MetricsCard 
              title="Pending Orders" 
              value="34" 
              icon={ShoppingCart}
              trend={{ value: 3.2, isPositive: false }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <DashboardCard className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-olive-800">Revenue Overview</h3>
                <Button variant="outline" size="sm" className="text-xs">
                  This Month <ArrowUpRight size={12} className="ml-1" />
                </Button>
              </div>
              <div className="h-64 flex items-center justify-center bg-olive-100/50 rounded-md">
                <p className="text-olive-600">Revenue chart will be displayed here</p>
              </div>
            </DashboardCard>
            
            <RecentActivity activities={mockActivities} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-olive-800">Recent Invoices</h3>
                <Button variant="ghost" size="sm" className="text-olive-600 hover:text-olive-800 text-xs">
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-md border border-olive-100 hover:border-olive-200 transition-ease">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full p-2 bg-blue-100 text-blue-600">
                        <FileText size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-olive-800">INV-2023-00{50 + i}</p>
                        <p className="text-xs text-olive-600">TechCorp Inc.</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-olive-800">${(2780 + i * 500).toFixed(2)}</p>
                      <p className="text-xs text-olive-500">Due in {3 + i} days</p>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
            
            <DashboardCard>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-olive-800">Recent Orders</h3>
                <Button variant="ghost" size="sm" className="text-olive-600 hover:text-olive-800 text-xs">
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-md border border-olive-100 hover:border-olive-200 transition-ease">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full p-2 bg-amber-100 text-amber-600">
                        <ShoppingCart size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-olive-800">ORD-2023-00{i + 10}</p>
                        <p className="text-xs text-olive-600">BioHealth Solutions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-olive-800">${(1250 + i * 300).toFixed(2)}</p>
                      <p className="text-xs text-olive-500">{i === 1 ? 'Shipped' : i === 2 ? 'Processing' : 'Completed'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
