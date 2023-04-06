import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   currentTab : 1
}


const currentTabSlice = createSlice({
    name : "currentTabSlice",
    initialState,
    reducers : {
        getCurrentTab : (state,action)=>{
            state.currentTab = action.payload;
        }
    }
});

export const { getCurrentTab } = currentTabSlice.actions;
export default currentTabSlice.reducer;