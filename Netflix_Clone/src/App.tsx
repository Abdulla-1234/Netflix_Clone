import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Billboard } from './components/Billboard';
import { MovieList } from './components/MovieList';
import { DetailPage } from './components/DetailPage';
import { SearchResults } from './components/SearchResults';
import { LatestPage } from './components/LatestPage';
import { MyListPage } from './components/MyListPage';
import { ProfilePage } from './components/ProfilePage';
import { mockMovies } from './data/mockData';

function App() {
  const movies = mockMovies.filter(item => item.type === 'movie');
  const tvShows = mockMovies.filter(item => item.type === 'tv');

  return (
    <Router>
      <div className="relative h-full bg-zinc-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Billboard />
              <div className="pb-40">
                <MovieList title="Trending Now" movies={mockMovies} />
                <MovieList title="Popular Movies" movies={movies} />
                <MovieList title="Popular TV Shows" movies={tvShows} />
              </div>
            </>
          } />
          <Route path="/movies" element={
            <div className="pt-20 pb-40">
              <MovieList title="Movies" movies={movies} />
            </div>
          } />
          <Route path="/tv-shows" element={
            <div className="pt-20 pb-40">
              <MovieList title="TV Shows" movies={tvShows} />
            </div>
          } />
          <Route path="/latest" element={<LatestPage />} />
          <Route path="/my-list" element={<MyListPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/watch/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;