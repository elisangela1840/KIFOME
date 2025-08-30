# 🍕 Kifome - Local Eats Hub

Kifome é uma plataforma moderna de delivery de comida que conecta restaurantes locais com clientes, oferecendo uma experiência intuitiva e eficiente para pedidos online.

## 🛠️ Tecnologias Utilizadas

### Frontend Framework & Build Tools
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript 5.5.3** - Superset do JavaScript que adiciona tipagem estática
- **Vite 5.4.1** - Build tool moderna e rápida para desenvolvimento frontend
- **React Router DOM 6.26.2** - Roteamento para aplicações React

### UI & Design System
- **shadcn/ui** - Sistema de componentes reutilizáveis baseado em Radix UI
- **Radix UI** - Conjunto completo de componentes primitivos acessíveis
- **Tailwind CSS 3.4.11** - Framework CSS utility-first para estilização
- **Lucide React** - Biblioteca de ícones SVG elegantes
- **next-themes** - Gerenciamento de temas (claro/escuro)

### Estado & Dados
- **TanStack Query (React Query) 5.56.2** - Gerenciamento de estado do servidor e cache
- **Supabase 2.56.0** - Backend-as-a-Service com PostgreSQL
- **React Hook Form 7.53.0** - Biblioteca para gerenciamento de formulários
- **Zod 3.23.8** - Validação de esquemas TypeScript

### Componentes Especializados
- **Recharts 2.12.7** - Biblioteca de gráficos para React
- **Embla Carousel** - Carrossel responsivo e acessível
- **React Day Picker** - Seletor de datas
- **Sonner** - Sistema de notificações toast elegante

### Desenvolvimento & Qualidade
- **ESLint** - Linter para identificação de problemas no código
- **PostCSS** - Ferramenta para transformação de CSS
- **AutoPrefixer** - Adiciona prefixes CSS automaticamente

### Estilização Customizada
O projeto utiliza um tema personalizado "Kifome" com:
- Paleta de cores em tons de laranja (#FF8500)
- Modo escuro por padrão
- Animações personalizadas de brilho (glow effects)
- Design responsivo otimizado

## 🚀 Como Clonar e Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** - Gerenciador de pacotes
- **Git** - Sistema de controle de versão

### Passo 1: Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd kifome-local-eats-hub
```

### Passo 2: Instalar Dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install

# Ou usando bun (se preferir)
bun install
```

### Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

**Como obter as credenciais do Supabase:**
1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto ou use um existente
3. Vá em Settings → API
4. Copie a URL e a chave anônima (anon key)

### Passo 4: Executar o Projeto

```bash
# Modo desenvolvimento
npm run dev

# Ou com yarn
yarn dev

# Ou com bun
bun dev
```

O projeto estará disponível em: `http://localhost:8080`

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Build para produção
npm run build:dev    # Build para desenvolvimento

# Qualidade de código
npm run lint         # Executa ESLint

# Preview
npm run preview      # Preview da build de produção
```

## 🗄️ Estrutura do Banco de Dados

O projeto utiliza Supabase com PostgreSQL e inclui as seguintes tabelas principais:

- **restaurants** - Informações dos restaurantes
- **categories** - Categorias de produtos
- **menu_items** - Itens do cardápio
- **orders** - Pedidos realizados
- **profiles** - Perfis de usuários

### Migrações

As migrações do banco estão localizadas em `/supabase/migrations/` e são aplicadas automaticamente no Supabase.

## 📱 Funcionalidades

### Para Clientes
- Navegação por restaurantes locais
- Visualização de cardápios e categorias
- Sistema de pedidos
- Autenticação de usuários

### Para Restaurantes (Admin)
- Dashboard administrativo
- Gerenciamento de perfil
- Controle de itens do cardápio
- Visualização de pedidos

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

### Cores Principais
- **Primary**: #FF8500 (Laranja vibrante)
- **Secondary**: #FFB347 (Laranja claro)
- **Background**: #000000 (Preto)
- **Text**: #FFFFFF (Branco)

### Componentes
Todos os componentes seguem os padrões do shadcn/ui com customizações específicas do Kifome.

## 🔧 Configurações do Projeto

### Aliases de Importação
```typescript
"@" → "./src"
"@/components" → "./src/components"
"@/lib" → "./src/lib"
"@/hooks" → "./src/hooks"
```

### Configuração do Vite
- Servidor rodando na porta 8080
- Hot reload habilitado
- Alias configurados para imports absolutos

## 📦 Deploy


Build Manual
```bash
npm run build
# Os arquivos de build estarão em /dist
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

Se encontrar problemas ou tiver dúvidas:

1. Verifique se todas as dependências foram instaladas corretamente
2. Confirme se as variáveis de ambiente estão configuradas
3. Verifique se o Node.js está na versão correta (18+)
4. Abra uma issue no repositório

---

**Desenvolvido com ❤️ para conectar pessoas através da comida local**