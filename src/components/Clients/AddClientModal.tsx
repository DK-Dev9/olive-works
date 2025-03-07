
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface AddClientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddClientModal = ({ open, onOpenChange }: AddClientModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Add New Client</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X size={18} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Client Name</Label>
            <Input id="name" placeholder="Enter client name" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="client@example.com" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="(555) 123-4567" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Company name" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="active">
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button className="bg-olive-600 hover:bg-olive-700">Add Client</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddClientModal;
