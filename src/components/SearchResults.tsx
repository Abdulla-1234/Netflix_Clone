import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieCard } from './MovieCard';
import { mockMovies } from '../data/mockData';
import { Movie } from '../types';

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      const results = mockMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
        movie.cast.some(c => c.toLowerCase().includes(query.toLowerCase())) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(results);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="pt-32 pb-40 px-4 md:px-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
        {isLoading ? (
          'Searching...'
        ) : filteredMovies.length > 0 ? (
          `Found ${filteredMovies.length} results for "${query}"`
        ) : (
          `No results found for "${query}"`
        )}
      </h2>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
        </div>
      ) : filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-8">
          <p>Try adjusting your search to find what you're looking for.</p>
          <p className="mt-2">Suggestions:</p>
          <ul className="mt-1">
            <li>Check the spelling</li>
            <li>Use fewer keywords</li>
            <li>Try searching for an actor or genre</li>
          </ul>
        </div>
      )}
    </div>
  );
};