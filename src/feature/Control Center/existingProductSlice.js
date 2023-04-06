import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { Toast } from "../../components/common/Toast";
import { ErrorHandler } from "../../helper/ErrorHandler";
const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Product
export const viewProduct = createAsyncThunk(
  "existProduct/viewProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.viewProduct();
    } catch (error) {
      ErrorHandler(error);
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
      return thunkAPI.rejectWithValue("message");
    }
  }
);

export const existingProductSlice = createSlice({
  name: "existProduct",
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
      .addCase(viewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(viewProduct.fulfilled, (state, { payload }) => {
        console.log("project");
        state.isLoading = false;
        state.isSuccess = true;
        state.products = payload?.data?.products;
      })
      .addCase(viewProduct.rejected, (state, { payload }) => {
        console.log("reject");
        // console.log(action);
        console.log(payload);
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
      });
  },
});

export const { reset } = existingProductSlice.actions;
export default existingProductSlice.reducer;
