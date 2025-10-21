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
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-gray-400" 
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
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`
            block w-full pl-10 pr-3 py-3 
            border border-gray-600 rounded-lg 
            bg-gray-800 text-white 
            placeholder-gray-400 
            focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:border-transparent
            ${className.includes('bg-') ? '' : 'bg-opacity-90'}
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
            className="absolute inset-y-0 right-12 pr-3 flex items-center text-gray-400 hover:text-white"
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
            absolute right-1.5 top-1/2 -translate-y-1/2
            px-4 py-2 rounded-md
            bg-gradient-to-r from-blue-600 to-blue-700 
            text-white font-medium
            hover:from-blue-700 hover:to-blue-800 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transition-colors duration-200
          `}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
