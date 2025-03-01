import React from 'react';
import { MovieCard } from './MovieCard';
import { Movie } from '../types';

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};