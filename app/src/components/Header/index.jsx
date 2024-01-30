import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

export const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={'/'} className={currentPage === '/' ? styles.active : ''}>
          Все котики
        </Link>
        <Link
          to={'/favorites'}
          className={currentPage === '/favorites' ? styles.active : ''}>
          Любимые котики
        </Link>
      </header>
    </div>
  );
};
