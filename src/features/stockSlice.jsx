import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    firms: [],
    brands: [],
    products: [],
    sales: [],
    purchases: [],
    categories: [],
  }, //* endpoint değerlerimizi kullanarak statelerimizi isimlendirdik
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.endpoint] = payload.stock;
      //* square bracket notation kullanarak gelen değere göre dinamik olarak statelerimiz güncelleyebildik.
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getStockSuccess, openModal, closeModal } =
  stockSlice.actions;
export default stockSlice.reducer;
