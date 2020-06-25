import './App.css';

import React from 'react';

import data from './data.json';

function App() {
  return (
    <div>
      {data.dishes.map((d, i) => (
        <div key={i} className="dish-item">
          <div>{d.name}</div>
          <div>{d.price}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
