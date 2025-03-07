
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface AddProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddProductModal = ({ open, onOpenChange }: AddProductModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Add New Product</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X size={18} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="productName">Product Name</Label>
            <Input id="productName" placeholder="Enter product name" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" placeholder="e.g. Electronics, Office Supplies" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input id="price" type="number" placeholder="0.00" step="0.01" min="0" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="stock">Stock Quantity</Label>
            <Input id="stock" type="number" placeholder="0" min="0" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" placeholder="Product SKU" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="in stock">
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in stock">In Stock</SelectItem>
                <SelectItem value="low stock">Low Stock</SelectItem>
                <SelectItem value="out of stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Product description..." />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button className="bg-olive-600 hover:bg-olive-700">Add Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
