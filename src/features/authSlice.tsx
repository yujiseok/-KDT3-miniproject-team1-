import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

export interface AuthState {
  id: string;
  email: string;
  name: string;
  brith: string;
  joinType: number;
  accessToken: string;
  asset: number;
  income: number;
  job: string;
  region: string;
}

const initialState: AuthState = {
  id: "",
  email: "",
  name: "",
  brith: "",
  joinType: 1,
  accessToken: "",
  asset: 0,
  income: 0,
  job: "무직",
  region: "서울",
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginAction: (state, action: PayloadAction<AuthState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.brith = action.payload.brith;
      state.joinType = action.payload.joinType;
      state.accessToken = action.payload.accessToken;
    },
    logoutAction: (state) => {
      state.id = "";
      state.email = "";
      state.name = "";
      state.brith = "";
      state.joinType = 1;
      state.accessToken = "";
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectuserInfo = (state: RootState) => state.auth;

export default authSlice.reducer;
