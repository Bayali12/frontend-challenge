import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Layout } from './components/Layout';
import { fetchCats } from './store/slices/catSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
