import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

export const fetchCats = createAsyncThunk('cats/fetchCats', async (page) => {
  const response = await api.get('search', {
    params: {
      page: page ?? 1,
      limit: 10,
    },
  });
  return response.data;
});

const initialState = {
  allCats: [],
  favoriteCats: [],
  page: 1,
  isLoading: false,
};

const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    toggleFavoriteCat: (state, action) => {
      const id = action.payload;
      const index = state.favoriteCats.indexOf(id);
      if (index !== -1) {
        state.favoriteCats.splice(index, 1);
      } else {
        state.favoriteCats.push(id);
      }
    },
    nextPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.allCats = [...state.allCats, ...action.payload];
      state.isLoading = false;
    });
  },
});

export default catSlice.reducer;
export const { toggleFavoriteCat, nextPage } = catSlice.actions;
