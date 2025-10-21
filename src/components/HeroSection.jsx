import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div 
          className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?movie,theater')] bg-cover bg-center opacity-30"
          style={{
            backgroundBlendMode: 'overlay',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            <span className="block">Discover Your Next</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Favorite Movie
            </span>
          </h1>
          
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
            Explore thousands of movies, find ratings, and create your personal watchlist.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-4 border border-gray-600 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search for movies..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-4 border border-transparent text-base font-medium rounded-r-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-400">
              Try "Action", "Comedy", or "Drama" to get started
            </p>
          </div>

          {/* Popular Tags */}
          <div className="mt-8">
            <div className="flex flex-wrap justify-center gap-3">
              {['Action', 'Comedy', 'Drama', 'Thriller', 'Horror', 'Sci-Fi'].map((genre) => (
                <button
                  key={genre}
                  onClick={() => navigate(`/?search=${genre}`)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 border border-gray-700 hover:border-blue-500"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
