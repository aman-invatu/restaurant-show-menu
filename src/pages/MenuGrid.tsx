import React, { useRef, useState } from 'react';
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
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Menu categories and items data
  const categories: Category[] = [
    {
      id: 'burgers',
      name: 'BURGERS',
      items: [
        {
          id: 'classic-burger',
          name: 'Classic Burger',
          description: 'Beef patty, lettuce, tomato, onion, special sauce',
          price: 9.00,
          imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
        },
        {
          id: 'cheese-burger',
          name: 'Cheese Burger',
          description: 'Beef patty with melted cheddar cheese',
          price: 10.00,
          imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b'
        },
        {
          id: 'bacon-burger',
          name: 'Bacon Burger',
          description: 'Beef patty with crispy bacon and cheese',
          price: 12.00,
          imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b'
        },
        {
          id: 'mushroom-burger',
          name: 'Mushroom Burger',
          description: 'Beef patty with sautéed mushrooms',
          price: 11.00,
          imageUrl: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040'
        },
        {
          id: 'double-burger',
          name: 'Double Burger',
          description: 'Double beef patty with double cheese',
          price: 14.00,
          imageUrl: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234'
        },
        {
          id: 'veggie-burger',
          name: 'Veggie Burger',
          description: 'Plant-based patty with fresh vegetables',
          price: 10.00,
          imageUrl: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2'
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
          description: 'Fresh tomato sauce, mozzarella, basil',
          price: 12.00,
          imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca'
        },
        {
          id: 'pepperoni',
          name: 'Pepperoni',
          description: 'Tomato sauce, mozzarella, pepperoni',
          price: 14.00,
          imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e'
        },
        {
          id: 'quattro-formaggi',
          name: 'Quattro Formaggi',
          description: 'Four cheese blend pizza',
          price: 15.00,
          imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
        },
        {
          id: 'vegetarian',
          name: 'Vegetarian',
          description: 'Mixed vegetables with fresh herbs',
          price: 13.00,
          imageUrl: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49'
        },
        {
          id: 'bbq-chicken',
          name: 'BBQ Chicken',
          description: 'BBQ sauce, chicken, red onions',
          price: 15.00,
          imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
        },
        {
          id: 'supreme',
          name: 'Supreme',
          description: 'Loaded with meat and vegetables',
          price: 16.00,
          imageUrl: 'https://images.unsplash.com/photo-1544982503-9f984c14501a'
        }
      ]
    },
    {
      id: 'pasta',
      name: 'PASTA',
      items: [
        {
          id: 'spaghetti-carbonara',
          name: 'Spaghetti Carbonara',
          description: 'Creamy sauce with bacon and parmesan',
          price: 13.00,
          imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3'
        },
        {
          id: 'penne-arrabbiata',
          name: 'Penne Arrabbiata',
          description: 'Spicy tomato sauce with garlic',
          price: 12.00,
          imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8'
        },
        {
          id: 'fettuccine-alfredo',
          name: 'Fettuccine Alfredo',
          description: 'Creamy parmesan sauce',
          price: 14.00,
          imageUrl: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a'
        },
        {
          id: 'lasagna',
          name: 'Lasagna',
          description: 'Layered pasta with meat sauce',
          price: 15.00,
          imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3'
        },
        {
          id: 'pesto-pasta',
          name: 'Pesto Pasta',
          description: 'Fresh basil pesto with pine nuts',
          price: 13.00,
          imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601'
        },
        {
          id: 'seafood-pasta',
          name: 'Seafood Pasta',
          description: 'Mixed seafood in white wine sauce',
          price: 16.00,
          imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
        }
      ]
    },
    {
      id: 'sushi',
      name: 'SUSHI',
      items: [
        {
          id: 'california-roll',
          name: 'California Roll',
          description: 'Crab, avocado, cucumber',
          price: 12.00,
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        {
          id: 'spicy-tuna',
          name: 'Spicy Tuna Roll',
          description: 'Fresh tuna with spicy mayo',
          price: 14.00,
          imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252'
        },
        {
          id: 'dragon-roll',
          name: 'Dragon Roll',
          description: 'Eel, cucumber, avocado',
          price: 16.00,
          imageUrl: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56'
        },
        {
          id: 'rainbow-roll',
          name: 'Rainbow Roll',
          description: 'California roll topped with fish',
          price: 18.00,
          imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754'
        },
        {
          id: 'philadelphia-roll',
          name: 'Philadelphia Roll',
          description: 'Salmon, cream cheese, cucumber',
          price: 15.00,
          imageUrl: 'https://images.unsplash.com/photo-1584583570840-0a3f5ce9f0b6'
        },
        {
          id: 'tempura-roll',
          name: 'Tempura Roll',
          description: 'Shrimp tempura, avocado, eel sauce',
          price: 16.00,
          imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351'
        }
      ]
    },
    {
      id: 'desserts',
      name: 'DESSERTS',
      items: [
        {
          id: 'tiramisu',
          name: 'Tiramisu',
          description: 'Coffee-flavored Italian dessert',
          price: 8.00,
          imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9'
        },
        {
          id: 'chocolate-cake',
          name: 'Chocolate Cake',
          description: 'Rich chocolate layer cake',
          price: 7.00,
          imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
        },
        {
          id: 'cheesecake',
          name: 'New York Cheesecake',
          description: 'Classic cheesecake with berry compote',
          price: 8.00,
          imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad'
        },
        {
          id: 'ice-cream',
          name: 'Ice Cream Selection',
          description: 'Assorted flavors of gelato',
          price: 6.00,
          imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f'
        },
        {
          id: 'apple-pie',
          name: 'Apple Pie',
          description: 'Warm apple pie with vanilla ice cream',
          price: 7.00,
          imageUrl: 'https://images.unsplash.com/photo-1568571780765-9276235b0918'
        },
        {
          id: 'creme-brulee',
          name: 'Crème Brûlée',
          description: 'Classic French vanilla custard',
          price: 8.00,
          imageUrl: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3'
        }
      ]
    },
    {
      id: 'drinks',
      name: 'DRINKS',
      items: [
        {
          id: 'mojito',
          name: 'Mojito',
          description: 'Rum, mint, lime, soda',
          price: 9.00,
          imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87'
        },
        {
          id: 'smoothie',
          name: 'Berry Smoothie',
          description: 'Mixed berries with yogurt',
          price: 6.00,
          imageUrl: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625'
        },
        {
          id: 'lemonade',
          name: 'Fresh Lemonade',
          description: 'House-made with mint',
          price: 5.00,
          imageUrl: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22'
        },
        {
          id: 'iced-tea',
          name: 'Peach Iced Tea',
          description: 'Fresh brewed with peach',
          price: 5.00,
          imageUrl: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87'
        },
        {
          id: 'espresso-martini',
          name: 'Espresso Martini',
          description: 'Vodka, coffee liqueur, espresso',
          price: 11.00,
          imageUrl: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2'
        },
        {
          id: 'margarita',
          name: 'Classic Margarita',
          description: 'Tequila, lime, triple sec',
          price: 10.00,
          imageUrl: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85'
        }
      ]
    }
  ];

  const scrollToSection = (categoryId: string) => {
    sectionRefs.current[categoryId]?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDialog = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };
  
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <div className="bg-gray-50 py-10">
          <div className="container mx-auto text-center">
            <h1 className="text-[80px] font-extralight text-gray-800 mb-4 tracking-wide">Our Menu</h1>
            <p className="text-xl text-gray-400 font-light tracking-wider">Discover our delicious selections</p>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-1 relative">
          {/* Side navigation - Sticky */}
          <div className="w-[250px] relative ml-[200px]">
            <div className="sticky top-4 py-8 bg-[#222222] text-white">
              <div className="flex flex-col">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="px-8 py-4 text-left hover:bg-gray-800 transition-colors text-sm tracking-wider text-gray-300 hover:text-white"
                    onClick={() => scrollToSection(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="flex-1 px-8 py-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                ref={el => sectionRefs.current[category.id] = el} 
                className="mb-16"
              >
                {/* Category Header with Banner Image */}
                <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${category.items[0].imageUrl})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl font-light text-white tracking-wider">{category.name}</h2>
                  </div>
                </div>

                {/* Items Grid - 3 items per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.items.map((product) => (
                    <div key={product.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                        <p className="text-gray-500 text-sm mt-1 h-10">{product.description}</p>
                        <div className="flex justify-between items-center mt-4">
                          <p className="text-gray-700">
                            <span className="text-sm text-gray-500">from </span>
                            <span className="font-medium">${product.price.toFixed(2)}</span>
                          </p>
                          <Button
                            onClick={() => openDialog(product)}
                            variant="outline"
                            className="text-xs px-4 py-1 border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
