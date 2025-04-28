
import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '@/hooks/use-toast';

const CheckoutForm: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const deliveryFee = 3.99;
  const total = totalPrice + deliveryFee;
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Order placed successfully",
      description: "Thank you for your order!",
      duration: 5000,
    });
    clearCart();
    // In a real app, we would submit the order to a backend here
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8">
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-2xl flex items-center mb-4">
              <span className="text-soup-gold mr-2">⭘</span> Basic informations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full border p-3"
                />
              </div>
              <div>
                <label htmlFor="surname" className="block mb-2">Surname:</label>
                <input 
                  type="text" 
                  id="surname" 
                  required
                  className="w-full border p-3"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="street" className="block mb-2">Street and number:</label>
                <input 
                  type="text" 
                  id="street" 
                  required
                  className="w-full border p-3"
                />
              </div>
              <div>
                <label htmlFor="city" className="block mb-2">City:</label>
                <input 
                  type="text" 
                  id="city" 
                  required
                  className="w-full border p-3"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="phone" className="block mb-2">Phone number:</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full border p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">E-mail address:</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full border p-3"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl flex items-center mb-4">
              <span className="text-soup-gold mr-2">⭘</span> Delivery
            </h2>
            <div>
              <label htmlFor="delivery-time" className="block mb-2">Delivery time:</label>
              <select 
                id="delivery-time" 
                className="w-full border p-3"
                defaultValue="as-soon-as-possible"
              >
                <option value="as-soon-as-possible">As fast as possible</option>
                <option value="1-hour">Within 1 hour</option>
                <option value="2-hours">Within 2 hours</option>
                <option value="evening">This evening</option>
              </select>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl flex items-center mb-4">
              <span className="text-soup-gold mr-2">⭘</span> Payment
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="cash" 
                  name="payment" 
                  value="cash" 
                  defaultChecked
                  className="mr-2"
                />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="card" 
                  name="payment" 
                  value="card" 
                  className="mr-2"
                />
                <label htmlFor="card">Credit/Debit card</label>
              </div>
            </div>
          </div>
          
          <button 
            type="submit"
            className="bg-soup-dark text-white py-3 px-8 hover:bg-gray-800 transition-colors"
          >
            PLACE ORDER
          </button>
        </form>
      </div>
      
      <div className="bg-white shadow-md">
        <div className="bg-soup-dark text-white p-4">
          <h2 className="text-xl">You order</h2>
        </div>
        <div className="p-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500 text-sm">Normal (200g)</p>
              </div>
              <div className="text-right">
                <p>${item.price.toFixed(2)}</p>
                <div className="flex space-x-2 mt-1 justify-end">
                  <button className="text-gray-500">
                    <span className="text-xs">Edit</span>
                  </button>
                  <button className="text-gray-500">
                    <span className="text-xs">✕</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Order total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Delivery:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between font-medium">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
