
import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Phone } from 'lucide-react';

export interface RestaurantData {
  id: string;
  name: string;
  category: string;
  image: string;
  address: string;
  phone: string;
  whatsapp?: string;
  rating: number;
}

interface RestaurantCardProps {
  restaurant: RestaurantData;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="card-neon overflow-hidden group">
      <div className="relative h-48 overflow-hidden rounded-md mb-4">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
          <span className="text-kifome-primary">{restaurant.category}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-kifome-text">{restaurant.name}</h3>
      
      <div className="flex items-center text-kifome-muted mb-2">
        <MapPin size={16} className="mr-1" />
        <span className="text-sm truncate">{restaurant.address}</span>
      </div>
      
      <div className="flex items-center text-kifome-muted mb-4">
        <Phone size={16} className="mr-1" />
        <span className="text-sm">{restaurant.phone}</span>
      </div>
      
      <Link 
        to={`/restaurants/${restaurant.id}`}
        className="btn-primary w-full flex items-center justify-center"
      >
        <Utensils size={18} className="mr-2" />
        Ver Cardápio
      </Link>
    </div>
  );
};

export default RestaurantCard;
