import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import data from './data.json';

ReactDOM.render(
  <React.StrictMode>
    <App dishes={data.dishes} />
  </React.StrictMode>,
  document.getElementById('root')
);
