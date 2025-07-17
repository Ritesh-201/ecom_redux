import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  showTooltip: true,
  notification: null, // { message: string, type: 'success' | 'error' }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setShowTooltip: (state, action) => {
      state.showTooltip = action.payload;
    },
    showNotification: (state, action) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { toggleTheme, setShowTooltip, showNotification, clearNotification } = uiSlice.actions;
export default uiSlice.reducer;
