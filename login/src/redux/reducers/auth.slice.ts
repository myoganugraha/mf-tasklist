import { createSlice } from "@reduxjs/toolkit";
import { IUserType } from "../../types/user.type";
import { loginAction, userDetailsAction } from "../actions/auth.action";

interface AuthState {
  loading: boolean;
  success: boolean;
  error: any;
  token: string | undefined;
  userDetails: IUserType | undefined;
}

const initialState: AuthState = {
  loading: false,
  success: false,
  error: null,
  token: undefined,
  userDetails: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload;
        state.success = true;
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      })
      .addCase(userDetailsAction.pending, (state) => {
        state.userDetails = undefined;
      })
      .addCase(userDetailsAction.fulfilled, (state, { payload }) => {
        state.userDetails = payload;
      })
      .addCase(userDetailsAction.rejected, (state) => {
        state.userDetails = undefined;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
