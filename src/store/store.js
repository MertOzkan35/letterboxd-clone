import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";

export default configureStore({
  reducer: {
    mert: dataReducer,
    // redux store kısmı
  },
});
