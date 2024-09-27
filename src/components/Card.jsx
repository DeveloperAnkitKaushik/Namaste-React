import React from 'react';
import styles from './CardStyles.module.css';

const Card = ({ id, name, cuisine, average_price }) => {
  return (
    <div className={styles.container} key={id}>
      <div className={styles.name}>{name}</div>
      <div className={styles.subheading}>{cuisine}</div>
      <div className={styles.price}>Average Price: ${average_price}</div>
    </div>
  );
};

export const PromotedCard = (props) => {
  return (
    <div className={`${styles.container} ${styles.promoted}`}>
      <h1>Promoted</h1>
      <Card {...props} />
    </div>
  );
};

export default Card;
