import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DetailType {
  id: number;
  name: string;
  price: number;
  title: string;
  image: string;
}

const initialDetail: DetailType = {
  id: 1,
  name: "",
  price: 0,
  title: "",
  image: "",
};
export const detailSlide = createSlice({
  name: "detail",
  initialState: initialDetail,
  reducers: {
    detail: (state, action: PayloadAction<DetailType>) => {
      return action.payload;
    },
  },
});

export const { detail } = detailSlide.actions;
export default detailSlide.reducer;
