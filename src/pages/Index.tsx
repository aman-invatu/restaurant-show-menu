
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';

const Index: React.FC = () => {
  const burgerImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const pizzaImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const drinksImage = "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  
  const burgerProducts = [
    {
      id: "beef-burger",
      name: "Beef Burger",
      description: "Beef, cheese, potato, onion, fries",
      price: 9.00,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "broccoli-pizza",
      name: "Broccoli",
      description: "Beef, cheese, potato, onion, fries",
      price: 9.00,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "chicken-burger",
      name: "Chicken Burger",
      description: "Beef, cheese, potato, onion, fries",
      price: 9.00,
      imageUrl: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
  ];
  
  const pastaProducts = [
    {
      id: "pasta-1",
      name: "Cresta di Galli",
      description: "Pasta with tomato sauce and herbs",
      price: 8.50,
      imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "chicken-wings",
      name: "Chicken Wings",
      description: "Spicy chicken wings with sauce",
      price: 7.50,
      imageUrl: "https://images.unsplash.com/photo-1688376971605-3b4758fc1dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sushi",
      name: "Nigiri Sushi",
      description: "Fresh fish on top of pressed rice",
      price: 12.00,
      imageUrl: "https://images.unsplash.com/photo-1583623025817-d180a2fe075e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  const drinkProducts = [
    {
      id: "cocktail-1",
      name: "Berry Blast",
      description: "Mixed berries cocktail with ice",
      price: 5.00,
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cocktail-2",
      name: "Citrus Fizz",
      description: "Refreshing citrus sparkling drink",
      price: 4.50,
      imageUrl: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cocktail-3",
      name: "Tropical Paradise",
      description: "Exotic fruits mixed cocktail",
      price: 6.00,
      imageUrl: "https://images.unsplash.com/photo-1595981267035-7b04ca84a46d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gray-100 py-8 text-center">
          <h1 className="text-5xl mb-4">Menu Grid</h1>
          <p className="text-xl text-gray-500">Some informations about our restaurant</p>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <CategorySection title="Burgers" imageUrl={burgerImage}>
            {burgerProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </CategorySection>
          
          <CategorySection title="Pasta" imageUrl={pizzaImage}>
            {pastaProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </CategorySection>
          
          <CategorySection title="Drinks" imageUrl={drinksImage}>
            {drinkProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </CategorySection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
