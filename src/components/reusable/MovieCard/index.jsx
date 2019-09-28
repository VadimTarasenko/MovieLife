import React from 'react';

function MovieCard({ img, name, year, country, genre }) {
  return (
    <div className='movie-card'>
      <div className='movie-card__photo'>
        <img src={img} alt="title" />
      </div>
      <div className="movie-card__info">
        <h5>{name}</h5>
        <span>{`${year}, ${country}, ${genre}`}</span>
      </div>
    </div>
  );
}

export default MovieCard;