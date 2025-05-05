import React,{ useState, useEffect,useContext } from 'react'
import PropTypes from 'prop-types'
//import MovieItem from './MovieItem' 
import axios from 'axios';
import Menu from './Menu';
//import { ThemeContext } from '../helpers/ThemeContext';
//import { useLoaderData }
//import styled from 'styled-components';

// const DIV = styled.div`
//   padding: 0;
//   margin: 0;
// `

let API_KEY = process.env.API_KEY;

export const movies = [
  {
    id: 1,
    title: 'Iron Man',
    data: 2008,
    value: '',
  },
  {
    id: 2,
    title: 'Shrek Forever After',
    data: '2010',
    value: '',
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    data: 2010,
    value: '',
  },
];
function MovieContainer() {
//function MovieContainer({ items = [] }) {
//   const [theme, setTheme, changeTheme, changeThemeNext, language] =
//     useContext(ThemeContext);
const [appDataMovies, setAppDataMovies] = useState(movies);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru&page=1`
       // `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&Language=${language}&page=1`
      )
      .then((result) => {
        movies[0].value = result.data.name;
        movies[1].value = result.data.name;
        movies[2].value = result.data.name;
        setAppDataMovies(movies);
        // console.log(result.data.results);
        setAppDataMovies(result.data.results);
      });
   // }, [language]);
  }, []);

  return (
    <>
      <Menu/>
      <div>
        <h2>Фильмы</h2>
      </div>
      <div>
        {appDataMovies.map((movie, index) => {
          return (
            <div
              // className={
              //   theme === 'light'
              //     ? 'container item-movie'
              //     : 'theme-dark item-movie'
              // }
              key={movie.id}
            >
              <p>{movie.title}</p>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieContainer
