import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching products with pagination
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ limit, skip }) => {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    selectedProduct: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    total: 0,
    limit: 10, // Default limit
    skip: 0,   // Default skip
  },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = state.items.find(p => p.id === action.payload);
    },
    setSkip: (state, action) => {
      state.skip = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload.products); // Append new products
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectProduct, setSkip } = productsSlice.actions;
export default productsSlice.reducer;
