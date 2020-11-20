import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SLICE from "./list/formSlice"

const Reducer = combineReducers({
  form: SLICE.reducer,
});

const store = configureStore({
  reducer: Reducer,
});

export default store