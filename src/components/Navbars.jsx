import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FavoritesContext } from '../App';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { favorites = [] } = useContext(FavoritesContext) || {};

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }


  return (
    <div className="relative">
      <div className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="lg:hidden mr-2 text-gray-700 hover:text-yellow-600"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent font-display">
                  PopcornHub
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/favorites" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/favorites') ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                My Favorites {favorites.length > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-gray-900 bg-yellow-500 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-70 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-yellow-900 to-gray-900 text-white shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-72`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-yellow-500/30">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent font-display">
                PopcornHub
              </h1>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/')
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-lg">Home</span>
            </Link>
            
            <Link
              to="/favorites"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/favorites')
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-lg">Favorites</span>
              </div>
              {favorites.length > 0 && (
                <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                  {favorites.length}
                </span>
              )}
            </Link>
          </nav>

          <div className="p-6 border-t border-yellow-500/30 mt-auto">
            <div className="text-sm text-gray-400 text-center">
              <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
