import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addList: (state, action) => [...state, action.payload],
    deleteList: (state, action) => state.filter(el => el.id !== action.payload),
  },
  extraReducers: {
    
  }
});

export default slice;