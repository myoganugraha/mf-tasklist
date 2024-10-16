import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../service/login.service";

const { postLogin } = loginApi();

export const loginAction = createAsyncThunk(
  "/generate-jwt",
  async (data: any, thunkAPI) => {
    return await postLogin(data.username, data.password).catch((error) =>
      thunkAPI.rejectWithValue(error?.response?.data || error)
    );
  }
);
