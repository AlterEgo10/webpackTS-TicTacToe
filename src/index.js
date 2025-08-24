import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
//import './style/main.css';
import './style/main.scss'
import ErrorBoundary from './components/ErrorBoundary.jsx';
//import { BrowserRouter } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import Sidebar from './components/Sidebar.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css'
// Render your React component instead
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json'
import translationRU from './locales/ru/translation.json'

const root = createRoot(document.querySelector('#app'));

const resources = {
  en: {
   translation: translationEN,
  },
   ru: {
   translation: translationRU,
  },
}

i18next.use(LanguageDetector).use(initReactI18next).init({
  resources,
  //lng: 'en',
  fallbackLng: 'ru',
})

root.render(
   <ErrorBoundary fallback={<p>Ошибка 500</p>} >
  <Provider store={store}>
      <App />
    </Provider>
    {/* <Sidebar/> */}
  </ErrorBoundary>
);
