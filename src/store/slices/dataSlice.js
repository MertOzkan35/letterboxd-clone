import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      Category: "Drama",
      Name: "Everything Everywhere All at Once",
      Id: 1,
      img: <img src={require("../../images/1.jpg")} />,
      Date: 2022,
    },
    {
      Category: "Action",
      Name: "The Last Duel",
      Id: 2,
      img: <img src={require("../../images/6.jpg")} />,
      Date: 2021,
    },
    {
      Category: "Science fiction",
      Name: "Dune",
      Id: 3,
      img: <img src={require("../../images/7.jpg")} />,
      Date: 2021,
    },
    {
      Category: "Drama",
      Name: "Drive My Car",
      Id: 4,
      img: <img src={require("../../images/4.jpg")} />,
      Date: 2021,
    },
    {
      Category: "Drama",
      Name: "The Worst Person in the World",
      Id: 5,
      img: <img src={require("../../images/5.jpg")} />,
      Date: 2021,
    },
    {
      Category: "Drama",
      Name: "Good Will Hunting",
      Id: 6,
      img: <img src={require("../../images/6.jpg")} />,
      Date: 1997,
    },
    {
      Category: "Drama",
      Name: "Her",
      Id: 7,
      img: <img src={require("../../images/7.jpg")} />,
      Date: 2013,
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
