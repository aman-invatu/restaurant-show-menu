
import React from 'react';
import { X, Edit } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDropdown: React.FC = () => {
  const { items, removeItem, totalPrice } = useCart();
  const deliveryFee = 3.99;
  const total = totalPrice + deliveryFee;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-none shadow-lg z-50 text-black">
      <div className="p-4 border-b">
        <h2 className="text-xl font-normal mb-2 text-left">Your Cart</h2>
      </div>
      
      {items.length > 0 ? (
        <>
          <div className="max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="p-4 border-b flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="font-medium text-left">{item.name}</h3>
                  <p className="text-gray-500 text-sm text-left">Normal ({item.size || '200g'})</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                  <div className="flex space-x-2 mt-1 justify-end">
                    <button className="text-gray-500">
                      <Edit size={16} />
                    </button>
                    <button 
                      className="text-gray-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-b">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Order total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Delivery:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between font-medium">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          
          <Link 
            to="/checkout" 
            className="block w-full bg-soup-dark text-white py-4 text-center font-medium hover:bg-gray-800 transition-colors"
          >
            GO TO CHECKOUT
          </Link>
        </>
      ) : (
        <div className="p-4 text-center">
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
