import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../service/login.service";
import { userApi } from "../../service/user.service";

const { postLogin } = loginApi();
const { getUserDetails } = userApi();

export const loginAction = createAsyncThunk(
  "/generate-jwt",
  async (data: any, thunkAPI) => {
    return await postLogin(data.username, data.password).catch((error) =>
      thunkAPI.rejectWithValue(error?.response?.data || error)
    );
  }
);

export const userDetailsAction = createAsyncThunk(
  "/account",
  async (token: string, thunkAPI) => {
    return await getUserDetails(token).catch((error) =>
      thunkAPI.rejectWithValue(error?.response?.data || error)
    );
  }
);
