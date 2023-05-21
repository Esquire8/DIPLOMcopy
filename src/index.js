import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Router from './Components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);

