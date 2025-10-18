import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-6 rounded-lg shadow-2xl mb-12 border border-yellow-500/30">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Welcome to ShopHub
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
        </p>
        <Link 
          to="/products"
          className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-yellow-500/50"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
