import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchMovies: [],
};

export const watch = createSlice({
  name: " watchMovies",
  initialState: initialState,
  reducers: {
    addWatchMovie: (state, { payload }) => {
      state.watchMovies = [...state.watchMovies, payload];
    },
    deleteWatchMovie: (state, { payload }) => {
      console.log(payload);
      state.watchMovies = state.watchMovies.filter(
        (item) => item.Id !== payload.Id
      );
    },
  },
});

export const { addWatchMovie, deleteWatchMovie } = watch.actions;

export default watch.reducer;
