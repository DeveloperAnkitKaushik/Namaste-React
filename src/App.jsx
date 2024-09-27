import React, { useEffect, useState } from 'react';
import { data } from './utils/api';
import Card, { PromotedCard } from './components/Card';
import styles from './App.module.css';

const App = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    setlist(data);
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <div className={styles.container}>
        {list.map((restaurant) => {
          return restaurant.promoted
            ? <PromotedCard {...restaurant} key={restaurant.id} />
            : <Card {...restaurant} key={restaurant.id} />
        })}
      </div>
    </div>
  )
}

export default App;
