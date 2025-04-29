
import React from 'react';
import { X, Edit } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface CartDropdownProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen = false, onClose }) => {
  const { items, removeItem, totalPrice, clearCart } = useCart();
  const deliveryFee = 3.99;
  const total = totalPrice + deliveryFee;

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full md:w-96 h-full animate-slide-in-right">
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-medium">Your Cart</h2>
          <button onClick={onClose} className="p-1">
            <X size={24} />
          </button>
        </div>
        
        {items.length > 0 ? (
          <>
            <div className="max-h-[calc(100vh-250px)] overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="p-4 border-b flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Normal ({item.size || '200g'})</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                    <div className="flex space-x-3 mt-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-5 border-b">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Order total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Delivery:</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between text-xl font-medium">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 w-full">
              <Link 
                to="/checkout" 
                className="block w-full bg-gray-800 text-white py-5 text-center font-medium text-lg"
              >
                GO TO CHECKOUT
              </Link>
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button 
              onClick={onClose}
              className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
