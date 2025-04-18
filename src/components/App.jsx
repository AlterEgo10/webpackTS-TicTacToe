import react, { useState, useEffect } from 'react';
//import imageLogo from '../img/record.svg';
import { ThemeContext } from '../helpers/ThemeContext';
//import InfoItem from './InfoItem';
import Button from './button/Button';
// import movies from '../helpers/movieData';
import Tabs from './Tabs/Tabs';
//import MovieContainer from './MovieContainer';
import axios from 'axios';
import { API_KEY } from '../../.env';
// import MovieItem from './MovieItem';

const movies = [
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

const appThemes = ['light', 'dark'];

// eslint-disable-next-line unicorn/prefer-set-has
const appLanguage = ['ru', 'en-US'];

export default function App() {
  const [appData, setAppDataMovies] = useState(movies);
  const [theme, setTheme] = useState(appThemes[0]);
  const [language, setLanguage] = useState('ru');

  function changeLanguage(language) {
    if (appLanguage.includes(language)) {
      setLanguage(language);
    }
  }

  function changeLanguageNext() {
    const index = appLanguage.indexOf(language) || 0;
    setLanguage(index === 0 ? appLanguage[1] : appLanguage[0]);
  }

  function changeTheme(theme) {
    if (appThemes.includes(theme)) {
      setTheme(theme);
    }
  }

  function changeThemeNext() {
    const index = appThemes.indexOf(theme) || 0;
    setTheme(index === 0 ? appThemes[1] : appThemes[0]);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}S&page=1`
      )
      .then((result) => {
        movies[0].value = result.data.name;
        movies[1].value = result.data.name;
        movies[2].value = result.data.name;
        setAppDataMovies(movies);
        console.log(setAppDataMovies(result.data.results));
      });
  }, []);

  return (
    <ThemeContext.Provider
      value={[
        theme,
        setTheme,
        changeTheme,
        changeThemeNext,
        language,
        setLanguage,
        changeLanguage,
        changeLanguageNext,
      ]}
    >
      <div className="container">
        <Button
        />

        {/* <InfoItem
  title="Имя пользователя"
  classTitle="user-name"
/>
<InfoItem
  title="Сумма"
  classTitle="user-amount"
/>
<InfoItem
  title="E-mail"
  classTitle="user-email"
/> */}
        {/* <MovieContainer /> */}
        <Tabs
          items={appData} />
      </div>
    </ThemeContext.Provider>
  );
}
