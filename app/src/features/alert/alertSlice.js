import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAlert: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    toggleAlert: (state) => {
      state.isAlert = !state.isAlert;
    },
    resetAlert: (state, actions) => {
      state.isAlert = actions.payload;
    },
  },
});

export default alertSlice.reducer;

export const { toggleAlert, resetAlert } = alertSlice.actions;
