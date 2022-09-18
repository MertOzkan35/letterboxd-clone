import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovies: [],
};

export const favorite = createSlice({
  name: " favoriteMovies",
  initialState: initialState,
  reducers: {
    addFavoriteMovie: (state, { payload }) => {
      console.log(payload);
      state.favoriteMovies = [...state.favoriteMovies, payload];
    },
  },
});

export const { addFavoriteMovie } = favorite.actions;

export default favorite.reducer;
