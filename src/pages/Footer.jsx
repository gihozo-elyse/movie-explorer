import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white mt-auto border-t border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
         
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ShopHub</h3>
            <p className="text-gray-400">
              Your trusted online shopping destination for quality products at great prices.
            </p>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">dervary Information</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@inzorashophub.com</li>
              <li>Phone: (+250) 78234567</li>
              <li>Address: Nyamirambo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500/30 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 inzora ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;