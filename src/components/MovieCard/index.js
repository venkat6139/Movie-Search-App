import React, { useEffect, useState } from 'react';
import { fetchDogImage } from '../Api';
import './index.css';

const MovieCard = ({ title, author, year }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const getDogImage = async () => {
      const image = await fetchDogImage();
      setDogImage(image);
    };

    getDogImage();
  }, []);

  return (
    <div className="movie-card">
        <div className='movie-info'>
          <img src={dogImage} alt="Random dog" />
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{year}</p>
        </div>
    </div>
  );
};

export default MovieCard;
