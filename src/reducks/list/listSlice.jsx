import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    addList: (state, action) =>[...action.payload]
  }
});

export default listSlice;