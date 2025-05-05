import react, { useState, useEffect } from 'react';
import axios from 'axios';
//import imageLogo from '../img/record.svg';
import { BrowserRouter, createHashRouter, RouterProvider,HashRouter,Routes,Route, createBrowserRouter } from 'react-router-dom';
import { ThemeContext } from '../helpers/ThemeContext';
import Button from './button/Button';
import MovieContainer from './MovieContainer';
import Series, { seriesLoader } from './Series';
import Error404 from './pages/Error404';

import ErrorBoundary from './ErrorBoundary';
import MainLayout from './layouts/MainLayout';

// eslint-disable-next-line no-redeclare, no-import-assign
let API_KEY = process.env.API_KEY;

const appThemes = ['light', 'dark'];

// eslint-disable-next-line unicorn/prefer-set-has
const appLanguage = ['ru', 'en-US'];

const router = createHashRouter([
  //const router = BrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/films',
    element: <MovieContainer />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/series',
    element: <Series />,
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
      <div className={theme === 'light' ? 'container' : ('theme-dark' ,'body')}>
        <Button />
        {/* <BrowserRouter router={router} /> */}
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}
