
import React, { useState } from 'react';
import { Package, Plus, Search, MoreHorizontal, Edit, Trash2, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import AddProductModal from '@/components/Products/AddProductModal';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sku: string;
  status: 'in stock' | 'low stock' | 'out of stock';
  image: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Journal',
    category: 'Stationery',
    price: 29.99,
    stock: 45,
    sku: 'JOUR-001',
    status: 'in stock',
    image: 'https://placehold.co/200x200/f8faf5/92AB69?text=Journal',
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: 199.99,
    stock: 12,
    sku: 'CHAIR-002',
    status: 'in stock',
    image: 'https://placehold.co/200x200/f8faf5/92AB69?text=Chair',
  },
  {
    id: '3',
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 79.99,
    stock: 8,
    sku: 'EARB-003',
    status: 'low stock',
    image: 'https://placehold.co/200x200/f8faf5/92AB69?text=Earbuds',
  },
  {
    id: '4',
    name: 'Digital Drawing Tablet',
    category: 'Electronics',
    price: 149.99,
    stock: 0,
    sku: 'TABL-004',
    status: 'out of stock',
    image: 'https://placehold.co/200x200/f8faf5/92AB69?text=Tablet',
  },
  {
    id: '5',
    name: 'Bamboo Desk Organizer',
    category: 'Office Supplies',
    price: 24.99,
    stock: 32,
    sku: 'DESK-005',
    status: 'in stock',
    image: 'https://placehold.co/200x200/f8faf5/92AB69?text=Organizer',
  },
  {
    id: '6',
    name: 'Smart LED Desk Lamp',
    category: 'Lighting',
    price: 59.99,
    stock: 18,
    sku: 'LAMP-006',
    status: 'in stock',
    image: 'https://placehold.co/200x200/f8faf5/92AB69?text=Lamp',
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  
  const filteredProducts = mockProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusBadgeClass = (status: Product['status']) => {
    switch (status) {
      case 'in stock':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'low stock':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-100';
      case 'out of stock':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };
  
  return (
    <div className="flex min-h-screen bg-olive-50/50">
      <div className="flex-1 overflow-auto">
        <div className="page-container">
          <div className="section-header">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Products</h1>
              <p className="text-olive-600 mt-1">Manage your product inventory</p>
            </div>
            <Button 
              className="bg-olive-600 hover:bg-olive-700"
              onClick={() => setIsAddProductModalOpen(true)}
            >
              <Plus size={16} className="mr-1" /> Add Product
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-olive-400" size={18} />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-olive-50 border-olive-100 focus-visible:ring-olive-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-olive-200 text-olive-700">
                  <Filter size={16} />
                </Button>
                <Button 
                  variant={view === 'grid' ? 'default' : 'outline'} 
                  size="sm"
                  className={view === 'grid' ? 'bg-olive-600 hover:bg-olive-700' : 'border-olive-200 text-olive-700'}
                  onClick={() => setView('grid')}
                >
                  Grid
                </Button>
                <Button 
                  variant={view === 'list' ? 'default' : 'outline'} 
                  size="sm"
                  className={view === 'list' ? 'bg-olive-600 hover:bg-olive-700' : 'border-olive-200 text-olive-700'}
                  onClick={() => setView('list')}
                >
                  List
                </Button>
              </div>
            </div>
          </div>
          
          {view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-olive-100 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${getStatusBadgeClass(product.status)}`}
                    >
                      {product.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-olive-800">{product.name}</h3>
                        <p className="text-sm text-olive-600 mt-1">{product.category}</p>
                      </div>
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
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-semibold text-olive-800">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-olive-600">SKU: {product.sku}</span>
                    </div>
                    <div className="mt-2 text-sm text-olive-700">
                      Stock: {product.stock} units
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-up">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-olive-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">SKU</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Stock</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-olive-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-olive-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-olive-100">
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-olive-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-olive-100 rounded overflow-hidden">
                              <img 
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-olive-800">{product.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-600">
                          {product.sku}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-olive-800">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-olive-800">
                          {product.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={getStatusBadgeClass(product.status)}>
                            {product.status}
                          </Badge>
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
          )}
        </div>
      </div>
      
      <AddProductModal 
        open={isAddProductModalOpen}
        onOpenChange={setIsAddProductModalOpen}
      />
    </div>
  );
};

export default Products;
