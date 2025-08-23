
import React from 'react';
import { Link } from 'react-router-dom';

export interface CategoryData {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface CategoryCardProps {
  category: CategoryData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/categories/${category.id}`} className="block">
      <div className="card-neon overflow-hidden relative group">
        <div className="h-32 overflow-hidden rounded-md">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-lg font-bold text-kifome-text">{category.name}</h3>
          <p className="text-xs text-kifome-muted">{category.count} restaurantes</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
