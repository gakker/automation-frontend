import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: true,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    drawerToggler: (state, action) => {
      state.open = !state.open;
    },
  },
});

export const { drawerToggler } = drawerSlice.actions;

export default drawerSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { postData } from "../helper/FetchMethods";
// import { SignIn, SignUp } from "../config/Url";
// const initialState = {
//   token: "",
//   loading: false,
//   error: "",
// };

// export const signupUser = createAsyncThunk("signupuser", async (body) => {
//   const result = await postData("/signup", body);
//   return result;
// });

// export const signinUser = createAsyncThunk("signinuser", async (body) => {
//   const result = await postData(SignIn, body);
//   return result;
// });

// const AuthReducer = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addToken: (state, action) => {
//       state.token = localStorage.getItem("token");
//     },
//     logout: (state, action) => {
//       state.token = null;
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers: {
//     // sign up handling
//     [signupUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signupUser.fulfilled]: (state, { payload: { error, message } }) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.error = message;
//       }
//     },
//     // sign in handling
//     [signinUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signinUser.fulfilled]: (
//       state,
//       { payload: { status, token, message, error } }
//     ) => {
//       state.loading = false;
//       if (status) {
//         state.error = message;
//         state.token = token;
//         // localStorage.setItem("token", token);
//         localStorage.setItem("token", `Bearer ${token}`);
//         // localStorage.setItem("role", `${role}`);
//       } else {
//         state.error = error;
//       }
//     },
//   },
// });

// export const { addToken, logout } = AuthReducer.actions;
// export default AuthReducer.reducer;
