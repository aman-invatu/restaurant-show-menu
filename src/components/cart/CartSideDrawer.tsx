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

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black z-50 ${
          isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div 
        className={`fixed right-0 top-0 bottom-0 bg-white w-full md:w-96 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5 border-b bg-white">
            <h2 className="text-xl font-medium">Your Cart</h2>
            <button 
              onClick={onClose} 
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          
          {items.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto">
                <div className="max-h-full">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 border-b flex items-center justify-between bg-white">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">Normal ({item.size || '200g'})</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                        <div className="flex space-x-3 mt-2">
                          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white">
                <div className="p-5 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Order total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Delivery:</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="p-5 border-t">
                  <div className="flex justify-between text-xl font-medium">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout" 
                  className="block w-full bg-gray-800 text-white py-5 text-center font-medium text-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  GO TO CHECKOUT
                </Link>
              </div>
            </>
          ) : (
            <div className="p-8 text-center bg-white">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
