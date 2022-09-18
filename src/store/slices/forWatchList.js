import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchMovies: [],
};

export const watch = createSlice({
  name: " watchMovies",
  initialState: initialState,
  reducers: {
    addWatchMovie: (state, { payload }) => {
      console.log(payload);
      state.watchMovies = [...state.watchMovies, payload];
    },
  },
});

export const { addWatchMovie } = watch.actions;

export default watch.reducer;
