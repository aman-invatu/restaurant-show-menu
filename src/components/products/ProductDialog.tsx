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
      <DialogContent className="p-0 max-w-3xl overflow-hidden">
        <div className="relative">
          {/* Header with image */}
          <div className="h-48 bg-gray-700 bg-opacity-75 relative flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50" 
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            />
            <div className="relative z-10 text-white text-center">
              <h2 className="text-3xl font-light mb-2">Specify your dish</h2>
            </div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white z-20 p-1"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Product details */}
          <div className="bg-gray-50 p-6">
            <div className="mb-8">
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.description}</p>
              <div className="text-right">
                <span className="text-xl">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Size selection */}
            <div className="mb-6 border-b pb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 border border-amber-500 rounded-full flex items-center justify-center mr-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
                <h4 className="text-lg">Size</h4>
              </div>
              
              <RadioGroup 
                value={size} 
                onValueChange={(value) => setSize(value as 'normal' | 'double')}
                className="space-y-2 ml-10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normal" id="size-normal" />
                    <label htmlFor="size-normal">Normal - 200g</label>
                  </div>
                  <span>($9.00)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="double" id="size-double" />
                    <label htmlFor="size-double">Double - 400g</label>
                  </div>
                  <span>($12.00)</span>
                </div>
              </RadioGroup>
            </div>
            
            {/* Additions */}
            <div className="mb-6 border-b pb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 border border-amber-500 rounded-full flex items-center justify-center mr-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
                <h4 className="text-lg">Additions</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-2 ml-10">
                {additions.slice(0, 5).map((addition) => (
                  <div key={addition.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={`addition-${addition.name}`} 
                        checked={selectedAdditions.includes(addition.name)}
                        onCheckedChange={() => handleAddition(addition.name)}
                      />
                      <label htmlFor={`addition-${addition.name}`}>
                        {addition.name}
                      </label>
                    </div>
                    <span>(${addition.price.toFixed(2)})</span>
                  </div>
                ))}
                
                {additions.slice(5).map((addition) => (
                  <div key={addition.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={`addition-${addition.name}`} 
                        checked={selectedAdditions.includes(addition.name)}
                        onCheckedChange={() => handleAddition(addition.name)}
                      />
                      <label htmlFor={`addition-${addition.name}`}>
                        {addition.name}
                      </label>
                    </div>
                    <span>(${addition.price.toFixed(2)})</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Other notes */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 border border-amber-500 rounded-full flex items-center justify-center mr-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
                <h4 className="text-lg">Other</h4>
              </div>
              
              <textarea 
                className="w-full border rounded-md p-4 resize-none"
                rows={4}
                placeholder="Put this any other informations..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
          
          {/* Footer with button */}
          <div className="bg-gray-900 text-white py-5 px-6">
            <button 
              onClick={handleAddToCart}
              className="w-full text-center font-medium text-lg"
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
