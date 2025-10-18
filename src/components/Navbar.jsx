import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  const isActive = (path) => {
    return location.pathname === path;
  };


  return (
    <>
     
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-black text-yellow-500 p-3 rounded-lg shadow-lg hover:bg-gray-900 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

     
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-black to-gray-900 text-white shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64`}
      >
        <div className="flex flex-col h-full">
          
          <div className="p-6 border-b border-yellow-500/30">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                ShopHub
              </h1>
            </Link>
          </div>

          
          <nav className="flex-1 p-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/')
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-500'
              }`}
            >
              <span className="text-lg">Home</span>
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/products')
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-500'
              }`}
            >
              <span className="text-lg">Products</span>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/about')
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-500'
              }`}
            >
              <span className="text-lg">About</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-500'
              }`}
            >
              <span className="text-lg">Contact</span>
            </Link>
          </nav>

          
          <div className="p-6 border-t border-yellow-500/30">
            <div className="text-sm text-gray-400 text-center">
              <p className="font-semibold text-yellow-500 mb-1">Premium Shopping</p>
              <p>&copy; 2024 ShopHub</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
