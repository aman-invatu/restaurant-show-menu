import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, children, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="mb-8">
      <div 
        className="max-w-6xl mx-auto w-full h-48 bg-center bg-cover relative mb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex justify-between items-center w-full px-8">
          <h2 className="text-6xl font-light text-white tracking-wide">{title}</h2>
          <button 
            onClick={toggleOpen} 
            className={`text-white bg-transparent hover:bg-white/20 rounded-full p-2 transition-all duration-500 ease-in-out transform ${
              isOpen ? 'rotate-180 bg-white/10' : ''
            }`}
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
      
      <div 
        className="max-w-6xl mx-auto overflow-hidden transition-all duration-700 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '2000px' : '0',
          opacity: isOpen ? '1' : '0',
          transform: `translateY(${isOpen ? '0' : '-20px'})`,
          marginBottom: isOpen ? '2rem' : '0'
        }}
      >
        <div className="bg-white rounded-lg border px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-700 ease-in-out">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
