import react, { useState, useEffect } from 'react';
//import imageLogo from '../img/record.svg';
import { BrowserRouter, createHashRouter, RouterProvider,HashRouter,Routes,Route, createBrowserRouter } from 'react-router-dom';
import { ThemeContext } from '../helpers/ThemeContext';
import ThemeLanguageSwitcher from './button/ThemeLanguageSwitcher';
import MovieContainer from './MovieContainer';
import Series, { seriesLoader } from './Series';
import Error404 from './pages/Error404';
import EvaluatForm from './EvaluatForm';
import ErrorBoundary from './ErrorBoundary';
import MainLayout from './layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-redeclare, no-import-assign
let API_KEY = process.env.API_KEY;

const appThemes = ['light', 'dark'];

// eslint-disable-next-line unicorn/prefer-set-has
const appLanguage = ['ru', 'en-US'];

const router = createHashRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
  },
  {
    path: '/films',
     element: <MovieContainer />,
    //element: <MoviesSeries />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/series',
    element: <Series />,
    errorElement: <Error404 />,
  },
  {
    path: '/form',
    element: <EvaluatForm />,
    errorElement: <Error404 />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default function App() {

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

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        changeTheme,
        changeThemeNext,
        language,
        setLanguage,
        changeLanguage,
        changeLanguageNext,
      }}
    >
      <div className={theme === 'light' ? 'container' : ('theme-dark', 'body')}>
        {/* <Button /> */}
        <ThemeLanguageSwitcher/>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}
