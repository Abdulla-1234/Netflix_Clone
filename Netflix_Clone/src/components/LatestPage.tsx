import React from 'react';
import { MovieCard } from './MovieCard';
import { mockMovies } from '../data/mockData';

export const LatestPage = () => {
  const newReleases = mockMovies
    .filter(movie => movie.isNew)
    .sort((a, b) => new Date(b.releaseDate!).getTime() - new Date(a.releaseDate!).getTime());

  const recentlyAdded = mockMovies
    .sort((a, b) => new Date(b.releaseDate!).getTime() - new Date(a.releaseDate!).getTime())
    .slice(0, 8);

  return (
    <div className="pt-32 pb-40 px-4 md:px-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">New Releases</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {newReleases.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">Recently Added</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recentlyAdded.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};