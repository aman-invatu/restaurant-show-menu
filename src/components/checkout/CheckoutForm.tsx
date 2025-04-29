import React from 'react';
import { useCart } from '../../context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { FaUser, FaBox, FaCreditCard, FaPencilAlt, FaTimes } from 'react-icons/fa';

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
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative mb-12">
        <div 
          className="h-[300px] w-full bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-light mb-4">Checkout</h1>
            <p className="text-gray-200">Some informations about our restaurant</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <h2 className="text-2xl flex items-center mb-6">
                <FaUser className="text-soup-gold mr-3" /> Basic informations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-600">Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full border border-gray-300 p-3 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block mb-2 text-gray-600">Surname:</label>
                  <input 
                    type="text" 
                    id="surname" 
                    required
                    className="w-full border border-gray-300 p-3 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="street" className="block mb-2 text-gray-600">Street and number:</label>
                  <input 
                    type="text" 
                    id="street" 
                    required
                    className="w-full border border-gray-300 p-3 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-2 text-gray-600">City:</label>
                  <input 
                    type="text" 
                    id="city" 
                    required
                    className="w-full border border-gray-300 p-3 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-600">Phone number:</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full border border-gray-300 p-3 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-600">E-mail address:</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full border border-gray-300 p-3 rounded"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl flex items-center mb-6">
                <FaBox className="text-soup-gold mr-3" /> Delivery
              </h2>
              <div>
                <label htmlFor="delivery-time" className="block mb-2 text-gray-600">Delivery time:</label>
                <select 
                  id="delivery-time" 
                  className="w-full border border-gray-300 p-3 rounded focus:border-soup-gold focus:ring-1 focus:ring-soup-gold outline-none cursor-pointer appearance-none bg-white"
                  defaultValue="as-soon-as-possible"
                >
                  <option value="as-soon-as-possible">As fast as possible</option>
                  <option value="1-hour">In one hour</option>
                  <option value="2-hours">In two hours</option>
                  <option value="today">Today</option>
                </select>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl flex items-center mb-6">
                <FaCreditCard className="text-soup-gold mr-3" /> Payment
              </h2>
              <div className="flex space-x-8">
                <div className="flex items-center bg-gray-50 px-6 py-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input 
                    type="radio" 
                    id="paypal" 
                    name="payment" 
                    value="paypal" 
                    className="mr-3 h-4 w-4 text-soup-gold focus:ring-soup-gold cursor-pointer accent-[#D4AF37]"
                  />
                  <label htmlFor="paypal" className="cursor-pointer">PayPal</label>
                </div>
                <div className="flex items-center bg-gray-50 px-6 py-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input 
                    type="radio" 
                    id="credit-card" 
                    name="payment" 
                    value="credit-card" 
                    className="mr-3 h-4 w-4 text-soup-gold focus:ring-soup-gold cursor-pointer accent-[#D4AF37]"
                  />
                  <label htmlFor="credit-card" className="cursor-pointer">Credit Card</label>
                </div>
                <div className="flex items-center bg-gray-50 px-6 py-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  <input 
                    type="radio" 
                    id="cash" 
                    name="payment" 
                    value="cash" 
                    className="mr-3 h-4 w-4 text-soup-gold focus:ring-soup-gold cursor-pointer accent-[#D4AF37]"
                    defaultChecked
                  />
                  <label htmlFor="cash" className="cursor-pointer">Cash</label>
                </div>
              </div>
            </div>
            
            <button 
              type="submit"
              className="bg-soup-gold text-white py-3 px-8 rounded hover:bg-soup-gold/90 transition-colors text-lg font-medium"
            >
              ORDER NOW!
            </button>
          </form>
        </div>
        
        <div className="relative">
          <div className="sticky top-4 bg-white rounded-lg shadow-md">
            <div className="bg-[#2A2A2A] text-white p-4 rounded-t-lg">
              <h2 className="text-xl">You order</h2>
            </div>
            <div className="p-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-start py-3 border-b">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Normal (200g)</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                    <div className="flex space-x-3 mt-2 justify-end">
                      <button className="text-gray-400 hover:text-gray-600">
                        <FaPencilAlt size={14} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <FaTimes size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Order total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery:</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="pt-4 border-t mt-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
