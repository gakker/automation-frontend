import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";
import { Toast } from "../../components/common/Toast";
const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const editProfile = createAsyncThunk(
  "profile/edit",
  async (data, thunkAPI) => {
    try {
      return await profileService.editProfile(data);
    } catch (error) {
      return thunkAPI.rejectWithValue("message");
    }
  }
);
export const getProfile = createAsyncThunk(
  "profile/get",
  async (data, thunkAPI) => {
    try {
      return await profileService.getProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue("message");
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      console.log("pemdg");
    },
    [getProfile.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError = true;
    },
    [getProfile.fulfilled]: (state, { payload: { error, message } }) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [editProfile.pending]: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    [editProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [editProfile.fulfilled]: (state, { payload: { error, message } }) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
