import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    byTenant: {},
  },
  reducers: {
    addItem: (state, action) => {
      const { tenantId, item } = action.payload;
      if (!state.byTenant) { state.byTenant = {}; }
      if (!state.byTenant[tenantId]) {
        state.byTenant[tenantId] = { items: [], total: 0 };
      }
      const tenantCart = state.byTenant[tenantId];
      const existingItem = tenantCart.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        tenantCart.total += item.price; // Add price for the increased quantity
      } else {
        tenantCart.items.push({ ...item, quantity: 1 });
        tenantCart.total += item.price; // Add price for the new item
      }
    },
    removeItem: (state, action) => {
      const { tenantId, itemId } = action.payload;
      if (!state.byTenant[tenantId]) {
        return; // No cart for this tenant
      }
      const tenantCart = state.byTenant[tenantId];
      const itemIndex = tenantCart.items.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        const removedItem = tenantCart.items[itemIndex];
        tenantCart.total -= removedItem.price * removedItem.quantity;
        tenantCart.items.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const { tenantId, itemId } = action.payload;
      if (!state.byTenant) { state.byTenant = {}; }
      const tenantCart = state.byTenant[tenantId];
      const item = tenantCart?.items.find(i => i.id === itemId);
      if (item) {
        item.quantity++;
        tenantCart.total += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const { tenantId, itemId } = action.payload;
      if (!state.byTenant) { state.byTenant = {}; }
      const tenantCart = state.byTenant[tenantId];
      const item = tenantCart?.items.find(i => i.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
        tenantCart.total -= item.price;
      } else if (item && item.quantity === 1) {
        const itemIndex = tenantCart.items.findIndex(i => i.id === itemId);
        tenantCart.total -= item.price;
        tenantCart.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state, action) => {
      const { tenantId } = action.payload;
      if (state.byTenant && state.byTenant[tenantId]) {
        state.byTenant[tenantId] = { items: [], total: 0 };
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
