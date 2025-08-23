
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar busca
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="py-4 px-6 border-b border-kifome-border sticky top-0 z-50 bg-kifome-background bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-kifome-primary">
            KIFOME
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar restaurantes..."
              className="input-neon w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2.5 text-kifome-muted hover:text-kifome-primary">
              <Search size={18} />
            </button>
          </form>
          <Link to="/restaurants" className="text-kifome-text hover:text-kifome-primary transition-colors">
            Restaurantes
          </Link>
          <Link to="/categories" className="text-kifome-text hover:text-kifome-primary transition-colors">
            Categorias
          </Link>
          <Link to="/login">
            <Button className="btn-primary">Login</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-kifome-text" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-black border-t border-kifome-border">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Buscar restaurantes..."
              className="input-neon w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2.5 text-kifome-muted hover:text-kifome-primary">
              <Search size={18} />
            </button>
          </form>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/restaurants" 
              className="text-kifome-text hover:text-kifome-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurantes
            </Link>
            <Link 
              to="/categories" 
              className="text-kifome-text hover:text-kifome-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="btn-primary w-full">Login</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
