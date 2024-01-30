import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleFavoriteCat } from '../../store/slices/catSlice';

import styles from './styles.module.scss';

export const Cat = ({ id, imgUrl, isFavorite = false }) => {
  const dispatch = useDispatch();

  const onClickFavorite = () => {
    dispatch(toggleFavoriteCat(id));
  };

  return (
    <div className={styles.cat}>
      <img className={styles.img} src={imgUrl} alt="" />

      <button onClick={onClickFavorite} className={styles.favorite}>
        <img
          src={isFavorite ? './heart-liked.svg' : './heart-unliked.svg'}
          alt=""
        />
      </button>
      <div className={styles.overlay}></div>
    </div>
  );
};
