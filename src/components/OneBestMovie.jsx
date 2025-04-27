import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//import { series } from '../helpers/movieData';

function OneBestMovie() {
  const [oneMovie, setBestMovie] = useState([]);
  useEffect(() => {
    setInterval(() => {
      axios
        .get(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=bc7224a73dc886d22ae4f7c60de75a13&language=en-US&page=1'
        )
        .then((result) => {
          let randomItem =
            result.data.results[
            Math.floor(Math.random() * result.data.results.length)
            ];
          setBestMovie(randomItem);
        });
    },2000)
  }, []);
  return (
    <div>
      <p>{oneMovie.title}</p>
      <p>{oneMovie.release_date}</p>
      <p>{oneMovie.overview}</p>
    </div>
  );
}

export default OneBestMovie;
