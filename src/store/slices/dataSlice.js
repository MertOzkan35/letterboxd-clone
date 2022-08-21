import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      Category: "Comedy",
      Name: "everything everywhere all at once",
      Id: 1,
      img: "1.jpg",
      Date: 2022,
      Part: "2020s",
    },
    {
      Category: "Action",
      Name: "the last duel",
      Id: 2,
      img: "2.jpg",
      Date: 2021,
      Part: "2000s",
    },
    {
      Category: "Science Fiction",
      Name: "dune",
      Id: 3,
      img: "3.jpg",
      Date: 2019,
      Part: "2010s",
    },
    {
      Category: "Drama",
      Name: "drive my car",
      Id: 4,
      img: "4.jpg",
      Date: 2021,
      Part: "2000s",
    },
    {
      Category: "Fantasy",
      Name: "the worst person in the world",
      Id: 5,
      img: "5.jpg",
      Date: 2005,
      Part: "Older...",
    },
    {
      Category: "Drama",
      Name: "good will hunting",
      Id: 6,
      img: "6.jpg",
      Date: 1997,
      Part: "2010s",
    },
    {
      Category: "Comedy",
      Name: "her",
      Id: 7,
      img: "7.jpg",
      Date: 2013,
      Part: "2000s",
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    // addCategory: (state, { payload }) => {
    //   state.categories = [...state.categories, payload];
    // },
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
