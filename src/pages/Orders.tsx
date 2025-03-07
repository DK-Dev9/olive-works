
import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Filter, 
  Eye, 
  Truck, 
  Package, 
  CheckCircle, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  total: number;
  items: number;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  payment: 'paid' | 'pending' | 'failed';
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2023-0112',
    customer: {
      name: 'John Smith',
      email: 'john@email.com',
    },
    date: '2023-10-15',
    total: 129.99,
    items: 3,
    status: 'delivered',
    payment: 'paid',
  },
  {
    id: '2',
    orderNumber: 'ORD-2023-0113',
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
    },
    date: '2023-10-18',
    total: 245.50,
    items: 2,
    status: 'shipped',
    payment: 'paid',
  },
  {
    id: '3',
    orderNumber: 'ORD-2023-0114',
    customer: {
      name: 'Michael Brown',
      email: 'michael@email.com',
    },
    date: '2023-10-22',
    total: 78.25,
    items: 1,
    status: 'processing',
    payment: 'pending',
  },
  {
    id: '4',
    orderNumber: 'ORD-2023-0115',
    customer: {
      name: 'Emily Davis',
      email: 'emily@email.com',
    },
    date: '2023-10-25',
    total: 342.75,
    items: 4,
    status: 'cancelled',
    payment: 'failed',
  },
  {
    id: '5',
    orderNumber: 'ORD-2023-0116',
    customer: {
      name: 'Robert Wilson',
      email: 'robert@email.com',
    },
    date: '2023-10-28',
    total: 189.99,
    items: 2,
    status: 'processing',
    payment: 'paid',
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOrders = mockOrders.filter(order => 
    order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusBadge = (status: Order['status']) => {
    switch(status) {
      case 'processing':
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 flex items-center gap-1">
            <Clock size={12} /> Processing
          </Badge>
        );
      case 'shipped':
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 flex items-center gap-1">
            <Truck size={12} /> Shipped
          </Badge>
        );
      case 'delivered':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
            <CheckCircle size={12} /> Delivered
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
            <AlertTriangle size={12} /> Cancelled
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  const getPaymentBadge = (payment: Order['payment']) => {
    switch(payment) {
      case 'paid':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Paid
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Pending
          </Badge>
        );
      case 'failed':
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Failed
          </Badge>
        );
      default:
        return <Badge>{payment}</Badge>;
    }
  };
  
  return (
    <div className="flex min-h-screen bg-olive-50/50">
      <div className="flex-1 overflow-auto">
        <div className="page-container">
          <div className="section-header">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Orders</h1>
              <p className="text-olive-600 mt-1">Track and manage customer orders</p>
            </div>
            <Button className="bg-olive-600 hover:bg-olive-700">
              <Plus size={16} className="mr-1" /> New Order
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-olive-400" size={18} />
                <Input
                  placeholder="Search orders..."
                  className="pl-10 bg-olive-50 border-olive-100 focus-visible:ring-olive-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="border-olive-200 text-olive-700">
                <Filter size={16} />
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-olive-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Order #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Payment</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-olive-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-olive-100">
                  {filteredOrders.map((order) => {
                    // Format date
                    const orderDate = new Date(order.date).toLocaleDateString();
                    
                    return (
                      <tr key={order.id} className="hover:bg-olive-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                              <ShoppingCart size={14} />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-olive-800">{order.orderNumber}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-olive-800">{order.customer.name}</div>
                          <div className="text-sm text-olive-600">{order.customer.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                          {orderDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                          {order.items} {order.items === 1 ? 'item' : 'items'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-olive-800">
                          ${order.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(order.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getPaymentBadge(order.payment)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <Eye size={14} /> View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <Truck size={14} /> Update Status
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <Package size={14} /> Track Shipment
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
