
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-kifome-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-kifome-text mb-6">Página não encontrada</h2>
          <p className="text-kifome-muted mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Voltar para o Início
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
