import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { companyDetails } from '../data/company';

const Products = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <>
      <Helmet>
        <title>Products - {companyDetails.name}</title>
        <meta name="description" content="Explore our wide range of Digital Printing Machines, Laser Cutters, CNC Routers, and Genuine Spare Parts." />
      </Helmet>

      {/* Hero */}
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Industrial-grade machinery and premium spare parts designed for performance and durability.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${
                  filter === cat 
                    ? 'bg-brand-blue text-white shadow-lg shadow-blue-300' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col group"
                >
                  <Link to={`/products/${product.id}`} className="block h-full flex flex-col">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors"></div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-bold text-brand-blue uppercase tracking-wide mb-2">{product.category}</div>
                      <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-brand-blue transition-colors">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{product.shortDescription}</p>
                      
                      <div className="mt-auto">
                        <span className="w-full bg-gray-50 group-hover:bg-brand-blue group-hover:text-white text-brand-blue py-3 rounded-xl transition-colors text-sm font-bold flex items-center justify-center gap-2">
                          View Details <ChevronRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Products;
