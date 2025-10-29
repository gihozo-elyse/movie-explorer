import { useState, useEffect } from 'react';
import { searchShows, getPopularShows } from '../utils/api';

const useFetchMovies = (searchQuery = '') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = searchQuery 
          ? await searchShows(searchQuery)
          : await getPopularShows();
        
        setMovies(data);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError('Failed to load movies. Please try again later.');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchMovies, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return { movies, loading, error };
};

export default useFetchMovies;
