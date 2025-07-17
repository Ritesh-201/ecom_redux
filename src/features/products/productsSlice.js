import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: products,
    selectedProduct: null,
  },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = state.items.find(p => p.id === action.payload);
    },
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
