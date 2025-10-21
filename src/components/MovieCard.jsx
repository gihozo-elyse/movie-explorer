import { Link } from 'react-router-dom';
import { FavoritesContext } from '../App';
import { useContext } from 'react';

function MovieCard({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <Link 
      to={`/movie/${movie.id}`}
      className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500"
    >
      <div className="h-80 overflow-hidden bg-gray-900">
        <img
          src={movie.image?.original || 'https://via.placeholder.com/210x295?text=No+Image'}
          alt={movie.name}
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/210x295?text=No+Image';
          }}
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-black/70 rounded-full hover:bg-red-500 transition-colors"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-white'}`}
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
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{movie.name}</h3>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
          <span>{movie.rating?.average ? `${movie.rating.average} ⭐` : 'N/A'}</span>
          <span>{movie.premiered?.split('-')[0] || 'N/A'}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
