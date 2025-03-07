
import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

interface AddInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddInvoice: (invoice: any) => void;
}

const AddInvoiceModal: React.FC<AddInvoiceModalProps> = ({ isOpen, onClose, onAddInvoice }) => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    clientName: '',
    clientCompany: '',
    clientEmail: '',
    issueDate: '',
    dueDate: '',
    amount: '',
    status: 'draft',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInvoiceData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setInvoiceData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!invoiceData.invoiceNumber || !invoiceData.clientName || !invoiceData.amount) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create new invoice object
    const newInvoice = {
      id: Date.now().toString(),
      invoiceNumber: invoiceData.invoiceNumber,
      client: {
        name: invoiceData.clientName,
        company: invoiceData.clientCompany,
        email: invoiceData.clientEmail,
      },
      issueDate: invoiceData.issueDate,
      dueDate: invoiceData.dueDate,
      amount: parseFloat(invoiceData.amount),
      status: invoiceData.status,
    };

    // Add the invoice and close modal
    onAddInvoice(newInvoice);
    toast({
      title: "Invoice Created",
      description: `Invoice ${invoiceData.invoiceNumber} has been created successfully`
    });
    setInvoiceData({
      invoiceNumber: '',
      clientName: '',
      clientCompany: '',
      clientEmail: '',
      issueDate: '',
      dueDate: '',
      amount: '',
      status: 'draft',
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Plus size={18} className="text-olive-600" />
            Create New Invoice
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Invoice Number *</label>
              <Input
                name="invoiceNumber"
                placeholder="INV-2023-0001"
                value={invoiceData.invoiceNumber}
                onChange={handleInputChange}
                className="bg-olive-50 border-olive-200"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={invoiceData.status} onValueChange={handleSelectChange}>
                <SelectTrigger className="bg-olive-50 border-olive-200">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Client Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  name="clientName"
                  placeholder="Client Name *"
                  value={invoiceData.clientName}
                  onChange={handleInputChange}
                  className="bg-olive-50 border-olive-200"
                />
              </div>
              <div>
                <Input
                  name="clientCompany"
                  placeholder="Company Name"
                  value={invoiceData.clientCompany}
                  onChange={handleInputChange}
                  className="bg-olive-50 border-olive-200"
                />
              </div>
            </div>
            <Input
              name="clientEmail"
              type="email"
              placeholder="Email Address"
              value={invoiceData.clientEmail}
              onChange={handleInputChange}
              className="bg-olive-50 border-olive-200"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Issue Date</label>
              <Input
                name="issueDate"
                type="date"
                value={invoiceData.issueDate}
                onChange={handleInputChange}
                className="bg-olive-50 border-olive-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Due Date</label>
              <Input
                name="dueDate"
                type="date"
                value={invoiceData.dueDate}
                onChange={handleInputChange}
                className="bg-olive-50 border-olive-200"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount (USD) *</label>
            <Input
              name="amount"
              type="number"
              placeholder="0.00"
              value={invoiceData.amount}
              onChange={handleInputChange}
              min="0"
              step="0.01"
              className="bg-olive-50 border-olive-200"
            />
          </div>
          
          <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose} className="border-olive-300">
              Cancel
            </Button>
            <Button type="submit" className="bg-olive-600 hover:bg-olive-700">
              Create Invoice
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddInvoiceModal;
