import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCart } from '../context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id = uuidv4(), 
  name, 
  description, 
  price, 
  imageUrl 
}) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      quantity: 1,
      image: imageUrl
    });
    
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
      duration: 2000,
    });
  };
  
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 text-left flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="mt-auto flex justify-between items-center">
          <p className="text-gray-700 text-base">from <span className="font-medium">${price.toFixed(2)}</span></p>
          <button 
            onClick={handleAddToCart}
            className="border border-gray-800 px-4 py-2 text-gray-800 text-sm rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
