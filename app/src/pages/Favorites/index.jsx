import React from 'react';
import { useSelector } from 'react-redux';

import { Cat } from '../../components/Cat';

import styles from './styles.module.scss';

export const Favorites = () => {
  const { allCats, favoriteCats } = useSelector((state) => state.cats);

  const favorites = allCats.filter((cat) => favoriteCats.includes(cat.id));

  return (
    <div className={styles.container}>
      <div className={styles.favoriteCats}>
        <div className={styles.catsList}>
          {favorites.map((cat) => (
            <Cat
              key={cat.id}
              id={cat.id}
              imgUrl={cat.url}
              isFavorite={favoriteCats.includes(cat.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
