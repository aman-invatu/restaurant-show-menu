
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';

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
    <nav className="bg-soup-dark text-white">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        <div className="w-1/4 hidden md:block">
          <Logo />
        </div>
        
        <div className="hidden md:flex justify-center space-x-8 flex-1">
          {navItems.map((item) => (
            <div key={item.title} className="relative dropdown group">
              <Link 
                to={item.link} 
                className="text-white hover:text-soup-gold transition-colors flex items-center"
              >
                {item.title}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </Link>
              
              {item.hasDropdown && (
                <div className="dropdown-content">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link 
                      key={dropdownItem.title}
                      to={dropdownItem.link}
                      className="dropdown-item"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-end w-1/4">
          <div className="relative mr-4">
            <button 
              className="border border-white px-6 py-2 hover:bg-white hover:text-soup-dark transition-colors"
              onClick={() => {}}
            >
              ORDER
            </button>
          </div>
          
          <div className="relative">
            <button onClick={toggleCart} className="relative flex items-center">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <span className="ml-2">${totalPrice.toFixed(2)}</span>
            {cartOpen && <CartDropdown />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
