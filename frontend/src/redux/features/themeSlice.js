// features/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: localStorage.getItem('theme') || 'dark', // Initialize with value from localStorage or default to 'dark'
  },
  reducers: {
    toggleTheme: (state) => {
      const newMode = state.mode === 'dark' ? 'light' : 'dark';
      state.mode = newMode;
      localStorage.setItem('theme', newMode); // Store the new theme mode in localStorage
    },
    // setTheme: (state, action) => {
    //   state.mode = action.payload;
    //   localStorage.setItem('theme', action.payload); // Store the new theme mode in localStorage
    // },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = state => state.theme.mode;


const themeReducer =  themeSlice.reducer;
export default themeReducer ;
