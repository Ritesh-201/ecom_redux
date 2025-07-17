import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    // Orders are stored in an object, with tenantId as the key
    byTenant: {},
  },
  reducers: {
    addOrder: (state, action) => {
      const { tenantId, order } = action.payload;
      if (!state.byTenant[tenantId]) {
        state.byTenant[tenantId] = [];
      }
      state.byTenant[tenantId].push(order);
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
