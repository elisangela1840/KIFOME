
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChefHat, 
  Utensils, 
  Users, 
  LogOut,
  Home,
  Save,
  Camera,
  Menu,
  X
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useToast } from '../../hooks/use-toast';
import { useIsMobile } from '../../hooks/use-mobile';

const Profile = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [restaurantData, setRestaurantData] = useState({
    name: 'Burger House',
    address: 'Rua das Flores, 123',
    phone: '(11) 98765-4321',
    whatsapp: '11987654321',
    category: 'Lanches',
    openingHours: '10:00 - 22:00',
    description: 'Os melhores hambúrgueres artesanais da cidade!',
    logo: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=500&auto=format&fit=crop'
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRestaurantData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Simulate saving data
    toast({
      title: "Perfil atualizado",
      description: "As informações do seu restaurante foram atualizadas com sucesso.",
      variant: "default",
    });
  };

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
    <div className="flex flex-col md:flex-row h-screen bg-kifome-background">
      {/* Mobile Header */}
      {isMobile && (
        <header className="flex items-center justify-between p-4 border-b border-kifome-border">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="mr-3 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-bold text-kifome-primary">KIFOME</h1>
          </div>
          <Link to="/" className="text-kifome-muted hover:text-kifome-primary">
            <Home size={18} />
          </Link>
        </header>
      )}

      {/* Sidebar - Shown on desktop or when toggled on mobile */}
      {(!isMobile || isMenuOpen) && (
        <div className={`${isMobile ? 'absolute z-20 w-64 h-full' : 'w-64'} border-r border-kifome-border bg-kifome-background flex flex-col`}>
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
                  onClick={() => isMobile && setIsMenuOpen(false)}
                >
                  <ChefHat size={18} className="mr-2" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/dashboard" 
                  className="flex items-center text-kifome-text hover:text-kifome-primary p-2 rounded-md hover:bg-kifome-border hover:bg-opacity-20"
                  onClick={() => isMobile && setIsMenuOpen(false)}
                >
                  <Utensils size={18} className="mr-2" />
                  Cardápio
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/profile" 
                  className="flex items-center text-kifome-primary bg-kifome-border bg-opacity-20 p-2 rounded-md"
                  onClick={() => isMobile && setIsMenuOpen(false)}
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
      )}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {!isMobile && (
          <header className="bg-kifome-background border-b border-kifome-border py-4 px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-kifome-text">Perfil do Restaurante</h2>
              <div className="flex items-center">
                <Link to="/" className="text-kifome-muted hover:text-kifome-primary mr-4">
                  <Home size={18} />
                </Link>
                <span className="text-kifome-text">{restaurantData.name}</span>
              </div>
            </div>
          </header>
        )}
        
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {isMobile && (
            <h2 className="text-lg font-semibold text-kifome-text mb-4">Perfil do Restaurante</h2>
          )}
          
          <div className="card-neon overflow-hidden p-4 md:p-6">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="w-full md:w-1/3">
                <div className="flex flex-col items-center">
                  <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-lg overflow-hidden mb-4 group">
                    <img 
                      src={restaurantData.logo} 
                      alt={restaurantData.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <Camera size={32} className="text-white" />
                    </div>
                  </div>
                  <p className="text-kifome-muted text-sm">Clique para alterar a logo</p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-kifome-text mb-6">Informações do Restaurante</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-kifome-muted mb-2">Nome do Restaurante</label>
                    <input 
                      type="text" 
                      name="name"
                      className="input-neon w-full"
                      value={restaurantData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-kifome-muted mb-2">Categoria</label>
                    <select 
                      name="category"
                      className="input-neon w-full"
                      value={restaurantData.category}
                      onChange={handleInputChange}
                    >
                      <option value="Lanches">Lanches</option>
                      <option value="Pizzaria">Pizzaria</option>
                      <option value="Japonesa">Japonesa</option>
                      <option value="Marmitas">Marmitas</option>
                      <option value="Bebidas">Bebidas</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-kifome-muted mb-2">Endereço</label>
                    <input 
                      type="text" 
                      name="address"
                      className="input-neon w-full"
                      value={restaurantData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-kifome-muted mb-2">Horário de Funcionamento</label>
                    <input 
                      type="text" 
                      name="openingHours"
                      className="input-neon w-full"
                      value={restaurantData.openingHours}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-kifome-muted mb-2">Telefone</label>
                    <input 
                      type="text" 
                      name="phone"
                      className="input-neon w-full"
                      value={restaurantData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-kifome-muted mb-2">WhatsApp</label>
                    <input 
                      type="text" 
                      name="whatsapp"
                      className="input-neon w-full"
                      value={restaurantData.whatsapp}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-kifome-muted mb-2">Descrição</label>
                    <textarea 
                      name="description"
                      className="input-neon w-full min-h-[100px]"
                      value={restaurantData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleSave} className="btn-primary w-full sm:w-auto">
                    <Save size={18} className="mr-2" />
                    Salvar Alterações
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
