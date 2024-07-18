import React from 'react';
import MovieCard from '../MovieCard';
import './index.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.key}
          title={movie.title}
          author={movie.author_name ? movie.author_name.join(', ') : 'Unknown'}
          year={movie.first_publish_year}
        />
      ))}
    </div>
  );
};

export default MovieList;
