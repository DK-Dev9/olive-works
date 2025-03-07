
import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Filter, 
  Download, 
  Eye, 
  Send, 
  Clock, 
  CheckCircle, 
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

interface Invoice {
  id: string;
  invoiceNumber: string;
  client: {
    name: string;
    company: string;
    email: string;
  };
  issueDate: string;
  dueDate: string;
  amount: number;
  status: 'draft' | 'pending' | 'paid' | 'overdue';
}

const mockInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2023-0053',
    client: {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      email: 'john@techcorp.com',
    },
    issueDate: '2023-10-15',
    dueDate: '2023-11-15',
    amount: 2750.00,
    status: 'paid',
  },
  {
    id: '2',
    invoiceNumber: 'INV-2023-0054',
    client: {
      name: 'Sarah Johnson',
      company: 'Acme Industries Ltd.',
      email: 'sarah@acme.com',
    },
    issueDate: '2023-10-20',
    dueDate: '2023-11-20',
    amount: 3450.75,
    status: 'pending',
  },
  {
    id: '3',
    invoiceNumber: 'INV-2023-0055',
    client: {
      name: 'Michael Brown',
      company: 'BioHealth Solutions',
      email: 'michael@biohealth.com',
    },
    issueDate: '2023-10-25',
    dueDate: '2023-11-25',
    amount: 1840.50,
    status: 'pending',
  },
  {
    id: '4',
    invoiceNumber: 'INV-2023-0056',
    client: {
      name: 'Emily Davis',
      company: 'Global Financial Group',
      email: 'emily@globalfin.com',
    },
    issueDate: '2023-09-15',
    dueDate: '2023-10-15',
    amount: 2190.00,
    status: 'overdue',
  },
  {
    id: '5',
    invoiceNumber: 'INV-2023-0057',
    client: {
      name: 'Robert Wilson',
      company: 'New Edge Systems',
      email: 'robert@newedge.com',
    },
    issueDate: '2023-10-30',
    dueDate: '2023-11-30',
    amount: 4280.25,
    status: 'draft',
  },
];

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredInvoices = mockInvoices.filter(invoice => 
    invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusBadge = (status: Invoice['status']) => {
    switch(status) {
      case 'draft':
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 flex items-center gap-1">
            <Clock size={12} /> Draft
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 flex items-center gap-1">
            <AlertTriangle size={12} /> Pending
          </Badge>
        );
      case 'paid':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 flex items-center gap-1">
            <CheckCircle size={12} /> Paid
          </Badge>
        );
      case 'overdue':
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 flex items-center gap-1">
            <AlertTriangle size={12} /> Overdue
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  return (
    <div className="flex min-h-screen bg-olive-50/50">
      <div className="flex-1 overflow-auto">
        <div className="page-container">
          <div className="section-header">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Invoices</h1>
              <p className="text-olive-600 mt-1">Create and manage invoices</p>
            </div>
            <Button className="bg-olive-600 hover:bg-olive-700">
              <Plus size={16} className="mr-1" /> New Invoice
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-olive-400" size={18} />
                <Input
                  placeholder="Search invoices..."
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Invoice #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Issue Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-olive-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-olive-100">
                  {filteredInvoices.map((invoice) => {
                    // Format dates
                    const issueDate = new Date(invoice.issueDate).toLocaleDateString();
                    const dueDate = new Date(invoice.dueDate).toLocaleDateString();
                    
                    return (
                      <tr key={invoice.id} className="hover:bg-olive-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                              <FileText size={14} />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-olive-800">{invoice.invoiceNumber}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-olive-800">{invoice.client.name}</div>
                          <div className="text-sm text-olive-600">{invoice.client.company}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                          {issueDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                          {dueDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-olive-800">
                          ${invoice.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(invoice.status)}
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
                                <Eye size={14} /> View
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <Download size={14} /> Download
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                                <Send size={14} /> Send
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

export default Invoices;
