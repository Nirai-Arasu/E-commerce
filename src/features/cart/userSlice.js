import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const daisyTheme = {
  light: 'winter',
  dark: 'night',
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || 'light';
  console.log(daisyTheme[theme]);
  document.documentElement.setAttribute('data-theme', daisyTheme[theme]);
  return theme;
};
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};
const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      const { user, source } = payload;
      const details = user.user;
      details.token = user.jwt;
      state.user = details;
      localStorage.setItem('user', JSON.stringify(details));
      toast.success(`${source} in successfully`);
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    },
    toggleTheme: (state) => {
      if (state.theme == 'light') {
        state.theme = 'dark';
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', daisyTheme['dark']);
      } else {
        state.theme = 'light';
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute(
          'data-theme',
          daisyTheme['light']
        );
      }
    },
  },
});

export default userSlice.reducer;

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
