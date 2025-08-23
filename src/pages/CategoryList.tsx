
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard, { CategoryData } from '../components/CategoryCard';
import { Search } from 'lucide-react';

// Dados de exemplo para categorias
const allCategories: CategoryData[] = [
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
  },
  {
    id: '5',
    name: 'Italiana',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop',
    count: 6
  },
  {
    id: '6',
    name: 'Mexicana',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2080&auto=format&fit=crop',
    count: 3
  },
  {
    id: '7',
    name: 'Churrascaria',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031&auto=format&fit=crop',
    count: 4
  },
  {
    id: '8',
    name: 'Vegano',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
    count: 2
  },
  {
    id: '9',
    name: 'Cafeteria',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop',
    count: 7
  },
  {
    id: '10',
    name: 'Doces',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
    count: 5
  }
];

const CategoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtragem de categorias
  const filteredCategories = allCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-kifome-text mb-8">Categorias</h1>
          
          {/* Busca */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Buscar categorias..."
                className="input-neon w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} className="absolute right-3 top-2.5 text-kifome-muted" />
            </div>
          </div>
          
          {/* Lista de Categorias */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-kifome-muted text-lg">
                  Nenhuma categoria encontrada com esse nome.
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

export default CategoryList;
