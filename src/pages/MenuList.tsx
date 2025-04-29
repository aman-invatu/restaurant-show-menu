
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Beef Burger',
    description: 'Beef, cheese, potato, onion, fries',
    price: 9.00,
    category: 'burgers'
  },
  {
    id: '2',
    name: 'Broccoli',
    description: 'Chicken, cheese, potato, onion, fries',
    price: 9.00,
    category: 'burgers'
  },
  {
    id: '3',
    name: 'Chicken Burger',
    description: 'Chicken, cheese, potato, onion, fries',
    price: 14.00,
    category: 'burgers'
  },
  {
    id: '4',
    name: 'Creste di Galli',
    description: 'Pasta, cheese, potato, onion, fries',
    price: 13.00,
    category: 'pasta'
  },
  {
    id: '5',
    name: 'Spaghetti Carbonara',
    description: 'Pasta, egg, bacon, parmesan, black pepper',
    price: 12.00,
    category: 'pasta'
  },
  {
    id: '6',
    name: 'Margherita Pizza',
    description: 'Tomato sauce, mozzarella cheese, basil',
    price: 11.00,
    category: 'pizza'
  },
  {
    id: '7',
    name: 'California Roll',
    description: 'Crab, avocado, cucumber, sesame seeds',
    price: 8.00,
    category: 'sushi'
  },
  {
    id: '8',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with ganache',
    price: 6.00,
    category: 'desserts'
  },
  {
    id: '9',
    name: 'Fresh Lemonade',
    description: 'Fresh squeezed lemons, sugar, water',
    price: 3.50,
    category: 'drinks'
  }
];

const categories = [
  { id: 'burgers', name: 'BURGERS' },
  { id: 'pasta', name: 'PASTA' },
  { id: 'pizza', name: 'PIZZA' },
  { id: 'sushi', name: 'SUSHI' },
  { id: 'desserts', name: 'DESSERTS' },
  { id: 'drinks', name: 'DRINKS' }
];

const MenuList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('burgers');

  const handleAddToCart = (item: MenuItem) => {
    console.log('Added to cart:', item);
    // Here you would add the item to the cart using your CartContext
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-light text-center text-gray-800 mb-4">Menu List</h1>
          <p className="text-center text-gray-500 mb-12">Some informations about our restaurant</p>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left sidebar */}
        <div className="w-64 bg-[#222222] text-white">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`block w-full text-left px-8 py-4 hover:bg-gray-700 transition-colors ${activeCategory === category.id ? 'bg-gray-700' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1">
          {categories.map((category) => (
            <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
              {/* Category banner */}
              <div 
                className="h-64 bg-cover bg-center flex items-center justify-center"
                style={{ 
                  backgroundImage: category.id === 'burgers' 
                    ? 'url(/lovable-uploads/27e88358-35eb-475c-8cae-c1d45d29de0a.png)' 
                    : category.id === 'pasta'
                    ? 'url(/lovable-uploads/17a2dc46-194c-4469-bf37-f0c1f99d63b1.png)'
                    : 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://source.unsplash.com/random/1200x600/?'+category.id+')'
                }}
              >
                <h2 className="text-6xl font-light text-white">{category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}</h2>
              </div>

              {/* Menu items */}
              <div className="container mx-auto py-8">
                {menuItems
                  .filter(item => item.category === category.id)
                  .map(item => (
                    <div key={item.id} className="border-b border-gray-200 py-6 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-gray-500 mr-4">from ${item.price.toFixed(2)}</p>
                        <Button 
                          variant="outline" 
                          className="border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                          onClick={() => handleAddToCart(item)}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuList;
