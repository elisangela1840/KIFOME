
import React from 'react';

export interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}

interface MenuItemProps {
  item: MenuItemData;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="card-neon flex flex-col md:flex-row gap-4">
      {item.image && (
        <div className="w-full md:w-32 h-32 flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-kifome-text">{item.name}</h3>
          <span className="text-kifome-primary font-bold">
            R$ {item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-kifome-muted text-sm">{item.description}</p>
        <div className="mt-2">
          <span className="text-xs py-1 px-2 bg-kifome-border rounded-full text-kifome-muted">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
