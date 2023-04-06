import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggler: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("mode", action.payload);
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { themeToggler, closeModal } = themeSlice.actions;

export default themeSlice.reducer;
