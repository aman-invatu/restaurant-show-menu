
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Restaurant</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Experience the finest dining with our carefully crafted menu items and exceptional service.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
