import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listSlice from "./list/listSlice"

const Reducer = combineReducers({
  lists : listSlice.reducer,
});

const store = configureStore({
  reducer: Reducer,
});

export default store