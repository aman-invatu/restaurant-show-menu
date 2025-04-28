import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';

const Index: React.FC = () => {
  const burgerImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const pizzaImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const drinksImage = "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const fastFoodImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const startersImage = "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const mainCourseImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  
  const burgerProducts = [
    {
      id: "beef-burger",
      name: "Beef Burger",
      description: "Beef, cheese, potato, onion, fries",
      price: 9.00,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "chicken-burger",
      name: "Chicken Burger",
      description: "Chicken, cheese, lettuce, tomato, fries",
      price: 8.50,
      imageUrl: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "veggie-burger",
      name: "Veggie Burger",
      description: "Vegetable patty, cheese, lettuce, tomato",
      price: 7.50,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }, {
      id: "beef-burger",
      name: "Beef Burger",
      description: "Beef, cheese, potato, onion, fries",
      price: 9.00,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "chicken-burger",
      name: "Chicken Burger",
      description: "Chicken, cheese, lettuce, tomato, fries",
      price: 8.50,
      imageUrl: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "veggie-burger",
      name: "Veggie Burger",
      description: "Vegetable patty, cheese, lettuce, tomato",
      price: 7.50,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  const pizzaProducts = [
    {
      id: "margherita",
      name: "Margherita",
      description: "Tomato sauce, mozzarella, basil",
      price: 10.00,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pepperoni",
      name: "Pepperoni",
      description: "Tomato sauce, mozzarella, pepperoni",
      price: 12.00,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vegetarian",
      name: "Vegetarian",
      description: "Tomato sauce, mozzarella, mixed vegetables",
      price: 11.00,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "margherita",
      name: "Margherita",
      description: "Tomato sauce, mozzarella, basil",
      price: 10.00,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pepperoni",
      name: "Pepperoni",
      description: "Tomato sauce, mozzarella, pepperoni",
      price: 12.00,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vegetarian",
      name: "Vegetarian",
      description: "Tomato sauce, mozzarella, mixed vegetables",
      price: 11.00,
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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

  const fastFoodProducts = [
    {
      id: "french-fries",
      name: "French Fries",
      description: "Crispy golden fries with ketchup",
      price: 4.00,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "chicken-nuggets",
      name: "Chicken Nuggets",
      description: "Crispy chicken nuggets with dipping sauce",
      price: 6.00,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "onion-rings",
      name: "Onion Rings",
      description: "Crispy battered onion rings",
      price: 5.00,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const startersProducts = [
    {
      id: "bruschetta",
      name: "Bruschetta",
      description: "Toasted bread with tomatoes and basil",
      price: 5.50,
      imageUrl: "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "garlic-bread",
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter",
      price: 4.50,
      imageUrl: "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mozzarella-sticks",
      name: "Mozzarella Sticks",
      description: "Breaded mozzarella with marinara sauce",
      price: 6.50,
      imageUrl: "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const mainCourseProducts = [
    {
      id: "grilled-salmon",
      name: "Grilled Salmon",
      description: "Fresh salmon with vegetables",
      price: 18.00,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "chicken-parmigiana",
      name: "Chicken Parmigiana",
      description: "Breaded chicken with tomato sauce and cheese",
      price: 16.00,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vegetable-lasagna",
      name: "Vegetable Lasagna",
      description: "Layers of pasta with vegetables and cheese",
      price: 14.00,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
        
        <div className="container mx-auto px-6 py-12">
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
          
          <CategorySection title="Pizza" imageUrl={pizzaImage}>
            {pizzaProducts.map((product) => (
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

          <CategorySection title="Fast Food" imageUrl={fastFoodImage}>
            {fastFoodProducts.map((product) => (
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

          <CategorySection title="Starters" imageUrl={startersImage}>
            {startersProducts.map((product) => (
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

          <CategorySection title="Main Course" imageUrl={mainCourseImage}>
            {mainCourseProducts.map((product) => (
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
