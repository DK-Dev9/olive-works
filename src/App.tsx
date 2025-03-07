
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import { useIsMobile } from "./hooks/use-mobile";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen max-h-screen overflow-hidden">
      <Navbar />
      <div className={`flex-1 overflow-auto ${isMobile ? 'pt-14' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route 
            path="/" 
            element={
              <Layout>
                <Index />
              </Layout>
            } 
          />
          <Route 
            path="/clients" 
            element={
              <Layout>
                <Clients />
              </Layout>
            } 
          />
          <Route 
            path="/products" 
            element={
              <Layout>
                <Products />
              </Layout>
            } 
          />
          <Route 
            path="/invoices" 
            element={
              <Layout>
                <Invoices />
              </Layout>
            } 
          />
          <Route 
            path="/orders" 
            element={
              <Layout>
                <Orders />
              </Layout>
            } 
          />
          <Route 
            path="/reports" 
            element={
              <Layout>
                <Reports />
              </Layout>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <Layout>
                <Settings />
              </Layout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
