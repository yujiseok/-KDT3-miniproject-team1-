import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

export interface LikeState {
  likeId?: number;
  productId?: string;
}

const initialState: LikeState[] = [];

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike: (state, action) => {
      return [
        ...state,
        { likeId: action.payload.likeId, productId: action.payload.productId },
      ];
    },
    deleteLike: (state, action) => {
      return state.filter((item) => item.likeId !== action.payload);
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { addLike, deleteLike, reset } = likeSlice.actions;
export default likeSlice.reducer;
