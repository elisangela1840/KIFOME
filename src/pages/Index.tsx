
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Utensils, ChefHat } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantCard, { RestaurantData } from '../components/RestaurantCard';
import CategoryCard, { CategoryData } from '../components/CategoryCard';

// Dados de exemplo (será substituído por dados reais mais tarde)
const featuredRestaurants: RestaurantData[] = [
  {
    id: '1',
    name: 'Burger House',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop',
    address: 'Rua das Flores, 123',
    phone: '(11) 98765-4321',
    whatsapp: '11987654321',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Pizza Express',
    category: 'Pizzaria',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    address: 'Av. Paulista, 456',
    phone: '(11) 91234-5678',
    rating: 4.2
  },
  {
    id: '3',
    name: 'Sushi Kai',
    category: 'Japonesa',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    address: 'Rua Japão, 789',
    phone: '(11) 95555-1234',
    whatsapp: '11955551234',
    rating: 4.8
  },
  {
    id: '4',
    name: 'Cantina da Nonna',
    category: 'Italiana',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop',
    address: 'Rua Itália, 321',
    phone: '(11) 94444-6789',
    rating: 4.6
  }
];

const popularCategories: CategoryData[] = [
  {
    id: '1',
    name: 'Lanches',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2065&auto=format&fit=crop',
    count: 15
  },
  {
    id: '2',
    name: 'Pizzaria',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop',
    count: 8
  },
  {
    id: '3',
    name: 'Japonesa',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2fe075e?q=80&w=2071&auto=format&fit=crop',
    count: 5
  },
  {
    id: '4',
    name: 'Marmitas',
    image: 'https://images.unsplash.com/photo-1546069901-d5aeb388fa0c?q=80&w=2080&auto=format&fit=crop',
    count: 10
  }
];

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 bg-kifome-background flex items-center">
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
              alt="Food background" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          
          <div className="container mx-auto px-6 z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-kifome-text mb-4">
                Encontre os melhores <span className="text-kifome-primary">restaurantes</span> da cidade
              </h1>
              <p className="text-kifome-muted text-lg mb-8">
                O Kifome reúne os cardápios dos seus restaurantes e lanchonetes favoritos em um só lugar
              </p>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar restaurantes ou pratos..."
                  className="input-neon w-full py-3 pl-4 pr-12 text-lg rounded-md"
                />
                <button className="absolute right-3 top-3 text-kifome-primary hover:text-kifome-hover">
                  <Search size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-kifome-text">Categorias Populares</h2>
              <Link to="/categories" className="text-kifome-primary hover:text-kifome-hover flex items-center">
                Ver todas <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularCategories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Restaurants Section */}
        <section className="py-16 px-6 bg-kifome-border bg-opacity-10">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-kifome-text">Restaurantes em Destaque</h2>
              <Link to="/restaurants" className="text-kifome-primary hover:text-kifome-hover flex items-center">
                Ver todos <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="bg-kifome-border bg-opacity-10 rounded-lg p-8 text-center neon-border">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-kifome-text mb-4">
                  É dono de um restaurante?
                </h2>
                <p className="text-kifome-muted mb-6">
                  Cadastre seu estabelecimento no Kifome e alcance mais clientes na sua cidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigate('/login')}
                    className="btn-primary flex items-center justify-center"
                  >
                    <Utensils size={18} className="mr-2" />
                    Área do Restaurante
                  </button>
                  <button 
                    onClick={() => navigate('/restaurants')}
                    className="btn-secondary flex items-center justify-center"
                  >
                    <ChefHat size={18} className="mr-2" />
                    Explorar Cardápios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
