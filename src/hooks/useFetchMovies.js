import { useState, useEffect } from 'react';
import { searchShows, getPopularShows } from '../utils/api';

const useFetchMovies = (searchQuery = '') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data;
        if (searchQuery) {
          data = await searchShows(searchQuery);
        } else {
          data = await getPopularShows();
        }
        
        // Get unique categories
        const allGenres = new Set();
        data.forEach(movie => {
          if (movie.genres?.length > 0) {
            movie.genres.forEach(genre => allGenres.add(genre));
          }
        });
        
        setMovies(data);
        setCategories(Array.from(allGenres).sort());
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError('Failed to load movies. Please try again later.');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchMovies, 500); // Debounce search
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter movies by selected category
  const filteredMovies = selectedCategory
    ? movies.filter(movie => movie.genres?.includes(selectedCategory))
    : movies;

  return {
    movies: filteredMovies,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useFetchMovies;
