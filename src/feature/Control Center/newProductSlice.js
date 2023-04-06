import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { Toast } from "../../components/common/Toast";
import { ErrorHandler } from "../../helper/ErrorHandler";
const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Product
export const createProduct = createAsyncThunk(
  "product",
  async (data, thunkAPI) => {
    try {
      return await productService.createProduct(data);
    } catch (error) {
      ErrorHandler(error);
    }
  }
);

export const productSlice = createSlice({
  name: "newProduct",
  initialState,
  reducers: {
    reset: (state) => {
      // console.log("reset call");
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // createProduct start
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        Toast("success", action.payload.message);
        // state.user = action.payload;
        // Toast("error", action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // Toast("error", action.payload);
      });
    // createProduct end
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
