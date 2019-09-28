import React from 'react';

import { ContentWrapper, Slider, MovieCard, Pagination } from 'components/reusable';

function Main({ movies }) {
  
  movies.length = 30;

  return (
    <div className='main-page'>
      <ContentWrapper>
        <h1>Главная</h1>
        <section className='section'>
          <h2 className='section__name'>Новинки</h2>
          <div className='section__content'>
            <Slider items={movies} />
          </div>
        </section>
        <section className='section'>
          <h2 className='section__name'>Фільми</h2>
          <div className='section__content'>
            <div className='main-page__movies'>
              {movies.map((movie, i) =>
                <MovieCard {...movie} key={i} />
              )}
            </div>
            <div className='main-page__pagination'>
              <Pagination />
            </div>
          </div>
        </section>
      </ContentWrapper>
    </div>
  )
}

export default Main;