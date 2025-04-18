import { useEffect, useState, useContext } from 'react';
import { movies, series } from '../../helpers/movieData';
import axios from 'axios';
import './styles.css';
import { ThemeContext } from '../../helpers/ThemeContext';
import { API_KEY } from '../../../.env';

export default function Tabs({ items = [] }) {
  const [theme, setTheme, changeTheme, changeThemeNext, language] =
    useContext(ThemeContext);
  const [toggleState, setToggleState] = useState(1);
  const [appDataSeries, setAppDataSeries] = useState(series);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
      )
      .then((result) => {
        movies[0].value = result.data.name;
        movies[1].value = result.data.name;
        movies[2].value = result.data.name;
        setAppDataSeries(result.data.results);
      });
  }, []);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={theme === 'light' ? 'container' : 'theme-dark'}>
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          <h2>Фильмы</h2>
        </div>
        <div
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          <h2>Сериалы</h2>
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content active-content' : 'content'}
        >
          {items.map((movie, index) => {
            return (
              <div
                className={
                  theme === 'light'
                    ? 'container item-movie'
                    : 'theme-dark item-movie'
                }
              >
                <p key={index + 1}>{movie.title}</p>
                <p key={index + 2}>{movie.release_date}</p>
                <p key={index + 3}>{movie.overview}</p>
              </div>
            );
          })}
        </div>
        <div
          className={toggleState === 2 ? 'content active-content' : 'content'}
        >
          {appDataSeries.map((item, index) => {
            return (
              <div
                className={
                  theme === 'light'
                    ? 'container item-movie'
                    : 'theme-dark item-movie'
                }
              >
                <p key={index + 1}>{item.original_name}</p>
                <p key={index + 2}>{item.release_date}</p>
                <p key={index + 3}>{item.overview}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
