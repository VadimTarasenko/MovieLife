import React, { useEffect, useState } from 'react';

import { ContentWrapper, Slider, MovieCard, Pagination, Loader } from 'components/reusable';

function Main(props) {

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const { allMovies } = props.mainPage;
  const { getAllMovies } = props;

  useEffect(() => {
    setTimeout(() => {
      getAllMovies({
        success: () => setIsDataLoaded(true),
        error: () => setIsDataLoaded(false)
      });
    },  3000);
  }, [getAllMovies]);

  allMovies.length = 30;

  return (
    <div className='main-page'>
      <ContentWrapper>
        <h1>Главная</h1>
        {isDataLoaded ? (
          <>
            <section className='section'>
              <h2 className='section__name'>Новинки</h2>
              <div className='section__content'>
                <Slider items={allMovies} />
              </div>
            </section>
            <section className='section'>
              <h2 className='section__name'>Фільми</h2>
              <div className='section__content'>
                <div className='main-page__movies'>
                  {allMovies.map((movie, i) =>
                    <MovieCard {...movie} key={i} />
                  )}
                </div>
                <div className='main-page__pagination'>
                  <Pagination />
                </div>
              </div>
            </section>
          </>
        ) : (
            <div className='main-page__loader'>
              <Loader />
            </div>
          )}
      </ContentWrapper>
    </div>
  )
}

export default Main;