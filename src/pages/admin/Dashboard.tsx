
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../integrations/supabase/client';
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
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Verificar autenticação
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate('/login');
          return;
        }

        // Verificar se o usuário tem perfil (opcional por enquanto)
        try {
          const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', session.user.id)
            .single();

          if (profile && profile.role === 'admin') {
            // Usuário é admin, permitir acesso
          } else {
            // Usuário não é admin, mas tem sessão - permitir acesso por enquanto
            console.log('Usuário não é admin, mas permitindo acesso');
          }
        } catch (error) {
          console.log('Erro ao verificar perfil, mas permitindo acesso:', error);
        }

        setLoading(false);
      } catch (error) {
        console.error('Erro na verificação de autenticação:', error);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-kifome-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kifome-primary mx-auto mb-4"></div>
          <p className="text-kifome-muted">Carregando página...</p>
        </div>
      </div>
    );
  }

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
