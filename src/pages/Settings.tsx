
import React from 'react';
import { User, Building, CreditCard, Bell, Shield, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-olive-50/50">
      <div className="flex-1 overflow-auto">
        <div className="page-container">
          <div className="section-header">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Settings</h1>
              <p className="text-olive-600 mt-1">Manage your account and application preferences</p>
            </div>
            <Button className="bg-olive-600 hover:bg-olive-700">Save Changes</Button>
          </div>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-6">
              <TabsTrigger value="profile" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <User size={16} className="mr-1" /> Profile
              </TabsTrigger>
              <TabsTrigger value="company" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <Building size={16} className="mr-1" /> Company
              </TabsTrigger>
              <TabsTrigger value="billing" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <CreditCard size={16} className="mr-1" /> Billing
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <Bell size={16} className="mr-1" /> Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <Shield size={16} className="mr-1" /> Security
              </TabsTrigger>
              <TabsTrigger value="email" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <Mail size={16} className="mr-1" /> Email
              </TabsTrigger>
              <TabsTrigger value="website" className="data-[state=active]:bg-olive-200 data-[state=active]:text-olive-800">
                <Globe size={16} className="mr-1" /> Website
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <TabsContent value="profile" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" defaultValue="Admin" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" defaultValue="User" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="admin@example.com" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" defaultValue="(555) 123-4567" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" placeholder="Write a short bio..." />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Profile Picture</h3>
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-32 h-32 rounded-full bg-olive-200 flex items-center justify-center text-olive-800 text-4xl font-semibold">
                            A
                          </div>
                          <Button variant="outline">Upload Photo</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="company" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Company Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" defaultValue="OliveWorks" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type</Label>
                        <Input id="businessType" defaultValue="Software & Services" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="taxId">Tax ID / VAT Number</Label>
                          <Input id="taxId" defaultValue="123-456-7890" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="registrationNumber">Registration Number</Label>
                          <Input id="registrationNumber" defaultValue="REG-12345" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="companyAddress">Company Address</Label>
                        <Textarea id="companyAddress" defaultValue="123 Business Avenue, Suite 456, Enterprise City, 12345" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-lg mb-2">Email Notifications</h4>
                        <Separator className="my-2" />
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">New Orders</p>
                              <p className="text-sm text-olive-600">Receive an email when a new order is placed</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Invoices</p>
                              <p className="text-sm text-olive-600">Receive an email when a new invoice is created</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Client Signups</p>
                              <p className="text-sm text-olive-600">Receive an email when a new client signs up</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">System Notifications</h4>
                        <Separator className="my-2" />
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Low Stock Alerts</p>
                              <p className="text-sm text-olive-600">Notify when product inventory is low</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Payment Reminders</p>
                              <p className="text-sm text-olive-600">Notify about upcoming and overdue payments</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">System Updates</p>
                              <p className="text-sm text-olive-600">Notify about system maintenance and updates</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Password & Security</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                      </div>
                      
                      <Button className="bg-olive-600 hover:bg-olive-700 mt-2">Update Password</Button>
                      
                      <Separator className="my-4" />
                      
                      <h4 className="font-medium text-lg mb-2">Two-Factor Authentication</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Enable 2FA</p>
                          <p className="text-sm text-olive-600">Add an extra layer of security to your account</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="billing">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
                    <p className="text-olive-600 my-2">Coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="email">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Email Templates</h3>
                    <p className="text-olive-600 my-2">Coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="website">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Website Settings</h3>
                    <p className="text-olive-600 my-2">Coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
