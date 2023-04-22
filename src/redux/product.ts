import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProType {
  id: number;
  name: string;
  price: number;
  title: string;
  image: string;
}
type initialType = {
  loading: boolean;
  productData: ProType[];
  success: boolean;
};
const initialProductState: initialType = {
  loading: false,
  productData: [],
  success: false,
};

export const proSlide = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    pushData: (state, action: PayloadAction<ProType[]>) => {
      return { ...state, productData: action.payload, success: true };
    },
  },
});

export const { pushData } = proSlide.actions;

export default proSlide.reducer;
