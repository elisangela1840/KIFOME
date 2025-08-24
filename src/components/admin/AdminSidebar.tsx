
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
import { supabase } from '../../integrations/supabase/client';

interface AdminSidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      // Fazer logout do Supabase
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }

      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
        variant: "default",
      });
      
      // Redirecionar para a página inicial
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error: any) {
      toast({
        title: "Erro no logout",
        description: error.message || "Erro ao fazer logout",
        variant: "destructive",
      });
    }
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
                className={`flex items-center p-2 rounded-md hover:bg-kifome-border hover:bg-opacity-20 ${
                  location.pathname === '/admin/dashboard' 
                    ? 'text-kifome-primary bg-kifome-border bg-opacity-20' 
                    : 'text-kifome-text hover:text-kifome-primary'
                }`}
                onClick={isMobile ? toggleSidebar : undefined}
              >
                <ChefHat size={18} className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/dashboard" 
                className={`flex items-center p-2 rounded-md hover:bg-kifome-border hover:bg-opacity-20 ${
                  location.pathname === '/admin/dashboard' 
                    ? 'text-kifome-primary bg-kifome-border bg-opacity-20' 
                    : 'text-kifome-text hover:text-kifome-primary'
                }`}
                onClick={isMobile ? toggleSidebar : undefined}
              >
                <Utensils size={18} className="mr-2" />
                Cardápio
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/profile" 
                className={`flex items-center p-2 rounded-md hover:bg-kifome-border hover:bg-opacity-20 ${
                  location.pathname === '/admin/profile' 
                    ? 'text-kifome-primary bg-kifome-border bg-opacity-20' 
                    : 'text-kifome-text hover:text-kifome-primary'
                }`}
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
