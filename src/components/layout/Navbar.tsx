
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import Logo from '../Logo';
import { useCart } from '@/context/CartContext';
import CartDropdown from '../cart/CartDropdown';

interface NavItem {
  title: string;
  link: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; link: string }[];
}

const navItems: NavItem[] = [
  { 
    title: 'HOME',
    link: '/',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Home 1', link: '/' },
      { title: 'Home 2', link: '/' }
    ]
  },
  { 
    title: 'ABOUT',
    link: '/about',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Our Story', link: '/about' },
      { title: 'Our Team', link: '/team' }
    ]
  },
  { 
    title: 'MENU',
    link: '/menu',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Burgers', link: '/menu#burgers' },
      { title: 'Pizza', link: '/menu#pizza' },
      { title: 'Drinks', link: '/menu#drinks' }
    ]
  },
  { title: 'OFFERS', link: '/offers' },
  { title: 'CONTACT', link: '/contact' },
  { 
    title: 'MORE',
    link: '#',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Blog', link: '/blog' },
      { title: 'Gallery', link: '/gallery' },
      { title: 'FAQ', link: '/faq' }
    ]
  },
];

const Navbar: React.FC = () => {
  const { totalItems, totalPrice } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        <div className="w-1/4 hidden md:block">
          <Logo />
        </div>
        
        <div className="hidden md:flex justify-center space-x-12 flex-1">
          {navItems.map((item) => (
            <div key={item.title} className="relative dropdown group">
              <Link 
                to={item.link} 
                className="text-gray-700 hover:text-black transition-colors flex items-center text-[15px] font-medium"
              >
                {item.title}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                )}
              </Link>
              
              {item.hasDropdown && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-none py-2 min-w-[200px] z-50 border border-gray-100">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link 
                      key={dropdownItem.title}
                      to={dropdownItem.link}
                      className="block px-6 py-2 text-[15px] text-gray-600 hover:text-black hover:bg-gray-50"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-end w-1/4 space-x-8">
          <Link
            to="/order" 
            className="border border-gray-800 px-8 py-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium"
          >
            ORDER
          </Link>
          
          <div className="flex items-center">
            <button onClick={toggleCart} className="relative flex items-center">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <span className="ml-3 text-gray-800 font-medium">${totalPrice.toFixed(2)}</span>
            <CartDropdown isOpen={cartOpen} onClose={() => setCartOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
