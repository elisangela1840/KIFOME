
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-kifome-background border-t border-kifome-border py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-kifome-primary mb-4">KIFOME</h3>
            <p className="text-kifome-muted">
              Centralizador de cardápios de restaurantes locais para cidades pequenas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-kifome-text mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-kifome-muted hover:text-kifome-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-kifome-muted hover:text-kifome-primary transition-colors">
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-kifome-muted hover:text-kifome-primary transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-kifome-muted hover:text-kifome-primary transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-kifome-text mb-4">Contato</h4>
            <p className="text-kifome-muted mb-2">contato@kifome.com</p>
            <p className="text-kifome-muted">Para restaurantes:</p>
            <p className="text-kifome-muted mb-4">parcerias@kifome.com</p>
            <Link to="/login" className="text-kifome-primary hover:text-kifome-hover transition-colors">
              Área do Restaurante
            </Link>
          </div>
        </div>
        
        <div className="border-t border-kifome-border mt-8 pt-6 text-center text-kifome-muted">
          <p>&copy; {new Date().getFullYear()} KIFOME. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
