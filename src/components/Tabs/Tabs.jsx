import { useEffect, useState, useContext } from 'react';
import { movies, series } from '../../helpers/movieData';
import axios from 'axios';
import './styles.css';
import { ThemeContext } from '../../helpers/ThemeContext';
import { useTranslation } from 'react-i18next'; 

let API_KEY = process.env.API_KEY;

export default function Tabs() {
  const { t } = useTranslation();
  const { theme, language } = useContext(ThemeContext);

  const [toggleState, setToggleState] = useState(1);
  const [appData, setAppDataMovies] = useState(movies);
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
  }, [language]);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=1`
      )
      .then((result) => {
        movies[0].value = result.data.name;
        movies[1].value = result.data.name;
        movies[2].value = result.data.name;
        setAppDataMovies(movies);
        setAppDataMovies(result.data.results);
      });
  }, [language]);

  return (
    <div className={theme === 'light' ? 'container' : 'theme-dark'}>
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          <h2>{t('tabs.movies')}</h2>
        </div>
        <div
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          <h2>{t('tabs.series')}</h2>
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content active-content' : 'content'}
        >
          {appData.map((movie, index) => {
            return (
              <div
                className={
                  theme === 'light'
                    ? 'container item-movie'
                    : 'theme-dark item-movie'
                }
                key={movie.id}
              >
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
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
                key={item.id}
              >
                <p>{item.original_name}</p>
                <p>{item.release_date}</p>
                <p>{item.overview}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
