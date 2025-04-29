import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Checkbox } from '../ui/checkbox';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface Addition {
  name: string;
  price: number;
}

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

const ProductDialog: React.FC<ProductDialogProps> = ({ 
  open, 
  onClose, 
  product 
}) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [size, setSize] = useState<'normal' | 'double'>('normal');
  const [note, setNote] = useState('');
  const [selectedAdditions, setSelectedAdditions] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<'size' | 'additions' | 'other' | null>('size');
  
  const additions: Addition[] = [
    { name: 'Chicken', price: 2.00 },
    { name: 'Beef', price: 3.00 },
    { name: 'Paprika', price: 2.00 },
    { name: 'Cheese', price: 2.00 },
    { name: 'Pickle', price: 2.00 },
    { name: 'Angus Beef', price: 5.00 },
    { name: 'Potato', price: 2.00 },
    { name: 'Broccoli', price: 2.00 },
    { name: 'Onion', price: 2.00 },
    { name: 'Fries', price: 4.00 },
  ];

  const basePrice = product.price;
  const sizePrice = size === 'normal' ? 0 : 3.00;
  const additionsPrice = selectedAdditions.reduce((total, addition) => {
    const found = additions.find(a => a.name === addition);
    return total + (found ? found.price : 0);
  }, 0);
  
  const totalPrice = basePrice + sizePrice + additionsPrice;

  const handleAddition = (addition: string) => {
    setSelectedAdditions(prev => 
      prev.includes(addition) 
        ? prev.filter(a => a !== addition) 
        : [...prev, addition]
    );
  };

  const handleSectionClick = (section: 'size' | 'additions' | 'other') => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      quantity: 1,
      size: size === 'normal' ? '200g' : '400g',
      image: product.imageUrl
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      duration: 2000,
    });
    
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 max-w-lg overflow-hidden bg-white">
        <div className="relative">
          {/* Header with image */}
          <div className="h-48 bg-gray-800 relative flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50" 
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            />
            <div className="relative z-10 text-white text-center">
              <h2 className="text-3xl font-light">Specify your dish</h2>
            </div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white z-20"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Product details */}
          <div className="bg-white px-6 pt-6">
            <div className="mb-6">
              <h3 className="text-xl">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="text-right">
                <span className="text-xl">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Size selection */}
            <div className="mb-4">
              <div className="flex items-center">
                <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 ${activeSection === 'size' ? 'border-amber-500' : 'border-gray-300'}`}>
                  <div className={`w-3 h-3 rounded-full transition-all duration-200 ${activeSection === 'size' ? 'bg-amber-500 scale-100' : 'bg-transparent scale-0'}`}></div>
                </div>
                <button 
                  className="flex-1 flex items-center justify-between py-2"
                  onClick={() => handleSectionClick('size')}
                >
                  <span className="text-base">Size</span>
                  <span className={`transform transition-transform duration-200 ${activeSection === 'size' ? 'rotate-180' : ''}`}>▼</span>
                </button>
              </div>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeSection === 'size' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-9">
                  <RadioGroup 
                    value={size} 
                    onValueChange={(value) => setSize(value as 'normal' | 'double')}
                    className="space-y-3 py-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <RadioGroupItem 
                            value="normal" 
                            id="size-normal"
                            className="border-amber-500 text-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <label htmlFor="size-normal" className="text-sm">Normal - 200g</label>
                      </div>
                      <span className="text-sm">($9.00)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <RadioGroupItem 
                            value="double" 
                            id="size-double"
                            className="border-amber-500 text-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <label htmlFor="size-double" className="text-sm">Double - 400g</label>
                      </div>
                      <span className="text-sm">($12.00)</span>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            
            {/* Additions */}
            <div className="mb-4">
              <div className="flex items-center">
                <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 ${activeSection === 'additions' ? 'border-amber-500' : 'border-gray-300'}`}>
                  <div className={`w-3 h-3 rounded-full transition-all duration-200 ${activeSection === 'additions' ? 'bg-amber-500 scale-100' : 'bg-transparent scale-0'}`}></div>
                </div>
                <button 
                  className="flex-1 flex items-center justify-between py-2"
                  onClick={() => handleSectionClick('additions')}
                >
                  <span className="text-base">Additions</span>
                  <span className={`transform transition-transform duration-200 ${activeSection === 'additions' ? 'rotate-180' : ''}`}>▼</span>
                </button>
              </div>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeSection === 'additions' ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-9">
                  <div className="grid grid-cols-2 gap-y-3 py-4">
                    {additions.map((addition) => (
                      <div key={addition.name} className="flex items-center justify-between pr-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox 
                            id={`addition-${addition.name}`} 
                            checked={selectedAdditions.includes(addition.name)}
                            onCheckedChange={() => handleAddition(addition.name)}
                            className="border-amber-500 text-amber-500 focus:ring-amber-500 rounded-sm"
                          />
                          <label htmlFor={`addition-${addition.name}`} className="text-sm">
                            {addition.name}
                          </label>
                        </div>
                        <span className="text-sm">(${addition.price.toFixed(2)})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other notes */}
            <div className="mb-4">
              <div className="flex items-center">
                <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-3 transition-colors duration-200 ${activeSection === 'other' ? 'border-amber-500' : 'border-gray-300'}`}>
                  <div className={`w-3 h-3 rounded-full transition-all duration-200 ${activeSection === 'other' ? 'bg-amber-500 scale-100' : 'bg-transparent scale-0'}`}></div>
                </div>
                <button 
                  className="flex-1 flex items-center justify-between py-2"
                  onClick={() => handleSectionClick('other')}
                >
                  <span className="text-base">Other</span>
                  <span className={`transform transition-transform duration-200 ${activeSection === 'other' ? 'rotate-180' : ''}`}>▼</span>
                </button>
              </div>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeSection === 'other' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-9">
                  <div className="py-4">
                    <textarea 
                      className="w-full border p-3 resize-none text-sm"
                      rows={4}
                      placeholder="Put this any other informations..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer with button */}
          <div className="bg-gray-900 text-white py-4">
            <button 
              onClick={handleAddToCart}
              className="w-full text-center font-medium text-base uppercase"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
