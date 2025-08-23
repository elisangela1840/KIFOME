import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuItem, { MenuItemData } from '../components/MenuItem';
import { Phone, MapPin, Star, MessageCircle } from 'lucide-react';

// Dados de exemplo para um restaurante
const restaurantData = {
  id: '1',
  name: 'Burger House',
  description: 'Os melhores hambúrgueres artesanais da cidade, com ingredientes frescos e de qualidade.',
  category: 'Lanches',
  image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop',
  coverImage: 'https://images.unsplash.com/photo-1561758033-7e924f619b47?q=80&w=2070&auto=format&fit=crop',
  address: 'Rua das Flores, 123 - Centro',
  phone: '(11) 98765-4321',
  whatsapp: '11987654321',
  openingHours: 'Seg-Sex: 18h às 23h | Sáb-Dom: 18h às 00h',
  rating: 4.5,
  menuCategories: [
    'Burgers',
    'Acompanhamentos',
    'Bebidas',
    'Sobremesas'
  ]
};

// Dados de exemplo para menu
const menuItems: MenuItemData[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Hambúrguer de 180g, queijo cheddar, alface, tomate e molho especial',
    price: 25.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: '2',
    name: 'Cheese Bacon',
    description: 'Hambúrguer de 180g, queijo cheddar, bacon crocante, alface, tomate e molho especial',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: '3',
    name: 'Veggie Burger',
    description: 'Hambúrguer vegetariano, queijo, alface, tomate, cebola roxa e molho especial',
    price: 27.90,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=2070&auto=format&fit=crop',
    category: 'Burgers'
  },
  {
    id: '4',
    name: 'Batata Frita',
    description: 'Porção de batatas fritas crocantes',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=2025&auto=format&fit=crop',
    category: 'Acompanhamentos'
  },
  {
    id: '5',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados e fritos',
    price: 17.90,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1974&auto=format&fit=crop',
    category: 'Acompanhamentos'
  },
  {
    id: '6',
    name: 'Refrigerante',
    description: 'Coca-Cola, Guaraná, Sprite (350ml)',
    price: 6.90,
    category: 'Bebidas'
  },
  {
    id: '7',
    name: 'Milk Shake',
    description: 'Milk shake de chocolate, morango ou baunilha (400ml)',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1887&auto=format&fit=crop',
    category: 'Bebidas'
  },
  {
    id: '8',
    name: 'Brownie com Sorvete',
    description: 'Brownie quente com sorvete de baunilha e calda de chocolate',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1648197335639-6e557de006a4?q=80&w=1974&auto=format&fit=crop',
    category: 'Sobremesas'
  }
];

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeCategory, setActiveCategory] = useState('Burgers');
  
  // Na implementação real, buscaríamos os dados do restaurante com base no ID
  console.log('Restaurant ID:', id);
  
  // Filtra os itens do menu pela categoria ativa
  const filteredMenuItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Cover Image */}
        <div className="h-64 md:h-80 relative">
          <img 
            src={restaurantData.coverImage} 
            alt={restaurantData.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <span className="text-kifome-primary text-sm font-semibold mb-2 inline-block px-2 py-1 rounded bg-black bg-opacity-50">
                    {restaurantData.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {restaurantData.name}
                  </h1>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="flex items-center bg-black bg-opacity-50 px-3 py-1 rounded-full">
                    <Star size={16} className="text-kifome-primary mr-1" />
                    <span className="text-white font-semibold">{restaurantData.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações do Restaurante */}
            <div className="lg:col-span-1">
              <div className="card-neon sticky top-24">
                <div className="mb-4 pb-4 border-b border-kifome-border">
                  <p className="text-kifome-muted mb-4">{restaurantData.description}</p>
                </div>
                
                <div className="mb-4 pb-4 border-b border-kifome-border">
                  <h3 className="text-lg font-semibold text-kifome-text mb-3">Informações</h3>
                  
                  <div className="flex items-start mb-2">
                    <MapPin size={18} className="text-kifome-primary mt-1 mr-2 flex-shrink-0" />
                    <p className="text-kifome-muted">{restaurantData.address}</p>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Phone size={18} className="text-kifome-primary mr-2 flex-shrink-0" />
                    <p className="text-kifome-muted">{restaurantData.phone}</p>
                  </div>
                  
                  {restaurantData.whatsapp && (
                    <a 
                      href={`https://wa.me/${restaurantData.whatsapp}`}
                      className="flex items-center mb-2 text-kifome-muted hover:text-kifome-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={18} className="text-kifome-primary mr-2 flex-shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-kifome-text mb-3">Horários</h3>
                  <p className="text-kifome-muted">{restaurantData.openingHours}</p>
                </div>
              </div>
            </div>
            
            {/* Menu */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-kifome-text mb-6">Cardápio</h2>
              
              {/* Categorias do Menu */}
              <div className="mb-6 overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  {restaurantData.menuCategories.map(category => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm ${
                        activeCategory === category 
                          ? 'bg-kifome-primary text-black' 
                          : 'bg-kifome-border text-kifome-muted hover:text-kifome-text'
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Itens do Menu */}
              <div className="space-y-4">
                {filteredMenuItems.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
