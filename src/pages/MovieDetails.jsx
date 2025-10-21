import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../App';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFavorite = favorites.some(fav => fav.id === Number(id));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const [detailsResponse, castResponse] = await Promise.all([
          fetch(`https://api.tvmaze.com/shows/${id}`),
          fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        ]);

        if (!detailsResponse.ok || !castResponse.ok) {
          throw new Error('Failed to fetch movie details');
        }

        const details = await detailsResponse.json();
        const cast = await castResponse.json();
        
        const formattedMovie = {
          ...details,
          cast: cast.slice(0, 10).map(person => ({
            id: person.person.id,
            name: person.person.name,
            character: person.character?.name || 'N/A',
            image: person.person.image?.medium || null
          }))
        };

        setMovie(formattedMovie);
        setError(null);
      } catch (err) {
        setError('Failed to load movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(Number(id));
    } else if (movie) {
      addToFavorites({
        id: movie.id,
        name: movie.name,
        image: movie.image,
        rating: movie.rating,
        premiered: movie.premiered
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 w-full max-w-2xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error || 'Movie not found'}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Movies
            </button>
          </div>

          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-96 w-full object-cover md:w-80"
                src={movie.image?.original || 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={movie.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                }}
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">{movie.name}</h1>
                <button
                  onClick={toggleFavorite}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <svg
                    className={`h-8 w-8 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                    fill={isFavorite ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-2 flex items-center text-sm text-gray-500">
                {movie.premiered && (
                  <span className="mr-4">
                    {new Date(movie.premiered).getFullYear()}
                  </span>
                )}
                {movie.runtime && (
                  <span className="mr-4">{movie.runtime} min</span>
                )}
                {movie.rating?.average && (
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{movie.rating.average}/10</span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
                <div
                  className="mt-2 text-gray-600 prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: movie.summary || 'No overview available.' }}
                />
              </div>

              {movie.officialSite && (
                <div className="mt-4">
                  <a
                    href={movie.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Official Website
                  </a>
                </div>
              )}
            </div>
          </div>

          {movie.cast?.length > 0 && (
            <div className="px-8 pb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movie.cast.map((person) => (
                  <div key={person.id} className="flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200 mb-2">
                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/96?text=No+Image';
                          }}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gray-300">
                          <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium text-gray-900">{person.name}</h3>
                    <p className="text-sm text-gray-500">{person.character}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
