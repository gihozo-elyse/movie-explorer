import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ initialValue = '', onSearch, className = '' }) {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  // Update local state when initialValue changes (e.g., from URL)
  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      if (onSearch) {
        onSearch(trimmedQuery);
      } else {
        navigate(`/?search=${encodeURIComponent(trimmedQuery)}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-gray-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`
              block w-full pl-12 pr-32 py-3 
              border border-gray-300 rounded-lg 
              bg-white text-gray-900 
              placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-offset-1
              focus:ring-yellow-500 focus:border-yellow-400
              shadow-sm
              ${className.includes('bg-') ? '' : 'bg-opacity-100'}
            `}
            placeholder="Search for movies..."
            aria-label="Search movies"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                if (onSearch) onSearch('');
              }}
              className="absolute inset-y-0 right-24 flex items-center px-3 text-gray-400 hover:text-yellow-600"
              aria-label="Clear search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <button
            type="submit"
            className={`
              absolute inset-y-0 right-0
              px-5 h-full rounded-r-lg
              bg-gradient-to-r from-yellow-500 to-yellow-600 
              text-white font-medium
              hover:from-yellow-600 hover:to-yellow-700 
              focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-500
              transition-all duration-200
            `}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
