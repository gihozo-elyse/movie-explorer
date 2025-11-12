import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Movie Explorer</h2>
          <p className="text-gray-600 dark:text-gray-300">Discover your next favorite movie</p>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Movie Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
