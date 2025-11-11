import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import HeroSection from '../components/HeroSection';
import useFetchMovies from '../hooks/useFetchMovies';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const { movies, loading, error } = useFetchMovies(searchQuery);

  // clearing search
  const clearSearch = () => setSearchParams({});

  
  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 p-4 rounded-md text-red-700 text-center">
      {error}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="container mx-auto p-4">
        {!movies.length ? (
          <div className="text-center py-12">
            <p className="text-lg">No movies found</p>
            <button 
              onClick={clearSearch}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Clear search
            </button>
          </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">
            {searchQuery ? `Results for "${searchQuery}"` : 'Popular Movies'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
