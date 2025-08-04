import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './style/main.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';
//import { BrowserRouter } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import Sidebar from './components/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
// Render your React component instead
const root = createRoot(document.querySelector('#app'));



root.render(
   <ErrorBoundary fallback={<p>Ошибка 500</p>} >
  <Provider store={store}>
      <App />
    </Provider>
    {/* <Sidebar/> */}
  </ErrorBoundary>
);
