import axios from 'axios';

import { apiKey, moviesApiUrl, photoSourceUrl } from 'utilities/api';
import { setAllMovies } from 'store/actions/main.actions';

export const getAllMovies = (dispatch) => (actions) => {
  axios.get(`${moviesApiUrl}/3/list/1?api_key=${apiKey}&language=en-US`)
    .then(({ data }) => {
      const movies = data.items.map((movie) => ({
        id: movie.id,
        img: photoSourceUrl + movie.backdrop_path,
        name: movie.title,
        year: movie.release_date
      }));
      dispatch(setAllMovies(movies));
      actions && actions.success && actions.success();
    })
    .catch((error) => {
      console.error('getAllMovies: ', error);
      actions && actions.error && actions.error();
    });
}