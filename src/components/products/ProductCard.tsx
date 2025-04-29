
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductDialog from './ProductDialog';

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
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const openDialog = () => {
    setDialogOpen(true);
  };
  
  const closeDialog = () => {
    setDialogOpen(false);
  };
  
  return (
    <>
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
              onClick={openDialog}
              className="border border-gray-800 px-4 py-2 text-gray-800 text-sm rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      
      <ProductDialog 
        open={dialogOpen} 
        onClose={closeDialog} 
        product={{ id, name, description, price, imageUrl }}
      />
    </>
  );
};

export default ProductCard;
