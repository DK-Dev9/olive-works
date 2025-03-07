
import React, { useState } from 'react';
import { Users, Plus, Search, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import AddClientModal from '@/components/Clients/AddClientModal';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive';
  invoices: number;
  totalSpent: number;
}

const mockClients: Client[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@techcorp.com',
    phone: '(555) 123-4567',
    company: 'TechCorp Inc.',
    status: 'active',
    invoices: 12,
    totalSpent: 24750.50,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@acme.com',
    phone: '(555) 987-6543',
    company: 'Acme Industries Ltd.',
    status: 'active',
    invoices: 8,
    totalSpent: 18320.75,
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@biohealth.com',
    phone: '(555) 456-7890',
    company: 'BioHealth Solutions',
    status: 'active',
    invoices: 5,
    totalSpent: 9840.25,
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@globalfin.com',
    phone: '(555) 789-0123',
    company: 'Global Financial Group',
    status: 'inactive',
    invoices: 3,
    totalSpent: 5670.00,
  },
  {
    id: '5',
    name: 'Robert Wilson',
    email: 'robert@newedge.com',
    phone: '(555) 234-5678',
    company: 'New Edge Systems',
    status: 'active',
    invoices: 7,
    totalSpent: 14520.35,
  },
];

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  
  const filteredClients = mockClients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex min-h-screen bg-olive-50/50">
      <div className="flex-1 overflow-auto">
        <div className="page-container">
          <div className="section-header">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Clients</h1>
              <p className="text-olive-600 mt-1">Manage your client relationships</p>
            </div>
            <Button 
              className="bg-olive-600 hover:bg-olive-700"
              onClick={() => setIsAddClientModalOpen(true)}
            >
              <Plus size={16} className="mr-1" /> Add Client
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-olive-400" size={18} />
              <Input
                placeholder="Search clients..."
                className="pl-10 bg-olive-50 border-olive-100 focus-visible:ring-olive-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-olive-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Invoices</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Total Spent</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-olive-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-olive-100">
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="hover:bg-olive-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-olive-200 rounded-full flex items-center justify-center">
                            <span className="text-olive-700 font-medium">{client.name.charAt(0)}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-olive-800">{client.name}</div>
                            <div className="text-sm text-olive-600">{client.company}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-olive-800">{client.email}</div>
                        <div className="text-sm text-olive-600">{client.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          client.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                        {client.invoices}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                        ${client.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
                              <Edit size={14} /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2 text-red-500 cursor-pointer">
                              <Trash2 size={14} /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <AddClientModal 
        open={isAddClientModalOpen}
        onOpenChange={setIsAddClientModalOpen}
      />
    </div>
  );
};

export default Clients;
