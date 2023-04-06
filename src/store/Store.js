import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../feature/theme/ThemeSlice";
import authReducer from "../feature/auth/authSlice";
import newProductReducer from "../feature/Control Center/newProductSlice";
import existingProductReducer from "../feature/Control Center/existingProductSlice";
import profileReducer from "../feature/Profile/ProfileSlice";
import dateSlice from "../slices/dateSlices";
import statusSlice from "../slices/statusSlice";
import createAutomationSlices from "slices/createAutomationSlices";
import currentTabSlices from "slices/currentTabSlices";
import campaignSlices from "slices/campaignSlices";



export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    auth: authReducer,
    profile: profileReducer,
    newProduct: newProductReducer,
    existingProduct: existingProductReducer,
    dateSlice : dateSlice,
    statusSlice : statusSlice,
    createAutomationSlices,
    currentTabSlices,
    campaignSlices
  },
});
