import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addElement: (state, action) => {
      const checkProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (checkProduct) {
        state.total += checkProduct.price;
        checkProduct.count += 1;
        return;
      }
      state.total += action.payload.price;
      state.products.push(action.payload);
    },
    delElement: (state, action) => {
      const checkProduct = state.products.find(
        (product) => product.id === action.payload
      );
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.total -= checkProduct.price * checkProduct.count;
    },
    decrement: (state, action) => {
      const addCountProuct = state.products.find(
        (product) => product.id === action.payload
      );
      if (addCountProuct.count <= 1) {
        return;
      }
      state.total -= addCountProuct.price;
      addCountProuct.count -= 1;
    },
    increment: (state, action) => {
      const addCountProuct = state.products.find(
        (product) => product.id === action.payload
      );
      state.total += addCountProuct.price;

      addCountProuct.count += 1;
    },

    clearBasket: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export default basketSlice.reducer;
export const { addElement, delElement, increment, decrement, clearBasket } =
  basketSlice.actions;
