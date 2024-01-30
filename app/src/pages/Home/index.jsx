import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Cat } from '../../components/Cat';
import { Loader } from '../../components/Loader';
import { nextPage, fetchCats } from '../../store/slices/catSlice';

import styles from './styles.module.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const { allCats, favoriteCats, page, isLoading } = useSelector(
    (state) => state.cats,
  );

  const onClikcMoreBtn = () => {
    dispatch(nextPage());
    dispatch(fetchCats(page));
  };

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.catsList}>
          {allCats.map((cat) => (
            <Cat
              key={cat.id}
              id={cat.id}
              imgUrl={cat.url}
              isFavorite={favoriteCats.includes(cat.id)}
            />
          ))}
        </div>

        {isLoading && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}

        {allCats.length > 0 && (
          <div className={styles.pagination}>
            <button className={styles.loadMoreBtn} onClick={onClikcMoreBtn}>
              Больше котят
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
