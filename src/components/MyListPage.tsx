import React from 'react';
import { MovieCard } from './MovieCard';
import { mockMovies } from '../data/mockData';

export const MyListPage = () => {
  const myList = mockMovies.filter(movie => movie.inMyList);

  return (
    <div className="pt-32 pb-40 px-4 md:px-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">My List</h2>
      {myList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {myList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-white text-lg">Your list is empty. Add some titles to watch later!</p>
      )}
    </div>
  );
};