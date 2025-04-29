import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import ProductDialog from '@/components/products/ProductDialog';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const menuItems: MenuItem[] = [
  // Burgers
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
    name: 'Double Cheese Burger',
    description: 'Double beef patty, extra cheese, lettuce, tomato',
    price: 16.00,
    category: 'burgers'
  },
  // Pasta
  {
    id: '5',
    name: 'Spaghetti Carbonara',
    description: 'Creamy sauce, bacon, parmesan cheese, black pepper',
    price: 12.00,
    category: 'pasta'
  },
  {
    id: '6',
    name: 'Penne Arrabbiata',
    description: 'Spicy tomato sauce, garlic, red chili, parsley',
    price: 11.00,
    category: 'pasta'
  },
  {
    id: '7',
    name: 'Fettuccine Alfredo',
    description: 'Creamy parmesan sauce, butter, black pepper',
    price: 13.00,
    category: 'pasta'
  },
  {
    id: '8',
    name: 'Lasagna Bolognese',
    description: 'Layered pasta, meat sauce, bechamel, mozzarella',
    price: 15.00,
    category: 'pasta'
  },
  // Pizza
  {
    id: '9',
    name: 'Margherita Pizza',
    description: 'Fresh tomato sauce, mozzarella, basil leaves',
    price: 11.00,
    category: 'pizza'
  },
  {
    id: '10',
    name: 'Pepperoni Pizza',
    description: 'Tomato sauce, mozzarella, spicy pepperoni',
    price: 13.00,
    category: 'pizza'
  },
  {
    id: '11',
    name: 'Four Cheese Pizza',
    description: 'Mozzarella, gorgonzola, parmesan, ricotta',
    price: 14.00,
    category: 'pizza'
  },
  {
    id: '12',
    name: 'BBQ Chicken Pizza',
    description: 'BBQ sauce, chicken, red onions, cilantro',
    price: 15.00,
    category: 'pizza'
  },
  // Sushi
  {
    id: '13',
    name: 'California Roll',
    description: 'Crab meat, avocado, cucumber, tobiko',
    price: 12.00,
    category: 'sushi'
  },
  {
    id: '14',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna, spicy mayo, cucumber, sesame',
    price: 14.00,
    category: 'sushi'
  },
  {
    id: '15',
    name: 'Dragon Roll',
    description: 'Eel, cucumber, avocado, unagi sauce',
    price: 16.00,
    category: 'sushi'
  },
  {
    id: '16',
    name: 'Rainbow Roll',
    description: 'California roll topped with assorted sashimi',
    price: 18.00,
    category: 'sushi'
  },
  // Desserts
  {
    id: '17',
    name: 'Tiramisu',
    description: 'Coffee-flavored Italian dessert with mascarpone',
    price: 8.00,
    category: 'desserts'
  },
  {
    id: '18',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center',
    price: 9.00,
    category: 'desserts'
  },
  {
    id: '19',
    name: 'New York Cheesecake',
    description: 'Classic cheesecake with berry compote',
    price: 8.50,
    category: 'desserts'
  },
  {
    id: '20',
    name: 'Crème Brûlée',
    description: 'French vanilla custard with caramelized sugar',
    price: 9.50,
    category: 'desserts'
  },
  // Drinks
  {
    id: '21',
    name: 'Mojito',
    description: 'Rum, fresh mint, lime, soda water',
    price: 10.00,
    category: 'drinks'
  },
  {
    id: '22',
    name: 'Fresh Berry Smoothie',
    description: 'Mixed berries, yogurt, honey',
    price: 7.00,
    category: 'drinks'
  },
  {
    id: '23',
    name: 'Espresso Martini',
    description: 'Vodka, coffee liqueur, fresh espresso',
    price: 12.00,
    category: 'drinks'
  },
  {
    id: '24',
    name: 'Tropical Paradise',
    description: 'Mango, pineapple, coconut water, passion fruit',
    price: 8.00,
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

const categoryImages = {
  burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  desserts: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  drinks: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
};

const MenuList: React.FC = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (categoryId: string) => {
    sectionRefs.current[categoryId]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Menu List Header */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-[80px] font-extralight text-gray-800 mb-4 tracking-wide">Menu List</h1>
          <p className="text-xl text-gray-400 font-light tracking-wider">Some informations about our restaurant</p>
        </div>
      </div>

      <div className="flex flex-1 relative">
        {/* Left sidebar - Sticky */}
        <div className="w-[250px] relative ml-[200px]">
          <div className="sticky top-4 pl-8 py-8 bg-[#222222] text-white">
            <div className="flex flex-col gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="block text-left hover:text-gray-300 transition-colors text-sm tracking-wider"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="max-w-[800px]">
            {categories.map((category) => (
              <div 
                key={category.id} 
                ref={el => sectionRefs.current[category.id] = el}
                className="mb-16"
              >
                {/* Category banner */}
                <div className="relative">
                  <div 
                    className="h-[250px] w-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('${categoryImages[category.id as keyof typeof categoryImages] || `https://source.unsplash.com/random/1400x800/?${category.id}`}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-extralight text-white tracking-wider">{category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}</h2>
                  </div>
                </div>

                {/* Menu items */}
                <div className="px-8">
                  {menuItems
                    .filter(item => item.category === category.id)
                    .map(item => (
                      <div key={item.id} className="py-6 border-b border-gray-100">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-base text-gray-800 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-gray-400 text-right whitespace-nowrap">
                              <span className="text-xs mr-1">from</span>
                              <span className="text-base">${item.price.toFixed(2)}</span>
                            </div>
                            <Button 
                              variant="outline" 
                              className="border border-gray-300 text-gray-600 hover:border-gray-400 transition-colors h-8 text-xs px-6 rounded"
                            >
                              ADD TO CART
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
      </div>

      <Footer />
{/*       
      {selectedProduct && (
        <ProductDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          product={{
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            description: selectedProduct.description,
            imageUrl: `/lovable-uploads/e073095f-27e5-4b45-b326-fa417f46d40f.png`
          }}
          addToCart={(quantity, options) => {
            addToCart({
              id: selectedProduct.id,
              name: selectedProduct.name,
              price: selectedProduct.price,
              quantity,
              options,
            });
            setDialogOpen(false);
            toast.success(`${selectedProduct.name} added to cart`);
          }}
        />
      )} */}
    </div>
  );
};

export default MenuList;
