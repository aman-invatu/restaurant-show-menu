
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, X } from 'lucide-react';

interface OfferItem {
  id: string;
  title: string;
  description: string;
  image: string;
  conditions: {
    text: string;
    isAvailable: boolean;
  }[];
}

const offers: OfferItem[] = [
  {
    id: '1',
    title: 'Free Burger',
    description: 'Get free burger from orders higher that $40!',
    image: '/lovable-uploads/88465e93-958e-4be9-bf05-21dd8d25b293.png',
    conditions: [
      { text: 'Only on Tuesdays', isAvailable: true },
      { text: 'Unless one burger ordered', isAvailable: true },
    ]
  },
  {
    id: '2',
    title: 'Free Small Pizza',
    description: 'Get free burger from orders higher that $40!',
    image: '/lovable-uploads/2e7e09ca-a826-4cf9-afa9-d46c9ec13b65.png',
    conditions: [
      { text: 'Only on Weekends', isAvailable: true },
      { text: 'Order higher that $40', isAvailable: false },
    ]
  },
  {
    id: '3',
    title: 'Chip Friday',
    description: 'Get free fries with any order on Friday!',
    image: 'https://source.unsplash.com/featured/?fries',
    conditions: [
      { text: 'Valid every Friday', isAvailable: true },
      { text: 'No minimum order required', isAvailable: true },
    ]
  }
];

const Offers: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-7xl font-light text-center text-gray-800 mb-4">Special Offers</h1>
          <p className="text-center text-gray-500">Some informations about our restaurant</p>
        </div>
      </div>
      
      {/* Offers section */}
      <div className="container mx-auto px-4 py-16">
        {offers.map((offer, index) => (
          <div key={offer.id} className="mb-20">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
                <h2 className="text-5xl font-light text-gray-800 mb-6">{offer.title}</h2>
                <p className="text-gray-600 mb-8 text-xl">{offer.description}</p>
                
                <div className="space-y-4">
                  {offer.conditions.map((condition, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      {condition.isAvailable ? (
                        <Check className="text-green-500 h-6 w-6" />
                      ) : (
                        <X className="text-gray-400 h-6 w-6" />
                      )}
                      <span className={condition.isAvailable ? "text-gray-800" : "text-gray-400"}>
                        {condition.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Offers;
