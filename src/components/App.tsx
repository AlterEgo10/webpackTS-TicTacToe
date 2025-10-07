import { useState, Profiler } from 'react';
import {
  BrowserRouter,
  createHashRouter,
  RouterProvider,
  HashRouter,
  Routes,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
//import { profilerOnRenderCallback } from '../helpers/profiler'
import { ThemeContext,ThemeContextValue,AppThemes } from '../helpers/ThemeContext';
//import { ThemeContext,AppThemes } from '../helpers/ThemeContext';
import ThemeLanguageSwitcher from './button/ThemeLanguageSwitcher';
import MovieContainer from './pages/MovieContainer';
//import Series, { seriesLoader } from './pages/Series';
import Series from './pages/Series';
import Error404 from './pages/Error404';
import EvaluatForm from './pages/EvaluatForm';
import ErrorBoundary from './ErrorBoundary';
import MainLayout from './layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import AuthLayout from './layouts/AuthLayout';
import Logout from './pages/Logout';
import PrivateRoute from './PrivateRoute';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Settings from './Settings';
// eslint-disable-next-line no-redeclare, no-import-assign

const appThemes = [AppThemes.Light, AppThemes.Dark];

// eslint-disable-next-line unicorn/prefer-set-has

const router = createHashRouter([
  {
    path: '/',
    index: true,
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: 'films',
    element: <MovieContainer />,
  },
  {
    path: '/series',
    element: <Series />,
    errorElement: <Error404 />,
  },
  {
    path: '/form',
    element: <EvaluatForm />,
  },
  {
    path: 'setting',
    element: <Settings />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <LoginForm />
          </ErrorBoundary>
        ),
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: 'register',
        element: (
          <ErrorBoundary>
            <RegisterForm />
          </ErrorBoundary>
        ),
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);




export default function App() {
  const [theme, setTheme] = useState(appThemes[0]);
  //const [language, setLanguage] = useState('ru');

  function changeTheme(theme:AppThemes) {
    if (appThemes.includes(theme)) {
      setTheme(theme);
    }
  }

  function changeThemeNext() {
    const index = appThemes.indexOf(theme) || 0
    setTheme(index === 0 ? appThemes[1] : appThemes[0])
  }

  return (
    <ThemeContext.Provider
      value={
      [ theme, setTheme,
        changeTheme,
          changeThemeNext
      ]
      }
    >
    
        {/* <Profiler
          id="Routing"
          onRender={profilerOnRenderCallback}
        > */}
          <RouterProvider router={router} />
        {/* </Profiler> */}
    
    </ThemeContext.Provider>
  );
}






