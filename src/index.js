import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyles from './Styles/ResetStyles.js';
import GlobalStyles from './Styles/GlobalStyles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
