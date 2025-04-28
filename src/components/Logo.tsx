
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center flex-col justify-center">
      <div className="w-16 h-16 border-2 border-soup-gold rounded-full flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-soup-gold rounded-full"></div>
      </div>
      <h1 className="text-2xl mt-2 font-light tracking-widest text-white">SOUP</h1>
    </Link>
  );
};

export default Logo;
