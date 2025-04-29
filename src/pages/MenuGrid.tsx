
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProductDialog from '../components/products/ProductDialog';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

type Category = {
  id: string;
  name: string;
  items: Product[];
};

const MenuGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('burgers');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  
  // Menu categories and items data
  const categories: Category[] = [
    {
      id: 'burgers',
      name: 'BURGERS',
      items: [
        {
          id: 'beef-burger',
          name: 'Beef Burger',
          description: 'Beef, cheese, potato, onion, fries',
          price: 9.00,
          imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'broccoli',
          name: 'Broccoli',
          description: 'Beef, cheese, potato, onion, fries',
          price: 9.00,
          imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'chicken-burger',
          name: 'Chicken Burger',
          description: 'Beef, cheese, potato, onion, fries',
          price: 14.00,
          imageUrl: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'pasta',
      name: 'PASTA',
      items: [
        {
          id: 'creste-di-galli',
          name: 'Creste di Galli',
          description: 'Beef, cheese, potato, onion, fries',
          price: 13.00,
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'spaghetti',
          name: 'Spaghetti',
          description: 'Tomato sauce, basil, olive oil',
          price: 12.00,
          imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'pizza',
      name: 'PIZZA',
      items: [
        {
          id: 'margherita',
          name: 'Margherita',
          description: 'Tomato sauce, mozzarella, basil',
          price: 10.00,
          imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'pepperoni',
          name: 'Pepperoni',
          description: 'Tomato sauce, mozzarella, pepperoni',
          price: 12.00,
          imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'sushi',
      name: 'SUSHI',
      items: [
        {
          id: 'nigiri-sushi',
          name: 'Nigiri-sushi',
          description: 'Beef, cheese, potato, onion, fries',
          price: 13.00,
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'desserts',
      name: 'DESSERTS',
      items: [
        {
          id: 'ice-cream',
          name: 'Ice Cream',
          description: 'Vanilla, chocolate, strawberry',
          price: 5.00,
          imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'drinks',
      name: 'DRINKS',
      items: [
        {
          id: 'cocktail-1',
          name: 'Berry Blast',
          description: 'Mixed berries cocktail with ice',
          price: 5.00,
          imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === selectedCategory) || categories[0];

  const openDialog = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };
  
  const closeDialog = () => {
    setDialogOpen(false);
  };

  // Generate the hero background image based on the selected category
  const getHeroBackground = (categoryId: string) => {
    switch(categoryId) {
      case 'burgers':
        return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
      case 'pasta':
        return 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
      case 'pizza':
        return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
      case 'sushi':
        return 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
      case 'desserts':
        return 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
      case 'drinks':
        return 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
      default:
        return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <div 
          className="bg-cover bg-center h-64 relative flex items-center justify-center"
          style={{ backgroundImage: `url(${getHeroBackground(selectedCategory)})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <h1 className="text-white text-6xl font-light z-10">{currentCategory.name.charAt(0) + currentCategory.name.slice(1).toLowerCase()}</h1>
        </div>
        
        {/* Main content */}
        <div className="flex">
          {/* Side navigation */}
          <div className="w-1/4 max-w-[300px] bg-gray-900 text-white">
            <ul className="py-6">
              {categories.map((category) => (
                <li key={category.id} className="px-8 py-4 cursor-pointer hover:bg-gray-800 transition-colors">
                  <button
                    className={`text-left w-full ${selectedCategory === category.id ? 'text-white' : 'text-gray-300'}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Product grid */}
          <div className="flex-1 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.items.map((product) => (
                <div key={product.id} className="flex flex-col">
                  <div className="h-64 overflow-hidden mb-4">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <p className="text-gray-500 mt-1">{product.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-700">from <span className="font-medium">${product.price.toFixed(2)}</span></p>
                    <Button
                      onClick={() => openDialog(product)}
                      variant="outline"
                      className="border border-gray-800 hover:bg-gray-800 hover:text-white uppercase"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {selectedProduct && (
        <ProductDialog 
          open={dialogOpen} 
          onClose={closeDialog} 
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default MenuGrid;
