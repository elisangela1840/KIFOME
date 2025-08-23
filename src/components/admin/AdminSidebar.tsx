
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  ChefHat, 
  Users, 
  LogOut,
  Home,
  X
} from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import { useIsMobile } from '../../hooks/use-mobile';

interface AdminSidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
      variant: "default",
    });
    
    // Redirecionar para a página inicial
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };

  return (
    <div 
      className={`${
        isMobile 
          ? sidebarOpen 
            ? "fixed inset-0 z-50 bg-black bg-opacity-80" 
            : "hidden" 
          : "w-64 border-r border-kifome-border"
      } transition-all duration-300`}
    >
      <div className={`${
        isMobile 
          ? "w-64 h-full bg-kifome-background" 
          : "w-full"
      } flex flex-col`}>
        {/* Sidebar Close Button - Mobile Only */}
        {isMobile && sidebarOpen && (
          <div className="flex justify-end p-2">
            <button 
              onClick={toggleSidebar}
              className="text-kifome-text p-1"
            >
              <X size={24} />
            </button>
          </div>
        )}
        
        <div className="p-4 border-b border-kifome-border">
          <h1 className="text-xl font-bold text-kifome-primary">KIFOME</h1>
          <p className="text-kifome-muted text-sm">Painel do Restaurante</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/admin/dashboard" 
                className="flex items-center text-kifome-text hover:text-kifome-primary p-2 rounded-md hover:bg-kifome-border hover:bg-opacity-20"
                onClick={isMobile ? toggleSidebar : undefined}
              >
                <ChefHat size={18} className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/dashboard" 
                className="flex items-center text-kifome-primary bg-kifome-border bg-opacity-20 p-2 rounded-md"
                onClick={isMobile ? toggleSidebar : undefined}
              >
                <Utensils size={18} className="mr-2" />
                Cardápio
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/profile" 
                className="flex items-center text-kifome-text hover:text-kifome-primary p-2 rounded-md hover:bg-kifome-border hover:bg-opacity-20"
                onClick={isMobile ? toggleSidebar : undefined}
              >
                <Users size={18} className="mr-2" />
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-kifome-border">
          <button 
            className="flex items-center text-kifome-text hover:text-kifome-primary w-full p-2 rounded-md hover:bg-kifome-border hover:bg-opacity-20"
            onClick={handleLogout}
          >
            <LogOut size={18} className="mr-2" />
            Sair
          </button>
        </div>
      </div>
      
      {/* Close sidebar when clicking overlay on mobile */}
      {isMobile && sidebarOpen && (
        <div 
          className="absolute inset-0 z-[-1]" 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AdminSidebar;
