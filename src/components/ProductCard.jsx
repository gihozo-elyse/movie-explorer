import React from 'react';

function ProductCard({ image, name, price, category }) {
  
  
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    alert(`${name} has been added to your cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 border border-gray-200 hover:border-yellow-500">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        {category && (
          <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wide bg-yellow-50 px-2 py-1 rounded">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">
          {name}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
            {price}RWF
          </span>
          <button 
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-black to-gray-900 hover:from-yellow-600 hover:to-yellow-500 text-white hover:text-black font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
