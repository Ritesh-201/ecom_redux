import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    tenantId: null, // Will be the user's email
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.tenantId = action.payload.email; // Use email as tenantId
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.tenantId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
