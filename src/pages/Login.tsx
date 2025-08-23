
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário já está logado
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/admin/dashboard');
      }
    };
    checkUser();


  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Verificar se é primeiro acesso
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_first_access, role')
          .eq('user_id', data.user.id)
          .single();

        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o painel...",
          variant: "default",
        });

        if (profile?.is_first_access && profile.role === 'client') {
          navigate('/setup');
        } else {
          navigate('/admin/dashboard');
        }
      }
    } catch (error: any) {
      toast({
        title: "Erro de login",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 px-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="card-neon p-8">
            <h1 className="text-2xl font-bold text-kifome-text mb-6 text-center">
              Login - Área do Restaurante
            </h1>
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-kifome-muted mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="input-neon w-full"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-kifome-muted mb-2">Senha</label>
                <input
                  id="password"
                  type="password"
                  className="input-neon w-full"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                className="btn-primary w-full" 
                type="submit" 
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-kifome-muted">
                Não tem uma conta?{' '}
                <Link to="/register" className="text-kifome-primary hover:text-kifome-hover">
                  Cadastre seu restaurante
                </Link>
              </p>
              <p className="text-kifome-muted mt-2 text-sm">
                <Link to="/forgot-password" className="text-kifome-muted hover:text-kifome-primary">
                  Esqueceu sua senha?
                </Link>
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-kifome-border">
              <div className="text-center">
                <p className="text-sm text-kifome-muted mb-2">Para teste, use:</p>
                <p className="text-sm text-kifome-muted">Email: admin@kifome.com</p>
                <p className="text-sm text-kifome-muted">Senha: admin123</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
