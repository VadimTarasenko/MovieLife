import React, { useEffect, useState } from 'react';

import { Header } from 'components/modules';
import { Main } from 'pages';

const apiKey = 'd45783e9a3da6b478a2ca714e9acc552';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://api.themoviedb.org/3/list/1?api_key=${apiKey}&language=en-US`)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.items.map((movie) => ({
              img: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
              name: movie.original_title,
              year: movie.release_date
            })))
          })
      });
  },[]);

  return (
    <div className='app'>
      <Header />
      <Main movies={movies} />
    </div>
  );
}

export default App;
