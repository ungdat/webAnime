import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface CartType {
  id: number;
  name: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const initialState: CartType[] = [];
export const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartType>) => {
      state.push(action.payload);
      return state;
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const removeItem = state.filter((item) => item.id !== action.payload);
      return removeItem;
    },
  },
});
export const { addCart, removeCart } = cartSlide.actions;

export default cartSlide.reducer;
