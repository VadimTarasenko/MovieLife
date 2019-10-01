import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ id, img, name, year, country, genre }) {
  return (
    <Link className='movie-card' to={`/film/${id}`}>
      <div className='movie-card__photo'>
        <div className='movie-card__photo-ratio' />
        <img src={img} alt="title" />
      </div>
      <div className="movie-card__info">
        <h5>{name}</h5>
        <span>{`${year}`}</span>
      </div>
    </Link>
  );
}

export default MovieCard;