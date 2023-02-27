import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

export interface AuthState {
  id: string;
  email: string;
  name?: string;
  birth: string;
  joinType: number;
  accessToken: string;
  asset?: string | null;
  income?: string | null;
  job?: string | null;
  region?: string | null;
}

const initialState: AuthState = {
  id: "",
  email: "",
  name: "",
  birth: "",
  joinType: 1,
  accessToken: "",
  asset: "0",
  income: "0",
  job: "무직",
  region: "서울",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginAction: (state, action: PayloadAction<AuthState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.birth = action.payload.birth;
      state.joinType = action.payload.joinType;
      state.accessToken = action.payload.accessToken;
    },
    logoutAction: (state) => {
      state.id = "";
      state.email = "";
      state.name = "";
      state.birth = "";
      state.joinType = 0;
      state.accessToken = "";
    },
    updateUser: (state, { payload }: PayloadAction<AuthState>) => {
      state.name = payload.name;
      state.joinType = payload.joinType;
      state.asset = payload.asset;
      state.income = payload.income;
      state.job = payload.job;
      state.region = payload.region;
    },
  },
});

export const { loginAction, logoutAction, updateUser } = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectuserInfo = (state: RootState) => state.auth;

export default authSlice.reducer;
