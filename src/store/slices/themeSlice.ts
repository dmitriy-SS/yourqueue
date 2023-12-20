import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type themes = 'dark' | 'light';

const initialState: {
  theme: themes;
} = { theme: 'dark' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const getCurrentTheme = (state: RootState) => state.theme.theme;
