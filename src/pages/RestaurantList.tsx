
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantCard, { RestaurantData } from '../components/RestaurantCard';
import { Search } from 'lucide-react';

// Dados de exemplo (será substituído por dados reais mais tarde)
const allRestaurants: RestaurantData[] = [
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
  },
  {
    id: '5',
    name: 'Comida Caseira da Dona Maria',
    category: 'Marmitas',
    image: 'https://images.unsplash.com/photo-1546069901-d5aeb388fa0c?q=80&w=2080&auto=format&fit=crop',
    address: 'Rua dos Sabores, 789',
    phone: '(11) 99876-5432',
    whatsapp: '11998765432',
    rating: 4.7
  },
  {
    id: '6',
    name: 'Taco Hermanos',
    category: 'Mexicana',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2080&auto=format&fit=crop',
    address: 'Rua México, 123',
    phone: '(11) 97777-8888',
    rating: 4.3
  },
  {
    id: '7',
    name: 'Churrascaria Brasa Viva',
    category: 'Churrascaria',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031&auto=format&fit=crop',
    address: 'Av. Brasil, 456',
    phone: '(11) 93333-2222',
    whatsapp: '11933332222',
    rating: 4.9
  },
  {
    id: '8',
    name: 'Tempero Verde',
    category: 'Vegano',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
    address: 'Rua das Plantas, 789',
    phone: '(11) 94444-5555',
    rating: 4.4
  }
];

// Lista de categorias disponíveis
const categories = [
  'Todas',
  'Lanches',
  'Pizzaria',
  'Japonesa',
  'Italiana',
  'Marmitas',
  'Mexicana',
  'Churrascaria',
  'Vegano'
];

const RestaurantList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  // Filtragem de restaurantes
  const filteredRestaurants = allRestaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || restaurant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-kifome-text mb-8">Restaurantes</h1>
          
          {/* Busca e Filtros */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Buscar restaurantes..."
                  className="input-neon w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className="absolute right-3 top-2.5 text-kifome-muted" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategory === category 
                        ? 'bg-kifome-primary text-black' 
                        : 'bg-kifome-border text-kifome-muted hover:text-kifome-text'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Lista de Restaurantes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-kifome-muted text-lg">
                  Nenhum restaurante encontrado com os filtros atuais.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantList;
