import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Offers: React.FC = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <div className="relative h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000)',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <motion.div 
            className="relative h-full flex flex-col items-center justify-center text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-extralight mb-6">Special Offers</h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl">
              Discover our exclusive deals and promotions crafted just for you
            </p>
          </motion.div>
        </div>

        {/* Offers Grid */}
        <motion.div 
          className="container mx-auto px-4 py-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-24">
            {/* Free Burger Offer */}
            <motion.div 
              className="group relative flex flex-col md:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="md:w-1/2 h-[400px] overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                  alt="Free Burger"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <motion.div variants={scaleIn}>
                  <span className="inline-block px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-6">
                    Tuesday Special
                  </span>
                  <h2 className="text-5xl font-light text-gray-800 mb-6">Free Burger</h2>
                  <p className="text-xl text-gray-600 mb-8">Get a complimentary burger when your order exceeds $40!</p>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3 text-gray-600"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Available every Tuesday</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 text-gray-600"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span>Minimum order value: $40</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 text-gray-600"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>One free burger per order</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Free Pizza Offer */}
            <motion.div 
              className="group relative flex flex-col md:flex-row-reverse items-stretch bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="md:w-1/2 h-[400px] overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                  alt="Free Pizza"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <motion.div variants={scaleIn}>
                  <span className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-6">
                    Weekend Special
                  </span>
                  <h2 className="text-5xl font-light text-gray-800 mb-6">Free Small Pizza</h2>
                  <p className="text-xl text-gray-600 mb-8">Enjoy a complimentary small pizza with orders over $40!</p>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3 text-gray-600"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Valid Saturday and Sunday</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 text-gray-600"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span>Minimum order value: $40</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Student Discount */}
            <motion.div 
              className="group relative flex flex-col md:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="md:w-1/2 h-[400px] overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c"
                  alt="Student Discount"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <motion.div variants={scaleIn}>
                  <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                    Student Exclusive
                  </span>
                  <h2 className="text-5xl font-light text-gray-800 mb-6">20% Student Discount</h2>
                  <p className="text-xl text-gray-600 mb-8">Show your student ID and get 20% off on your entire order!</p>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3 text-gray-600"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Valid Monday through Friday</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 text-gray-600"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Valid student ID required</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers; 
