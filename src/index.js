import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <script src="https://kit.fontawesome.com/d65e853b8d.js" crossorigin="anonymous"></script>
  </>,
  document.getElementById('root')
);

