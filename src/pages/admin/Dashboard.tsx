
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu,
  Home,
  Plus,
  X
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import AddItemDialog from '../../components/AddItemDialog';
import { useIsMobile } from '../../hooks/use-mobile';
import AdminSidebar from '../../components/admin/AdminSidebar';
import MenuItemsTable from '../../components/admin/MenuItemsTable';
import { MenuItem } from '../../types/menuItem';
import { initialMenuItems } from '../../data/initialMenuItems';

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddItem = (newItem: {
    name: string;
    category: string;
    price: number;
    status: string;
    image?: string;
  }) => {
    // Generate a new unique ID
    const id = `${menuItems.length + 1}`;
    
    // Add the new item to the menu
    setMenuItems(prev => [
      ...prev,
      {
        id,
        ...newItem
      }
    ]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-kifome-background">
      {/* Mobile Header with Sidebar Toggle */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-kifome-border">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="text-kifome-text mr-3"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold text-kifome-primary">KIFOME</h1>
        </div>
        <Link to="/" className="text-kifome-muted hover:text-kifome-primary">
          <Home size={18} />
        </Link>
      </div>
      
      {/* Sidebar Component */}
      <AdminSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-kifome-background border-b border-kifome-border py-4 px-6 hidden md:block">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-kifome-text">Gerenciar Cardápio</h2>
            <div className="flex items-center">
              <Link to="/" className="text-kifome-muted hover:text-kifome-primary mr-4">
                <Home size={18} />
              </Link>
              <span className="text-kifome-text">Burger House</span>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-2 md:p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-kifome-text">Itens do Cardápio</h3>
            <AddItemDialog onAddItem={handleAddItem} />
          </div>
          
          <MenuItemsTable menuItems={menuItems} setMenuItems={setMenuItems} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
