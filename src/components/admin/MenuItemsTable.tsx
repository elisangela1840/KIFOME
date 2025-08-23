
import React from 'react';
import { Trash } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import { MenuItem } from '../../types/menuItem';
import EditItemDialog from '../EditItemDialog';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '../ui/alert-dialog';

interface MenuItemsTableProps {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const MenuItemsTable: React.FC<MenuItemsTableProps> = ({ menuItems, setMenuItems }) => {
  const { toast } = useToast();

  const handleDeleteItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
    
    toast({
      title: "Item removido",
      description: "O item foi removido do cardápio.",
      variant: "default",
    });
  };

  const handleEditItem = (id: string, updatedItem: {
    name: string;
    category: string;
    price: number;
    status: string;
    image?: string;
  }) => {
    setMenuItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <div className="card-neon overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-kifome-border">
              <th className="text-left py-3 px-4 text-kifome-muted">Nome</th>
              <th className="text-left py-3 px-4 text-kifome-muted">Categoria</th>
              <th className="text-left py-3 px-4 text-kifome-muted">Preço</th>
              <th className="text-left py-3 px-4 text-kifome-muted">Status</th>
              <th className="text-right py-3 px-4 text-kifome-muted">Ações</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map(item => (
              <tr key={item.id} className="border-b border-kifome-border md:table-row flex flex-col p-4 md:p-0">
                <td className="py-2 md:py-3 px-0 md:px-4 text-kifome-text">
                  <span className="md:hidden font-medium text-kifome-muted mr-2">Nome:</span>
                  {item.name}
                </td>
                <td className="py-2 md:py-3 px-0 md:px-4 text-kifome-muted">
                  <span className="md:hidden font-medium mr-2">Categoria:</span>
                  {item.category}
                </td>
                <td className="py-2 md:py-3 px-0 md:px-4 text-kifome-text">
                  <span className="md:hidden font-medium text-kifome-muted mr-2">Preço:</span>
                  R$ {item.price.toFixed(2)}
                </td>
                <td className="py-2 md:py-3 px-0 md:px-4">
                  <span className="md:hidden font-medium text-kifome-muted mr-2">Status:</span>
                  <span className="inline-block px-2 py-1 rounded-full text-xs bg-kifome-success text-black">
                    {item.status}
                  </span>
                </td>
                <td className="py-2 md:py-3 px-0 md:px-4 text-left md:text-right">
                  <span className="md:hidden font-medium text-kifome-muted mr-2">Ações:</span>
                  <EditItemDialog item={item} onEditItem={handleEditItem} />
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="text-kifome-muted hover:text-kifome-error p-1">
                        <Trash size={18} />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-kifome-background border-kifome-border">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-kifome-text">Confirmar exclusão</AlertDialogTitle>
                        <AlertDialogDescription className="text-kifome-muted">
                          Tem certeza que deseja remover este item do cardápio? Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-transparent text-kifome-text border-kifome-border hover:bg-kifome-border hover:bg-opacity-20">
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction 
                          className="bg-kifome-error text-white hover:bg-kifome-error/90"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Excluir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuItemsTable;
