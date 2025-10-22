import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import useFetchMovies from '../hooks/useFetchMovies';
import HeroSection from '../components/HeroSection';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || '';
  
  const {
    movies,
    loading,
    error,
    categories,
    selectedCategory: contextCategory,
    setSelectedCategory: setContextCategory
  } = useFetchMovies(searchQuery);

  // Sync URL with component state
  const handleSearch = (query) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    setSearchParams(params);  
  };

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  // Update context when URL changes
  useEffect(() => {
    if (categoryParam !== contextCategory) {
      setContextCategory(categoryParam);
    }
  }, [categoryParam, contextCategory, setContextCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="mb-10 bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-2xl shadow-md border border-yellow-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Your Next Favorite Movie</h2>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-6">
            <SearchBar 
              initialValue={searchQuery}
              onSearch={handleSearch}
              className="w-full"
            />
          </div>
          
          {/* Category Filter */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-medium text-gray-600 mb-3 text-center">Or browse by category:</h3>
            <div className="flex justify-center">
              <CategoryFilter 
                categories={Array.from(categories)}
                selectedCategory={categoryParam}
                onCategoryChange={handleCategoryChange}
                className="flex-wrap justify-center gap-2"
                maxVisible={8}
              />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="mx-auto h-24 w-24 bg-primary-50 rounded-full flex items-center justify-center mb-4">
              <svg className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-display mb-2">No Movies Found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">We couldn't find any movies matching your search. Try different keywords or browse our collection.</p>
            <button 
              onClick={() => {
                setSearchParams({});
                setContextCategory('');
              }}
              className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Movie Grid */}
        {!loading && movies.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 font-display">
                {searchQuery 
                  ? `Search Results for "${searchQuery}"` 
                  : categoryParam 
                    ? `${categoryParam} Movies` 
                    : 'Popular Movies'}
              </h2>
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{movies.length}</span> {movies.length === 1 ? 'result' : 'results'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
