import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slice from "./list/listSlice";

const Reducer = combineReducers({
  list: slice.reducer,
});

const store = configureStore({
  reducer: Reducer,
});

export default store