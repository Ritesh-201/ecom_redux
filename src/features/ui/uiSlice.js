import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  showTooltip: true,
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
  },
});

export const { toggleTheme, setShowTooltip } = uiSlice.actions;
export default uiSlice.reducer;
