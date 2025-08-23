
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, ImagePlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export interface AddItemDialogProps {
  onAddItem: (newItem: {
    name: string;
    category: string;
    price: number;
    status: string;
    image?: string;
  }) => void;
}

const AddItemDialog: React.FC<AddItemDialogProps> = ({ onAddItem }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Burgers',
    price: '',
    status: 'ativo',
    image: ''
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Convert file to base64 for preview and storage
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const base64Image = event.target.result as string;
          setPreviewImage(base64Image);
          setFormData(prev => ({
            ...prev,
            image: base64Image
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.price) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Convert price to number
    const priceAsNumber = parseFloat(formData.price);
    
    // Add the new item
    onAddItem({
      name: formData.name,
      category: formData.category,
      price: priceAsNumber,
      status: formData.status,
      image: formData.image || undefined
    });

    // Show success message
    toast({
      title: "Item adicionado",
      description: "O item foi adicionado ao cardápio com sucesso.",
      variant: "default",
    });

    // Reset form and close dialog
    setFormData({
      name: '',
      category: 'Burgers',
      price: '',
      status: 'ativo',
      image: ''
    });
    setPreviewImage(null);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-primary">
          <Plus size={18} className="mr-2" />
          Adicionar Item
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-kifome-background border-kifome-border">
        <DialogHeader>
          <DialogTitle className="text-kifome-text">Adicionar Novo Item</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="space-y-4">
            <div>
              <label className="block text-kifome-muted mb-2">Nome do Item *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-neon w-full"
                required
              />
            </div>

            <div>
              <label className="block text-kifome-muted mb-2">Categoria *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="input-neon w-full"
                required
              >
                <option value="Burgers">Burgers</option>
                <option value="Acompanhamentos">Acompanhamentos</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Sobremesas">Sobremesas</option>
              </select>
            </div>

            <div>
              <label className="block text-kifome-muted mb-2">Preço (R$) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="input-neon w-full"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div>
              <label className="block text-kifome-muted mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="input-neon w-full"
              >
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="indisponível">Temporariamente Indisponível</option>
              </select>
            </div>

            <div>
              <label className="block text-kifome-muted mb-2">Imagem do Item</label>
              <div className="flex flex-col space-y-3">
                {previewImage && (
                  <div className="relative w-full h-40 bg-black rounded-md overflow-hidden mb-2">
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-center w-full">
                  <label 
                    htmlFor="add-image-upload" 
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-black border-kifome-border hover:border-kifome-primary"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ImagePlus size={24} className="text-kifome-muted mb-2" />
                      <p className="mb-2 text-sm text-kifome-muted">
                        <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                      </p>
                      <p className="text-xs text-kifome-muted">PNG, JPG ou WEBP</p>
                    </div>
                    <input 
                      id="add-image-upload" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageChange} 
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="bg-transparent text-kifome-text border-kifome-border hover:bg-kifome-border hover:bg-opacity-20"
            >
              Cancelar
            </Button>
            <Button type="submit" className="btn-primary">
              Adicionar Item
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddItemDialog;
