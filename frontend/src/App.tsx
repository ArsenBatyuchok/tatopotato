import './App.css';

import React, { useState } from 'react';

interface Dish {
  name: string;
  price: number;
}

interface Props {
  dishes: Dish[];
}

const App: React.FunctionComponent<Props> = props => {
  const [ordered, setOrdered] = useState<Dish[]>([]);
  const addOrder = (newDish: Dish) => () => setOrdered(ordered => [...ordered, newDish]);

  return (
    <div>
      {props.dishes.map((d, i) => (
        <div key={i} className="dish-item">
          <div>{d.name}</div>
          <div>{d.price}</div>
          <button onClick={addOrder(d)}>Order</button>
        </div>
      ))}

      {ordered.map((d, i) => (
        <div key={i} className="dish-item">
          <div>{d.name}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
