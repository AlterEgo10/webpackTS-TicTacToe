import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './style/main.css';
// Clear the existing HTML content
//document.body.innerHTML = '<div id="app"></div>';

//JSX;
//const element = React.createElement('h1',{},'test!!!');

// Render your React component instead
const root = createRoot(document.querySelector('#app'));
//root.render(<h1>Hello, world</h1>);
root.render(
  // <h1
  //   id="title1"
  //   className="title">
  //   Hello
  // </h1>
  <App/>
);