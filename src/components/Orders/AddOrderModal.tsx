
import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

interface AddOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddOrder: (order: any) => void;
}

const AddOrderModal: React.FC<AddOrderModalProps> = ({ isOpen, onClose, onAddOrder }) => {
  const [orderData, setOrderData] = useState({
    orderNumber: '',
    customerName: '',
    customerEmail: '',
    date: '',
    total: '',
    items: '',
    status: 'processing',
    payment: 'pending',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setOrderData((prev) => ({ ...prev, status: value }));
  };

  const handlePaymentChange = (value: string) => {
    setOrderData((prev) => ({ ...prev, payment: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!orderData.orderNumber || !orderData.customerName || !orderData.total) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create new order object
    const newOrder = {
      id: Date.now().toString(),
      orderNumber: orderData.orderNumber,
      customer: {
        name: orderData.customerName,
        email: orderData.customerEmail,
      },
      date: orderData.date,
      total: parseFloat(orderData.total),
      items: parseInt(orderData.items, 10) || 0,
      status: orderData.status,
      payment: orderData.payment,
    };

    // Add the order and close modal
    onAddOrder(newOrder);
    toast({
      title: "Order Created",
      description: `Order ${orderData.orderNumber} has been created successfully`
    });
    setOrderData({
      orderNumber: '',
      customerName: '',
      customerEmail: '',
      date: '',
      total: '',
      items: '',
      status: 'processing',
      payment: 'pending',
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Plus size={18} className="text-olive-600" />
            Create New Order
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Order Number *</label>
              <Input
                name="orderNumber"
                placeholder="ORD-2023-0001"
                value={orderData.orderNumber}
                onChange={handleInputChange}
                className="bg-olive-50 border-olive-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <Input
                name="date"
                type="date"
                value={orderData.date}
                onChange={handleInputChange}
                className="bg-olive-50 border-olive-200"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Customer Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  name="customerName"
                  placeholder="Customer Name *"
                  value={orderData.customerName}
                  onChange={handleInputChange}
                  className="bg-olive-50 border-olive-200"
                />
              </div>
              <div>
                <Input
                  name="customerEmail"
                  type="email"
                  placeholder="Email Address"
                  value={orderData.customerEmail}
                  onChange={handleInputChange}
                  className="bg-olive-50 border-olive-200"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Total Amount (USD) *</label>
              <Input
                name="total"
                type="number"
                placeholder="0.00"
                value={orderData.total}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="bg-olive-50 border-olive-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Number of Items</label>
              <Input
                name="items"
                type="number"
                placeholder="0"
                value={orderData.items}
                onChange={handleInputChange}
                min="0"
                className="bg-olive-50 border-olive-200"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={orderData.status} onValueChange={handleStatusChange}>
                <SelectTrigger className="bg-olive-50 border-olive-200">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Status</label>
              <Select value={orderData.payment} onValueChange={handlePaymentChange}>
                <SelectTrigger className="bg-olive-50 border-olive-200">
                  <SelectValue placeholder="Select payment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose} className="border-olive-300">
              Cancel
            </Button>
            <Button type="submit" className="bg-olive-600 hover:bg-olive-700">
              Create Order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddOrderModal;
