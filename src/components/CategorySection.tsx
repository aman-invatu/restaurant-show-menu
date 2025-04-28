
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, children, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="mb-16">
      <div 
        className="w-full h-80 bg-center bg-cover relative mb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex justify-between items-center w-full px-8">
          <h2 className="text-6xl font-light text-white tracking-wide">{title}</h2>
          <button 
            onClick={toggleOpen} 
            className="text-white bg-transparent hover:bg-white/20 rounded-full p-2"
          >
            {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
