
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-100">
        <CheckoutForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
