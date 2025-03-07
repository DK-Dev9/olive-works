
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  FileText, 
  ShoppingCart, 
  Settings, 
  ChevronLeft, 
  BarChart3, 
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Clients', path: '/clients' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: FileText, label: 'Invoices', path: '/invoices' },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isMobile) {
    return (
      <>
        <div className="bg-olive-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xl">OliveWorks</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="text-white hover:bg-olive-700 hover:text-white"
          >
            <Menu size={24} />
          </Button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in" onClick={toggleMobileMenu}>
            <div 
              className="bg-olive-800 text-white w-64 h-full overflow-auto animate-slide-in-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-olive-700">
                <span className="font-semibold text-xl">OliveWorks</span>
              </div>
              <nav className="p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "sidebar-item mb-1",
                      location.pathname === item.path && "active"
                    )}
                    onClick={toggleMobileMenu}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div 
      className={cn(
        "h-screen bg-olive-800 text-white transition-all duration-300 flex flex-col",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className={cn(
        "p-4 flex items-center",
        isCollapsed ? "justify-center" : "justify-between"
      )}>
        {!isCollapsed && <span className="font-semibold text-xl">OliveWorks</span>}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-white hover:bg-olive-700 hover:text-white"
        >
          <ChevronLeft className={cn(
            "transition-transform",
            isCollapsed && "rotate-180"
          )} />
        </Button>
      </div>
      
      <nav className="flex-1 p-2 overflow-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "sidebar-item mb-1",
              isCollapsed && "justify-center",
              location.pathname === item.path && "active"
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon size={20} />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-olive-700">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center text-olive-800 font-semibold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-olive-200 flex items-center justify-center text-olive-800 font-semibold">
              A
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
