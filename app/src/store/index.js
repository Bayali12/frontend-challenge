import { configureStore } from '@reduxjs/toolkit';

import catReducer from './slices/catSlice';

const store = configureStore({
  reducer: {
    cats: catReducer,
  },
});

export const state = store.getState();
export default store;
