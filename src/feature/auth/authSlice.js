import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { Toast } from "../../components/common/Toast";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  socialIsLoading: false,
};

export const facebook = createAsyncThunk(
  "auth/facebook",
  async (data, thunkAPI) => {
    try {
      return await authService.facebookLogin(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const google = createAsyncThunk(
  "auth/google",
  async (data, thunkAPI) => {
    try {
      return await authService.googleLogin(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { data } = payload;
        localStorage.setItem("token", `${data.token}`);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        console.log(action.payload);
        Toast("error", action.payload);
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
        const { status, data, role } = payload;
        if (status) {
          // state.error = message;
          // state.token = token;
          localStorage.setItem("token", `${data.token}`);
          // localStorage.setItem("role", `${role}`);
        }
        //   else {
        //     state.error = error;
        //   }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
        // state.user = null;
        // console.log(action.payload);
      })
      .addCase(google.pending, (state) => {
        state.socialIsLoading = true;
      })
      .addCase(google.fulfilled, (state, { payload }) => {
        state.socialIsLoading = false;
        state.isSuccess = true;
        const { status, role, data } = payload;
        localStorage.setItem("token", `${data.token}`);
      })
      .addCase(google.rejected, (state, action) => {
        state.socialIsLoading = false;
      })
      .addCase(facebook.pending, (state) => {
        state.socialIsLoading = true;
      })
      .addCase(facebook.fulfilled, (state, { payload }) => {
        state.socialIsLoading = false;
        state.isSuccess = true;
        const { data } = payload;
        localStorage.setItem("token", `${data.token}`);
      })
      .addCase(facebook.rejected, (state, action) => {
        state.socialIsLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
