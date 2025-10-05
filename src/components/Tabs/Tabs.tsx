/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useState, useContext } from 'react';
//import { movies, series } from '../../helpers/movieData';
import axios from 'axios';
import './styles.css';
import { ThemeContext,ThemeContextValue,AppThemes } from '../../helpers/ThemeContext';
import { useTranslation } from 'react-i18next'; 

const API_KEY = process.env.API_KEY;

interface MoviesProp {
  id: number
  title:string
  release_date: string
  data: string;
  overview: string
  original_name:string
}


interface SeriesProp {
  id: number
  release_date: string
  overview: string
  original_name:string
}

const appThemes = [AppThemes.Light, AppThemes.Dark];

export default function Tabs() {
  const { t } = useTranslation();
  useContext(ThemeContext);
//const { Light, Dark } = useContext(AppThemes);
  const [toggleState, setToggleState] = useState(1);
  //const [appData, setAppDataMovies] = useState(movies);
   const [appData, setAppDataMovies] = useState([]);
  const [appDataSeries, setAppDataSeries] = useState([]);

// const ThemeContextValue: ThemeContextValue =  [theme,
//         setTheme,
//         changeTheme,
//         changeThemeNext]

  useEffect(() => {
    axios
           .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en&page=1`
      )
      .then((result) => {
        // movies[0].value = result.data.name;
        // movies[1].value = result.data.name;
        // movies[2].value = result.data.name;
        setAppDataSeries(result.data.results);
      });
  }, []);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en&page=1`
      )
      .then((result) => {
        // movies[0].value = result.data.name;
        // movies[1].value = result.data.name;
        // movies[2].value = result.data.name;
        //setAppDataMovies(movies);
        setAppDataMovies(result.data.results);
      });
  }, []);

  return (
    <div>
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
          {appData.map((movie:MoviesProp, index) => {
            return (
              <div
              //  className='theme-dark item-movie'
                className={
                  AppThemes.Light === 'light'
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
          {appDataSeries.map((item:SeriesProp, index) => {
            return (
              <div
                // className='theme-dark item-movie'
                className={
                  AppThemes.Light === 'light'
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
