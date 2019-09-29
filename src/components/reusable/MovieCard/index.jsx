import React from 'react';

function MovieCard({ img, name, year, country, genre }) {
  return (
    <a className='movie-card' href='/movie/undefined'>
      <div className='movie-card__photo'>
        <div className='movie-card__photo-ratio' />
        <img src={img} alt="title" />
      </div>
      <div className="movie-card__info">
        <h5>{name}</h5>
        <span>{`${year}`}</span>
      </div>
    </a>
  );
}

export default MovieCard;