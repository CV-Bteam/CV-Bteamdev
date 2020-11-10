import { createSlice } from "@reduxjs/toolkit"

const SLICE = createSlice({
  name: "form",
  initialState:[],
  reducers: {
    setForm: (state,action) => action.payload,
    clearForm: (state, action) => state.filter(el => el.id !== action.payload),
  },
  extraReducers: {
    
  }
});

export default SLICE;