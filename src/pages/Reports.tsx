
import React, { useState } from 'react';
import { BarChart3, FileText, Download, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const salesData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 2000 },
  { month: 'Apr', revenue: 2780 },
  { month: 'May', revenue: 1890 },
  { month: 'Jun', revenue: 2390 },
  { month: 'Jul', revenue: 3490 },
  { month: 'Aug', revenue: 4000 },
  { month: 'Sep', revenue: 3200 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3300 },
  { month: 'Dec', revenue: 4200 },
];

const categoryData = [
  { name: 'Electronics', value: 35 },
  { name: 'Office Supplies', value: 25 },
  { name: 'Furniture', value: 20 },
  { name: 'Stationery', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#92AB69', '#798C54', '#637345', '#4A5A35', '#2E3E21'];

const Reports = () => {
  const [selectedTab, setSelectedTab] = useState('sales');
  
  return (
    <div className="flex min-h-screen bg-olive-50/50">
      <div className="flex-1 overflow-auto">
        <div className="page-container">
          <div className="section-header">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Reports</h1>
              <p className="text-olive-600 mt-1">Analyze your business performance</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-olive-200 text-olive-700">
                <Calendar size={16} className="mr-1" /> Date Range
              </Button>
              <Button variant="outline" className="border-olive-200 text-olive-700">
                <Filter size={16} className="mr-1" /> Filters
              </Button>
              <Button className="bg-olive-600 hover:bg-olive-700">
                <Download size={16} className="mr-1" /> Export
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="sales" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="sales" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <BarChart3 size={16} className="mr-1" /> Sales Report
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <BarChart3 size={16} className="mr-1" /> Product Analysis
              </TabsTrigger>
              <TabsTrigger value="clients" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <FileText size={16} className="mr-1" /> Client Activity
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="sales" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Monthly Revenue</h3>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={salesData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value) => [`$${value}`, 'Revenue']}
                        />
                        <Legend />
                        <Bar dataKey="revenue" name="Revenue" fill="#92AB69" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Revenue by Category</h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Sales Summary</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-olive-50 rounded-lg">
                        <span className="font-medium">Total Revenue</span>
                        <span className="text-xl font-bold text-olive-800">$37,650.00</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-olive-50 rounded-lg">
                        <span className="font-medium">Total Orders</span>
                        <span className="text-xl font-bold text-olive-800">245</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-olive-50 rounded-lg">
                        <span className="font-medium">Average Order Value</span>
                        <span className="text-xl font-bold text-olive-800">$153.67</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-olive-50 rounded-lg">
                        <span className="font-medium">Conversion Rate</span>
                        <span className="text-xl font-bold text-olive-800">3.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Top Selling Products</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-olive-50">
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Product</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Category</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Units Sold</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Revenue</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-olive-100">
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Ergonomic Office Chair</td>
                          <td className="px-4 py-3 whitespace-nowrap">Furniture</td>
                          <td className="px-4 py-3 whitespace-nowrap">52</td>
                          <td className="px-4 py-3 whitespace-nowrap">$10,399.48</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Wireless Earbuds</td>
                          <td className="px-4 py-3 whitespace-nowrap">Electronics</td>
                          <td className="px-4 py-3 whitespace-nowrap">128</td>
                          <td className="px-4 py-3 whitespace-nowrap">$10,238.72</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Premium Leather Journal</td>
                          <td className="px-4 py-3 whitespace-nowrap">Stationery</td>
                          <td className="px-4 py-3 whitespace-nowrap">145</td>
                          <td className="px-4 py-3 whitespace-nowrap">$4,348.55</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Digital Drawing Tablet</td>
                          <td className="px-4 py-3 whitespace-nowrap">Electronics</td>
                          <td className="px-4 py-3 whitespace-nowrap">36</td>
                          <td className="px-4 py-3 whitespace-nowrap">$5,399.64</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Smart LED Desk Lamp</td>
                          <td className="px-4 py-3 whitespace-nowrap">Lighting</td>
                          <td className="px-4 py-3 whitespace-nowrap">78</td>
                          <td className="px-4 py-3 whitespace-nowrap">$4,679.22</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="clients" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Top Clients by Revenue</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-olive-50">
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Client</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Company</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Orders</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Total Spent</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-olive-100">
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">John Smith</td>
                          <td className="px-4 py-3 whitespace-nowrap">TechCorp Inc.</td>
                          <td className="px-4 py-3 whitespace-nowrap">12</td>
                          <td className="px-4 py-3 whitespace-nowrap">$24,750.50</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Sarah Johnson</td>
                          <td className="px-4 py-3 whitespace-nowrap">Acme Industries Ltd.</td>
                          <td className="px-4 py-3 whitespace-nowrap">8</td>
                          <td className="px-4 py-3 whitespace-nowrap">$18,320.75</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Michael Brown</td>
                          <td className="px-4 py-3 whitespace-nowrap">BioHealth Solutions</td>
                          <td className="px-4 py-3 whitespace-nowrap">5</td>
                          <td className="px-4 py-3 whitespace-nowrap">$9,840.25</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Robert Wilson</td>
                          <td className="px-4 py-3 whitespace-nowrap">New Edge Systems</td>
                          <td className="px-4 py-3 whitespace-nowrap">7</td>
                          <td className="px-4 py-3 whitespace-nowrap">$14,520.35</td>
                        </tr>
                        <tr className="hover:bg-olive-50/50">
                          <td className="px-4 py-3 whitespace-nowrap">Emily Davis</td>
                          <td className="px-4 py-3 whitespace-nowrap">Global Financial Group</td>
                          <td className="px-4 py-3 whitespace-nowrap">3</td>
                          <td className="px-4 py-3 whitespace-nowrap">$5,670.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Reports;
