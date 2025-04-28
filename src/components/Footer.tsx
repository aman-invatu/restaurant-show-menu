
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-soup-dark text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Latest news</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-soup-gold transition-colors">
                  <p>How to create effective webdesign?</p>
                  <p className="text-sm text-gray-400">February 14, 2025</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soup-gold transition-colors">
                  <p>Awesome weekend in Polish mountains!</p>
                  <p className="text-sm text-gray-400">February 14, 2025</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soup-gold transition-colors">
                  <p>How to create effective webdesign?</p>
                  <p className="text-sm text-gray-400">February 14, 2025</p>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Subscribe Us!</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tap your e-mail..."
                className="flex-1 p-3 bg-white text-black"
              />
              <button className="bg-soup-gold text-white p-3 uppercase">Subscribe</button>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-soup-gold transition-colors">f</a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-soup-gold transition-colors">g</a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-soup-gold transition-colors">t</a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-soup-gold transition-colors">y</a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-soup-gold transition-colors">i</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4 text-center text-gray-400 text-sm">
          Copyright Soup 2025©. Made with love by Lovable.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
